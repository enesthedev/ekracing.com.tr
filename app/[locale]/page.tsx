import { ArrowRightCircle } from "lucide-react";
import { getLocale } from "next-intl/server";
import { WorldMap } from "../components";
import { getAllProjectMeta } from "../features/project/actions";
import { ProjectCarousel } from "../features/project/components";
import { getAllServiceMeta } from "../features/service/actions";

export default async function Page() {
  const locale = await getLocale();

  const projects = await getAllProjectMeta(locale);
  const services = await getAllServiceMeta(locale);

  return (
    <>
      <section className="px-5 py-10 w-full flex items-center justify-between">
        <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight w-min drop-shadow-xl">
          What We Built
        </h1>
        <ProjectCarousel projects={projects} />
      </section>

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

      <section className="px-5 w-full pb-10 flex items-start justify-between bg-white">
        <div className="flex flex-col space-y-6">
          <h1 className="font-bold pt-10 text-black leading-tight text-3xl mb-2">
            Visit Our Dealers
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg text-black">
                New York, USA
              </h3>
              <p className="mt-1 text-sm text-gray-700">+1 (555) 123-4567</p>
            </div>
            <div className="p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg text-black">Cairo, Egypt</h3>
              <p className="mt-1 text-sm text-gray-700">+20 (2) 1234-5678</p>
            </div>
            <div className="p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg text-black">
                Berlin, Germany
              </h3>
              <p className="mt-1 text-sm text-gray-700">+49 30 123456</p>
            </div>
            <div className="p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg text-black">
                Dublin, Ireland
              </h3>
              <p className="mt-1 text-sm text-gray-700">+353 1 1234567</p>
            </div>
            <div className="p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg text-black">
                Brussels, Belgium
              </h3>
              <p className="mt-1 text-sm text-gray-700">+32 2 123 45 67</p>
            </div>
          </div>
        </div>
        <div className="max-w-screen-sm w-full">
          <WorldMap
            lineColor="#dc2626"
            dots={[
              {
                start: { lat: 39.92077, lng: 32.85411 }, // Ankara
                end: { lat: 40.7128, lng: -74.006 }, // New York, USA
              },
              {
                start: { lat: 39.92077, lng: 32.85411 }, // Ankara
                end: { lat: 30.0444, lng: 31.2357 }, // Cairo, Egypt
              },
              {
                start: { lat: 39.92077, lng: 32.85411 }, // Ankara
                end: { lat: 52.52, lng: 13.405 }, // Berlin, Germany
              },
              {
                start: { lat: 39.92077, lng: 32.85411 }, // Ankara
                end: { lat: 53.3498, lng: -6.2603 }, // Dublin, Ireland
              },
              {
                start: { lat: 39.92077, lng: 32.85411 }, // Ankara
                end: { lat: 50.8503, lng: 4.3517 }, // Brussels, Belgium
              },
            ]}
          />
        </div>
      </section>
      {/*
      <section className="px-5 pt-10 pb-0.5 w-full lg:marker:flex flex-col items-start bg-white">
        <div className="w-full flex space-y-0 flex-col">
          <div className="w-full relative h-[250px] lg:h-[300px]">
            <Image
              src={"/tune-of-the-month.png"}
              alt="test"
              fill={true}
              className="object-contain"
            />
          </div>
          <div className="w-full font-sans2 text-base flex-col justify-start flex lg:flex-row lg:justify-center lg:space-x-10">
            <div className="flex items-center justify-start lg:justify-center space-x-3">
              <h4 className="text-gray-500 uppercase">Engine</h4>
              <span className="text-gray-800 font-bold">3.0 I6</span>
            </div>
            <div className="flex items-center justify-start lg:justify-center space-x-3">
              <h4 className="text-gray-500 uppercase">Power</h4>
              <span className="text-gray-800 font-bold">625 HP @ 6200 RPM</span>
            </div>
            <div className="flex items-center justify-start lg:justify-center space-x-3">
              <h4 className="text-gray-500 uppercase">100 to 200 km/h</h4>
              <span className="text-gray-800 font-bold">6.83 SEC</span>
            </div>
          </div>
          <h2 className="text-black pt-10 text-xl md:text-2xl font-bold leading-tight drop-shadow-xl">
            Tune of the Month
          </h2>
          <h3 className="text-black text-3xl">BMW M4 Competition</h3>
        </div>
      </section>*/}
    </>
  );
}
