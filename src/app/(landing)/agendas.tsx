import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import avater from "@/assets/Ellipse 13.png";

const agendasItems = [
  {
    time: "09:00 AM",
    date: "20/11/2024",
    label: "Welcome & Opening Remarks",
    description:
      "A warm welcome from the event host, highlighting the event’s purpose, goals, and key takeaways.",
    image: avater,
  },
  {
    time: "09:30 AM",
    date: "20/11/2024",
    label: "Setting the Stage for the Future of SaaS",
    description:
      "Our keynote speaker will dive into the evolving landscape of SaaS and the opportunities it presents for growth, innovation, and impact.",
  },
  {
    time: "10:00 AM",
    date: "20/11/2024",
    label: "Panel Discussion: Scaling Your SaaS Product",
    image: avater,
    description:
      "Learn from industry leaders as they share insights on how to scale effectively and build teams, and overcome common challenges in SaaS growth.",
  },
  {
    time: "11:00 AM",
    date: "20/11/2024",
    label: "Networking Break",
    description:
      "Take a break, grab a coffee, and connect with peers, partners, and potential clients.",
  },
  {
    time: "12:00 PM",
    date: "20/11/2024",
    label: "Workshop: Customer Retention with AI",
    image: avater,
    description:
      "Get hands-on experience with cutting-edge AI tools and learn how to leverage them to boost customer satisfaction and loyalty.",
  },
];

export default function Agendas() {
  return (
    <section
      id="agendas"
      className="py-section bg-[#010624] bg-cover bg-center"
    >
      <div className="container">
        <div className="space-y-2 text-center">
          <h1 className="text-white font-bold text-2xl md:text-5xl">
            Preview the <span className="text-[#FFDA24]">Agenda</span>
          </h1>
          <p className="text-body text-[#E5E6E8] max-w-screen-md mx-auto">
            Get ready for two days of inspiring sessions and actionable
            insights! Our agenda is carefully crafted to deliver value to SaaS
            founders, marketers, and developers alike.
          </p>
        </div>
        <div className="mt-10 md:mt-16 flex justify-center items-center">
          <div className="w-full bg-white shadow-lg p-10 rounded-lg">
            <table className="w-full rounded-md">
              <tbody className="rounded-md">
                {agendasItems.map((item, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <tr
                      key={idx}
                      className={cn(
                        "border-b border-gray-100 rounded-md",
                        isEven ? "bg-[#F5F5F6]" : "bg-[#FAFAFA]"
                      )}
                    >
                      <td className="py-5 pr-5  p-5">
                        <div className="space-y-2">
                          <h3 className="text-lg text-[#424348] md:text-2xl font-bold">
                            {item.label}
                          </h3>
                          <p className="text-[#585962] text-start text-sm md:text-base max-w-[620px]">
                            {item.description}
                          </p>
                        </div>
                      </td>
                      <td className="py-5 pl-5 text-center">
                        <p className="text-base text-[#82848E] font-bold ">
                          {item.date}
                        </p>
                        <p className="text-lg md:text-xl font-bold text-[#585962] ">
                          {item.time}
                        </p>
                      </td>

                      {item.image ? (
                        <td className="py-5 pl-5 md:w-20 lg:w-24 p-5">
                          <Image
                            src={item.image}
                            alt={item.label}
                            className=" object-cover"
                            width={100}
                            height={100}
                          />
                        </td>
                      ) : (
                        <td className="py-5 pl-5 md:w-20 lg:w-24 p-5"></td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
