import React from "react";
import galleryImage from "@/assets/gallery.png";
import Image from "next/image";

export default function Gallery() {
  return (
    <section className="py-section">
      <div className="container">
        <div className="space-y-2 text-center pb-16">
          <h1 className="text-[#3A3A3F] font-bold text-2xl md:text-5xl">
            <span className="text-[#FFDA24]">Highlights</span>
            from Our Previous Gatherings
          </h1>
          <p className="text-body text-gray-600 max-w-[850px] mx-auto">
            Join the Legacy: Experience the Highlights, Connections, and Energy
            from Our Past Celebrations. See the Moments That Define Our Events
            and the Community That Makes It All Possible.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <Image
            src={galleryImage}
            alt="gallery"
            className="w-full h-full object-cover col-span-6"
          />
          <Image
            src={galleryImage}
            alt="gallery"
            className="w-full h-full object-cover col-span-3 rounded-xl"
          />
          <Image
            src={galleryImage}
            alt="gallery"
            className="w-full h-full object-cover col-span-3 rounded-xl"
          />
        </div>

        <div className="grid grid-cols-12 grid-rows-12 gap-4 mt-4">
          <Image
            src={galleryImage}
            alt="gallery"
            className="w-full h-full object-cover col-span-6 row-span-full rounded-xl"
          />
          <Image
            src={galleryImage}
            alt="gallery"
            className="w-full h-full object-cover col-span-3 row-span-6 rounded-xl"
          />
          <Image
            src={galleryImage}
            alt="gallery"
            className="w-full h-full object-cover col-span-3 row-span-6 rounded-xl"
          />
          <Image
            src={galleryImage}
            alt="gallery"
            className="w-full h-full object-cover col-span-6 row-span-6 "
          />
        </div>
      </div>
    </section>
  );
}
