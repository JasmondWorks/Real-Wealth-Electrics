import { FaBullseye, FaHammer } from "react-icons/fa6";
import Button from "./components/Button";
import SectionHeader from "./components/SectionHeader";
import FeatureCard from "./components/FeatureCard";
import { MdSatelliteAlt } from "react-icons/md";

import SectionLayout from "./components/SectionLayout";
import BackgroundSlider from "./components/BackgroundSlider";
import ProductCatsCarousel from "./components/ProductCatsCarousel";
import HeroSlider from "./components/HeroSlider";
import ProblemSolution from "./components/ProblemSolution";
import Testimonials from "./components/Testimonials";
import FaqAccordion from "./components/FaqAccordion";
import ContactForm from "./components/ContactForm";
import SectionCta from "./components/SectionCta";
import ClientLogosSlider from "./components/ClientLogosSlider";
import ImagePlaceholder from "./components/ImagePlaceholder";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ProblemSolution />
      <section className="">
        <div className="container-custom">
          <SectionHeader title="Features" />
          <div className="grid md:grid-cols-3 gap-10 gap-y-14">
            <FeatureCard
              icon={<FaBullseye />}
              title="Military-Grade Time Sync"
              body={
                <>
                  <p className="">Always precise to the second.</p>
                  {/* <p>Prevents costly delays in critical tasks.</p> */}
                </>
              }
            />
            <FeatureCard
              icon={<MdSatelliteAlt />}
              title="Automatic Time Adjustment"
              body={
                <>
                  <p className="">Self-updates via satellite GPS.</p>
                  {/* <p className="">No manual setup, always accurate. </p> */}
                </>
              }
            />
            <FeatureCard
              icon={<FaHammer />}
              title="Durable, Resilient Build"
              body={
                <>
                  <p className="">
                    Built to endure tough industrial conditions.
                  </p>
                  {/* <p>Reduces the need for repairs or replacements.</p> */}
                </>
              }
            />
          </div>
        </div>
        {/* <CategoriesFeaturesSlider /> */}
      </section>
      <section className="">
        <div className="container-custom">
          <SectionHeader
            title="Explore applications for your industry"
            subtitle="Our timing solutions are very versatile, thus can be tailored for many applications across various industries"
            className=""
          />
        </div>
        <div className="container-custom !px-3" id="industries">
          <BackgroundSlider />
        </div>
      </section>

      <section>
        <div className="space-y-10 container-custom--sm">
          <SectionHeader
            title="Your new favourite task manager"
            subtitle="Give your teams tools they can trust. Accurate timing means better results — every second makes a difference."
          />
          {/* <ImagePlaceholder /> */}
        </div>
        <div className="!px-3 container-custom--sm">
          <ProductCatsCarousel />
        </div>
      </section>

      <SectionLayout className="">
        <SectionHeader title="What our customers say" />
        <Testimonials />
      </SectionLayout>

      <SectionLayout isContainerSmall>
        <SectionHeader title="FAQs" />
        <FaqAccordion />
      </SectionLayout>
      <SectionCta />
      <section>
        <div className="container-custom--sm">
          <SectionHeader
            title="Don’t Leave Accuracy to Chance."
            subtitle="Join leading industries and government facilities in Nigeria using GPS-synced clocks for precise, efficient operations."
          />
        </div>
        {/* <ClientLogosSlider /> */}
        <div className="flex gap-20 justify-between px-10 overflow-x-auto text-sm">
          <div className="h-16 lg:h-20 aspect-square bg-neutral-200 rounded-full grid place-items-center text-neutral-500">
            Logo
          </div>
          <div className="h-16 lg:h-20 aspect-square bg-neutral-200 rounded-full grid place-items-center text-">
            Logo
          </div>
          <div className="h-16 lg:h-20 aspect-square bg-neutral-200 rounded-full grid place-items-center text-">
            Logo
          </div>
          <div className="h-16 lg:h-20 aspect-square bg-neutral-200 rounded-full grid place-items-center text-">
            Logo
          </div>
          <div className="h-16 lg:h-20 aspect-square bg-neutral-200 rounded-full grid place-items-center text-">
            Logo
          </div>
          <div className="h-16 lg:h-20 aspect-square bg-neutral-200 rounded-full grid place-items-center text-">
            Logo
          </div>
        </div>
        <div className="container-custom--sm">
          <div className="flex justify-center mt-20">
            <Button variant="primary" text="Get Started Today" />
          </div>
        </div>
      </section>
    </>
  );
}
