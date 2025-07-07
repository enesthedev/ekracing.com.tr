import { TextAnimate } from "@/app/components/ui";
import { Suspense } from "react";
import { FooterSection } from "../components";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black/40">
      <div className="px-5 py-16">
        <div className="mx-auto">
          <div className="grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <Image
              src="/images/logo.png"
              width={140}
              height={70}
              priority={true}
              className="invert brightness-0"
              alt="// TODO: add alt text"
            />

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
                {[
                  {
                    id: "services",
                    title: "Services",
                    links: [
                      {
                        id: "ecu-tuning",
                        label: "ECU Tuning",
                        href: "/services/ecu-tuning",
                      },
                      {
                        id: "performance",
                        label: "Performance Builds",
                        href: "/services/performance",
                      },
                      {
                        id: "diagnostics",
                        label: "Diagnostics",
                        href: "/services/diagnostics",
                      },
                      {
                        id: "maintenance",
                        label: "Maintenance",
                        href: "/services/maintenance",
                      },
                    ],
                  },
                  {
                    id: "company",
                    title: "Company",
                    links: [
                      { id: "about", label: "About Us", href: "/about" },
                      { id: "projects", label: "Projects", href: "/projects" },
                      { id: "dealers", label: "Dealers", href: "/dealers" },
                      { id: "careers", label: "Careers", href: "/careers" },
                    ],
                  },
                  {
                    id: "support",
                    title: "Support",
                    links: [
                      { id: "faq", label: "FAQ", href: "/faq" },
                      { id: "contact", label: "Contact", href: "/contact" },
                      { id: "warranty", label: "Warranty", href: "/warranty" },
                      {
                        id: "booking",
                        label: "Book Service",
                        href: "/booking",
                      },
                    ],
                  },
                ].map((section) => (
                  <FooterSection key={section.id} section={section} />
                ))}
              </div>
            </Suspense>
          </div>

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
