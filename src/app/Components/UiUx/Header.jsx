"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Button from "./Button";
const headerdata = [
  {
    id: 1,
    page_name: "Home",
    page_link: "/"
  },
  {
    id: 2,
    page_name: "About Us",
    page_link: "/about-us"
  },
  {
    id: 3,
    page_name: "Products",
    page_link: "/products"
  },
  {
    id: 4,
    page_name: "Export Process",
    page_link: "/"
  }
  // {
  //   id: 5,
  //   page_name: "About Us",
  //   page_link: "/about-us"
  // }
];
const Header = () => {
  const currentpath = usePathname();
  return (
    <header className="py-8">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link
            href={'/'}
          >
            <h3 className="text-3xl uppercase font-bold">Export Makhana</h3>
          </Link>
        </div>
        <nav className="flex items-center gap-10">
          {headerdata.map((data, index) =>
            <Link
              className={`text-xl border-b-3 ${currentpath === data.page_link
                ? "border-primary"
                : "border-white"}`}
              href={`${data.page_link}`}
              key={index}
            >
              {data.page_name}
            </Link>
          )}
        </nav>
        <div className="flex items-center gap-12">

          <div>
            <Link href={`/contact-us`}>
              <Button btnname={"Contact Us"} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
