"use client";

import SelectBox from "@/app/components/SelectBox";
import Button from "../components/Button";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useState } from "react";
import { PlusSquare } from "lucide-react";
import { FaEye, FaEyeSlash, FaGear } from "react-icons/fa6";

const sizes = [
  "2.3-inch Character Size (Small Spaces)",
  "8-inch Character Size (Large Spaces)",
];

const filters = {
  size: [
    "2.3-inch Character Size (Small Spaces)",
    "8-inch Character Size (Large Spaces)",
  ],
  quantity: [
    {
      value: 1,
      discount: null,
    },
    {
      value: 3,
      discount: 10,
    },
    {
      value: "5+",
      discount: 15,
    },
  ],
};

function ProductSelector({ onSelectVariant, variants, selectedVariant }) {
  const [isShowing, setIsShowing] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const ref = useOutsideClick(() => setIsShowing(false), false);

  const decreaseQuantity = () => {
    if (quantity === 1) return;
    setQuantity((qty) => qty - 1);
  };
  const increaseQuantity = () => setQuantity((qty) => qty + 1);

  return (
    <div className="sticky top-[50px] lg:top-[57px] xl:top-[60px] z-50">
      <div className="py-3 relative z-[1000] border-b border-neutral-100 bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-3 gap-5 md:justify-between items-center">
            <div className="md:flex gap-3 items-center">
              <div className="flex gap-4 items-center">
                <Button
                  onClick={decreaseQuantity}
                  variant="primary"
                  text="-"
                  disabled={quantity === 1}
                />
                <span className="font-bold">{quantity}</span>
                <Button onClick={increaseQuantity} variant="primary" text="+" />
              </div>
            </div>
            <div className="flex items-center gap-3 gap-y-0">
              <span className="p-1 leading-none">Features:</span>
              <div className="flex border border-primary p-1 rounded-md divide-x">
                <div className="px-3">
                  <SelectBox
                    selectedOption={selectedVariant}
                    onSelect={onSelectVariant}
                    options={variants}
                    placeholder="Choose a variant"
                  />
                </div>
                <div className="px-3">
                  <SelectBox
                    selectedOption={selectedVariant}
                    onSelect={onSelectVariant}
                    options={variants}
                    placeholder="Choose a variant"
                  />
                </div>
                <div className="px-3">
                  <SelectBox
                    selectedOption={selectedVariant}
                    onSelect={onSelectVariant}
                    options={variants}
                    placeholder="Choose a variant"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-3 lg:justify-end col-[1/-1] lg:col-span-1">
              <Button variant="secondary" size="sm">
                Buy now
              </Button>
              <Button
                variant="primary"
                size="sm"
                className="w-full md:w-fit flex items-center justify-center gap-2"
              >
                <PlusSquare />
                <span>Add to cart</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        ref={ref}
        className={`shadow-lg flex flex-col text-sm bg-white fixed top-0 bottom-0 min-w-64 pt-24 z-[100] transition-transform duration-300 ease-in-out ${
          isShowing ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        <div className="h-full divide-y divide-neutral-200 space-y-6">
          {Object.entries(filters).map(([key, value]) => (
            <div key={key} className="px-5 py-3">
              <p className="capitalize font-semibold mb-3">{key}:</p>
              {key === "size" && (
                <select className="border border-neutral-300 p-2 rounded-md">
                  {value.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              )}
              {key === "quantity" && (
                <select className="border border-neutral-300 p-2 rounded-md">
                  {value.map((qtyObj) => (
                    <option key={qtyObj.value} value={qtyObj.value}>
                      {qtyObj.value}
                      {qtyObj.discount && ` (${qtyObj.discount}% off)`}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))}
        </div>
        <div className="p-5">
          <Button text="Apply" variant="primary" onClick={handleApplyFilters} />
        </div>
      </div> */}
    </div>
  );
}

export default ProductSelector;
