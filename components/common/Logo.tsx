/* =========================
   Logo Component (Common)
   Renders the Carma Credit brand logo.
========================= */

import Image from "next/image";

const Logo = () => {
  return (
    <span
      className="relative inline-block h-7 w-[108px] overflow-hidden lg:h-8 lg:w-[124px]"
      aria-label="Carma Credit"
    >
      <Image
        src="/carma-logo.png"
        alt="Carma Credit"
        width={358}
        height={95}
        className="!h-full !w-full object-contain object-left"
        sizes="124px"
        priority
        unoptimized
      />
    </span>
  );
};

export default Logo;
