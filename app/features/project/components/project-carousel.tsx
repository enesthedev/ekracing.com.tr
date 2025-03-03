"use client";

import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/components/ui";
import Image from "next/image";
import { Project } from "../types";

export type ProjectCarouselProps = {
  projects: Project[];
};

const ProjectCarousel = (props: ProjectCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        containScroll: "trimSnaps",
        loop: true,
      }}
      className="w-[180px] md:w-[360px] lg:w-auto lg:max-w-[75%]"
    >
      <CarouselContent className="items-center">
        {props.projects.map((project, index) => (
          <CarouselItem className="basis-auto group" key={index}>
            <section className="relative flex w-[180px] h-[320px]">
              <h2 className="absolute text-xl font-bold z-[5] bottom-3 left-5 group-hover:bottom-7 group-hover:left-5 drop-shadow-lg transition-all">
                {project.title}
              </h2>
              <Button
                className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-[5] bottom-0 left-5 px-0 py-0 my-0 mt-0 font-bold drop-shadow-lg"
                variant={"link"}
              >
                Read More
              </Button>
              <Image
                src={`${project.thumbnail}/thumbnail.jpeg`}
                alt="istanbul üniversitesi"
                fill
                className="rounded-lg drop-shadow-xl object-cover"
              />
            </section>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export { ProjectCarousel };
