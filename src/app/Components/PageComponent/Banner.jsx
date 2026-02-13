import React from "react";
import Button from "../UiUx/Button";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex justify-center items-center main_banner relative py-18 md:py-24 lg:py-28 xl:py-32 2xl:py-40">
      <div className="max-w-7xl mx-auto text-center px-4 md:px-0">
        <h1 className="text-[36px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[84px] font-bold text-primary">
          Premium Makhana Exporter
        </h1>
        <p className="text-xl md:text-2xl 2xl:text-3xl text-white pt-6">
          India's Trusted Makhana Export-Import Partner
        </p>
        <p className="text-base md:text-lg 2xl:text-xl text-white max-w-4xl m-auto pt-4 lg:pt-8 xl:pt-10">
          Connecting global markets with India's finest makhana products. We
          facilitate seamless international trade for importers seeking premium
          quality and exporters looking for reliable buyers worldwide.
        </p>

        <div className="pt-6">
          <Link href={"tel:+919915083667"}>
            <Button btnname={" Start International Trade"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
