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
      <div className="container m-auto">
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-black">EXPORT MAKHANA</h3>

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
                  <Link href={l.href} className="text-black/70 text-lg">
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
                <span className="font-semibold text-black">Phone:</span>
                <br />
                <a href="tel:+919915083667">+91 99150 83667</a>
                <br />
                <a href="tel:+919872487850">+91 98724 87850</a>
              </p>

              <p>
                <span className="font-semibold text-black">Email:</span>
                <br />
                <a href="mailto:gulrajtradersmohali@gmail.com">
                  gulrajtradersmohali@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="text-black font-semibold text-xl">Office & Hours</p>

            <div className="mt-5 space-y-4 text-lg text-black/70">
              <p>
                <span className="font-semibold text-black">Address:</span>
                <br />
                Mohali, Punjab, India
              </p>

              <p>
                <span className="font-semibold text-black">
                  Business Hours:
                </span>
                <br />
                Monday – Saturday<br />
                10:00 AM – 7:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-[#edf2ea] flex flex-col md:flex-row justify-between gap-3 text-black/70 text-base">
          <p>
            © {new Date().getFullYear()} Export Makhana. All rights reserved.
          </p>
          <p>Built for bulk orders & export inquiries</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
