import React from "react";
import aboutImage from "@/assets/about-banner.png";
import Image from "next/image";
import LightOnIcon from "@/assets/icons/light-on.png";
import NetworkIcon from "@/assets/icons/network.png";
import UsersIcon from "@/assets/icons/user.png";

const aboutItems = [
  {
    label: "Exclusive Knowledge",
    description: "Learn from SaaS pioneers and experts.",
    icon: LightOnIcon,
  },
  {
    label: "Networking Opportunities",
    description:
      "Meet like-minded professionals and potential business partners.",
    icon: NetworkIcon,
  },
  {
    label: "Inspiring Sessions",
    description:
      "Explore the future of SaaS with keynotes, panels, and workshops.",
    icon: UsersIcon,
  },
];

export default function About() {
  return (
    <section id="about" className="py-section bg-[#FAFAFA] ">
      <div className="contaner mx-auto">
        <div className="space-y-2 text-center">
          <h1 className="text-[#3A3A3F] font-bold text-2xl md:text-5xl">
            Unlock the <span className="text-[#FFDA24]">Future</span> of SaaS
          </h1>
          <p className="text-body text-gray-600 max-w-[950px] mx-auto">
            Join us this December in Dhaka for the SaaS Bangladesh Event 2024.
            This premier gathering will host industry leaders, forward-thinking
            entrepreneurs, and tech innovators to discuss the latest trends and
            challenges in the SaaS industry.
          </p>
        </div>

        <div className="flex gap-10 md:p-10 p-4 justify-around items-center bg-white rounded-2xl max-w-[1320px] mx-auto mt-16">
          <div className="max-lg:hidden">
            <Image
              src={aboutImage}
              alt="about image"
              width={665}
              height={500}
              className="h-full w-full"
            ></Image>
          </div>

          <div className="mt-7 md:mt-10 ">
            {aboutItems.map((item) => (
              <div
                key={item.label}
                className="bg-white shadow-[0px_0px_20px_0px_rgba(4,14,76,0.08)] p-6 rounded-lg mb-10"
              >
                <div className="flex gap-6 text-start">
                  <div>
                    <Image
                      src={item.icon}
                      alt=""
                      className="size-12 border-[#FFD405] mx-auto border p-2 rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-medium text-lg md:text-xl">
                      {item.label}
                    </label>
                    <p className="text-body max-w-[350px] mx-auto text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
