import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#f8f9fb] border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo & Description */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/study-nook.png"
                alt="StudyNook Logo"
                width={180}
                height={50}
                className="object-contain"
              />
            </Link>

            <p className="mt-6 text-gray-600 leading-8">
              StudyNook helps students discover and book quiet,
              comfortable, and productive study rooms anytime.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              
              {/* Facebook */}
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-gray-700 hover:bg-[#1877F2] hover:text-white transition duration-300"
              >
                <FaFacebookF />
              </Link>

              {/* X */}
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-gray-700 hover:bg-black hover:text-white transition duration-300"
              >
                <FaXTwitter />
              </Link>

              {/* LinkedIn */}
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-gray-700 hover:bg-[#0A66C2] hover:text-white transition duration-300"
              >
                <FaLinkedinIn />
              </Link>

              {/* Instagram */}
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white transition duration-300"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">
              Company
            </h2>

            <div className="flex flex-col gap-4 text-gray-600">
              <Link href="#" className="hover:text-black transition">
                About
              </Link>

              <Link href="#" className="hover:text-black transition">
                All Rooms
              </Link>

              <Link href="#" className="hover:text-black transition">
                Rooms
              </Link>

              <Link href="#" className="hover:text-black transition">
                Blog
              </Link>

              <Link href="#" className="hover:text-black transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">
              Support
            </h2>

            <div className="flex flex-col gap-4 text-gray-600">
              <Link href="#" className="hover:text-black transition">
                Help Center
              </Link>

              <Link href="#" className="hover:text-black transition">
                Booking Guide
              </Link>

              <Link href="#" className="hover:text-black transition">
                FAQs
              </Link>

              <Link href="#" className="hover:text-black transition">
                Privacy Policy
              </Link>

              <Link href="#" className="hover:text-black transition">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">
              Get in Touch
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                Mirpur, Dhaka, Bangladesh
              </p>

              <p>
                Email:
                <span className="text-black font-medium">
                  support@studynook.com
                </span>
              </p>

              <p>
                Phone:
                <span className="text-black font-semibold">
                  +880 1723-517651
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-gray-600 text-sm text-center md:text-left">
            © 2026 StudyNook. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link href="#" className="hover:text-black transition">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-black transition">
              Cookie Notice
            </Link>

            <Link href="#" className="hover:text-black transition">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}