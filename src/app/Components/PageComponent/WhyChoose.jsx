import React from "react";
import Title from "../UiUx/Title";
import Description from "../UiUx/Description";
import { FaTrophy, FaGlobe, FaShip, FaHandshake } from "react-icons/fa";
const WhyChooseData = [
  {
    icon: FaTrophy,
    title: "Premium Quality Assurance",
    description:
      "Rigorous quality control, international certifications, and direct sourcing from certified farms across Bihar and West Bengal.",
    itemlist: [
      "FSSAI, APEDA, and ISO certifications",
      "Lab-tested quality parameters",
      "Organic and conventional varieties",
      "Consistent supply chain management"
    ]
  },
  {
    icon: FaGlobe,
    title: "Global Market Expertise",
    description:
      "Deep understanding of international markets, regulations, and customer preferences across continents.",
    itemlist: [
      "Experience in 25+ countries",
      "Regional market insights",
      "Regulatory compliance expertise",
      "Cultural preference understanding"
    ]
  },
  {
    icon: FaShip,
    title: "Complete Logistics Support",
    description:
      "End-to-end shipping solutions, documentation assistance, and on-time delivery to any global destination.",
    itemlist: [
      "Full container and LCL shipments",
      "Multi-modal transport solutions",
      "Export documentation handling",
      "Real-time shipment tracking"
    ]
  },
  {
    icon: FaHandshake,
    title: "Ethical Trade Partnership",
    description:
      "Supporting farmers through fair trade practices while ensuring premium quality for international markets.",
    itemlist: [
      "Direct farmer connect programs",
      "Fair pricing mechanisms",
      "Sustainable farming support",
      "Transparent supply chain"
    ]
  }
];

const WhyChoose = () => {
  return (
    <div className="pt-16">
      <div className="container m-auto">
        <div className="text-center">
          <Title
            title={"Why Choose International Makhana Trade?"}
            color={"text-primary"}
          />
          <Description
            description={
              "Your reliable partner for global makhana export-import operations with end-to-end support"
            }
            color={"text-black"}
            classname={"pt-5"}
          />
        </div>

        <div className="pt-10 grid grid-cols-4 gap-5">
          {
           WhyChooseData.map((data,index)=>{
            const Icon = data.icon 
            return (
              <div className="shadow-[4px_7px_5px_#c8c4c4] rounded-3xl py-6 px-3 group hover:bg-primary transition-all duration-300 cursor-pointer" key={index}>
                <div className="p-5 bg-primary group-hover:bg-white w-fit rounded-full transition-all duration-500">
                <Icon size={48} className="text-white group-hover:text-primary transition-all duration-500" />
                </div>
                <h3 className="pt-4 text-2xl font-semibold group-hover:text-white transition-all duration-500">
                   {data.title} 
                </h3>
                <p className="pt-4 text-base group-hover:text-white transition-all duration-500">
                  {data.description}
                </p>

                <ul className="pt-4">
                  {
                    data.itemlist.map((d,i)=>(
                     <li key={i} className="ps-4 text-lg font-medium italic pt-1 list-disc list-inside marker:text-primary group-hover:marker:text-white group-hover:text-white transition-all duration-500">
                        {d}
                     </li>
                    ))
                  }
                </ul>
              </div>
            )
           })
          }
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
