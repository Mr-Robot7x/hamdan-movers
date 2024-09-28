"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
const HealthcareSlider: React.FC = () => {
  const t = useTranslations("otherMovingServices");
  const locale = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardData = [
    { imgSrc: "/images/apartement-moving.avif", title: t("apartment") },
    { imgSrc: "/images/villa-moving.jpg", title: t("villa") },
    {
      imgSrc: "/images/office-relocation.jpg",
      title: t("office"),
    },
    { imgSrc: "/images/home-cleaning.webp", title: t("home") },
    { imgSrc: "/images/furniture-cleaning.webp", title: t("furniture") },
  ];

  const cardsToShow = 3;

  // Calculating number of visible slides based on screen size
  const slidesToShow =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : cardsToShow;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardData.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - slidesToShow : prevIndex - 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // 4 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentIndex, slidesToShow]);
  return (
    <div className="w-full max-w-6xl mx-auto  md:p-4 p-0 relative">
      <h2
        dir={locale === "ar" ? "rtl" : "ltr"}
        className={`mb-4 ${locale == "ar" ? "font-arabic font-bold" : ""}`}
      >
        {t("title")}
      </h2>
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 py-3 md:px-5 px-2"
          style={{
            transform: `translateX(-${(currentIndex * 95) / slidesToShow}%)`,
          }}
        >
          {cardData.map((card, index) => (
            <Link
              key={index}
              href={`/services/speciality-moving#${card.title
                .split(" ")
                .join("-")}`}
            >
              <div className="min-w-[100%] md:min-w-[33.33%] p-2">
                <div className="p-4 border rounded-lg shadow-lg shadow-neutral-100 flex flex-col items-center">
                  <div className="md:w-80 w-[280px] h-48 bg-gray-100 rounded-lg relative overflow-hidden">
                    <Image
                      alt={card.title}
                      src={card.imgSrc}
                      fill
                      className="object-cover rounded-lg shadow-xl transition-transform hover:scale-105"
                    />
                  </div>
                  <p
                    className={`mt-4 text-center font-semibold ${
                      locale === "ar"
                        ? "font-arabic ar-p font-bold"
                        : "text-lg font-poppins"
                    }`}
                  >
                    {card.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="w-full flex justify-center gap-x-4 mt-2">
        <Button size={"icon"} variant={"secondary"} onClick={prevSlide}>
          &#10094;
        </Button>
        <Button size={"icon"} variant={"secondary"} onClick={nextSlide}>
          &#10095;
        </Button>
      </div>
    </div>
  );
};

export default HealthcareSlider;
