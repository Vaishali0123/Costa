"use client";

import React, { useState, useEffect } from "react";
import {
  FaCarAlt,
  FaPaw,
  FaHeart,
  FaPlane,
  FaHome,
  FaNotesMedical,
  FaAngleRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { gql, GraphQLClient } from "graphql-request";
import { useRouter } from "next/navigation";
const graphQLClient = new GraphQLClient(
  "https://admin.costaricaninsurance.com/graphql",
  {
    headers: { "Content-Type": "application/json" },
  }
);

// const GET_HERO_AND_STATS = gql`
//   query GetAllCategoriesWithPosts {
//     categories(first: 100) {
//       nodes {
//         id
//         name
//         slug
//         posts(first: 10) {
//           nodes {
//             id
//             title
//             content
//             featuredImage {
//               node {
//                 sourceUrl
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
const GET_HERO_AND_STATS = gql`
  query GetAllCategoriesWithPosts {
    categories(first: 100) {
      nodes {
        id
        name
        slug
        posts(first: 10) {
          nodes {
            id
            title
            content
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
        children(first: 100) {
          nodes {
            id
            name
            slug
            posts(first: 10) {
              nodes {
                id
                title
                content
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
            children(first: 100) {
              nodes {
                id
                name
                slug
                posts(first: 10) {
                  nodes {
                    id
                    title
                    content
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
// Insurance data
const insuranceData = {
  car: {
    title: "Car Insurance",
    description:
      "Car insurance protects you financially against accidents, theft, or damage to your vehicle.It typically covers liability, repairs, medical costs, and legal expenses.Policies may include third-party, comprehensive, or collision coverage.It’s legally required in most places and ensures safer driving with peace of mind.",
    subDescription:
      "Discover the most appropriate fit for you and your Family.",
    image: "/car.jpg",
    data: {},
  },
  life: {
    title: "Life Insurance",
    description:
      "Life insurance provides financial support to your loved ones after your death.It pays out a lump sum (death benefit) to the chosen beneficiaries.Policies can help cover debts, daily expenses, or future goals like education.It ensures your family's financial stability in your absence.",
    subDescription: "Choose a policy that grows with your life's milestones.",
    image: "/life.jpg",
    data: {},
  },
  pet: {
    title: "Pet Insurance",
    description:
      "Pet insurance helps cover veterinary costs for your pet's illnesses, injuries, or routine care.It reduces the financial burden of unexpected medical treatments.Policies may include coverage for accidents, surgeries, medications, and preventive care.It ensures your pet gets the best care without stressing your budget.",
    subDescription: "Because they're not just pets, they're family.",
    image: "/dog.jpg",
    data: {},
  },
  travel: {
    title: "Travel Insurance",
    description:
      "Travel insurance provides coverage for unexpected events during a trip, such as trip cancellations, delays, or medical emergencies.It protects travelers from financial losses due to unforeseen disruptions.Policies often include lost luggage, flight issues, and emergency evacuation.It offers peace of mind while traveling domestically or internationally.",
    subDescription: "Your safety net wherever you go.",
    image: "/travel.jpg",
    data: {},
  },
  health: {
    title: "Health Insurance",
    description:
      "Health insurance is a type of coverage that pays for medical, surgical, and hospital expenses.It protects individuals from high healthcare costs by covering part or all of the bills. Policies can vary, offering benefits like doctor visits, prescriptions, and emergency care. It provides financial security and ensures timely access to quality healthcare.",
    subDescription: "Stay healthy, stay insured.",
    image: "/health.jpg",
    data: {},
  },
  home: {
    title: "Home Insurance",
    description:
      "Home insurance protects your house and personal belongings from risks like fire, theft, or natural disasters.It also covers liability for accidents that happen on your property.Policies can include coverage for repairs, rebuilding, and temporary housing.It provides financial security and peace of mind for homeowners.",
    subDescription: "Coverage you can count on.",
    image: "/home.jpg",
    data: {},
  },
};

// Icons
const iconMap = {
  car: <FaCarAlt className="w-6 h-6" />,
  life: <FaHeart className="w-6 h-6" />,
  pet: <FaPaw className="w-6 h-6" />,
  travel: <FaPlane className="w-6 h-6" />,
  health: <FaNotesMedical className="w-6 h-6" />,
  home: <FaHome className="w-6 h-6" />,
};

// Utility to get rotating slice excluding active
function getCircularSlice(arr, start, count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(arr[(start + i) % arr.length]);
  }
  return result;
}

// Icon menu with active category on top
const InsuranceMainCategories = ({ activeCategory, setActiveCategory }) => {
  const keys = Object.keys(iconMap);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const currentIndex = keys.indexOf(activeCategory);
    setStartIndex(currentIndex);
  }, [activeCategory]);

  // Improved circular slice function for smoother transitions
  const getCircularSlice = (arr, start, count) => {
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(arr[(start + i) % arr.length]);
    }
    return result;
  };

  const otherKeys = keys.filter((key) => key !== activeCategory);
  const reordered = [
    activeCategory,
    ...getCircularSlice(otherKeys, 0, 3), // Always start from 0 for consistency
  ];

  return (
    <div className="h-[220px] relative">
      <div className="border-orange-300 border-2 h-28 w-28 -top-10 -left-5 rounded-full flex items-center justify-center absolute "></div>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={activeCategory} // Key only on active category for smoother transitions
          initial={{ y: 30, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 25,
              mass: 0.5,
            },
          }}
          exit={{
            y: -30,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: [0.4, 0, 0.6, 1],
            },
          }}
          className="flex flex-col gap-4 "
        >
          {reordered.map((key) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`h-16 w-16 rounded-full flex items-center justify-center hover:scale-105 transition
                ${
                  activeCategory === key
                    ? "bg-orange-500 text-white "
                    : "bg-orange-100 text-orange-500"
                }`}
              layoutId={key}
              layout
              transition={{
                layout: {
                  type: "spring",
                  stiffness: 120,
                  damping: 25,
                },
              }}
            >
              {iconMap[key]}
            </motion.button>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
// Main component
const Insurance = () => {
  const router = useRouter();
  const keys = Object.keys(insuranceData);
  const [activeCategory, setActiveCategory] = useState(keys[0]);
  const [insurance, setInsurance] = useState({});
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => {
        const currentIndex = keys.indexOf(prev);
        const nextIndex = (currentIndex + 1) % keys.length;
        return keys[nextIndex];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const data = insuranceData[activeCategory];

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await graphQLClient.request(GET_HERO_AND_STATS);
        console.log(data, "data");
        data?.categories?.nodes?.forEach((category) => {
          if (category?.slug === "car-insurance") {
            insuranceData.car.data = category;
            setInsurance(category);
          }
          if (category?.slug === "health-insurance") {
            insuranceData.health.data = category;
            setInsurance(category);
          }
          if (category?.slug === "life-insurance") {
            insuranceData.life.data = category;
            setInsurance(category);
          }
          if (category?.slug === "pet-insurance") {
            insuranceData.pet.data = category;
            setInsurance(category);
          }
          if (category?.slug === "home-insurance") {
            insuranceData.home.data = category;
            setInsurance(category);
          }
          if (category?.slug === "home-insurance") {
            insuranceData.home.data = category;
            setInsurance(category);
          }
          if (category?.slug === "travel-insurance") {
            insuranceData.travel.data = category;
            setInsurance(category);
          }
        });
      } catch (err) {
        console.error("GraphQL Error:", err);
      }
    }

    fetchData();
  }, []);

  return (
    <section
      className="bg-white py-16"
      style={{
        backgroundImage: "url('/BG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col lg:flex-row gap-10 px-4 sm:px-6 lg:px-8 items-start">
        {/* Left - Icons */}
        <InsuranceMainCategories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Center - Text */}
        <AnimatePresence mode="wait ">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                stiffness: 60,
                damping: 16,
              },
            }}
            exit={{
              opacity: 0,
              x: 20,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            className="flex-1 max-w-md text-center lg:text-left"
          >
            <h2 className="text-4xl font-semibold text-gray-800">
              {data.title}
            </h2>
            <p className="mt-6 text-gray-600">{data.description}</p>
            <p className="mt-4 text-gray-500">{data.subDescription}</p>
            <button
              onClick={() => {
                const type = insuranceData[activeCategory]?.data;

                sessionStorage.setItem("selectedType", JSON.stringify(type));
                router.push(`/${type?.slug}`);
              }}
              className="mt-8 h-12 w-12 rounded-full bg-gray-900   text-white flex items-center justify-center hover:scale-110 transition"
            >
              <FaAngleRight />
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Right - Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={data.image}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 70,
                damping: 14,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            className="flex-1 max-w-lg relative"
          >
            <div className="absolute -top-[70px] -left-[50px] w-[376px] h-[277px] bg-orange-100/50 rounded-3xl z-0"></div>
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl z-10">
              <img
                src={data.image}
                alt={data?.title}
                className="w-full h-auto object-cover rounded-2xl aspect-[4/3]"
              />
            </div>
            <div className="absolute -bottom-[100px] -right-[100px] w-[376px] h-[277px] border-2 border-orange-100/90 rounded-3xl z-0"></div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Insurance;
