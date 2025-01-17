import GuestLayout from "../features/guest/components/guest-layout";
import { ProjectCarousel } from "../features/project/components";

export default function Home() {
  return (
    <GuestLayout>
      <section className="px-5 py-10 w-full flex items-center justify-between">
        <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight w-min drop-shadow-xl">
          What We Built
        </h1>
        <ProjectCarousel />
      </section>
      <div className="h-[2000px] w-full"></div>
    </GuestLayout>
  );
}
