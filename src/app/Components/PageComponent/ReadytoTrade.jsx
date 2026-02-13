import React from "react";
import Title from "../UiUx/Title";
import Description from "../UiUx/Description";
import Button from "../UiUx/Button";
import Link from "next/link";

const ReadytoTrade = () => {
  return (
    <div className="py-12 md:py-16 bg-primary">
      <div className="container m-auto px-4 md:px-0">
        <div className="text-center">
          <Title
            title={"Ready to Trade Makhana Globally?"}
            color={"text-white"}
          />
          <Description
            description={
              "Join our international trade network and experience seamless makhana export-import operations with guaranteed quality and reliable service."
            }
            color={"text-white"}
            classname={"pt-5 max-w-4xl m-auto"}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-10 pt-8 gap-y-4">
          <Link href={"mailto:grtrader37@gmail.com"}>
            <Button btnname={"Get Export Quote"} />
          </Link>
          <Link href={"tel:+919915083667"}>
            <Button btnname={"Contact Sales"} btn_secondary={true} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadytoTrade;
