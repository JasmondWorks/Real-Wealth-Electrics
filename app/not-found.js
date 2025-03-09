"use client";

import Button from "@/app/components/Button";
import SectionLayout from "@/app/components/SectionLayout";

function NotFound() {
  function goBack() {
    window.history.back();
  }
  return (
    <SectionLayout>
      <div className="flex flex-col gap-0 items-center justify-center h-[60vh]">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Button className="!mt-8" text="Go back" onClick={goBack} />
      </div>
    </SectionLayout>
  );
}

export default NotFound;
