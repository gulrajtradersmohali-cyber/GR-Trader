"use client";
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter
} from "react-icons/fa6";
import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Products", href: "/products" },
  { name: "Export Process", href: "/export-process" },
  { name: "Contact Us", href: "/contact-us" }
];

const socials = [
  { name: "Facebook", href: "#", icon: FaFacebookF },
  { name: "Instagram", href: "#", icon: FaInstagram },
  { name: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { name: "YouTube", href: "#", icon: FaYoutube },
  { name: "X", href: "#", icon: FaXTwitter }
];

const Footer = () => {
  return (
    <footer className="bg-[#f6f9f3] border-t border-[#edf2ea]">
      <div className="container m-auto px-4 md:px-0">
        <div className="pb-4 pt-12 md:pt-16 md:pb-16 grid md:grid-cols-2 lg:grid-cols-4  gap-4 md:gap-12">
          <div>
            <Link
             href={'/'}
             >
             <Image
              src={'/images/logo.png'}
              alt=""
              width={1000}
              height={500}
              className="max-w-[200px]"
              />
             </Link>

            <p className="text-black/70 text-lg mt-4 leading-relaxed">
              Premium makhana sourcing, bulk supply, and export support for
              international buyers.
            </p>

            {/* <div className="mt-8">
              <p className="text-black font-semibold text-xl">Follow Us</p>

              <div className="flex gap-4 mt-4">
                {socials.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary text-xl"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div> */}
          </div>

          <div>
            <p className="text-black font-semibold text-xl">Quick Links</p>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((l, i) =>
                <li key={i}>
                  <Link href={l.href} className="text-black/70 hover:text-primary text-lg">
                    {l.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <p className="text-black font-semibold text-xl">Contact</p>

            <div className="mt-5 space-y-4 text-lg text-black/70">
              <p>
                <span className="font-semibold text-black ">Phone:</span>
                <br />
                <a className=" hover:text-primary" href="tel:+919915083667">+91 99150 83667</a>
                <br />
                <a className=" hover:text-primary" href="tel:+919872487850">+91 98724 87850</a>
              </p>

              <p>
                <span className="font-semibold text-black">Email:</span>
                <br />
                <a className=" hover:text-primary" href="mailto:grtrader37@gmail.com">
                  grtrader37@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="text-black font-semibold text-xl">Office & Hours</p>

            <div className="mt-5 space-y-4 text-lg text-black/70">
              <p>
                <span className="font-semibold text-black ">Address:</span>
                <br />
                <span className=" hover:text-primary"> 

                F-209, Sector 74, Mohali, 160074 IND +91 9872487850
                </span>
              </p>

              <p>
                <span className="font-semibold text-black">
                  Business Hours:
                </span>
                <br />
                <span className=" hover:text-primary">
                Monday – Saturday<br />
                10:00 AM – 7:00 PM

                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-[#000000] flex flex-col md:flex-row justify-between md:gap-3 text-center text-black/70 text-base">
          <p>
            © {new Date().getFullYear()} GR Trader. All rights reserved.
          </p>
          <p>Built for bulk orders & export inquiries</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
