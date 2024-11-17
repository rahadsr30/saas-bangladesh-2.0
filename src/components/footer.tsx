import { Logo } from "@/components/ui";
import facebook from "@/assets/icons/facebook1.png";
import twiter from "@/assets/icons/twiter.png";
import insta from "@/assets/icons/insta.png";
import linkdin from "@/assets/icons/linkdin.png";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#010624] text-foreground pt-16 pb-8 border-t border-border">
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 container">
        <div>
          <Logo className="h-12 mb-2" />
          <p className="text-white text-base font-bold mt-10 ">Follow Us</p>
          <div className="flex space-x-4 mt-4 md:mt-6 items-center ">
            <a className="border p-2 border-[#82848E] rounded-full ">
              <Image src={facebook} alt="facebook" className="w-6 h-6" />
            </a>
            <a className="border border-[#82848E] p-2 rounded-full ">
              <Image src={insta} alt="insta" className="w-6 h-6" />
            </a>
            <a className="border p-2 border-[#82848E] rounded-full ">
              <Image src={linkdin} alt="linkdin" className="w-6 h-6" />
            </a>
            <a className="border p-2 border-[#82848E] rounded-full ">
              <Image src={twiter} alt="twiter" className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-base text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                className="text-gray-300 hover:text-primary transition-colors"
                href="#speakers"
              >
                Speakers
              </a>
            </li>
            <li>
              <a
                className="text-gray-300 hover:text-primary transition-colors"
                href="#agenda"
              >
                Agenda
              </a>
            </li>
            <li>
              <a
                className="text-gray-300 hover:text-primary transition-colors"
                href="#sponsors"
              >
                Sponsors
              </a>
            </li>
            <li>
              <a
                className="text-gray-300 hover:text-primary transition-colors"
                href="/tickets"
              >
                Tickets
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-base text-white mb-4">Legal Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                className="text-gray-300 hover:text-primary transition-colors"
                href="#"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                className="text-gray-300 hover:text-primary transition-colors"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-b border-gray-800 pt-10" />
      <div className=" text-gray-300 text-start container pt-10">
        <p>© 2024 SaaS Bangladesh. All rights reserved.</p>
      </div>
    </footer>
  );
}
