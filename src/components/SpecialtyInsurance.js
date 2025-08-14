"use client";
import React from "react";
import {
  FaPaw,
  FaShip,
  FaShieldAlt,
  FaMountain,
  FaGraduationCap,
  FaGem,
  FaCalendarAlt,
  FaGavel,
} from "react-icons/fa";
import Map from "../../public/Map.png";

const cards = [
  {
    icon: <FaPaw size={32} className="text-orange-500" />,
    title: "Pet Insurance",
    desc: "Keep your furry friends healthy and protected.",
  },
  {
    icon: <FaShip size={32} className="text-blue-600" />,
    title: "Marine & Boat",
    desc: "Coverage for watercraft and marine activities.",
  },
  {
    icon: <FaShieldAlt size={32} className="text-red-500" />,
    title: "Cybersecurity",
    desc: "Protection against digital threats and identity theft.",
  },
  {
    icon: <FaMountain size={32} className="text-green-600" />,
    title: "Adventure Sports",
    desc: "Coverage for extreme sports and outdoor activities.",
  },
  {
    icon: <FaGraduationCap size={32} className="text-purple-600" />,
    title: "Student Insurance",
    desc: "Specialized coverage for students and education.",
  },
  {
    icon: <FaGem size={32} className="text-pink-600" />,
    title: "Art & Valuables",
    desc: "Protection for valuable collections and artwork.",
  },
  {
    icon: <FaCalendarAlt size={32} className="text-orange-400" />,
    title: "Event Insurance",
    desc: "Coverage for weddings, parties, and special events.",
  },
  {
    icon: <FaGavel size={32} className="text-gray-700" />,
    title: "Legal Expense",
    desc: "Coverage for legal fees and court expenses.",
  },
];

const SpecialtyInsurance = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Map.src})` }}
      className="w-full px-4 md:px-8 py-16 md:py-20 flex flex-col bg-contain bg-no-repeat bg-center items-center font-sans bg-gradient-to-b from-transparent overflow-hidden bg-[#FFAA00] relative z-10"
    >
      {/* Title */}
      <div className="text-center mb-10 md:mb-16 max-w-2xl">
        <h2 className="text-3xl md:text-4xl text-[#656565] font-[Marcellus] mb-2">
          Specialty Insurance
        </h2>
        <p className="text-[#424242] text-base md:text-lg">
          Specialized coverage for unique needs and situations
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1400px] w-full justify-items-center">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="group flex flex-col bg-white rounded-3xl p-6 w-full max-w-[300px] shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-gray-50"
          >
            <div className="transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3">
              {card.icon}
            </div>
            <h3 className="font-bold text-lg mb-2 mt-3 transition-colors duration-300 group-hover:text-gray-700">
              {card.title}
            </h3>
            <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-[#FFAA00] to-[#FFAA00] blur-2xl"></div>
    </div>
  );
};

export default SpecialtyInsurance;
// "use client";
// import React from "react";
// import {
//   FaPaw,
//   FaShip,
//   FaShieldAlt,
//   FaMountain,
//   FaGraduationCap,
//   FaGem,
//   FaCalendarAlt,
//   FaGavel,
// } from "react-icons/fa";
// import Map from "../../public/Map.png";

// const cards = [
//   {
//     icon: <FaPaw size={32} className="text-orange-500" />,
//     title: "Pet Insurance",
//     desc: "Keep your furry friends healthy and protected.",
//   },
//   {
//     icon: <FaShip size={32} className="text-blue-600" />,
//     title: "Marine & Boat",
//     desc: "Coverage for watercraft and marine activities.",
//   },
//   {
//     icon: <FaShieldAlt size={32} className="text-red-500" />,
//     title: "Cybersecurity",
//     desc: "Protection against digital threats and identity theft.",
//   },
//   {
//     icon: <FaMountain size={32} className="text-green-600" />,
//     title: "Adventure Sports",
//     desc: "Coverage for extreme sports and outdoor activities.",
//   },
//   {
//     icon: <FaGraduationCap size={32} className="text-purple-600" />,
//     title: "Student Insurance",
//     desc: "Specialized coverage for students and education.",
//   },
//   {
//     icon: <FaGem size={32} className="text-pink-600" />,
//     title: "Art & Valuables",
//     desc: "Protection for valuable collections and artwork.",
//   },
//   {
//     icon: <FaCalendarAlt size={32} className="text-orange-400" />,
//     title: "Event Insurance",
//     desc: "Coverage for weddings, parties, and special events.",
//   },
//   {
//     icon: <FaGavel size={32} className="text-gray-700" />,
//     title: "Legal Expense",
//     desc: "Coverage for legal fees and court expenses.",
//   },
// ];

// const SpecialtyInsurance = () => {
//   return (
//     <div
//       style={{ backgroundImage: `url(${Map.src})` }}
//       className="w-full px-4 md:px-8 py-16 md:py-20 flex flex-col bg-contain bg-no-repeat bg-center items-center font-sans bg-gradient-to-b from-transparent overflow-hidden bg-[#FFAA00] relative z-10"
//     >
//       {/* Title */}
//       <div className="text-center mb-10 md:mb-16 max-w-2xl">
//         <h2 className="text-3xl md:text-4xl text-[#656565] font-[Marcellus] mb-2">
//           Specialty Insurance
//         </h2>
//         <p className="text-[#424242] text-base md:text-lg">
//           Specialized coverage for unique needs and situations
//         </p>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1400px] w-full justify-items-center">
//         {cards.map((card, idx) => (
//           <div
//             key={idx}
//             className="flex flex-col bg-white rounded-3xl p-6 w-full max-w-[300px] shadow-md"
//           >
//             {card.icon}
//             <h3 className="font-bold text-lg mb-2 mt-3">{card.title}</h3>
//             <p className="text-sm text-gray-600">{card.desc}</p>
//           </div>
//         ))}
//       </div>

//       {/* Bottom Gradient */}
//       <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-[#FFAA00] to-[#FFAA00] blur-2xl"></div>
//     </div>
//   );
// };

// export default SpecialtyInsurance;
