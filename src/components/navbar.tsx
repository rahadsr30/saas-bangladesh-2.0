"use client";
import { Button, Logo } from "@/components/ui";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Speakers", href: "#speakers" },
  { name: "Agendas", href: "#agendas" },
  { name: "Sponsors", href: "#sponsors" },
];

export function Navbar() {
  const [showBg, setShowBg] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowBg(true);
    } else {
      setShowBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      role="navigation"
      className={cn(
        "transition-all",
        showBg &&
          "bg-[#0A0A0B] fixed top-0 inset-x-0 w-full left-0 z-50 shadow-md"
      )}
    >
      <div
        className={cn(
          "container flex items-center justify-between py-4 relative"
        )}
      >
        <Logo className="h-14" />
        <div className=" flex items-center gap-4 bg-transparent">
          <div className="flex items-center gap-10 max-lg:hidden">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#CECFD3] hover:text-primary"
              >
                {item.name}
              </a>
            ))}
          </div>
          <Button className="text-[#0A0A0B] font-semibold ml-12" size="lg">
            Register Now
          </Button>
        </div>
      </div>
    </nav>
  );
}
