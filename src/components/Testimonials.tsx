"use client";
import React from "react";
import CardSlider from "./testSlider";
const cards = [
  {
    id: 1,
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    authorName: "Fred Rodriquez",
    authorRole: "Project Manager",
    rating: 5,
  },
  {
    id: 2,
    title: "Card 2",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    authorName: "Sarah Johnson",
    authorRole: "Operations Head",
    rating: 4,
  },
  {
    id: 3,
    title: "Card 3",
    description: "Phasellus facilisis malesuada blandit orci hendrerit.",

    authorName: "Jane Doe",
    authorRole: "Team Lead",
    rating: 5,
  },
];
const TestimonialSection: React.FC = () => {
  return (
    <section className="w-full md:w-11/12 py-12 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Side: Image */}
        <div className="lg:w-1/2  flex md:justify-end justify-center">
          <img
            src="/images/testimonels.jpg"
            alt="Mover holding box"
            className="md:w-96 md:h-[500px] h-96 rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Testimonial Content */}
        <div className="md:mr-20  mr-0 md:pl-4 pl-0 lg:w-1/2 lg:ml-12 ml-0 mt-8 lg:mt-0">
          <h2 className=" mb-4">What Our Client&apos;s Said</h2>

          <ul className="w-max mb-6 flex md:flex-row flex-col gap-5 text-lg text-gray-700 mt-10">
            <div className="flex flex-col gap-y-2">
              <li>✔ Your Requirement Is Our Wish</li>
              <li>✔ Moving Is Quick & Easy</li>
              <li>✔ We Are Affordable</li>
            </div>
            <div className="flex flex-col gap-y-2">
              <li>✔ Safe & Secure Move</li>
              <li>✔ Delivery On Time</li>
              <li>✔ Transporting Goods</li>
            </div>
          </ul>

          <CardSlider cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
