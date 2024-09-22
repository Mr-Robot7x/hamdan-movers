import React from "react";

type Testimonial = {
  name: string;
  location: string;
  date: string;
  testimonial: string;
};

const TestimonialCard: React.FC<Testimonial> = ({
  name,
  location,
  date,
  testimonial,
}) => {
  return (
    <div className="bg-white/80 shadow-md shadow-neutral-200 rounded-xl overflow-hidden my-6">
      <div className="md:flex md:flex-col">
        <div className="md:p-8 py-4 px-2">
          <div className="uppercase tracking-wide text-sm font-poppins">
            {location}
          </div>
          <h3 className="block mt-1 text-lg leading-tight font-poppins font-medium text-black">
            {name}
          </h3>
          <p className="mt-2 gr font-light text-sm">{testimonial}</p>
          <p className="mt-4 text-sm text-[#FF5F00]">Moved on: {date}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
