import Button from "./components/Button";
import ButtonLink from "./components/ButtonLink";
import HeroCarousel from "./components/ProductCatsCarousel";
import HeroSlider from "./components/HeroSlider";
import ProductCategoriesList from "./components/ProductCategoriesList";
import SectionHeader from "./components/SectionHeader";
import SectionLayout from "./components/SectionLayout";
import Link from "next/link";
import React from "react";
import {
  FaArrowDown,
  FaArrowRight,
  FaCheck,
  FaChevronDown,
} from "react-icons/fa6";

export default function ProblemSolution() {
  return (
    <SectionLayout className="bg-neutral-50">
      <SectionHeader title="How Precision Clocks Solve Common Problems" />

      <div className="space-y-6">
        {/* <p>
                Inconsistent timekeeping leads to delays, missed opportunities,
                and inefficiencies. For industries and government facilities,
                even seconds of misalignment can cause major disruptions.
              </p> */}
        <p className="leading-8">
          When your clocks are off, everything slows down—production, research,
          and systems can fall out of sync. Our GPS-driven clocks are built to
          give you the accuracy you need, every single moment. With precise
          timing, you stay ahead and get things done right. We believe that
          every second counts. For factories, labs, and businesses, keeping
          things moving without hiccups means you can focus on what matters.
          Processes don’t have to be derailed by small timing errors. Precision
          clocks keep everything in sync, minimizing costly disruptions.
        </p>
      </div>
      <div className="text-center mt-8">
        <ButtonLink text="Find out more" />
      </div>
    </SectionLayout>
  );
}
