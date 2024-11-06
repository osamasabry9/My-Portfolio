import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="logo" width={50} height={50} />
    </Link>
  );
};

export default Logo;
