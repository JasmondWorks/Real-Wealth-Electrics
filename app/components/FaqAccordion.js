import { ShadAccordion } from "../components/ShadAccordion";

const initialItems = [
  {
    id: 1,
    title: "How does GPS synchronization work?",
    content:
      "The clock connects to GPS satellites in space to get exact time signals. This keeps it accurate every second, without any manual adjustments.",
  },
  {
    id: 2,
    title: "Can the clock handle power outages?",
    content:
      "Yes, the clock has a backup battery that kicks in during outages, so it keeps working. Once the power is back, the battery gets recharged.",
  },
  {
    id: 3,
    title: "Is it compatible with my current systems?",
    content:
      "Don’t worry—it works with most setups and protocols, so adding it to your system is simple.",
  },
  {
    id: 4,
    title: "What is the lifespan of the clock?",
    content:
      "You can count on this clock for at least 10 years. It’s made to handle daily use and tough conditions.",
  },
];

export default function FaqAccordion() {
  return <ShadAccordion items={initialItems} />;
}
