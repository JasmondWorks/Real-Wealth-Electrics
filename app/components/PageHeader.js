import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { IoReturnUpBack } from "react-icons/io5";
import ButtonLink from "./ButtonLink";
import { FaArrowLeft } from "react-icons/fa6";

const PageHeader = ({ title = "", subtitle = "", children }) => {
  const router = useRouter();

  return (
    <div className="p-10">
      <section
        style={{
          backgroundImage: 'url("/assets/images/pcb-trace.png")',
          backgroundSize: "contain",
          backgroundBlendMode: "overlay",
        }}
        className="border border-primary bg-primaryLight text-center py-20"
      >
        <div className="container-custom--sm space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl font-extrabold">{title}</h1>
            <p className="font-bold text-lg">{subtitle}</p>
          </div>
          <div className="flex gap-x-3 gap-y-2 justify-center items-center flex-wrap px-4">
            {children}
          </div>
          <ButtonLink
            icon={<FaArrowLeft />}
            isLink={false}
            onClick={() => router.back()}
            text="Go back"
            className="px-3 py-2 leading-4 border border-neutral-500 font-semibold flex-row-reverse"
          />
        </div>
      </section>
    </div>
  );
};

export default PageHeader;
