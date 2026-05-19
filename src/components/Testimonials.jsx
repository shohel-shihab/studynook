"use client";

import Image from "next/image";
import { useState } from "react";

import {
  FaArrowLeft,
  FaArrowRight,
  FaQuoteLeft,
} from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Shawn Beltran",
    university: "Columbia University",
    country: "Canada",
    image: "/avatar-8.jpg",
    review:
      "StudyNook helped me find the perfect quiet space for exam preparation. Booking was fast and the environment was excellent.",
  },

  {
    id: 2,
    name: "Nilarj Misty",
    university: "Georgia State University",
    country: "Atlanta",
    image: "/avatar-9.jpg",
    review:
      "I loved the clean study spaces and flexible booking system. It made group study sessions much easier for our team.",
  },

  {
    id: 3,
    name: "Sarah Johnson",
    university: "Stanford University",
    country: "USA",
   image: "/avatar-8.jpg",
    review:
      "The premium rooms and peaceful environment helped me stay productive throughout my semester preparation.",
  },

  {
    id: 4,
    name: "Ariana Smith",
    university: "Harvard University",
    country: "UK",
    image: "/avatar-9.jpg",
    review:
      "Amazing experience using StudyNook. I could easily book rooms nearby and focus on my assignments without distractions.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (current < testimonials.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-[#f7f7fc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT IMAGE FIRST ON MOBILE */}
          <div className="relative w-full max-w-[520px] mx-auto order-1 lg:order-1">

            <div className="relative rounded-[30px] overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-600">

              {/* Main Image */}
              <Image
                src="/testimonial-img.png"
                alt="Student"
                width={520}
                height={650}
                className="w-full h-[450px] sm:h-[550px] lg:h-[650px] object-cover"
              />

              

              {/* Bottom Info */}
              <div className="absolute bottom-5 sm:bottom-10 left-4 sm:left-6">

                {/* Name */}
                <div className="bg-[#0f172a] text-white px-5 py-3 sm:px-6 sm:py-4 inline-block">
                  <h3 className="font-bold text-base sm:text-lg">
                    Shawn Beltran
                  </h3>
                </div>

              
                
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full order-2 lg:order-2">

            {/* Heading */}
            <div>
              <p className="text-purple-600 font-bold text-base sm:text-lg">
                Testimonials
              </p>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] leading-tight">
                What Our Student Says
              </h2>

              <p className="mt-5 text-base sm:text-lg text-gray-600 leading-8">
                Here's what our students have to say about their
                experiences with StudyNook.
              </p>
            </div>

            {/* Slider */}
            <div className="mt-10 overflow-hidden">

              <div
                className="flex transition-all duration-500"
                style={{
                  transform: `translateX(-${current * 100}%)`,
                }}
              >

                {testimonials.map((item) => (
                  <div
                    key={item.id}
                    className="min-w-full"
                  >
                    <div className="bg-white rounded-3xl border border-gray-100 p-5 sm:p-8 shadow-sm">

                      {/* Top */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-5">

                        {/* Image */}
                        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Info */}
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                            {item.name}
                          </h3>

                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1">
                            <span className="text-gray-500 font-medium text-sm sm:text-base">
                              {item.university}
                            </span>

                            <span className="font-bold text-[#0f172a] text-sm sm:text-base">
                              {item.country}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Review */}
                      <div className="mt-8">
                        <FaQuoteLeft className="text-purple-200 text-3xl sm:text-4xl mb-4" />

                        <p className="text-gray-600 text-base sm:text-lg leading-8 sm:leading-9">
                          "{item.review}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4 mt-8">

              {/* Previous */}
              <button
                onClick={prevSlide}
                disabled={current === 0}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-purple-600 hover:text-white transition duration-300 disabled:opacity-50"
              >
                <FaArrowLeft />
              </button>

              {/* Next */}
              <button
                onClick={nextSlide}
                disabled={current === testimonials.length - 1}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-purple-600 hover:text-white transition duration-300 disabled:opacity-50"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}