import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-secondary text-neutral-300 text-sm" id="footer">
      <div className="py-16 container-custom grid gap-20 lg:grid-cols-8">
        <div className="border-b border-white border-opacity-5 lg:border-b-0 pb-8 col-span-3">
          <h2
            className="font-bold mb-10 space-x-2 text-lg pb-2
"
          >
            <span className="font-extrabold">RWE</span>
            <span>Real-Wealth Electrics</span>
          </h2>
          <div className="space-y-4">
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
        <div className="col-span-3 lg:border-b-0 border-b border-white border-opacity-5 pb-8">
          <h2 className="text-lg font-bold mb-10 pb-2 space-x-6">
            Quick Links
          </h2>
          <div className="flex items-start gap-16 sm:gap-24 lg:gap-10 lg:justify-between">
            <div>
              <h3 className="font-bold mb-5 text-sm">Categories</h3>
              <ul className="list-none space-y-3">
                <li>
                  <Link href="#" className="flex gap-1 items-center">
                    <FaChevronRight />
                    <span>Digital Satellite Clocks</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex gap-1 items-center">
                    <FaChevronRight />
                    <span>World Time Clocks</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex gap-1 items-center">
                    <FaChevronRight />
                    <span>Full Calendar Clocks</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex gap-1 items-center">
                    <FaChevronRight />
                    <span>Digital Timer Counters</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-5 text-sm">Use Cases</h3>
              <ul className="list-none space-y-3">
                <li>
                  <Link href="#" className="flex gap-1 items-center">
                    <FaChevronRight />
                    <span>Education</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex gap-1 items-center">
                    <FaChevronRight />
                    <span>Transportation</span>{" "}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex gap-1 items-center">
                    <FaChevronRight />
                    <span>Broadcast and media</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <h2 className="text-lg font-bold mb-10 pb-2 space-x-6">Contact</h2>
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
      <p className="text-center py-4 border-t border-white border-opacity-5">
        Copyright &copy; Real-Wealth Electrics 2024
      </p>
    </footer>
  );
};

export default Footer;
