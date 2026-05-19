"use client";

import { Button } from "@heroui/react";
import Link from "next/link";


import {
  FaArrowLeft,
  FaBookOpen,
} from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#f7f7fc] flex items-center justify-center px-4 overflow-hidden relative">

      {/* Background Blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">

        {/* Icon */}
        <div className="mx-auto w-28 h-28 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center shadow-2xl">

          <FaBookOpen className="text-white text-5xl" />
        </div>

        {/* 404 */}
        <h1 className="mt-10 text-7xl sm:text-8xl lg:text-9xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] leading-tight">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg text-gray-600 leading-8 max-w-xl mx-auto">
          The page you are looking for doesn&apos;t exist or may
          have been moved. Let&apos;s get you back to your study
          journey.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

          {/* Home Button */}
          <Button
        
            size="lg"
            radius="lg"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-8 h-14"
          >
            <Link href="/">Back To Home</Link>
          </Button>

          {/* Rooms Button */}
          <Button
            as={Link}
            href="/rooms"
            size="lg"
            radius="lg"
            variant="bordered"
            className="border-gray-300 text-gray-700 font-semibold px-8 h-14"
            startContent={<FaArrowLeft />}
          >
            Explore Rooms
          </Button>
        </div>

        {/* Bottom Text */}
        <p className="mt-12 text-sm text-gray-400">
          StudyNook • Your Perfect Study Space
        </p>
      </div>
    </section>
  );
}