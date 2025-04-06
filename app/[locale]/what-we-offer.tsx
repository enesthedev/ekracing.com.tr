import { ArrowRightCircle } from "lucide-react";
import { getLocale } from "next-intl/server";
import { getAllServiceMeta } from "../features/service/actions";

export async function WhatWeOffer() {
  const locale = await getLocale();
  const services = await getAllServiceMeta(locale);

  return (
    <section className="w-full flex flex-col items-start justify-start">
      <div className="w-full flex bg-[#dc2626] p-5 flex-row space-x-8 items-start justify-start">
        {services.map((service) => (
          <div
            key={service.title}
            className="group flex space-x-3 w-1/3 justify-center rounded-lg"
          >
            <div className="flex flex-col space-y-1">
              <h2 className="font-bold text-base">{service.title}</h2>
              <p className="text-sm line-clamp-2 text-white/70">
                {service.description}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <ArrowRightCircle className="text-white w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
