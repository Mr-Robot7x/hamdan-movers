"use client";
import React, { useEffect, useState } from "react";

interface CardSliderProps {
  cards: {
    id: number;
    title: string;
    description: string;

    authorName: string;
    authorRole: string;
    rating: number;
  }[];
}
interface CardSliderProps {
  cards: {
    id: number;
    title: string;
    description: string;

    authorName: string;
    authorRole: string;
    rating: number;
  }[];
  autoScroll?: boolean; // Optional prop to enable auto-scrolling
  scrollInterval?: number; // Optional prop to set the scroll interval time in milliseconds
}
const CardSlider: React.FC<CardSliderProps> = ({
  cards,
  autoScroll = true,
  scrollInterval = 4000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        nextSlide();
      }, scrollInterval);

      // Clear the interval when the component unmounts
      return () => clearInterval(interval);
    }
  }, [currentIndex, autoScroll, scrollInterval]);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((star, index) => (
      <span
        key={index}
        className={`inline-block ${
          index < rating ? "text-yellow-500" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {cards.map((card) => (
            <div className="card md:w-full w-[115px]" key={card.id}>
              <div className="card-header">{renderStars(card.rating)}</div>
              <div className="card-body ">
                <div>
                  <h3 className="font-semibold">{card.authorName}</h3>
                  <p className="text-sm text-gray-500">{card.authorRole}</p>
                </div>
                <div className="ml-auto text-4xl text-gray-300">❝</div>
              </div>
              <p className="card-description mt-4 text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4">
        {cards.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
