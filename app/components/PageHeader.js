import React from "react";

const PageHeader = ({ title = "", subtitle = "", children }) => {
  return (
    <div className="p-10">
        <section className="border border-primary bg-primaryLight text-center space-y-6 py-20">
          <div className="space-y-2">
            <h1 className="text-5xl font-extrabold">{title}</h1>
            <p className="font-bold text-lg">{subtitle}</p>
          </div>
          <div className="flex gap-x-3 gap-y-2 justify-center items-center flex-wrap px-4">{children}</div>
        </section>
    </div>
  );
};

export default PageHeader;
