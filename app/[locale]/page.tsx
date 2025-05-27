import { getLocale } from "next-intl/server";
import LazyImage from "../components/ui/lazy-image";
import { getAllServices } from "../features/services/actions/get-all-services";
import { Header } from "./header";

export const metadata = {
  title: "Test",
};

export default async function Page() {
  const locale = await getLocale();
  const services = await getAllServices(locale);
  return (
    <>
      <Header />
      <main>
        <section className="relative z-0 flex items-center justify-center w-full h-[40vh]">
          <LazyImage
            src={"/images/background.jpg"}
            alt="background"
            fill
            loading="lazy"
            className="object-cover object-[0%_70%]"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/10 flex items-end justify-end px-8 py-2">
            <h2 className="font-bold text-4xl">Services</h2>
          </div>
        </section>
        <section className="w-full flex flex-col items-start justify-start">
          <div className="w-full flex flex-row items-start justify-start">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex relative w-1/3 h-[200px] justify-center rounded-lg"
              >
                <LazyImage
                  src={service.thumbnail}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 left-0 flex flex-col justify-end pb-2 px-4 w-full h-full bg-black/60">
                  <h2 className="font-bold text-lg">{service.title}</h2>
                  <p className="text-xs font-medium line-clamp-1 text-white/70">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="px-5 py-10 w-full flex items-center justify-between">
          <h1 className="text-white text-5xl font-extrabold leading-tight w-min drop-shadow-xl">
            What We Built
          </h1>
        </section>
      </main>
    </>
  );
}
