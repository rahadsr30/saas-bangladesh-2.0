import { Navbar } from "@/components";
import { Button } from "@/components/ui";
import { BsCalendar2Check } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { BsTicketPerforated } from "react-icons/bs";
import { PiHandshakeLight } from "react-icons/pi";

export default function Hero() {
  return (
    <header className=" bg-[url(/banner.png)] bg-cover bg-center">
      <Navbar />
      <div className="container py-section xl:py-44">
        <div className="mx-auto flex w-full flex-col items-center ">
          <h1 className="text-white font-bold text-2xl md:text-6xl">
            SaaS <span className="text-[#FFDA24]">Bangladesh</span> Event 2024
          </h1>
          <p className="text-hero mt-2 text-center text-[#E5E6E8] max-w-[900px]">
            Bringing together SaaS founders, marketers, and innovators from
            across the globe to share insights, network, and explore the future
            of SaaS.
          </p>

          <div className="flex gap-5 mt-6">
            <p className="text-white flex items-center justify-center gap-2 font-semibold text-lg md:text-2xl">
              <BsCalendar2Check />
              December 2024
            </p>
            <p className="text-white flex items-center justify-center gap-2 font-semibold text-lg md:text-2xl">
              <GoLocation />
              Dhaka, Bangladesh
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:mt-2">
            <Button
              className="mt-6 md:mt-8 text-sm md:text-base text-[#0A0A0B] font-semibold"
              size="lg"
            >
              <BsTicketPerforated className="!size-5" />
              Book Your Pass
            </Button>
            <button className="md:mt-8 flex justify-center items-center gap-2 border border-[#FFDA24] py-2 px-5 rounded-full bg-[#010624] text-sm md:text-base text-[#FFDA24] font-semibold">
              <PiHandshakeLight className="!size-5" />
              Partner With Us
            </button>
          </div>
          <p className="text-sm md:text-base text-[#E5E6E8] mt-3 text-center">
            Limited seats available. Don’t miss out!
          </p>
        </div>
      </div>
    </header>
  );
}
