"use client";

import React, { useState } from "react";
import Tabs from "./Tabs";
import ButtonLink from "./ButtonLink";

const useCases = [
  {
    id: 1,
    title: "Education & Training",
    image: 'education.jpg',
    shortSummary:
      "Accurate time synchronization ensures smooth coordination across educational facilities, improving learning outcomes and enhancing campus-wide operations.",
    details: {
      introduction:
        "Time management plays an integral role in educational environments, where punctuality, precision, and coordination are key. Schools, universities, and training institutions can significantly enhance their operations by employing precise and synchronized time tools that ensure classes, labs, and administrative activities run on schedule.",
      content: [
        {
          heading: "Ensuring Punctuality Across Campuses",
          paragraphs: [
            "Punctuality is the cornerstone of effective learning, ensuring that every minute of instruction counts. Institutions that rely on synchronized time across their campuses can minimize interruptions, improve classroom coordination, and reduce idle time between classes.",
            "With precise time tools, administrators can manage daily schedules seamlessly, ensuring that students and teachers always know when and where they need to be. This leads to a smoother, less stressful educational environment, where time is optimized for learning rather than lost to inefficiencies.",
            "For parents and students alike, punctuality signals professionalism. A school or university known for its precise scheduling creates a positive reputation, which in turn attracts more students and enhances the institution’s standing within the academic community. Accurate time management tools make it easier to deliver on this promise of reliability.",
          ],
        },
        {
          heading: "Enhancing Lab Experiment Accuracy",
          paragraphs: [
            "In the world of scientific education, experiments are a critical part of the learning process, and timing is everything. Whether it’s measuring a chemical reaction or monitoring the effects of controlled conditions, precision is key. By integrating timers and alerts into lab environments, educators can ensure that experiments are conducted accurately and with optimal timing.",
            "These tools enable students to focus on learning rather than manually tracking time, improving engagement and providing a more interactive experience. The outcome? Students grasp concepts more effectively, leading to better academic performance and greater student satisfaction.",
            "With automated time management, schools can support large-scale experiments with multiple groups, ensuring each experiment is properly timed without confusion. This allows educators to maximize lab usage and improve the learning experience for all students, ultimately contributing to a more effective and enriching academic experience.",
          ],
        },
        {
          heading: "Streamlined Management of Academic Calendars",
          paragraphs: [
            "Managing academic schedules, from class times to exam dates, can be a logistical challenge, especially in large institutions. Synchronized time and calendar displays help educators, students, and staff stay on track, reducing missed deadlines and ensuring that everyone is aware of important events.",
            "With highly visible and accessible time and calendar tools, institutions can provide clear communication regarding exam periods, registration deadlines, and school events, which translates into less confusion and a more organized campus life.",
            "In addition to improving internal operations, providing accurate time and calendar information helps students manage their academic lives more effectively. Clear, precise tools reduce anxiety about deadlines, leading to better student performance and overall academic success.",
          ],
        },
      ],
      conclusion:
        "By implementing synchronized time solutions, educational institutions can improve punctuality, enhance lab performance, and better manage academic calendars, ultimately leading to a more efficient and organized learning environment.",
    },
  },
  {
    id: 2,
    title: "Media & Broadcast Production",
    image: 'broadcast.jpg',
    shortSummary:
      "Time synchronization tools enable media teams to produce high-quality content with minimal errors, ensuring that broadcasts are always on schedule and audiences remain engaged.",
    details: {
      introduction:
        "In media production, time is everything. Whether it’s a live broadcast, an on-air segment, or a pre-recorded show, timing precision ensures smooth transitions between segments, keeps production teams on track, and maintains the flow of content. Using advanced time management tools allows producers to coordinate across teams, reduce delays, and improve overall production quality.",
      content: [
        {
          heading: "Global Collaboration in Production",
          paragraphs: [
            "In the media industry, production often involves multiple teams working across different time zones, especially when coordinating international broadcasts. Time synchronization allows all members of the production team to stay on the same schedule, reducing the risk of confusion or miscommunication. Whether it’s a producer in New York collaborating with a team in London or an editor in Tokyo finalizing a segment, precise timing keeps everything in sync.",
            "When each team knows exactly when content will be broadcast, they can better prepare their segments and coordinate their roles, leading to a smoother and more polished production. This precision enhances communication, minimizes errors, and ensures a consistent, professional end product for viewers.",
            "By reducing delays and improving coordination, time tools also help media companies deliver content on schedule, avoid overruns, and reduce costs. With tighter control over production timing, broadcasters can minimize wasted airtime and optimize their resources, boosting profitability while maintaining a high standard of quality.",
          ],
        },
        {
          heading: "Managing Live Broadcasts and Timing Segments",
          paragraphs: [
            "Live broadcasts demand split-second accuracy. From transitioning between segments to integrating live feeds, every second counts. Time synchronization ensures that programs remain on track, whether you’re cutting to commercial breaks or switching to on-location reporters. The result? A seamless broadcast that keeps viewers engaged and minimizes the risk of technical errors.",
            "By having precise timing tools integrated into control rooms, production teams can confidently manage complex broadcasts, allowing for smooth transitions between program segments, ads, and live events. This reduces viewer drop-off and enhances overall audience retention.",
            "In a competitive media landscape, high production quality is what sets one broadcaster apart from another. With effective time management, broadcasters can elevate the viewer experience by delivering consistent, professional-quality content, every time. Advertisers and sponsors, too, benefit from such precision, ensuring that their ads are delivered in the right slots without overruns or timing issues.",
          ],
        },
        {
          heading: "Reducing Downtime and Keeping Viewers Engaged",
          paragraphs: [
            "Downtime during live broadcasts can quickly lead to loss of audience. By employing advanced time management tools, broadcasters can significantly reduce downtime and ensure that transitions between content are smooth and error-free. With every second accounted for, producers can minimize interruptions, keeping viewers engaged and satisfied.",
            "For media companies, keeping viewers engaged directly impacts revenue. The more seamless the broadcast, the more likely viewers are to stay tuned in, which boosts ratings and, in turn, attracts more advertisers. It’s a virtuous cycle that starts with precise time management.",
            "By preventing unnecessary delays, media companies can not only maintain high audience engagement but also build trust with their viewers. Audiences come to expect reliability and professionalism from their favorite networks, and those expectations are met when time tools are properly integrated into the production process.",
          ],
        },
      ],
      conclusion:
        "In the competitive world of media production, time synchronization tools are essential for maintaining smooth operations, reducing errors, and keeping audiences engaged. By optimizing global collaboration and ensuring the seamless flow of content, broadcasters can deliver high-quality, timely productions that resonate with viewers.",
    },
  },
  {
    id: 3,
    title: "Finance, Accounting & E-Commerce",
    image: 'banking.jpg',
    shortSummary:
      "Accurate timing is critical in finance and e-commerce for maintaining transaction integrity, optimizing payment schedules, and staying compliant with regulations.",
    details: {
      introduction:
        "In finance, accounting, and e-commerce, timing is crucial for transaction accuracy, compliance, and operational efficiency. From recording financial trades to processing payments and managing tax deadlines, businesses rely on precise timing tools to ensure that operations run smoothly and that all transactions are properly documented.",
      content: [
        {
          heading: "Accurate Timing for Financial Transactions",
          paragraphs: [
            "In the world of finance, where milliseconds can determine profit or loss, accurate timing is vital. For banks, trading firms, and financial institutions, having synchronized time ensures that transactions are recorded in the correct sequence, reducing discrepancies and preventing costly errors.",
            "With global financial markets operating in different time zones, synchronized time tools enable firms to process trades and transactions with confidence, knowing that every action is timestamped with pinpoint accuracy. This level of precision helps businesses stay compliant with international financial regulations, reduce errors, and maintain investor confidence.",
            "For e-commerce businesses, precise timing also plays a key role in managing order processing and payment schedules. Accurate timekeeping ensures that payments are processed promptly, boosting customer satisfaction and improving overall cash flow.",
          ],
        },
        {
          heading: "Maintaining Compliance with Tax and Regulatory Deadlines",
          paragraphs: [
            "For businesses operating in finance and e-commerce, missing tax deadlines or failing to comply with regulatory requirements can lead to hefty fines and legal complications. Time and calendar tools provide businesses with the ability to track upcoming deadlines, ensuring they meet critical financial obligations on time.",
            "By integrating precise time management tools into their operations, companies can automate reminders for filing taxes, submitting financial reports, and processing regulatory requirements, reducing the risk of penalties and ensuring smooth compliance. This not only improves operational efficiency but also fosters trust with stakeholders, including regulators, investors, and customers.",
            "Accurate timing also enhances audit preparedness by ensuring that all financial records are properly timestamped and compliant with legal standards. With well-documented and timely records, businesses can easily demonstrate compliance, reducing the burden of audits and improving their overall operational transparency.",
          ],
        },
        {
          heading: "Enhancing Customer Experience in E-Commerce",
          paragraphs: [
            "In the fast-paced world of e-commerce, customers expect immediate responses, fast delivery, and prompt updates on their orders. Precise timing tools enable businesses to meet these expectations by ensuring that orders are processed in real-time and deliveries are tracked with accuracy.",
            "For customers, knowing exactly when their payment was processed or when their package is expected to arrive provides peace of mind. Businesses that can deliver this kind of transparency stand out in a crowded marketplace, earning trust and loyalty from their customers.",
            "Additionally, accurate time management tools help businesses track shipping deadlines and manage global supply chains more efficiently, reducing the risk of delays and improving customer satisfaction. By enhancing operational precision, e-commerce companies can boost sales, reduce return rates, and build long-term customer loyalty.",
          ],
        },
      ],
      conclusion:
        "In the finance, accounting, and e-commerce industries, precise timing tools ensure operational efficiency, regulatory compliance, and customer satisfaction. By implementing accurate time management solutions, businesses can improve their financial processes, enhance the customer experience, and minimize the risk of costly errors or missed deadlines.",
    },
  },
];
const BackgroundSlider = () => {
  const [selectedUseCase, setSelectedUseCase] = useState(0);
  function handleSelectUseCase(useCase) {
    const selectedUseCase = useCases.find((c) => c.title === useCase);
    setSelectedUseCase(useCases.indexOf(selectedUseCase));
  }
  
  return (
    <div
      style={{
        backgroundImage: `url(
          /assets/images/${useCases[selectedUseCase].image}
        )`,
        backgroundPosition: 'center center'
      }}
      className={`aspect-square lg:aspect-video max-h-[600px] w-full bg-cover bg-[url('/assets/images/${useCases[selectedUseCase].image}')] bg-blend-overlay bg-black bg-opacity-65 flex flex-col`}
    >
      <Tabs
        buttonsTextArray={useCases.map(usecase => usecase.title)}
        textColor="light"
        // secondaryText="All Use Cases"
        isVerticalPaddingBig={true}
        onSelectTab={handleSelectUseCase}
        isContained={true}
      />
      <div className="container-custom flex items-center flex-1">
        <div className="bg-black max-w-2xl bg-opacity-50 mx-auto w-fit px-10 py-8 text-white">
          <h3 className="text-xl text-yellow-400 font-bold mb-5">
            {useCases[selectedUseCase].title}
          </h3>
          <p>
            {useCases[selectedUseCase].shortSummary}
            </p>
          <ButtonLink className="text-yellow-400 mt-12" text="View more" isLink linkDestination={`/usecases/${useCases[selectedUseCase].title}__${selectedUseCase + 1}`} />
        </div>
      </div>
    </div>
  );
};

export default BackgroundSlider;
