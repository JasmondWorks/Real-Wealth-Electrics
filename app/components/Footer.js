import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 text-sm">
      <div className="py-16 container-custom grid gap-20 lg:grid-cols-8">
        <div className="border-b border-neutral-300 lg:border-b-0 pb-8 col-span-3">
          <h2
            className="font-bold mb-8 space-x-2 text-base lg:border-b lg:border-neutral-300 pb-2
"
          >
            <span className=" font-extrabold">RWE</span>
            <span>Real-Wealth Electrics</span>
          </h2>
          <div className="space-y-4 leading-loose">
            <p>
              RWE was established to engage in the business of the manufacture
              of electrical and electronic products for the world market.
            </p>
            <p>
              It is our tradition to seek to exceed customers’ expectations and
              produce products that can compete favorably with any product in
              their category from anywhere in the world in quality and price.
            </p>
          </div>
        </div>
        <div className="col-span-3 lg:border-b-0 border-b border-neutral-300 pb-8">
          <h2 className="text-base font-bold mb-8 lg:border-b lg:border-neutral-300 pb-2 space-x-6">
            Quick Links
          </h2>
          <div className="flex items-start gap-12 lg:gap-8 lg:justify-between">
            <div>
              <h3 className="font-bold mb-5">Categories</h3>
              <ul className="list-none space-y-3">
                <li>
                  <Link href="#" className="flex gap-1 items-center">
                    <FaChevronRight className="text-sm" />
                    <span>Digital Satellite Clocks</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex gap-1 items-center">
                    <FaChevronRight className="text-sm" />
                    <span>World Time Clocks</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex gap-1 items-center">
                    <FaChevronRight className="text-sm" />
                    <span>Full Calendar Clocks</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex gap-1 items-center">
                    <FaChevronRight className="text-sm" />
                    <span>Digital Timer Counters</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-5">Use Cases</h3>
              <ul className="list-none space-y-3">
                <li>
                  <Link href="#" className="flex gap-1 items-center">
                    <FaChevronRight className="text-sm" />
                    <span>Education</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex gap-1 items-center">
                    <FaChevronRight className="text-sm" />
                    <span>Transportation</span>{" "}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex gap-1 items-center">
                    <FaChevronRight className="text-sm" />
                    <span>Broadcast and media</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <h2 className="text-base font-bold mb-8 lg:border-b lg:border-neutral-300 pb-2 space-x-6">
            Contact
          </h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="font-bold">Address:</p>
              <p>#1, Church Street, Mosan Ipaja Lagos 100275, Nigeria.</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold">Email:</p>
              <p>info@realwealthelectrics.com</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold">Phone numbers:</p>
              <p>08032134613, 08056007204</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-6 border-t border-neutral-300">Copyright &copy; Real-Wealth Electrics 2024</p>
    </footer>
  );
};

export default Footer;
