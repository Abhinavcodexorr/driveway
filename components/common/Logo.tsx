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
        className="h-[32px] w-auto max-w-[140px] object-contain sm:h-[36px] sm:max-w-none lg:h-[44px]"
        priority
      />
    </span>
  );
};

export default Logo;
