"use client";

import Image from "next/image";
import Link from "next/link";

import {
    FaArrowRight,
    FaCheckCircle,
    FaHeadphones,
    FaCalendarAlt,
    FaDollarSign,
    FaUsers,
} from "react-icons/fa";

export default function Banner() {
    return (
        <section className="relative overflow-hidden bg-[#f7f7fc]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

                {/* Main Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* RIGHT SIDE IMAGE FIRST ON MOBILE */}
                    <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">

                        {/* Purple Shape */}
                        <div className="absolute top-0 right-8 w-40 h-40 bg-purple-200 rounded-3xl opacity-60"></div>

                        {/* Orange Shape */}
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-200 rounded-[40px] opacity-80"></div>

                        {/* Dots */}
                        <div className="absolute right-0 top-1/2 hidden lg:grid grid-cols-6 gap-2 opacity-40">
                            {Array.from({ length: 24 }).map((_, i) => (
                                <span
                                    key={i}
                                    className="w-1.5 h-1.5 bg-purple-300 rounded-full"
                                ></span>
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="relative z-10">

                            <div className="rounded-[40px] overflow-hidden shadow-2xl">
                                <Image
                                    src="/banner.jpg"
                                    alt="Study Room"
                                    width={650}
                                    height={500}
                                    className="w-full max-w-[650px] object-cover"
                                />
                            </div>

                            {/* Floating Card Top */}
                            <div className="absolute -top-10 -left-8 bg-white rounded-3xl shadow-xl p-6 hidden sm:block">

                                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                                    <FaCheckCircle className="text-green-500 text-2xl" />
                                </div>

                                <div className="mt-4 text-center">
                                    <h3 className="font-bold text-lg text-[#0f172a]">
                                        Verified Rooms
                                    </h3>

                                    <p className="text-gray-500 text-sm mt-1 leading-6">
                                        Quality checked
                                        <br />
                                        study spaces
                                    </p>
                                </div>
                            </div>

                            {/* Floating Card Bottom */}
                            <div className="absolute bottom-6 -right-8 bg-white rounded-3xl shadow-xl p-6 hidden sm:block">

                                <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center">
                                    <FaUsers className="text-purple-600 text-2xl" />
                                </div>

                                <div className="mt-4">
                                    <h3 className="font-bold text-2xl text-[#0f172a]">
                                        10K+
                                    </h3>

                                    <p className="text-gray-500 leading-7">
                                        Students finding
                                        <br />
                                        their space
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* LEFT CONTENT */}
                    <div className="order-2 lg:order-1">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white border border-purple-100 rounded-full px-5 py-3 shadow-sm">
                            <FaCheckCircle className="text-purple-600 text-sm" />

                            <span className="text-purple-600 font-semibold text-sm">
                                Focus. Study. Succeed.
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-[#0f172a]">
                            Find Your Perfect
                            <span className="block">
                                Study Room
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-8 text-lg leading-9 text-gray-600 max-w-xl">
                            Browse and book quiet, private study rooms in your
                            library. List your own room and earn.
                        </p>

                        {/* Button */}
                        <div className="mt-10">
                            <Link
                                href="/rooms"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-8 py-5 rounded-2xl shadow-xl hover:scale-105 transition duration-300"
                            >
                                Explore Rooms

                                <FaArrowRight />
                            </Link>
                        </div>

                        {/* Features */}
                        <div className="mt-14 flex flex-col sm:flex-row sm:flex-wrap gap-8">

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                    <FaHeadphones className="text-purple-600" />
                                </div>

                                <span className="font-medium text-gray-700">
                                    Quiet Spaces
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                    <FaCalendarAlt className="text-purple-600" />
                                </div>

                                <span className="font-medium text-gray-700">
                                    Easy Booking
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                    <FaDollarSign className="text-purple-600" />
                                </div>

                                <span className="font-medium text-gray-700">
                                    Earn by Listing
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Universities */}
                <div className="mt-20 bg-white rounded-3xl border border-gray-100 shadow-sm px-8 py-10">

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                        <p className="text-gray-500 font-medium whitespace-nowrap">
                            Trusted by students from
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center text-center w-full">

                            <h2 className="text-2xl font-bold text-gray-400">
                                <Image src={`/buet.png`} width={`120`} height={`50`} alt="buet"></Image>
                            </h2>

                            <h2 className="text-2xl font-bold text-gray-400">
                                 <Image src={`/aiub.png`} width={`120`} height={`50`} alt="buet"></Image>
                            </h2>

                            <h2 className="text-2xl font-bold text-gray-400">
                                 <Image src={`/brac.png`} width={`120`} height={`50`} alt="buet"></Image>
                            </h2>

                            <h2 className="text-2xl font-bold text-gray-400">
                                 <Image src={`/uiu.png`} width={`120`} height={`50`} alt="buet"></Image>
                            </h2>

                            <h2 className="text-2xl font-bold text-gray-400">
                                 <Image src={`/iub.png`} width={`120`} height={`50`} alt="buet"></Image>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}