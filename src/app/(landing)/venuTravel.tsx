import { Button } from "@/components/ui";
import Image from "next/image";
import hotel1 from "@/assets/hotel1.png";
import hotel2 from "@/assets/hotel2.png";
import hotel3 from "@/assets/hotel3.png";

export default function VenuTravel() {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="container pb-section">
        <div>
          <div className="space-y-2 text-center pb-16">
            <h1 className="text-[#3A3A3F] font-bold text-2xl md:text-5xl pt-24">
              Explore Your Event
              <span className="text-[#FFDA24]"> Destination</span>
            </h1>
            <p className="text-body text-gray-600 max-w-[700px] mx-auto">
              Don’t miss out on this unique opportunity to learn from and
              connect with SaaS experts from across the globe.
            </p>
          </div>

          <div className="grid md:grid-cols-6 gap-10">
            <div className="bg-[#010624] p-8 rounded-xl h-fit md:col-span-2">
              <h2 className="text-white text-base md:text-lg font-bold">
                Join Us in Dhaka on the <br /> 20
                <sup className="font-semibold">th</sup> -21
                <sup className="font-semibold">th</sup> November, 2024
              </h2>
              <div className="mt-3 md:mt-6 space-y-2">
                <h5 className="text-sm md:text-base font-bold text-white ">
                  Venue:
                </h5>
                <p className="text-sm md:text-base text-[#CECFD3]">
                  Lorem Ipsum is simply dummy text of the
                </p>
              </div>
              <div className="mt-2 md:mt-4 space-y-2">
                <h5 className="text-sm md:text-base font-bold text-white ">
                  Address:
                </h5>
                <p className="text-sm md:text-base text-[#CECFD3]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
              <div className="mt-2 md:mt-4 space-y-2">
                <h5 className="text-sm md:text-base font-bold text-white ">
                  Email:
                </h5>
                <p className="text-sm md:text-base text-[#CECFD3]">
                  saasevent@gmail.com
                </p>
              </div>
              <button className="md:mt-10 mt-4 w-full border border-[#FFDA24] py-2 px-5 rounded-full  text-sm md:text-base text-[#FFDA24] font-semibold">
                Get Location
              </button>
            </div>

            <div className="w-full md:col-span-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.49930605068!2d90.25487553147931!3d23.78106723687384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1731829982903!5m2!1sen!2sbd"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="flex h-full flex-col justify-center">
            <h2 className="text-xl md:text-3xl font-bold text-[#424348]">
              Nearby Hotels
            </h2>
            <p className="text-sm md:text-base text-[#585962] max-w-[300px]">
              Special rates available for attendees at these hotels.
            </p>
            <div>
              <Button className="mt-4 md:mt-6" size="lg">
                View All Hotels
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-[0px_0px_12px_0px_rgba(4,14,76,0.08)]">
            <Image src={hotel1} alt="hotel1" className="w-full h-auto" />
            <div className="space-y-1 md:mt-4 mt-2 ">
              <h2 className="text-lg md:text-xl font-bold text-[#4B4B53]">
                Pan Pacific Sonargaon Dhaka
              </h2>
              <p className="text-sm md:text-base text-[#585962]">
                107 Kazi Nazrul Islam Avenue
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-[0px_0px_12px_0px_rgba(4,14,76,0.08)]">
            <Image src={hotel2} alt="hotel2" className="w-full h-auto" />
            <div className="space-y-1 md:mt-4 mt-2 ">
              <h2 className="text-lg md:text-xl font-bold text-[#4B4B53]">
                Hotel City International Green Road
              </h2>
              <p className="text-sm md:text-base text-[#585962] max-w-[280px]">
                Green Road 34 Nawab Mansion (1st Floor) Beside Green Life
                Medical College Hospital
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-[0px_0px_12px_0px_rgba(4,14,76,0.08)]">
            <Image src={hotel3} alt="hotel3" className="w-full h-auto" />
            <div className="space-y-1 md:mt-4 mt-2 ">
              <h2 className="text-lg md:text-xl font-bold text-[#4B4B53]">
                HOTEL STUDiO23
              </h2>
              <p className="text-sm md:text-base text-[#585962] max-w-[260px]">
                Green Road 152/2/K-2 Green Road, Panthapath ( Near Health and
                Hope Hospital)
              </p>
            </div>
          </div>
        </div>
        <p className="mt-4 md:mt-6 text-body text-[#585962] max-w-[500px] text-center mx-auto">
          Need travel assistance?{" "}
          <span className="text-black font-bold">Contact</span> our team for
          help with accommodation and transportation options.
        </p>
      </div>
    </section>
  );
}
