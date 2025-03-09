import ButtonLink from "../components/ButtonLink";
import SectionHeader from "../components/SectionHeader";
import SectionLayout from "../components/SectionLayout";
import ProductCategoriesList from "../components/ProductCategoriesList";
import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function ProblemSolution() {
  return (
    <SectionLayout isContainerSmall className="bg-neutral-50">
      <SectionHeader
        title="How Precision Clocks Solve Common Problems"
        subtitle="Inconsistent timekeeping leads to delays, missed opportunities,
              and inefficiencies. For industries and government facilities, even
              seconds of misalignment can cause major disruptions."
      />
      <div>
        <div className="space-y-7">
          <div className="text-center">
            <p className="">
              {/* Inconsistent timekeeping leads to delays, missed opportunities,
              and inefficiencies. For industries and government facilities, even
              seconds of misalignment can cause major disruptions. */}
            </p>
            <div className="">
              <ProductCategoriesList />
            </div>

            <div className="flex flex-col gap-3 items-center mt-20">
              <p>
                GPS-synced clocks deliver precise timing through satellite
                synchronization, ensuring every process stays on track and runs
                without interruptions.
              </p>
              <div className="rounded-full border-primary border-2 aspect-square h-12 flex items-center justify-center text-sm">
                <FaCheck className="h-8 aspect-square" />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <ButtonLink variant="cta" text="All our products" />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
