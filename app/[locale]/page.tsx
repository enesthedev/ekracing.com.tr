import Image from "next/image";
import { WhatWeBuilt } from "./what-we-built";
import { WhatWeOffer } from "./what-we-offer";

export default async function Home() {
  return (
    <>
      <WhatWeBuilt />
      <WhatWeOffer />
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
      </section>
    </>
  );
}
