import React from "react";
import Description from "../UiUx/Description";
import Title from "../UiUx/Title";
import ReadytoTrade from "./ReadytoTrade";
import SubBanner from "./SubBanner";

const highlights = [
  {
    title: "Premium Grade Makhana",
    desc: "Handpicked sourcing and consistent grading for export standards."
  },
  {
    title: "Export Documentation Support",
    desc: "We help with invoices, packing lists, and shipping coordination."
  },
  {
    title: "Bulk Supply Reliability",
    desc: "Stable procurement network to fulfill large volume demands."
  },
  {
    title: "Safe Packaging",
    desc:
      "Moisture control + export-ready packing to protect quality in transit."
  }
];
const processSteps = [
  {
    step: "01",
    title: "Sourcing",
    desc: "Direct farmer network & trusted suppliers for consistent stock."
  },
  {
    step: "02",
    title: "Sorting & Grading",
    desc: "Uniform size grading with moisture and quality checks."
  },
  {
    step: "03",
    title: "Packaging",
    desc: "Hygienic packing standards for longer shelf life & freshness."
  },
  {
    step: "04",
    title: "Export Dispatch",
    desc: "Shipment planning, documentation, and reliable delivery support."
  }
];

export const AboutIntro = () => {
  return (
    <section className="bg-white pt-18">
      <div className="container m-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Title title={"Who We Are"} color={"text-primary"} />
            <Description
              description={
                "We are based in Mohali, Punjab, specializing in sourcing and exporting premium makhana with consistent quality and reliable supply."
              }
              color={"text-black"}
              classname={"pt-5 max-w-2xl"}
            />

            <div className="mt-8 space-y-5 text-black/80 leading-relaxed text-lg">
              <p>
                Our focus is on stable procurement, hygienic handling, and
                export-ready packaging. We aim to build long-term partnerships
                by delivering predictable quality in every shipment. Our focus
                is on stable procurement, hygienic handling, and export-ready
                packaging. We aim to build long-term partnerships by delivering
                predictable quality in every shipment.
              </p>
              <p>
                From sourcing to dispatch, we maintain a transparent process and
                provide export support to help buyers trade smoothly. From
                sourcing to dispatch, we maintain a transparent process and
                provide export support to help buyers trade smoothly.
              </p>
            </div>
          </div>

          <div className="p-10 md:p-12">
            <p className="text-black text-2xl font-semibold">
              What you can expect from us
            </p>

            <div className="mt-8 space-y-6">
              {highlights.map((h, i) =>
                <div key={i} className="flex gap-4 items-start">
                  <span className="w-3 h-3 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <p className="text-black font-semibold text-xl">
                      {h.title}
                    </p>
                    <p className="text-black/70 text-lg mt-2 leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export const ProcessSection = () => {
  return (
    <section className="pt-12">
      <div className="container m-auto">
        <div className="text-center">
          <Title title={"How We Work"} color={"text-primary"} />
          <Description
            description={
              "A simple, reliable process built for export operations."
            }
            color={"text-black"}
            classname={"pt-5 max-w-3xl m-auto"}
          />
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((p, i) =>
            <div key={i} className="py-10 px-5 bg-primary rounded-3xl">
              <div className="flex items-center justify-between">
                <p className="text-white font-bold text-2xl">
                  {p.step}
                </p>
                <span className="w-10 h-10 rounded-2xl bg-white/40 flex items-center justify-center">
                  <span className="w-3 h-3 rounded-full bg-white" />
                </span>
              </div>

              <p className="mt-6 text-white font-semibold text-2xl">
                {p.title}
              </p>
              <p className="text-white text-lg mt-3 leading-relaxed">
                {p.desc}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export const Journey = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container m-auto px-6">
        <div className="text-center mb-16">
          <Title title={"Our Journey"} color={"text-primary"} />
          <Description
            description={
              "From Bihar's ponds to global markets - our 10+ years evolution"
            }
            color={"text-black"}
            classname={"pt-5 max-w-2xl m-auto"}
          />
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
              <span className="text-white font-bold text-xl">15</span>
            </div>
            <h3 className="text-2xl text-black mb-2">Years Experience</h3>
            <p className="text-gray-600 text-base">Serving global markets</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-primary/10 border-4 border-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all duration-300">
              <span className="text-primary font-bold text-xl">🌾</span>
            </div>
            <h3 className="text-2xl text-black mb-2">Direct Sourcing</h3>
            <p className="text-gray-600 text-base">From Bihar farmers</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
              <span className="text-white font-bold text-xl">50+</span>
            </div>
            <h3 className="text-2xl text-black mb-2">Countries Served</h3>
            <p className="text-gray-600 text-base">Trusted worldwide</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
              <span className="text-white font-bold text-xl">100K+</span>
            </div>
            <h3 className="text-2xl text-black mb-2">Happy Clients</h3>
            <p className="text-gray-600 text-base">Quality guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export const OurMission = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-primary/10 via-white to-primary/5">
      <div className="container m-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
    
          <div className="lg:order-1 space-y-8">
            <div>
              <Title title={"Our Mission"} color={"text-primary"} />
              <Description
                description={
                  "Building a future-ready, tech-enabled agri-business that empowers Bihar farmers, ensures premium quality makhana, and connects global markets through sustainable practices and innovation."
                }
                color={"text-black"}
                classname={"pt-5 max-w-lg"}
              />
            </div>

            <div className="space-y-6 mt-12">
              <div className="flex items-start space-x-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary/20 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-black rounded-xl flex items-center justify-center mt-1 flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold text-lg">🌱</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-black mb-2">Farmer First</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Direct sourcing from 5000+ Bihar farmers with fair pricing & guaranteed buyback. Eliminating middlemen exploitation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary/20 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-black rounded-xl flex items-center justify-center mt-1 flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold text-lg">🌍</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-black mb-2">Global Export</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Exporting premium makhana to 50+ countries with APEDA & FSSAI certifications. Targeting $50M export revenue by 2030.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:order-2 text-center">
            <div className="relative mx-auto max-w-md">
              <div className="w-full h-96 bg-gradient-to-br from-primary/30 via-transparent to-black/20 rounded-3xl shadow-2xl mx-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent animate-pulse opacity-40 rounded-3xl"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary via-white/20 to-primary opacity-75 rounded-3xl blur-xl animate-spin-slow"></div>
              </div>
              
              <div className="absolute -inset-12 bg-white/40 backdrop-blur-xl rounded-[3rem] border border-white/50 shadow-3xl flex items-center justify-center p-12 hover:scale-105 transition-all duration-500 group">
                <div className="text-center max-w-md relative z-10">
                  <div className="w-28 h-28 bg-gradient-to-br from-primary via-black to-primary/80 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-all duration-300 border-4 border-white/30">
                    <span className="text-4xl">🚀</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-primary via-black to-primary/80 bg-clip-text text-transparent mb-6 drop-shadow-lg">
                    Vision 2030
                  </h3>
                  <div className="space-y-4">
                    <p className="text-xl font-bold text-gray-900 drop-shadow-md">
                      World's #1 Makhana Brand
                    </p>
                    <p className="text-lg text-black/90 font-semibold drop-shadow-md">
                      25% Global Market Share
                    </p>
                    <p className="text-lg text-black/90 font-semibold drop-shadow-md">
                      ₹5000 Cr Annual Revenue
                    </p>
                    <p className="text-sm text-primary/90 font-bold uppercase tracking-wider mt-4">
                      Bihar to the World
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div>
      <div className="">
        <SubBanner 
         title={'About Us - Global Makhana Leaders'}
         description={'Discover our journey in revolutionizing makhana trade worldwide with unmatched quality, innovation, and customer trust since 2015.'}
         btnname={'Contact Us'}
        />
        <AboutIntro />
        <ProcessSection />
        <Journey />
        <OurMission />
        <ReadytoTrade />
      </div>
    </div>
  );
};

export default AboutUs;
