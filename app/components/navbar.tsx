"use client";

import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
  TextAnimate,
} from "./ui";

// TODO: make aria labels

export function Navbar() {
  return (
    <div className="w-full bg-transparent">
      <div className="mx-auto flex h-[80px] w-full max-w-screen-2xl flex-row items-center justify-between px-8 lg:h-[80px]">
        <div className="h-auto lg:w-[140px]">
          <Image
            src="/images/logo.png"
            width={140}
            height={70}
            priority={true}
            className="invert brightness-0"
            alt="// TODO: add alt text"
          />
        </div>
        <nav aria-label="desktop-navigation" className="w-full">
          <ul className="relative hidden w-full flex-row items-center space-x-8 text-sm text-white font-bold uppercase lg:flex lg:justify-end">
            <li>
              <Link href="#" className="hover:underline">
                <TextAnimate as={"span"} animation="fadeInDown">
                  Home
                </TextAnimate>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                <TextAnimate as={"span"} animation="fadeInDown">
                  Dealers
                </TextAnimate>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                <TextAnimate as={"span"} animation="fadeInDown">
                  Services
                </TextAnimate>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                <TextAnimate as={"span"} animation="fadeInDown">
                  Projects
                </TextAnimate>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                <TextAnimate as={"span"} animation="fadeInDown">
                  FAQ
                </TextAnimate>
              </Link>
            </li>
            {/*<li className="absolute right-0">
              <Button
                asChild
                variant={"default"}
                className="h-10 border-none bg-white/20 px-6 font-medium tracking-wide shadow-none hover:bg-black/10"
              >
                <Link href="#">Become Dealer</Link>
              </Button>
            </li>*/}
          </ul>

          <Sheet>
            <VisuallyHidden.Root>
              <SheetTitle>Mobil Menü</SheetTitle>
              <SheetDescription>Açılır kapanır mobil menü</SheetDescription>
            </VisuallyHidden.Root>
            <SheetTrigger asChild>
              <button aria-label="Mobil menüyü aç" className="lg:hidden">
                <MenuIcon className="h-6 w-6 bg-transparent text-white/90" />
              </button>
            </SheetTrigger>
            <SheetContent side="left">
              <Image
                src="/images/inalp-logo.png"
                width={70}
                height={35}
                alt="inalp logo"
              />
              <div className="grid gap-2 py-6">
                <Link
                  href="#"
                  className="flex w-full items-center py-2 text-base font-medium"
                  prefetch={false}
                >
                  Eğitmen Bul
                </Link>
                <Link
                  href="#"
                  className="flex w-full items-center py-2 text-base font-medium"
                  prefetch={false}
                >
                  Sıkça Sorulan Sorular
                </Link>
                <Link
                  href="#"
                  className="flex w-full items-center py-2 text-base font-medium"
                  prefetch={false}
                >
                  Eğitmen Ol
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </div>
  );
}
