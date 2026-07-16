"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppSidebar } from "./SidebarMenu";
import { useIsMobile } from "./useIsMobile";
import { SidebarTrigger } from "./ui/sidebar";

const links = [
  { href: "/", title: "Home" },
  { href: "/randomquote", title: "Quotes" },
];

export default function Header() {
  const path = usePathname();
  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile && (
        <div className="w-full z-1 h-16 bg-gray-800 text-white absolute top-0 left-0 right-0 flex items-center justify-center text-2xl font-bold">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src="/quotes.jpg"
                alt="Logo"
                width={50}
                height={50}
                className="inline-block rounded-full"
              />
              <h1>Get Some Quote</h1>
            </div>
            <div className="flex space-x-6 text-lg">
              {links.map((item, i) => {
                const activeStyle = {
                  textDecoration:
                    path === item.href ? "underline overline" : "none",
                };
                return (
                  <Link
                    href={item.href}
                    style={{ ...activeStyle, color: "white" }}
                    key={i}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="absolute">
          <SidebarTrigger />
          <AppSidebar />
        </div>
      )}
    </>
  );
}
