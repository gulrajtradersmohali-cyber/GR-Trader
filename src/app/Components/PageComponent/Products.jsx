"use client";
import React from "react";
import Title from "../UiUx/Title";
import Description from "../UiUx/Description";
import Button from "../UiUx/Button";
import ReadytoTrade from "./ReadytoTrade";
import SubBanner from "./SubBanner";
import Link from "next/link";

const products = [
  {
    key: "raw",
    title: "Raw Makhana",
    subtitle: "High-quality natural fox nuts sourced directly from farms.",
    points: [
      "Clean, natural and export-grade sorting",
      "Consistent size grading & moisture control",
      "Bulk supply availability for international buyers"
    ],
    listTitle: "Available Grades",
    list: ["4 Suta (Premium Large Size)", "5 Suta", "6 Suta", "Standard Grade"],
    badge: "Farm Fresh",
    image:
      "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=1600&q=60"
  },
  {
    key: "roasted",
    title: "Roasted Makhana",
    subtitle: "Healthy roasted snacks with hygienic processing.",
    points: [
      "Crispy roasting with hygiene-first handling",
      "Great for retail, gifting & modern snack brands",
      "Bulk orders + consistent flavor profiles"
    ],
    listTitle: "Flavors Available",
    list: [
      "Salted",
      "Peri Peri",
      "Cream & Onion",
      "Cheese",
      "Customized Flavors"
    ],
    badge: "Ready to Sell",
    image:
      "https://images.unsplash.com/photo-1604909052743-94e83888f3bd?auto=format&fit=crop&w=1600&q=60"
  },
  {
    key: "private-label",
    title: "Private Label Packaging",
    subtitle:
      "Customized branding and packaging solutions for international buyers.",
    points: [
      "Your brand name + packaging design support",
      "MOQ-friendly options for growing brands",
      "Export-ready packaging & compliance assistance"
    ],
    listTitle: "Packaging Support",
    list: [
      "Branding & Label Design",
      "Custom Pack Sizes",
      "Barcode & Retail Requirements",
      "Bulk Master Cartons"
    ],
    badge: "Custom Branding",
    image:
      "https://images.unsplash.com/photo-1585675100414-3d1b0b5c8d4d?auto=format&fit=crop&w=1600&q=60"
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

export const ProductsIntro = () => {
  return (
    <Section className="bg-white">
      <div className="container m-auto">
        <div className="text-center">
          <Title title={"Our Product Categories"} color={"text-primary"} />
          <Description
            description={
              "Choose from raw export-grade makhana, roasted ready-to-sell snacks, or launch your own brand with private label packaging."
            }
            color={"text-black"}
            classname={"pt-5 max-w-4xl m-auto"}
          />
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {products.map(p =>
            <Card key={p.key} className="p-6">
              <p className="text-primary font-semibold text-lg">
                {p.badge}
              </p>
              <p className="text-black font-semibold text-2xl mt-3">
                {p.title}
              </p>
              <p className="text-black/70 text-lg mt-3 leading-relaxed">
                {p.subtitle}
              </p>

              <div className="mt-7">
                <a href={`#${p.key}`} className="inline-flex">
                  <span className="px-6 py-3 rounded-full bg-primary text-white font-semibold text-lg">
                    View Details
                  </span>
                </a>
              </div>
            </Card>
          )}
        </div>
      </div>
    </Section>
  );
};

const ProductBlock = ({ id, reverse, product }) => {
  const { title, subtitle, points, listTitle, list, image, badge } = product;

  return (
    <Section className={id === "roasted" ? "bg-[#f6f9f3]" : "bg-white"}>
      <div id={id} className="container m-auto scroll-mt-28">
        <div
          className={`grid lg:grid-cols-[2fr_3fr] gap-12 items-center ${reverse
            ? "lg:flex-row-reverse"
            : ""}`}
        >
          {/* Image */}
          <div className={reverse ? "lg:order-2" : "lg:order-1"}>
            <div
              className="rounded-3xl overflow-hidden border border-[#edf2ea]"
              style={{ background: "#f6f9f3" }}
            >
              <div
                className="w-full h-[340px] md:h-[420px]"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              />
            </div>
          </div>

          <div className={reverse ? "lg:order-1" : "lg:order-2"}>
            <p className="text-primary font-semibold text-lg">
              {badge}
            </p>

            <div className="mt-2">
              <Title title={title} color={"text-primary"} />
              <Description
                description={subtitle}
                color={"text-black"}
                classname={"pt-4 max-w-2xl"}
              />
            </div>

            <div className="mt-2 space-y-2">
              {points.map((t, i) =>
                <div key={i} className="flex gap-4 items-start">
                  <Dot />
                  <p className="text-black/80 text-lg leading-relaxed">
                    {t}
                  </p>
                </div>
              )}
            </div>

            <Card className="p-6 mt-4 bg-primary/5 border-primary/10">
              <p className="text-black font-semibold text-2xl">
                {listTitle}
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {list.map((l, i) =>
                  <div
                    key={i}
                    className="bg-white border border-[#edf2ea] rounded-2xl py-2 px-6"
                  >
                    <p className="text-black font-semibold text-lg">
                      {l}
                    </p>
                  </div>
                )}
              </div>
            </Card>

            <div className="mt-10 flex gap-4 flex-wrap">
              <Link href={"mailto:gulrajtradersmohali@gmail.com"}>
                <Button btnname={"Request Quote"} />
              </Link>
              <Link href={"tel:+919872487850"}>
                <Button btnname={"Contact Sales"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export const RawMakhanaSection = () =>
  <ProductBlock id="raw" product={products[0]} />;

export const RoastedMakhanaSection = () =>
  <ProductBlock id="roasted" reverse product={products[1]} />;

export const PrivateLabelSection = () =>
  <ProductBlock id="private-label" product={products[2]} />;

export const ProductsSupport = () => {
  return (
    <Section className="bg-[#f6f9f3]">
      <div className="container m-auto">
        <div className="text-center">
          <Title
            title={"Need Bulk Pricing or Custom Packaging?"}
            color={"text-primary"}
          />
          <Description
            description={
              "Share your requirement and we’ll suggest the best grade, packing, and dispatch plan."
            }
            color={"text-black"}
            classname={"pt-5 max-w-4xl m-auto"}
          />
        </div>

        <div className="mt-12 flex justify-center gap-4 flex-wrap">
          <Button btnname={"Get Bulk Price"} />
          <Button btnname={"Private Label Inquiry"} />
        </div>
      </div>
    </Section>
  );
};

const Products = () => {
  return (
    <div>
      <SubBanner
        title={"Products - Premium Makhana Range"}
        description={
          "Raw makhana, roasted flavors, and private label packaging—built for bulk buyers and global export partners."
        }
        btnname={"Contact Us"}
      />
      <ProductsIntro />
      <RawMakhanaSection />
      <RoastedMakhanaSection />
      <PrivateLabelSection />
      <div className="pt-12" />
      <ReadytoTrade />
    </div>
  );
};

export default Products;
