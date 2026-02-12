import React from "react";
import Title from "../UiUx/Title";
import Description from "../UiUx/Description";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
const data = [
  {
    icon: <FaArrowDown />,
    title: "For International Importers",
    description:
      "We help global importers source the finest quality makhana products with complete transparency and reliability.",
    listItems: [
      "Direct sourcing from certified farms and manufacturers",
      "Quality inspection and certification assistance",
      "Customized packaging and branding solutions",
      "Competitive pricing and flexible payment terms",
      "Complete export documentation support",
      "Shipment tracking and logistics coordination",
      "Post-sales support and order management"
    ]
  },
  {
    icon: <FaArrowUp />,
    title: "For Makhana Manufacturers & Exporters",
    description:
      "We connect Indian makhana manufacturers with verified global buyers and provide complete export facilitation.",
    listItems: [
      "Global buyer network and market access",
      "Export documentation and compliance support",
      "International market research and insights",
      "Competitive market pricing guidance",
      "Quality standardization assistance",
      "Shipping and logistics coordination",
      "Payment security and collections"
    ]
  }
];

const ExportImportServices = () => {
  return (
    <div className="pt-16">
      <div className="container m-auto">
        <div className="text-center">
          <Title title={"Our Export-Import Services"} color={"text-primary"} />
          <Description
            description={
              "Comprehensive solutions for both importers and exporters"
            }
            color={"text-black"}
            classname={"pt-5"}
          />
        </div>

        <div className="grid grid-cols-2 gap-12 pt-12">
          {data.map((item, index) =>
            <div
              key={index}
              className="relative bg-white rounded-3xl p-8 shadow-[4px_7px_5px_#c8c4c4] transition-all duration-300 before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-transparent before:bg-gradient-to-b before:from-primary before:to-transparent before:-z-10"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-primary/10 text-primary rounded-xl mb-6 group-hover:scale-110 transition">
                <span className="text-2xl">
                  {item.icon}
                </span>
              </div>

              <h2 className="text-2xl font-semibold text-black mb-3">
                {item.title}
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {item.description}
              </p>

              <ul className="space-y-4">
                {item.listItems.map((list, i) =>
                  <li key={i} className="flex gap-3 items-start text-gray-800">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-primary/15 text-primary text-sm mt-1">
                      →
                    </span>
                    <span className="leading-snug">
                      {list}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExportImportServices;
