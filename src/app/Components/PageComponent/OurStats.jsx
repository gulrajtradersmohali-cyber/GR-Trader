'use client'
import React from "react";
import Title from "../UiUx/Title";
import Description from "../UiUx/Description";
import dynamic from "next/dynamic";
const statsData = [
  {
    id: 1,
    number: 25,
    suffix: "+",
    title: "Export Countries",
    description: "Serving customers across continents"
  },
  {
    id: 2,
    number: 1000,
    suffix: "+",
    title: "Tons Exported",
    description: "Annual export capacity"
  },
  {
    id: 3,
    number: 99,
    suffix: "%",
    title: "On-Time Delivery",
    description: "Reliable logistics performance"
  },
  {
    id: 4,
    number: 100,
    suffix: "+",
    title: "Global Partners",
    description: "Trusted importers worldwide"
  }
];
const CountUp = dynamic(() => import("react-countup"), { ssr: false });
const OurStats = () => {
  return (
    <div className="py-16">
      <div className="container m-auto">
        <div className="text-center">
          <Title title={"Export-Import Process"} color={"text-primary"} />
          <Description
            description={
              "Streamlined 10-step process for seamless global transactions"
            }
            color={"text-black"}
            classname={"pt-5"}
          />
        </div>

        <div className="grid sm:grid-cols-2 rounded-2xl lg:grid-cols-4 mt-12 max-w-5xl m-auto bg-primary">
          {statsData.map(item =>
            <div
              key={item.id}
              className="group py-4 px-8 text-center transition-all duration-300 hover:-translate-y-1 "
            >
              <h3 className="text-[60px] font-bold text-white mb-3">
                <CountUp
                  start={0}
                  end={item.number}
                  duration={2.5}
                  enableScrollSpy
                />
                {item.suffix}
              </h3>

              <h4 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h4>
              <div className="mt-6 h-[3px] w-0 bg-[#79b84a] group-hover:w-full transition-all duration-300 mx-auto rounded-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurStats;
