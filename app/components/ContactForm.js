"use client";

import { useState } from "react";
import Button from "../components/Button";
import SelectBox from "../components/SelectBox";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const industryTypes = ["Hos"];

export default function ContactForm() {
  const [industryType, setIndustryType] = useState("");

  return (
    <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg text-neutral-900 border-[2px] border-neutral-100">
      <div className="text-center">
        <h4>Request a Demo Today</h4>
        <p className="text-neutral-500 mt-2 mb-8 leading-normal">
          Get a free consultation on how GPS-synced clocks can improve your
          operations.
        </p>
      </div>

      <form className="flex flex-col gap-5">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(165px,1fr))] gap-5">
          <div>
            <label htmlFor="firstname" className="text-sm">
              First Name
            </label>
            <input
              className="w-full border border-neutral-200 h-10 rounded-md px-3 text-sm"
              type="text"
              id="firstname"
            />
          </div>
          <div>
            <label htmlFor="lastname" className="text-sm">
              Last Name
            </label>
            <input
              className="w-full border border-neutral-200 h-10 rounded-md px-3"
              type="text"
              id="lastname"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            className="w-full border border-neutral-200 h-10 rounded-md px-3"
            type="text"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm">
            Phone Number
          </label>
          <input
            className="w-full border border-neutral-200 h-10 rounded-md px-3"
            type="text"
            id="phone"
          />
        </div>
        {/* <div>
          <label htmlFor="industryType" className="text-sm">
            Industry Type
          </label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select an industry sector" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div> */}

        <Button
          variant="primary"
          size="sm"
          className="col-span-2 mt-6"
          text="Submit"
        />
      </form>
      <p className="text-center text-neutral-500 mt-4 leading-tight">
        {/* No obligation - just insight into how our precision clocks can improve
        your operations. */}
        A team member will contact you soon.
      </p>
    </div>
  );
}
