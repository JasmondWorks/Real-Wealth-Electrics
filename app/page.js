import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Button from "./components/Button";
import Image from "next/image";
import SectionHeader from "./components/SectionHeader";
import FeatureCard from "./components/FeatureCard";
import { MdSatelliteAlt } from "react-icons/md";
import { IoIosSunny } from "react-icons/io";
import { TiEye } from "react-icons/ti";
import SectionLayout from "./components/SectionLayout";
import ProductCard from "./components/ProductCard";
import Badge from "./components/Badge";
import IconButton from "./components/IconButton";
import Tabs from "./components/Tabs";
import ButtonLink from "./components/ButtonLink";
import ProductsList from "./components/ProductsList";
import ProductCategoriesList from "./components/ProductCategoriesList";

export default function Home() {
  return (
    <div>
      <section className="md:py-32">
        <div className="container-custom--sm">
          <div className="text-center md:text-left max-w-xl md:max-w-none mx-auto grid md:grid-cols-2 gap-14 gap-y-20 items-center">
            {/* Hero copy */}
            <div>
              <h1 className="mb-4 leading-tight text-5xl font-extrabold text-neutral-900">
                Stay on Time, Every Time
              </h1>
              <p className="text-lg leading-8 text-neutral-700">
                Discover digital satellite clocks and versatile counters
                designed for precision, reliability and global synchronization
              </p>
              <div className="justify-center md:justify-start flex gap-6 items-center mt-12">
                <Button variant="primary" text="Our Products" />
                <Button variant="secondary" text="Contact Us" />
              </div>
            </div>
            {/* Hero illustration */}
            <div className="text-center">
              <div className="flex py-8 gap-4 justify-center items-center">
                <IconButton icon={<FaChevronLeft className="text-2xl" />} />
                <div className="space-y-3">
                  <Image
                    src="/assets/images/dsc-162.3.png"
                    width={2000}
                    height={2000}
                    alt="product category"
                    className="object-contain w-full max-w-80 mx-auto"
                  />
                  <p className="font-bold text-lg">Digital Satellite Clock</p>
                </div>
                <IconButton icon={<FaChevronRight className="text-2xl" />} />
              </div>
              <div className="py-4 border-t border-neutral-200 flex justify-center items-center gap-12">
                <ButtonLink size="base" text="Go to Product" />
                <ButtonLink
                  className="text-neutral-500"
                  size="base"
                  text="Go to Category"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionLayout>
        <SectionHeader title="Product Categories" />
        <ProductCategoriesList />
      </SectionLayout>
      <SectionLayout>
        <SectionHeader title="Features" />
        <div className="grid md:grid-cols-3 gap-5">
          <FeatureCard
            icon={<MdSatelliteAlt />}
            title="Auto or self-setting"
            body="These clocks are set unattended and run on the signal of GPS satellites in space"
          />
          <FeatureCard
            icon={<IoIosSunny />}
            title="Daylight Savings Time"
            body="Time automatically adjusts in regions that experience daylight savings"
          />
          <FeatureCard
            icon={<TiEye />}
            title="Self-lit"
            body="Being LED clocks, they are readable day and night without extra lighting"
          />
        </div>
        <div className="container-custom--sm">
          <h3 className="mt-36 mb-14 text-center font-bold text-2xl">
            According to category
          </h3>
          <div>
            <Tabs
              buttonsTextArray={[
                "Digital Satellite Clocks",
                "World Time Clocks",
                "Digital Timer Counters",
              ]}
              secondaryText="All Categories"
            />
          </div>
          <div className="mt-8">
            <h4 className="mb-16 p-4 border border-primary bg-primaryLight font-bold text-lg">
              Digital Satellite Clocks
            </h4>
            <div className="grid gap-12 lg:grid-cols-6">
              <ProductCard
                isCategory={true}
                className="lg:col-span-2 self-start"
                body={
                  <>
                    <Image
                      src="/assets/images/dsc-162.3.png"
                      width={2000}
                      height={2000}
                      alt="product category"
                      className="object-contain w-full max-w-40 mx-auto"
                    />
                    <Badge text="DSC168" />
                  </>
                }
              />
              <div className="lg:col-span-4 space-y-8">
                <div className="space-y-4">
                  <p className="font-bold leading-4">Single-face</p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                    laborum nobis libero dolores soluta aspernatur illum,
                    perferendis, sequi aliquid repudiandae alias earum? Eius,
                    eos facere.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="font-bold leading-4">Double-face</p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                    laborum nobis libero dolores soluta aspernatur illum,
                    perferendis, sequi aliquid repudiandae alias earum? Eius,
                    eos facere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
      <section>
        <div className="container-custom">
          <SectionHeader
            title="Product Use Cases"
            subtitle="Out timing solutions are very versatile, thus can be tailored for many use cases across various industries"
          />
        </div>
        <div className="min-h-96 bg-cover bg-[url('/assets/images/transportation.jpg')]">
          <Tabs
            buttonsTextArray={[
              "Transportation",
              "Education",
              "Banking/Commercial",
            ]}
            secondaryText="All Use Cases"
            className="text-white"
          />
        </div>
      </section>
    </div>
  );
}
