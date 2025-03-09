import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { IoReturnUpBack } from "react-icons/io5";
import ButtonLink from "./ButtonLink";
import { FaArrowLeft } from "react-icons/fa6";
import Image from "next/image";
import Button from "@/app/components/Button";

const PageHeader = ({ title = "", subtitle = "", children }) => {
  const router = useRouter();

  return (
    <div className="px-10 py-16 pt-20">
      <section className="border bg-primaryLight text-center py-10 relative">
        <Image
          fill
          src="/assets/images/pcb-trace.png"
          alt="pcb trace"
          className="object-cover bg-blend-overlay opacity-[.02] pointer-events-none"
        />
        <div className="container-custom--sm">
          <div className="space-y-1">
            <h1 className="text-3xl leading-snug lg:text-4xl font-extrabold">
              {title}
            </h1>
            {/* <p className="font-bold opacity-80">{subtitle}</p> */}
            {children}
          </div>
          {/* <div className="mt-10 space-y-3">
            <div className="flex justify-center">
              <Button
                icon={<FaArrowLeft />}
                onClick={() => router.back()}
                text="Go back"
                className=""
              />
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default PageHeader;
