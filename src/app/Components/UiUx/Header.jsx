"use client";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

const headerdata = [
  { id: 1, page_name: "Home", page_link: "/" },
  { id: 2, page_name: "About Us", page_link: "/about-us" },
  { id: 3, page_name: "Products", page_link: "/products" },
  { id: 4, page_name: "Export Process", page_link: "/export-process" }
];

const Header = () => {
  const currentpath = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = useMemo(() => headerdata, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [currentpath]);

  useEffect(() => {
    const onKeyDown = e => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const linkClass = link =>
    `text-lg 2xl:text-xl border-b-3 ${currentpath === link ? "border-primary" : "border-white"}`;

  return (
    <>
      <header className="py-4 2xl:py-7 px-4 md:px-0">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
               src={'/images/logo.png'}
               alt=""
               width={1000}
               height={500}
               className="max-w-[170px] md:max-w-[220px] lg:max-w-[250px] xl:max-w-[280px]"
               />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map(item => (
              <Link className={linkClass(item.page_link)} href={item.page_link} key={item.id}>
                {item.page_name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-12">
              <Link href="/contact-us">
                <Button btnname={"Contact Us"} />
              </Link>
            </div>

            {
              !open ?
                <button
                  type="button"
                  aria-label="Open menu"
                  className="block lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <CgMenu size={40} />
                </button>
                :
                <button type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
                  <IoClose size={34} />
                </button>
            }
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          className="absolute inset-0 bg-black/45"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[100%] max-w-[768px] bg-white border-l border-[#edf2ea] shadow-xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#000000]">
            <p className="text-xl font-bold uppercase">Menu</p>
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
              <IoClose size={34} />
            </button>
          </div>

          <div className="px-6 py-6">
            <div className="flex flex-col gap-4">
              {navLinks.map(item => (
                <Link
                  key={item.id}
                  href={item.page_link}
                  className={`text-lg font-semibold pb-3 border-b border-[#edf2ea] ${currentpath === item.page_link ? "text-primary" : "text-black"}`}
                >
                  {item.page_name}
                </Link>
              ))}
            </div>

            <div className="mt-4">
              <div className="flex md:hidden items-center gap-12">
                <Link href="/contact-us">
                  <Button btnname={"Contact Us"} />
                </Link>
              </div>
            </div>

            <div className="mt-4 bg-[#f6f9f3] border border-[#edf2ea] rounded-3xl p-6">
              <p className="text-black font-semibold text-lg">Quick Contact</p>
              <p className="text-black/70 text-base mt-2">Mon–Sat, 10:00 AM – 7:00 PM</p>
              <div className="mt-4 space-y-2">
                <a href="tel:+919915083667" className="block text-black font-semibold text-lg">
                  +91 99150 83667
                </a>
                <a href="tel:+919872487850" className="block text-black font-semibold text-lg">
                  +91 98724 87850
                </a>
                <a href="mailto:grtrader37@gmail.com" className="block text-black/70 text-base break-words">
                  grtrader37@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
