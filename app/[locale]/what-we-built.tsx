import { getLocale } from "next-intl/server";
import { getAllProjectMeta } from "../features/project/actions";
import { ProjectCarousel } from "../features/project/components";

export async function WhatWeBuilt() {
  const locale = await getLocale();
  const projects = await getAllProjectMeta(locale);

  return (
    <section className="px-5 py-10 w-full flex items-center justify-between">
      <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight w-min drop-shadow-xl">
        What We Built
      </h1>
      <ProjectCarousel projects={projects} />
    </section>
  );
}
