import { TextAnimate } from "@/app/components/ui";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { getFooterData } from "../actions";
import { FooterSectionComponent } from "./footer-section";
import { SocialLinks } from "./social-links";

export async function Footer() {
  const { sections, socialLinks } = await getFooterData();

  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10">
      <div className="px-5 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/logo.png"
                  alt="EK Racing Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <TextAnimate
                  as="h2"
                  animation="fadeIn"
                  by="text"
                  className="font-oxanium font-bold text-white text-2xl uppercase"
                >
                  EK Racing
                </TextAnimate>
              </div>
              <TextAnimate
                as="p"
                animation="fadeIn"
                by="text"
                className="text-white/70 leading-relaxed max-w-md"
              >
                Professional ECU tuning and performance solutions for automotive
                enthusiasts. Unlocking your vehicle&apos;s true potential with
                cutting-edge technology and expertise.
              </TextAnimate>
              <SocialLinks socialLinks={socialLinks} />
            </div>

            {/* Footer Sections */}
            <Suspense
              fallback={
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
                  {Array.from({ length: 3 }, (_, i) => (
                    <div key={i} className="animate-pulse space-y-4">
                      <div className="h-6 bg-white/10 rounded w-24" />
                      <div className="space-y-3">
                        {Array.from({ length: 4 }, (_, j) => (
                          <div
                            key={j}
                            className="h-4 bg-white/5 rounded w-32"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              }
            >
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
                {sections.map((section) => (
                  <FooterSectionComponent key={section.id} section={section} />
                ))}
              </div>
            </Suspense>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <TextAnimate
                as="p"
                animation="fadeIn"
                by="text"
                className="text-white/50 text-sm"
              >
                © 2024 EK Racing. All rights reserved.
              </TextAnimate>
              <div className="flex space-x-6">
                <Link
                  href="/privacy"
                  className="text-white/50 hover:text-white/70 transition-colors duration-300 text-sm"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-white/50 hover:text-white/70 transition-colors duration-300 text-sm"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
