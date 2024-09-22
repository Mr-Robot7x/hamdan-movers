"use client";
import React, { useEffect, useState } from "react";

import TestimonialCard from "./testimonialCard";
import { testimonials } from "@/app/[locale]/data";
const AboutTestimonal: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsToShow = 3;

  // Calculating number of visible slides based on screen size
  const slidesToShow =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : cardsToShow;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - slidesToShow : prevIndex - 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // 4 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentIndex, slidesToShow]);
  return (
    <div className="w-full max-w-6xl mx-auto  md:p-4 p-0 relative">
      <div className="overflow-hidden w-full">
        <div
          className={`flex transition-transform duration-500 py-3 md:px-5 px-2`}
          style={{
            transform: `${
              typeof window !== "undefined" && window.innerWidth > 768
                ? `translateX(-${(currentIndex * 145) / slidesToShow}%)`
                : `translateX(-${(currentIndex * 95.5) / slidesToShow}%)`
            }`,
          }}
        >
          {testimonials.map((content, index) => (
            <div className="min-w-[100%] md:min-w-[50.33%] p-2" key={index}>
              <TestimonialCard {...content} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTestimonal;
