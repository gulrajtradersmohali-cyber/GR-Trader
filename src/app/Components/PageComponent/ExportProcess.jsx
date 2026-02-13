"use client";
import React from "react";
import Title from "../UiUx/Title";
import Description from "../UiUx/Description";
import Button from "../UiUx/Button";
import ReadytoTrade from "./ReadytoTrade";
import SubBanner from "./SubBanner";
import Link from "next/link";

const exportSteps = [
  {
    step: "01",
    title: "Quality Selection & Grading",
    desc:
      "We select premium makhana batches and grade them by size and quality to meet export standards."
  },
  {
    step: "02",
    title: "Cleaning & Hygienic Packaging",
    desc:
      "Careful cleaning and hygienic packaging with moisture control to maintain freshness and shelf life."
  },
  {
    step: "03",
    title: "FSSAI & Export Documentation",
    desc:
      "Complete documentation support including FSSAI compliance, invoices, packing lists, and export papers."
  },
  {
    step: "04",
    title: "Customs Clearance",
    desc:
      "We assist in customs-ready documentation and ensure smooth clearance with proper shipment handling."
  },
  {
    step: "05",
    title: "International Shipping",
    desc:
      "Reliable shipping coordination with tracking updates for smooth transit to destination countries."
  },
  {
    step: "06",
    title: "On-Time Delivery",
    desc:
      "We focus on timely dispatch and consistent follow-ups to ensure on-time delivery to buyers."
  }
];

const highlights = [
  "Export-ready grading standards",
  "Moisture-safe hygienic packaging",
  "FSSAI + documentation assistance",
  "Reliable shipping coordination",
  "Transparent process & updates",
  "Bulk orders supported"
];

const qualityStandards = [
  {
    title: "Moisture Control",
    desc:
      "Moisture-safe packing to keep makhana crisp and fresh during transit."
  },
  {
    title: "Uniform Grading",
    desc: "Batch consistency maintained using size grading and quality checks."
  },
  {
    title: "Hygienic Handling",
    desc: "Clean handling and packaging process focused on export safety."
  },
  {
    title: "Export-Ready Packing",
    desc:
      "Durable packaging designed to protect products in long-distance shipping."
  }
];

const docs = [
  "FSSAI Compliance / Support",
  "Commercial Invoice",
  "Packing List",
  "Product Specification (Grade/Size)",
  "Shipping & Dispatch Details",
  "Customs-ready Documentation Support"
];

const shippingModes = [
  {
    title: "Air Shipping",
    desc: "Best for smaller or urgent shipments. Faster delivery timelines."
  },
  {
    title: "Sea Shipping",
    desc: "Ideal for bulk orders. Cost-effective for large quantity exports."
  },
  {
    title: "Tracking Updates",
    desc: "We provide dispatch and shipment tracking updates for transparency."
  }
];

const faqs = [
  {
    q: "Do you support bulk orders for export?",
    a:
      "Yes, we handle bulk supply with consistent grading and export-ready packaging."
  },
  {
    q: "Can you help with documentation?",
    a:
      "Yes, we assist with standard export documentation and compliance support."
  },
  {
    q: "Do you offer private label packaging?",
    a:
      "Yes, we provide private label branding and packaging options for buyers."
  },
  {
    q: "What shipping options are available?",
    a:
      "Air and sea shipping are available depending on quantity, destination, and timeline."
  }
];

const Section = ({ className = "", children }) =>
  <section className={`pt-12 ${className}`}>
    {children}
  </section>;
const Card = ({ className = "", children }) =>
  <div
    className={`bg-white border border-[#edf2ea] rounded-3xl shadow-sm ${className}`}
  >
    {children}
  </div>;
const Dot = () =>
  <span className="w-3 h-3 rounded-full bg-primary mt-2 shrink-0" />;

export const ExportIntro = () => {
  return (
    <Section className="bg-white">
      <div className="container m-auto px-4 md:px-0">
        <div className="text-center">
          <Title title={"Our Export Process"} color={"text-primary"} />
          <Description
            description={
              "A clear step-by-step export workflow built for international buyers—quality focused, compliant, and reliable."
            }
            color={"text-black"}
            classname={"pt-5 max-w-4xl m-auto"}
          />
        </div>
        <div className="mt-8 md:mt-12 grid md:grid-cols-3 gap-6 max-w-5xl m-auto">
          {highlights.map((t, i) =>
            <Card key={i} className="py-4 px-6">
              <div className="flex gap-4 items-start">
                <Dot />
                <p className="text-black/80 text-lg leading-relaxed">
                  {t}
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </Section>
  );
};

export const ExportSteps = () => {
  return (
    <Section className="bg-[#f6f9f3]">
      <div className="container m-auto px-4 md:px-0">
        <div className="text-center">
          <Title title={"Step-by-Step Workflow"} color={"text-primary"} />
          <Description
            description={
              "From sourcing to delivery—everything handled with export-ready operations."
            }
            color={"text-black"}
            classname={"pt-5 max-w-4xl m-auto"}
          />
        </div>
        <div className="mt-8 md:mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exportSteps.map((s, i) =>
            <Card key={i} className="p-4 md:p-10">
              <div className="flex items-center justify-between">
                <p className="text-primary font-bold text-2xl">
                  {s.step}
                </p>
                <span className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <span className="w-3 h-3 rounded-full bg-primary" />
                </span>
              </div>
              <p className="mt-6 text-black font-semibold text-xl md:text-2xl">
                {s.title}
              </p>
              <p className="text-black/70 text-lg mt-3 leading-relaxed">
                {s.desc}
              </p>
            </Card>
          )}
        </div>
      </div>
    </Section>
  );
};

export const QualityStandards = () => {
  return (
    <Section className="bg-white">
      <div className="container m-auto px-4 md:px-0">
        <div className="text-center">
          <Title
            title={"Quality & Packaging Standards"}
            color={"text-primary"}
          />
          <Description
            description={
              "Quality checks and packaging practices built for export shipments."
            }
            color={"text-black"}
            classname={"pt-5 max-w-4xl m-auto"}
          />
        </div>
        <div className="mt-8 md:mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualityStandards.map((s, i) =>
            <Card key={i} className="p-8 md:p-10">
              <p className="text-black font-semibold text-xl md:text-2xl">
                {s.title}
              </p>
              <p className="text-black/70 text-lg mt-3 leading-relaxed">
                {s.desc}
              </p>
            </Card>
          )}
        </div>
      </div>
    </Section>
  );
};

export const DocumentsChecklist = () => {
  return (
    <Section className="bg-[#f6f9f3]">
      <div className="container m-auto px-4 md:px-0">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Title title={"Documentation Checklist"} color={"text-primary"} />
            <Description
              description={
                "We help buyers with the standard documents required for smooth exports."
              }
              color={"text-black"}
              classname={"pt-5 max-w-2xl"}
            />
            <div className="mt-6 md:mt-10 space-y-5">
              {docs.map((t, i) =>
                <div key={i} className="flex gap-4 items-start">
                  <Dot />
                  <p className="text-black/80 text-lg leading-relaxed">
                    {t}
                  </p>
                </div>
              )}
            </div>
          </div>
          <Card className="p-4 md:p-12 bg-white">
            <p className="text-black font-semibold text-xl md:text-2xl">
              What we need from you
            </p>
            <p className="text-black/70 text-lg mt-3 leading-relaxed">
              To process quickly, share these details on email/phone:
            </p>
            <div className="mt-8 space-y-5">
              {[
                "Product: Raw / Roasted / Private Label",
                "Grade/Flavor + pack size",
                "Quantity (kg/tons)",
                "Destination country + preferred shipping timeline"
              ].map((t, i) =>
                <div key={i} className="flex gap-4 items-start">
                  <Dot />
                  <p className="text-black/80 text-lg leading-relaxed">
                    {t}
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export const ShippingModes = () => {
  return (
    <Section className="bg-white">
      <div className="container m-auto px-4 md:px-0">
        <div className="text-center">
          <Title title={"International Shipping"} color={"text-primary"} />
          <Description
            description={
              "Flexible shipping options for different buyer needs and destinations."
            }
            color={"text-black"}
            classname={"pt-5 max-w-4xl m-auto"}
          />
        </div>
        <div className="mt-8 md:mt-14 grid md:grid-cols-3 gap-8 max-w-6xl m-auto">
          {shippingModes.map((m, i) =>
            <Card key={i} className="p-4 md:p-10">
              <p className="text-black font-semibold text-xl md:text-2xl">
                {m.title}
              </p>
              <p className="text-black/70 text-lg mt-3 leading-relaxed">
                {m.desc}
              </p>
            </Card>
          )}
        </div>
      </div>
    </Section>
  );
};

export const ExportFAQ = () => {
  return (
    <Section className="bg-[#f6f9f3]">
      <div className="container m-auto px-4 md:px-0">
        <div className="text-center">
          <Title title={"Export FAQs"} color={"text-primary"} />
          <Description
            description={"Quick answers to common export questions."}
            color={"text-black"}
            classname={"pt-5 max-w-4xl m-auto"}
          />
        </div>
        <div className="mt-8 md:mt-14 grid md:grid-cols-2 gap-8 max-w-6xl m-auto">
          {faqs.map((f, i) =>
            <Card key={i} className="p-4 md:p-10">
              <p className="text-black font-semibold text-2xl">
                {f.q}
              </p>
              <p className="text-black/70 text-lg mt-3 leading-relaxed">
                {f.a}
              </p>
            </Card>
          )}
        </div>
      </div>
    </Section>
  );
};

export const ExportSupport = () => {
  return (
    <Section className="bg-white">
      <div className="container m-auto px-4 md:px-0">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
          <div>
            <Title title={"Need Export Assistance?"} color={"text-primary"} />
            <Description
              description={
                "Share your requirement and destination country—we’ll guide you with grades, packaging, documentation, and shipping."
              }
              color={"text-black"}
              classname={"pt-5 max-w-2xl"}
            />
            <div className="mt-6 md:mt-10 space-y-5">
              {[
                "Product type: Raw / Roasted / Private Label",
                "Grade or flavor preference",
                "Quantity requirement (kg/tons)",
                "Destination country + timeline"
              ].map((t, i) =>
                <div key={i} className="flex gap-4 items-start">
                  <Dot />
                  <p className="text-black/80 text-lg leading-relaxed">
                    {t}
                  </p>
                </div>
              )}
            </div>
          </div>
          <Card className="p-4 md:p-12 bg-primary/5 border-primary/10">
            <p className="text-black font-semibold text-xl 2xl:text-2xl">Quick Contact</p>
            <p className="text-black/70 text-lg mt-3 leading-relaxed">
              Get pricing, export support, and documentation guidance directly.
            </p>
            <div className="mt-10 flex gap-4 flex-wrap">
              <Link href={"mailto:gulrajtradersmohali@gmail.com"}>
                <Button btnname={"Email Us"} />
              </Link>
              <Link href={"tel:+919915083667"}>
                <Button btnname={"Call Now"} />
              </Link>
            </div>
            <div className="mt-8 text-black/70 text-base leading-relaxed">
              <p>
                <span className="font-semibold text-black">Hours:</span>{" "}
                Mon–Sat, 10:00 AM – 7:00 PM
              </p>
              <p className="mt-2">
                <span className="font-semibold text-black">Location:</span>{" "}
                Mohali, Punjab, India
              </p>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

const ExportProcess = () => {
  return (
    <div>
      <SubBanner
        title={"Export Process"}
        description={
          "Quality selection, hygienic packaging, export documentation, customs clearance, and on-time global delivery."
        }
        btnname={"Contact Us"}
      />
      <ExportIntro />
      <ExportSteps />
      <QualityStandards />
      <DocumentsChecklist />
      <ShippingModes />
      <ExportFAQ />
      <ExportSupport />
      <div className="pt-12" />
      <ReadytoTrade />
    </div>
  );
};

export default ExportProcess;
