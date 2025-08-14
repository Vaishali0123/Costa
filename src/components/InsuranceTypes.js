"use client";
import React, { use, useState } from "react";
import { FaCarCrash, FaNotesMedical } from "react-icons/fa";
import { LiaMotorcycleSolid } from "react-icons/lia";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { HiMiniHomeModern } from "react-icons/hi2";
import { IoHeartSharp } from "react-icons/io5";

const InsuranceCard = ({
  title,
  description,
  imageUrl,
  isFeatured,
  shadowBg,
  border,
  icon,
}) => {
  return (
    <div
      className={`relative w-80 min-h-[22rem] border p-4 hover:shadow-md hover:bg-[#000] group transition-all duration-200 ${
        isFeatured ? "  border-gray-200" : "  border-gray-200"
      }`}
    >
      <div className="h-[50px] absolute w-[50px] bg-amber-300 blur-2xl rounded-4xl bottom-0 right-0"></div>
      {/* Rotated Shadow Box with Image */}
      <div
        className="absolute z-0  group-hover:bottom-14 group-hover:right-14 rounded-2xl group-hover:rotate-12  bottom-0 right-0 transition  duration-500  flex justify-center items-center"
        style={{
          width: "30%",
          height: "33%",
          transform: "rotate(-11.47deg)",
          transformOrigin: "bottom right",
          opacity: 1,
          border: border,
          boxShadow: "0 0.5rem 1.5rem rgba(0,0,0,0.1)",
          backgroundColor: shadowBg,
          overflow: "hidden",
        }}
      >
        <div className="w-[100px] h-[100px] flex justify-center items-center">
          {" "}
          {icon}
        </div>
        {/* <img
          src={imageUrl}
          alt={title}
          className="w-3/4 h-3/4 text-black object-contain"
        /> */}
      </div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <h3
            className={`text-lg ${
              isFeatured
                ? "text-[#1a1a1a] group-hover:text-[#fff]"
                : "text-[#1a1a1a] group-hover:text-[#fff]"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-sm mt-1  ${
              isFeatured
                ? "text-[#414141] group-hover:text-[#fff]"
                : "text-[#414141] group-hover:text-[#fff]"
            }`}
          >
            {description}
          </p>
        </div>

        <a
          href="#"
          className="group-hover:text-[#FEB117]
           text-sm font-medium hover:underline"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
};

export default function InsuranceTypes() {
  const [insuranceData, setInsuranceData] = useState([
    {
      id: "car",
      title: "Car Insurance",
      description:
        "Protect your vehicle with comprehensive auto insurance coverage options.",
      imageUrl: "car.png",
      isFeatured: true,
      shadowBg: "#E4EFFE",
      border: "none",
      icon: <FaCarCrash className=" h-[50px] w-[50px]" />,
    },
    {
      id: "motorcycle",
      title: "Motorcycle Insurance",
      description:
        "Protect your vehicle with comprehensive auto insurance coverage options.",
      imageUrl: "bike.png",
      isFeatured: false,
      shadowBg: "#FEF1E0",
      border: "3px solid #FFFFFF",
      icon: <LiaMotorcycleSolid className=" h-[50px] w-[50px]" />,
    },
    {
      id: "medical",
      title: "Medical Insurance",
      description:
        "Protect your vehicle with comprehensive auto insurance coverage options.",
      imageUrl: "medical.png",
      isFeatured: false,
      shadowBg: "#E5FCED",
      border: "3px solid #FFFFFF",
      icon: <FaNotesMedical className=" h-[50px] w-[50px]" />,
    },
    {
      id: "home",
      title: "Home Insurance",
      description:
        "Protect your vehicle with comprehensive auto insurance coverage options.",
      imageUrl: "home.png",
      isFeatured: false,
      shadowBg: "#F6EEFE",
      border: "3px solid #FFFFFF",
      icon: <HiMiniHomeModern className=" h-[50px] w-[50px]" />,
    },
    {
      id: "life",
      title: "Life Insurance",
      description:
        "Protect your vehicle with comprehensive auto insurance coverage options.",
      imageUrl: "life.png",
      isFeatured: false,
      shadowBg: "#FDE9E9",
      border: "3px solid #FFFFFF",
      icon: <IoHeartSharp className=" h-[50px] w-[50px]" />,
    },
    {
      id: "business",
      title: "Business Insurance",
      description:
        "Protect your vehicle with comprehensive auto insurance coverage options.",
      imageUrl: "business.png",
      isFeatured: false,
      shadowBg: "#F6EEFE",
      border: "3px solid #FFFFFF",
      icon: <LuBriefcaseBusiness className=" h-[50px] w-[50px]" />,
    },
  ]);
  return (
    <div className=" font-sans">
      <div className="max-w-6xl mx-auto px-0">
        {/* 👇 Heading and subtext centered with same side spacing as cards */}
        <div className="flex items-start justify-start py-2 gap-38 px-4 mb-6 ml-20">
          {/* Heading on the left */}
          <h2
            className="text-[36px] font-[400] text-gray-800"
            style={{
              fontFamily: "Marcellus",
              fontStyle: "normal",
              opacity: 1,
              width: "276px",
              height: "90px",
              transform: "rotate(0deg)",
            }}
          >
            Insurance Types We Cover
          </h2>

          {/* Paragraph on the right */}
          <p
            className="text-base text-gray-500"
            style={{
              width: "472.07px",
              height: "38px",
              opacity: 1,
              transform: "rotate(0deg)",
              marginTop: "22.59px",
            }}
          >
            Comprehensive guides and information for every type of insurance you
            need
          </p>
        </div>

        {/* 👇 Cards container */}
        <div className="flex flex-wrap justify-center items-start gap-0">
          {insuranceData?.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                const updatedData = insuranceData.map((data, i) => ({
                  ...data,
                  isFeatured: i === index,
                }));
                setInsuranceData(updatedData);
              }}
              className="flex justify-center bg-white overflow-hidden items-start"
            >
              <InsuranceCard
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                isFeatured={item.isFeatured}
                shadowBg={item.shadowBg}
                border={item.border}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
