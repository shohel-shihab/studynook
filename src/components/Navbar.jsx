"use client";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navbar Container */}
        <div className="flex items-center justify-between h-20">
          
          {/* Left Side Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/study-nook.png"
              alt="Logo"
              width={200}
              height={50}
              className="object-contain"
            />
          </Link>

          {/* Middle Menu Desktop */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-gray-700 hover:text-black font-medium transition duration-300"
            >
              Home
            </Link>

            <Link
              href="/rooms"
              className="text-gray-700 hover:text-black font-medium transition duration-300"
            >
              All Rooms
            </Link>
          </div>

          {/* Right Side Buttons Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="px-5 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition duration-300"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="px-5 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition duration-300"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl text-black"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-5">
            <div className="flex flex-col gap-4">
              
              <Link
                href="/"
                className="text-gray-700 font-medium hover:text-black"
              >
                Home
              </Link>

              <Link
                href="/rooms"
                className="text-gray-700 font-medium hover:text-black"
              >
                All Rooms
              </Link>

              <Link
                href="/login"
                className="border border-gray-300 px-4 py-2 rounded-lg text-center font-medium hover:bg-gray-100"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="bg-black text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-gray-800"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}