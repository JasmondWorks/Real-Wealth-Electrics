import SectionLayout from "@/app/components/SectionLayout";
import ContactForm from "../components/ContactForm";
import SectionHeader from "../components/SectionHeader";
import React from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";

export default function SectionCta() {
  return (
    <SectionLayout className="text-white sm:px-5 !bg-[#1f2331]">
      <div className="grid xl:grid-cols-2 gap-y-10 gap-x-20">
        <div className="text-white text-left flex flex-col gap-3 justify-center">
          <div className="space-y-3 flex flex-col">
            {/* <div className="bg-white rounded-full p-2 w-fit hidden xl:block">
                <FaArrowRight className="text-[#1f2331]" size={20} />
              </div> */}
            <SectionHeader
              title={
                <div className="text-white">Time is Critical — Act Now.</div>
              }
              subtitle="Discover how our precision clocks ensure accurate and efficient
              solutions."
              className="!text-white"
              isMarginBottomPresent={false}
            />
          </div>
          <div className="flex justify-center items-center mt-5">
            {/* <div className="bg-white rounded-full p-2 w-fit xl:hidden">
                <FaArrowDown className="text-[#1f2331]" size={20} />
              </div> */}
          </div>
        </div>
        <div className="max-w-[600px] mx-auto">
          <ContactForm />
        </div>
      </div>
    </SectionLayout>
  );
}
