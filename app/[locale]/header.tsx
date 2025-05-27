"use client";

import { Navbar } from "../components/navbar";

export function Header() {
  return (
    <header className={`w-full absolute top-0 transition-colors z-10`}>
      <Navbar />
    </header>
  );
}
