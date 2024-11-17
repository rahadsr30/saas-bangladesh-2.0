import React from "react";
import avatar from "@/assets/avater.png";
import Image from "next/image";
import { Button } from "@/components/ui";

const speakersItems = [
  {
    label: "Md. Rokibul Hasan Rahat",
    description: "CEO, Dropuix",
    details: "Revolutionizing SaaS with AI-powered solutions.",
    image: avatar,
  },
  {
    label: "Md. Rokibul Hasan Rahat",
    description: "CEO, Dropuix",
    details: "Bridging SaaS and customer success for unstoppable growth.",
    image: avatar,
  },
  {
    label: "Md. Rokibul Hasan Rahat",
    description: "CEO, Dropuix",
    details: "Driving innovation with cloud-based SaaS platforms.",
    image: avatar,
  },
  {
    label: "Md. Rokibul Hasan Rahat",
    description: "CEO, Dropuix",
    details: "Revolutionizing SaaS with AI-powered solutions.",
    image: avatar,
  },
];

export default function Speaker() {
  return (
    <section id="speakers" className="py-section container">
      <div className="space-y-4 text-center">
        <h1 className="text-[#3A3A3F] font-bold text-2xl md:text-5xl">
          Meet Our <span className="text-[#FFDA24]">World-Class</span> Speakers
        </h1>
        <p className="text-body text-black max-w-screen-md mx-auto">
          We’re excited to welcome a stellar lineup of SaaS experts who will
          share their strategies and success stories to help you accelerate your
          growth.
        </p>
      </div>

      <div className="mt-14 gap-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {speakersItems.map((item, idx) => (
          <div
            key={idx}
            className="card w-full rounded-md shadow-xl bg-gradient-to-b from-[#FFDA24] via-[#FFDA24] to-[#0A0A0B] relative"
          >
            <figure>
              <Image
                src={item.image}
                alt=""
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                <h2 className="text-lg md:text-xl font-bold mb-2">
                  {item.label}
                </h2>
                <p className="text-sm font-medium mb-3">{item.description}</p>
                <p className="text-sm md:text-base font-medium">
                  {item.details}
                </p>
              </div>
            </figure>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button className="mt-12" size="lg">
          View All Speakers
        </Button>
      </div>
    </section>
  );
}
