"use client";
import { useState, useEffect } from "react";

interface Slide {
  image: string;
  title: string;
}

const slides: Slide[] = [
  {
    image: "/images/apartment-moving.jpg", // Replace with your image path
    title: "Apartment Moving",
  },
  {
    image: "/images/villa-moving.jpg", // Replace with your image path
    title: "Villa Moving",
  },
  {
    image: "/images/office-relocation.jpg", // Replace with your image path
    title: "Office Relocation",
  },
  {
    image: "/images/furniture-moving.jpg", // Replace with your image path
    title: "Furniture Moving",
  },
  {
    image: "/images/international-moving.jpg", // Replace with your image path
    title: "International Moving",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3); // Default for desktop
  const [autoScroll, setAutoScroll] = useState(true);

  // Handle resizing for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleSlides(3); // Show 3 slides in desktop view
      } else {
        setVisibleSlides(1); // Show 1 slide in mobile view
      }
    };

    handleResize(); // Set on initial render

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoScroll) {
        setCurrentSlide((prev) =>
          prev === slides.length - visibleSlides ? 0 : prev + 1
        );
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentSlide, visibleSlides, autoScroll]);

  const handlePrev = () => {
    setAutoScroll(false); // Pause auto-scroll when manually navigating
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - visibleSlides : prev - 1
    );
  };

  const handleNext = () => {
    setAutoScroll(false); // Pause auto-scroll when manually navigating
    setCurrentSlide((prev) =>
      prev === slides.length - visibleSlides ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Other Moving Services
      </h2>
      <div className="relative overflow-hidden">
        {/* Slider container */}
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{
            transform: `translateX(-${(currentSlide / visibleSlides) * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 px-2 ${
                visibleSlides === 1 ? "sm:w-full" : "lg:w-1/3"
              }`}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold">{slide.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2"
        >
          &#8250;
        </button>
      </div>

      {/* Pagination indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.slice(0, slides.length - visibleSlides + 1).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-black" : "bg-gray-400"
            }`}
            onClick={() => {
              setAutoScroll(false); // Pause auto-scroll when clicking on pagination
              setCurrentSlide(index);
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
