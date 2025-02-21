"use client";

import { Navbar } from "@/app/components";

const Header = () => {
  return (
    <header
      className={`w-full h-[80px] transition-[background] duration-300 flex items-center px-5`}
    >
      <Navbar />
    </header>
  );
};

export default Header;
