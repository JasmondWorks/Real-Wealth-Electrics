import Button from "../components/Button";
import React from "react";

export default function HeroSlider() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        // backgroundImage: "url(/assets/images/pcb-ai-generated.webp)",
      }}
      className="hero-bg relative"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/assets/images/pcb-ai-generated.webp)",
        }}
      ></div>
      {/* Hero overlay */}
      <div className="absolute inset-0 hero-overlay"></div>

      {/* Hero section slider */}
      <div className="py-10 w-full lg:pb-0 container-custom relative">
        <div className="lg:max-w-3xl space-y-12 relative z-[5]">
          {/* Hero copy */}
          <div className="lg:text-left space-y-6">
            <h1 className="font-medium">
              <span className="text-primary">Precision Timing Solutions</span>{" "}
              for Industrial, Commercial and Scientific Applications
            </h1>
            <p className="text-lg !leading-8 text-neutral-200">
              Discover dependable high-performance time management solutions for
              consistent accuracy and high precision process control. <br />
              {/* Fully automated GPS-driven Digital Clocks engineered for
              consistent accuracy for process control and critical
              infrastructural requirement for the organized society
              applications. */}
            </p>
          </div>
          <div className="items-start flex-col flex gap-3 justify-between">
            <Button
              href="#"
              variant="secondary"
              className="text-white"
              text="Find out more"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
