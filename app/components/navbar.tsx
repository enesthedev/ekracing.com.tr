"use client";

import Image from "next/image";
import Link from "next/link";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui";
import { LucideMenu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex h-[80px] w-full flex-row items-center justify-between space-x-8">
      <div className="flex w-[154.8px] h-[39.6px]">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={154.88}
          height={39.6}
          className="brightness-0 invert opacity-90"
        />
      </div>
      <nav aria-label="desktop-navigation">
        <ul className="hidden w-full flex-row items-center justify-start space-x-8  lg:space-x-12 lg:flex">
          <li>
            <Link href="#" className="font-medium hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link href="#" className="font-medium hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="font-medium hover:underline bg-white/10 px-6 py-3 rounded-full"
            >
              Become A Dealer
            </Link>
          </li>
        </ul>
        {/* Mobile Navigation */}
        <Sheet>
          <VisuallyHidden.Root>
            <SheetTitle>Mobil Menü</SheetTitle>
            <SheetDescription>Açılır kapanır mobil menü</SheetDescription>
          </VisuallyHidden.Root>
          <SheetTrigger asChild>
            <ul>
              <Button
                variant="outline"
                className="bg-white/10 px-6 py-3 rounded-full lg:hidden flex items-center space-x-0 font-medium text-base"
                asChild
              >
                <li>
                  <LucideMenu className="!h-5 !w-5" />
                  <span>Menü</span>
                  <span className="sr-only">Mobil Menüyü Aç ve Kapa</span>
                </li>
              </Button>
            </ul>
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
  );
};

export { Navbar };
