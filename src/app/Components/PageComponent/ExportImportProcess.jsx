import React from "react";
import Title from "../UiUx/Title";
import Description from "../UiUx/Description";

const processSteps = [
  {
    id: 1,
    title: "Initial Inquiry",
    description:
      "Share your specific requirements, quantities, and target markets with our team"
  },
  {
    id: 2,
    title: "Market Research",
    description:
      "We analyze market conditions and provide competitive pricing insights"
  },
  {
    id: 3,
    title: "Product Sourcing",
    description:
      "Source the best quality products from our certified supplier network"
  },
  {
    id: 4,
    title: "Quality Inspection",
    description:
      "Rigorous quality testing and inspection at source and processing facilities"
  },
  {
    id: 5,
    title: "Certification & Testing",
    description:
      "Obtain all required certifications and lab testing as per destination country requirements"
  },
  {
    id: 6,
    title: "Quotation & Terms",
    description:
      "Provide detailed quotation with flexible payment and delivery terms"
  },
  {
    id: 7,
    title: "Order Confirmation",
    description:
      "Finalize order details, contracts, and advance payment arrangements"
  },
  {
    id: 8,
    title: "Export Documentation",
    description:
      "Complete all export documentation and regulatory compliance procedures"
  },
  {
    id: 9,
    title: "Packaging & Shipping",
    description:
      "Professional packaging and coordination with reliable shipping partners"
  },
  {
    id: 10,
    title: "Delivery & Support",
    description:
      "On-time delivery with post-shipment support and shipment tracking"
  }
];
const ExportImportProcess = () => {
  return (
    <div className="pt-12 md:pt-16">
      <div className="container m-auto px-4 md:px-0">
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

        <div className="relative pt-12 md:pt-16">
          <div className="absolute top-18 left-0 w-full h-0.5 bg-[#e3eadf] hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-1 md:gap-8 relative z-10 space-y-4 md:space-y-0">
            {processSteps.map((item, index) =>
              <div
                key={index}
                className="group bg-white rounded-2xl px-4 py-3 md:px-6 md:py-6 border border-r-4 border-r-primary border-b-4 border-b-primary border-[#edf2ea] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-semibold text-lg mb-5 shadow-sm border border-white">
                  {index + 1}
                </div>
                <div className="text-3xl mb-4 text-[#3a7d2c]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#243224] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5c6b5c] leading-relaxed">
                  {item.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportImportProcess;
