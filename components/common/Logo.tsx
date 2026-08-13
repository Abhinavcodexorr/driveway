/* =========================
   Logo Component (Common)
   Renders the Carma Credit brand logo.
========================= */

import Image from "next/image";

const Logo = () => {
  return (
    <span className="inline-flex items-center" aria-label="Carma Credit">
      <Image
        src="/logo-carma.jpg"
        alt="Carma Credit"
        width={365}
        height={102}
        className="h-[36px] w-auto object-contain lg:h-[44px]"
        priority
      />
    </span>
  );
};

export default Logo;
