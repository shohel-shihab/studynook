"use client";

import Image from "next/image";
import { FaChair, FaLayerGroup } from "react-icons/fa";

const rooms = [
  {
    id: 1,
    name: "Silent Study Room",
    description:
      "A quiet and comfortable study room perfect for focused individual or group study sessions.",
    floor: "Floor 3",
    capacity: "2–4 people",
    price: "$5/hr",
    image: "/silent.png",
    amenities: ["WiFi", "AC", "Whiteboard", "Projector", "Coffee"],
  },

  {
    id: 2,
    name: "Modern Workspace",
    description:
      "Spacious modern room with excellent lighting and premium furniture for productive study.",
    floor: "Floor 2",
    capacity: "4–6 people",
    price: "$8/hr",
    image: "/modern.png",
    amenities: ["WiFi", "Monitor", "AC"],
  },

  {
    id: 3,
    name: "Private Focus Room",
    description:
      "Designed for students who need complete silence and uninterrupted concentration.",
    floor: "Floor 5",
    capacity: "1–2 people",
    price: "$4/hr",
    image: "/private.png",
    amenities: ["WiFi", "AC", "Lamp", "Charging Port"],
  },

  {
    id: 4,
    name: "Creative Collaboration Space",
    description:
      "Ideal for teamwork, brainstorming, and collaborative learning activities with friends.",
    floor: "Floor 1",
    capacity: "6–8 people",
    price: "$10/hr",
    image: "/creative.png",
    amenities: ["Projector", "Whiteboard", "WiFi", "AC"],
  },

  {
    id: 5,
    name: "Library Premium Room",
    description:
      "Premium study environment with comfortable seating and advanced study facilities.",
    floor: "Floor 4",
    capacity: "2–5 people",
    price: "$7/hr",
    image: "/premium.png",
    amenities: ["WiFi", "Coffee", "AC", "Monitor"],
  },

  {
    id: 6,
    name: "Group Study Hall",
    description:
      "Large study hall suitable for group projects, presentations, and collaborative sessions.",
    floor: "Floor 6",
    capacity: "8–12 people",
    price: "$12/hr",
    image: "/group.png",
    amenities: ["Projector", "Whiteboard", "WiFi", "Sound System"],
  },
];

export default function RoomCards() {
  return (
    <section className="py-20 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a]">
            Explore Study Rooms
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Browse available quiet spaces and book your perfect study
            environment instantly.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {rooms.map((room) => {
            const visibleAmenities = room.amenities.slice(0, 3);
            const remainingCount = room.amenities.length - 3;

            return (
              <div
                key={room.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300 border border-gray-100 flex flex-col h-full"
              >

                {/* Image */}
                <div className="relative w-full h-64">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">

                  {/* Room Name */}
                  <h3 className="text-2xl font-bold text-[#0f172a]">
                    {room.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-gray-600 leading-7 flex-grow">
                    {room.description.length > 100
                      ? `${room.description.slice(0, 100)}...`
                      : room.description}
                  </p>

                  {/* Info */}
                  <div className="mt-6 space-y-4">

                    {/* Floor */}
                    <div className="flex items-center gap-3 text-gray-700">
                      <FaLayerGroup className="text-purple-600" />

                      <span className="font-medium">
                        {room.floor}
                      </span>
                    </div>

                    {/* Capacity */}
                    <div className="flex items-center gap-3 text-gray-700">
                      <FaChair className="text-purple-600" />

                      <span className="font-medium">
                        {room.capacity}
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-6">
                    <span className="text-3xl font-extrabold text-purple-600">
                      {room.price}
                    </span>
                  </div>

                  {/* Amenities */}
                  <div className="mt-6 flex flex-wrap gap-3">

                    {visibleAmenities.map((item, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}

                    {remainingCount > 0 && (
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        +{remainingCount} more
                      </span>
                    )}
                  </div>

                  {/* Button */}
                  <button className="mt-8 w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-2xl font-semibold hover:scale-[1.02] transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}