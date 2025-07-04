import { getLocale } from "next-intl/server";
import { TextAnimate } from "../components/ui";
import Expandable from "../components/ui/expandable";
import LazyImage from "../components/ui/lazy-image";
import { getAllDealers } from "../features/dealers/actions";
import { DealersList } from "../features/dealers/components";
import { FAQSection } from "../features/faq/components";
import { getAllServices } from "../features/services/actions";
import { Header } from "./header";

export const metadata = {
  title: "Test",
};

export default async function Page() {
  const locale = await getLocale();
  const services = await getAllServices(locale);
  const dealers = await getAllDealers(locale);

  return (
    <>
      <Header />
      <main>
        <section className="relative z-0 pb-1 flex items-center justify-center w-full h-[40vh]">
          <LazyImage
            src={"/images/background.jpg"}
            alt="background"
            fill
            loading="lazy"
            className="object-cover object-[0%_70%]"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/10 flex items-end justify-end px-8 py-2">
            <TextAnimate
              as={"h2"}
              animation="fadeIn"
              by="text"
              className="font-bold text-4xl font-oxanium"
            >
              Services
            </TextAnimate>
          </div>
        </section>
        <section className="w-full flex flex-col items-start justify-start">
          <div className="w-full flex flex-row items-start gap-1 justify-start">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex relative w-1/3 h-[200px] justify-center rounded-lg"
              >
                <LazyImage
                  src={service.thumbnail}
                  alt={service.title}
                  fill
                  className="object-cover grayscale-100 brightness-110 group-hover:grayscale-0 group-hover:brightness-150 transition-all duration-300"
                />
                <div className="absolute top-0 left-0 flex flex-col justify-end pb-2 px-4 w-full h-full bg-black/60">
                  <TextAnimate
                    as={"h2"}
                    animation="fadeIn"
                    by="text"
                    className="font-bold text-lg font-oxanium"
                  >
                    {service.title}
                  </TextAnimate>
                  <TextAnimate
                    as={"p"}
                    by="text"
                    animation="fadeIn"
                    className="text-xs font-medium line-clamp-1 text-white/70"
                  >
                    {service.description}
                  </TextAnimate>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="py-1 w-full space-x-40 flex items-center justify-between">
          <TextAnimate
            as={"h1"}
            animation="fadeIn"
            by="word"
            trimWhitespace={true}
            className="text-white text-5xl px-5 font-oxanium font-extrabold uppercase leading-tight w-min drop-shadow-xl"
          >
            What We Built
          </TextAnimate>
          <Expandable
            className="h-72 font-oxanium"
            list={[
              {
                image: "/images/projects/yellow-a3/thumbnail.jpg",
                title: "A3 8P 35 TFSI",
              },
              {
                image: "/images/projects/yellow-a3/thumbnail.jpg",
                title: "A3 8P 35 TFSI 2",
              },
              {
                image: "/images/projects/yellow-a3/thumbnail.jpg",
                title: "A3 8P 35 TFSI 3",
              },
              {
                image: "/images/projects/yellow-a3/thumbnail.jpg",
                title: "A3 8P 35 TFSI 4",
              },
              {
                image: "/images/projects/yellow-a3/thumbnail.jpg",
                title: "A3 8P 35 TFSI 5",
              },
            ]}
          />
        </section>

        <DealersList dealers={dealers} locale={locale} />
        <FAQSection />
      </main>
    </>
  );
}
