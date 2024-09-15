import React from "react";

function ServiceDetails({
  title,
  description,
  boxs,
}: {
  title: string;
  description: string;
  boxs: { heading: string; desc: string }[];
}) {
  return (
    <div className="w-full md:w-11/12 mt-14">
      <h2 className="text-center mb-2">{title}</h2>
      <p className="text-center">{description}</p>
      <div className="mt-10 grid md:grid-cols-3 grid-cols-1 gap-7">
        {boxs.map((box, i) => (
          <div
            key={i}
            className="min-h-32 bg-white shadow-lg shadow-neutral-100 border border-neutral-200 py-4 px-3 rounded-2xl"
          >
            <h3 className="font-[poppins] font-medium md:text-[21px] md:leading-6 text-center mb-1">
              {box.heading}
            </h3>
            <div className="w-full h-px bg-neutral-100 px-10"></div>
            <p className="text-[15.2px] text-center mt-2">{box.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceDetails;
