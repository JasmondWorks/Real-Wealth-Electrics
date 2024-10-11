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
import ProductsList from "./components/ProductsList";
import ProductCategoriesList from "./components/ProductCategoriesList";
import ButtonLink from "./components/ButtonLink";
import BackgroundSlider from "./components/BackgroundSlider";
import CategoriesFeaturesSlider from "./components/CategoriesFeaturesSlider";
import HeroCarousel from "./components/HeroCarousel";

export default function Home() {
  return (
    <div>
      <section className="md:py-32">
        <div className="container-custom--sm">
          <div className="text-center lg:text-left max-w-xl lg:max-w-none mx-auto grid lg:grid-cols-2 gap-14 gap-y-20 items-center">
            {/* Hero copy */}
            <div>
              <h1 className="mb-4 leading-tight text-5xl font-extrabold text-neutral-900">
                Stay on Time, Every Time
              </h1>
              <p className="text-lg leading-8 text-neutral-700">
                Discover digital satellite clocks and versatile counters
                designed for precision, reliability and global synchronization
              </p>
              <div className="justify-center lg:justify-start flex gap-6 items-center mt-12">
                <Button
                  variant="primary"
                  text="Our Products"
                  linkDestination="#productsCategories"
                />
                <Button variant="secondary" text="Contact Us" />
              </div>
            </div>
            {/* Hero illustration */}
            <HeroCarousel />
          </div>
        </div>
      </section>
      <SectionLayout>
        <SectionHeader title="Product Categories" />
        <ProductCategoriesList />
      </SectionLayout>
      <section>
        <div className="container-custom">
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
        </div>
        <CategoriesFeaturesSlider />
      </section>
      <section>
        <div className="container-custom">
          <SectionHeader
            title="Product Use Cases"
            subtitle="Out timing solutions are very versatile, thus can be tailored for many use cases across various industries"
          />
        </div>
        <BackgroundSlider />
      </section>
    </div>
  );
}
