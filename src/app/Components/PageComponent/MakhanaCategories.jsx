import React from "react";
import Title from "../UiUx/Title";
import Description from "../UiUx/Description";
import {
  GiWheat,
  GiFire,
  GiPalette,
  GiPlantSeed,
  GiElectric,
  GiHoneyJar
} from "react-icons/gi";
import Link from "next/link";

const makhanaProducts = [
  {
    icon: GiWheat,
    title: "Raw Makhana",
    description:
      "Unprocessed fox nuts in various grades for international processing industries.",
    subtitle: "Export Specifications:",
    listItems: [
      "Grades: Extra, A, B, C",
      "Moisture: 8-10%",
      "Packing: 25/50kg PP bags",
      "Shelf life: 12 months"
    ]
  },
  {
    icon: GiFire,
    title: "Roasted Makhana",
    description:
      "Ready-to-eat roasted makhana in various sizes and salt levels.",
    subtitle: "Export Specifications:",
    listItems: [
      "Sizes: Small, Medium, Large, Jumbo",
      "Varieties: Plain, Salted, Light Salt",
      "Packing: Consumer packs / Bulk",
      "Shelf life: 9 months"
    ]
  },
  {
    icon: GiPalette,
    title: "Flavored Makhana",
    description:
      "Innovative flavored varieties for international snack markets.",
    subtitle: "Export Specifications:",
    listItems: [
      "Flavors: Masala, BBQ, Cheese, Sweet",
      "Custom flavor development",
      "International taste preferences",
      "Shelf life: 6-9 months"
    ]
  },
  {
    icon: GiPlantSeed,
    title: "Organic Makhana",
    description:
      "Certified organic fox nuts for premium health-conscious markets.",
    subtitle: "Export Specifications:",
    listItems: [
      "USDA/EU Organic certified",
      "Pesticide residue free",
      "Premium packaging options",
      "Traceability documentation"
    ]
  },
  {
    icon: GiElectric,
    title: "Makhana Powder",
    description:
      "Fine makhana flour for international food processing industries.",
    subtitle: "Export Specifications:",
    listItems: [
      "Mesh sizes: 40-100",
      "Protein content: 8-10%",
      "Industrial packaging",
      "Custom specifications"
    ]
  },
  {
    icon: GiHoneyJar,
    title: "Value-Added Products",
    description: "Processed makhana products for international retail markets.",
    subtitle: "Export Specifications:",
    listItems: [
      "Makhana bars and snacks",
      "Instant kheer mixes",
      "Custom product development",
      "Retail-ready packaging"
    ]
  }
];

const MakhanaCategories = () => {
  return (
    <div className="pt-12 md:pt-16">
      <div className="container m-auto px-4 md:px-0">
        <div className="text-center">
          <Title title={"Makhana Export Categories"} color={"text-primary"} />
          <Description
            description={"Makhana Export Categories"}
            color={"text-black"}
            classname={"pt-5"}
          />
        </div>

        <div className="space-y-6 grid lg:grid-cols-2 pt-10 md:pt-14 gap-10">
          {makhanaProducts.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="grid md:grid-cols-[1fr_3fr_3fr] h-full bg-white rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden border border-gray-100"
              >
                <div className="flex items-center justify-center bg-linear-to-br from-primary/30 to-green-100 p-4 xl:p-10">
                  <div className="w-20 h-20 flex items-center justify-center bg-white text-primary rounded-2xl shadow-md">
                    <Icon className="text-3xl" />
                  </div>
                </div>

                <div className="md:col-span-2 p-4 xl:p-8">
                  <h3 className="text-xl xl:text-2xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-2 xl:gap-6">
                    <div>
                      <p className="text-primary font-semibold mb-3">
                        {item.subtitle}
                      </p>

                      <ul className="space-y-2">
                        {item.listItems.map((list, i) =>
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <span className="text-primary mt-1">→</span>
                            {list}
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* right highlight box */}
                    <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                      <p className="text-sm text-gray-500 mb-2">Best For</p>
                      <p className="font-medium text-gray-800">
                        Global export, wholesale supply & private labeling
                      </p>

                      <div className="mt-4">
                        <Link
                         href={'tel:+919872487850'}
                         >
                        <button className="bg-primary text-white px-2 xl:px-4 py-2 rounded-full cursor-pointer text-sm hover:bg-primary/90">
                          Request Quote
                        </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MakhanaCategories;
