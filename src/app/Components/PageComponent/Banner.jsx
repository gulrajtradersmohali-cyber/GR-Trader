import React from "react";
import Button from "../UiUx/Button";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex justify-center items-center main_banner relative py-40">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-[84px] font-bold text-primary">
          Premium Makhana Exporter
        </h1>
        <p className="text-3xl text-white">
          India's Trusted Makhana Export-Import Partner
        </p>
        <p className="text-xl text-white max-w-4xl m-auto pt-10">
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
