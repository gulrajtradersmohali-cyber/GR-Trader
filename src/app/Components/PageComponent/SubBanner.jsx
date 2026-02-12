import React from "react";
import Title from "../UiUx/Title";
import Description from "../UiUx/Description";
import Button from "../UiUx/Button";
import Link from "next/link";
export const SubBanner = ({ title, description, btnname }) => {
  return (
    <div className="py-30 main_banner relative ">
      <div className="container m-auto">
        <div className="text-center">
          <Title title={title} color={"text-white"} />
          <Description
            description={description}
            color={"text-white"}
            classname={"pt-5 max-w-4xl m-auto"}
          />
        </div>

        <div className="pt-6 flex justify-center">
          <Link href={"tel:+919915083667"}>
            <Button btnname={btnname} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SubBanner;
