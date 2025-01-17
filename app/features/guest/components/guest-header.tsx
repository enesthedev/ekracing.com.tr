"use client";

import { Navbar } from "@/app/components/navbar";
import Image from "next/image";
import { useEffect, useState } from "react";

const GuestHeader = () => {
  return (
    <header
      className={`fixed z-10 top-0 w-full h-[80px] flex items-center px-5 bg-white/5 backdrop-blur-lg drop-shadow-lg`}
    >
      <Navbar />
    </header>
  );
};

export default GuestHeader;
