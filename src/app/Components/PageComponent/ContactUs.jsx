"use client";
import React from "react";
import Title from "../UiUx/Title";
import Description from "../UiUx/Description";
import Button from "../UiUx/Button";
import ReadytoTrade from "./ReadytoTrade";

const contactInfo = [
  {
    label: "Phone",
    values: [
      { number: "+91 99150 83667", href: "tel:+919915083667" },
      { number: "+91 98724 87850", href: "tel:+919872487850" }
    ],
    note: "Mon–Sat, 10:00 AM – 7:00 PM"
  },
  {
    label: "Email",
    value: "grtrader37@gmail.com",
    note: "We reply within 24 hours",
    href: "mailto:grtrader37@gmail.com"
  }
];

const officeDetails = [
  {
    title: "Office Address",
    desc: "F-209, Sector 74, Mohali, 160074 IND +91 9872487850"
  },
  { title: "Business Hours", desc: "Monday – Saturday | 10:00 AM – 7:00 PM" },
  { title: "Response Time", desc: "Typically within 24 hours on email" },
  {
    title: "Bulk Inquiry",
    desc: "Share grade/flavor, quantity, and destination country"
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

export const ContactBanner = () => {
  const bg =
    "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=2400&q=60";

  return (
    <div
      className="py-18 md:py-24 lg:py-28 xl:py-32 main_banner relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container m-auto">
        <div className="text-center">
          <Title title={"Contact Us"} color={"text-white"} />
          <Description
            description={
              "For bulk orders, export inquiries, grades/flavors, and private label packaging—reach out anytime."
            }
            color={"text-white"}
            classname={"pt-5 max-w-4xl m-auto"}
          />
        </div>

        <div className="pt-8 flex justify-center gap-4 flex-wrap">
          <a href="#contact-details">
            <Button btnname={"View Details"} />
          </a>
          <a href="mailto:grtrader37@gmail.com">
            <Button btnname={"Email Us"} />
          </a>
        </div>
      </div>
    </div>
  );
};
export const ContactDetails = () => {
  return (
    <Section className="bg-white">
      <div id="contact-details" className="container m-auto px-4 md:px-0">
        <div className="text-center">
          <Title title={"Get in Touch"} color={"text-primary"} />
          <Description
            description={
              "We are available on phone and email for all export & bulk inquiries."
            }
            color={"text-black"}
            classname={"md:pt-5 max-w-3xl m-auto"}
          />
        </div>

        <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-8 max-w-5xl m-auto">
          {contactInfo.map((c, i) =>
            <Card
              key={i}
              className="p-4 md:p-10 border-2 border-black/30 "
            >
              <p className="text-primary font-semibold text-lg">
                {c.label}
              </p>

              <div className="mt-3 space-y-2">
                {c.label === "Phone"
                  ? c.values.map((p, index) =>
                      <a
                        key={index}
                        href={p.href}
                        className="block text-black hover:text-primary font-semibold text-xl md:text-2xl break-words"
                      >
                        {p.number}
                      </a>
                    )
                  : <a
                      href={c.href}
                      className="block text-black hover:text-primary font-semibold text-xl md:text-2xl break-words"
                    >
                      {c.value}
                    </a>}
              </div>

              <p className="text-black/70 text-lg mt-3 leading-relaxed">
                {c.note}
              </p>

              <div className="mt-4 md:mt-8">
                <a href={c.label === "Phone" ? c.values[0].href : c.href}>
                  <span className="inline-flex px-5 md:px-7 py-2 md:py-3.5 rounded-full bg-primary text-white font-semibold text-lg">
                    {c.label === "Email" ? "Send Email" : "Call Now"}
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
export const ContactInfoSection = () => {
  return (
    <Section className="bg-[#f6f9f3]">
      <div className="container m-auto px-4 md:px-0">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
          <div>
            <Title title={"Office & Support"} color={"text-primary"} />
            <Description
              description={
                "For faster response, share product type (raw/roasted/private label), quantity, and destination country."
              }
              color={"text-black"}
              classname={"md:pt-5 max-w-2xl"}
            />

            <div className="mt-5 md:mt-10 space-y-5">
              {[
                "Product: Raw Makhana / Roasted Makhana / Private Label",
                "Grade/Flavor preference",
                "Quantity requirement (kg/tons)",
                "Destination country + delivery timeline"
              ].map((t, i) =>
                <div key={i} className="flex gap-4 items-start">
                  <Dot />
                  <p className="text-black/80 text-base md:text-lg leading-relaxed">
                    {t}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {officeDetails.map((o, i) =>
              <Card key={i} className="p-4 md:p-10">
                <p className="text-black font-semibold text-xl">
                  {o.title}
                </p>
                <p className="text-black/70 text-base hover:text-primary md:text-lg md:mt-3 leading-relaxed">
                  {o.desc}
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

const ContactUs = () => {
  return (
    <div>
      <ContactBanner />
      <ContactDetails />
      <ContactInfoSection />
      <div className="pt-12" />
      <ReadytoTrade />
    </div>
  );
};

export default ContactUs;
