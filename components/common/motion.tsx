"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  once?: boolean;
  scale?: boolean;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "animate" | "whileInView">;

/** Scroll-into-view fade/slide for section blocks */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  x = 0,
  once = true,
  scale = false,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x, scale: scale ? 0.97 : 1 }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, margin: "-50px 0px" }}
      transition={{ duration: 0.6, delay, ease: easeOut }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul";
};

export function Stagger({ children, className, as = "div" }: StaggerProps) {
  const reduce = useReducedMotion();
  const Comp = as === "ul" ? motion.ul : motion.div;

  if (reduce) {
    const Tag = as === "ul" ? "ul" : "div";
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Comp
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px 0px" }}
    >
      {children}
    </Comp>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
};

export function StaggerItem({ children, className, as = "div" }: StaggerItemProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Tag = as === "li" ? "li" : "div";
    return <Tag className={className}>{children}</Tag>;
  }

  const Comp = as === "li" ? motion.li : motion.div;
  return (
    <Comp className={className} variants={staggerItem}>
      {children}
    </Comp>
  );
}
