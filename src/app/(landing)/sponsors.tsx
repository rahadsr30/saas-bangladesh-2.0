import React from "react";
import logo0 from "@/assets/logo/logo.png";
import logo1 from "@/assets/logo/logo1.png";
import logo2 from "@/assets/logo/logo2.png";
import logo3 from "@/assets/logo/logo3.png";
import Image from "next/image";
import { Button } from "@/components/ui";

const goldSponsorsItems = [
  {
    label: "Silver Sponsor",
    logo: logo0,
  },
  {
    label: "Silver Sponsor",
    logo: logo1,
  },
  {
    label: "Gold Sponsor",
    logo: logo2,
  },
  {
    label: "Title Sponsor",
    logo: logo3,
  },
];
const silverSponsorsItems = [
  {
    label: "Silver Sponsor",
    logo: logo0,
  },
  {
    label: "Silver Sponsor",
    logo: logo1,
  },
  {
    label: "Gold Sponsor",
    logo: logo2,
  },
  {
    label: "Title Sponsor",
    logo: logo3,
  },
  {
    label: "Gold Sponsor",
    logo: logo2,
  },
  {
    label: "Title Sponsor",
    logo: logo3,
  },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-section">
      <div className="container">
        <div className="space-y-2 text-center">
          <h1 className="text-[#3A3A3F] font-bold text-2xl md:text-5xl">
            Our <span className="text-[#FFDA24]">Partners</span> in Innovation
          </h1>
          <p className="text-body text-gray-600 max-w-[900px] mx-auto">
            We’re proud to be supported by some of the most innovative companies
            in the SaaS and tech industries. A huge thank you to our sponsors
            for helping us bring this event to life.
          </p>
        </div>

        {/* Gold Sponsors */}
        <div>
          <h1 className="text-[#424348] font-bold text-xl md:text-3xl text-center mt-16">
            <span className="text-[#EFBF04]">Gold</span> Sponsors
          </h1>
          <div className="mt-4 md:mt-6 gap-7 grid grid-cols-1 md:grid-cols-4  ">
            {goldSponsorsItems.map((item, idx) => (
              <div
                key={idx}
                className="border border-[#EFBF04] shadow rounded-lg"
              >
                <Image
                  src={item.logo}
                  alt=""
                  className="size-48 object-contain mx-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}

        <div>
          <h1 className="text-[#424348] font-bold text-xl md:text-3xl text-center mt-16">
            <span className="text-[#838996]">Silver</span> Sponsors
          </h1>
          <div className="mt-4 md:mt-6 gap-7 grid grid-cols-2 md:grid-cols-6  ">
            {silverSponsorsItems.map((item, idx) => (
              <div
                key={idx}
                className="border border-[#CECFD3] shadow rounded-lg"
              >
                <Image
                  src={item.logo}
                  alt=""
                  className="size-28 object-contain mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
        <p className="text-[#585962] text-sm font-medium text-center mt-8 md:mt-10">
          Interested in sponsoring the event?
        </p>
        <div className="flex justify-center">
          <Button className="mt-4" size="lg">
            Become A Sponsor
          </Button>
        </div>
      </div>
    </section>
  );
}
