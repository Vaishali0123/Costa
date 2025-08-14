"use client";
import React, { act, useEffect, useState } from "react";
import { Play, ArrowRight } from "lucide-react";
import BlurText from "./BlurText";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";
import { CiPlay1 } from "react-icons/ci";
import Lifes from "../../public/lifes.jpg";
import Cars from "../../public/cars.jpg";
import education from "../../public/education.jpg";
// import CircularTestimonials from "./circular_testimonials";
// import ImageCarousel from "./AnimatedOverlayCarousel";
import AnimatedOverlayCarousel from "./AnimatedOverlayCarousel";
import Link from "next/link";
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
        children {
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
            children {
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
export default function HeroSection() {
  const labels = ["Life Insurance", "Car Insurance", "Education Savings"];
  const [categoryPosts, setCategoryPosts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hero, setHero] = useState(null);
  const [stats, setStats] = useState([]);
  const [posts, setPosts] = useState([]);
  const [categposts, setCategPosts] = useState([]);
  const [cardata, setCardata] = useState({});
  const [lifedata, setlifedata] = useState({});
  const [healthdata, sethealthdata] = useState({});
  const [cardataposts, setCardataposts] = useState([]);
  const [lifedataposts, setLifedataposts] = useState([]);
  const [healthdataposts, setHealthdataposts] = useState([]);

  const categoryMappings = {
    "Life Insurance": "health-insurance", // Based on your data structure
    "Car Insurance": "car-insurance",
    "Home Insurance": "home-insurance",
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await graphQLClient.request(GET_HERO_AND_STATS);

        // const sortedPosts = [...data.posts.nodes].sort(
        //   (a, b) => new Date(b.date) - new Date(a.date)
        // );

        data?.categories?.nodes?.forEach((category) => {
          if (category?.slug === "car-insurance") {
            setCardata(category?.posts.nodes[0]);
            setCardataposts(category?.posts.nodes);
          }
          if (category?.slug === "health-insurance") {
            sethealthdata(category.posts.nodes[0]);
            setHealthdataposts(category?.posts.nodes);
          }
          if (category?.slug === "life-insurance") {
            setlifedata(category.posts.nodes[0]);
            setLifedataposts(category?.posts.nodes);
          }
        });
        // setPosts(sortedPosts[0]);
        // const groupedPosts = {};
        // data.posts.nodes.forEach((post) => {
        //   post.categories.nodes.forEach((category) => {
        //     if (!groupedPosts[category.slug]) {
        //       groupedPosts[category.slug] = [];
        //     }
        //     groupedPosts[category.slug].push(post);
        //   });
        // });
        // console.log(groupedPosts, "groupedPosts");
        // setCategPosts(groupedPosts);
        //         // Sort posts by date (most recent first) for each category
        // Object?.keys(groupedPosts)?.forEach((categorySlug) => {
        //   groupedPosts[categorySlug].sort(
        //     (a, b) => new Date(b.date) - new Date(a.date)
        //   );
        // });
        // console.log(groupedPosts, "groupedPosts groupedPosts");
        // setCategoryPosts(groupedPosts);
        // setHero(data.page);
        // setStats(data.statsPosts.nodes);
      } catch (err) {
        console.error("GraphQL Error:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);
  // console.log(categoryPosts, "categoryPosts");
  const [activeIndex, setActiveIndex] = useState(0);
  const [categoryData, setCategoryData] = useState({});
  const categoryNames = Object.keys(categoryData);
  const currentCategory = categoryNames[activeIndex];
  const [statsData, setStatsData] = useState([]);
  function handleAnimationComplete() {
    console.log("Animation finished");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % labels.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [labels.length]);

  return (
    <div className="relative w-full  h-full flex flex-col items-center justify-center py-20">
      {/* Hero Content Flex Wrapper */}
      <div className="relative  flex px-4 sm:px-6 lg:px-8 flex-col items-center gap-10  md:flex-row md:items-start">
        {/* Left Section - Text and Buttons */}
        <div className="w-full max-w-lg text-center md:text-left">
          <BlurText
            text={
              activeIndex === 0
                ? lifedata?.title
                : activeIndex === 1
                ? cardata?.title
                : healthdata?.title
            }
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-4xl md:text-5xl text-gray-800 leading-tight mb-6"
            style={{ fontFamily: "Marcellus, serif" }}
          />

          <p className="mt-4 text-gray-600">
            {activeIndex === 0
              ? lifedata?.title
              : activeIndex === 1
              ? cardata?.title
              : healthdata?.title}
          </p>

          <div className="mt-8 flex items-center justify-center gap-6 md:justify-start">
            <button className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f6f6f6] transition-transform duration-300 hover:scale-105 ">
              <CiPlay1 className="h-8 w-8 text-[#191919]" />
            </button>
          </div>

          <div className="mt-8 flex  flex-wrap justify-center gap-3 md:justify-start">
            {labels.map((label, index) => (
              <button
                key={label}
                className={`flex h-11 items-center whitespace-nowrap rounded-full border px-5 font-semibold transition-all duration-300
                ${
                  activeIndex === index
                    ? "scale-105 border-[#191919] bg-transparent text-[#191919]"
                    : "border-transparent bg-[#f6f6f6] text-gray-700 hover:bg-[#191919] hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
            {/* {categoryNames.map((label, index) => (
              <button
                key={label}
                onClick={() => setActiveIndex(index)}
                className={`...`}
              >
                {label}
              </button>
            ))} */}
          </div>
        </div>

        {/* Right Section - Image with Overlay */}
        {/* <div className="bg-[#f7f7fa] bg-red-800 p-20 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
          <div
            className="items-center justify-center relative flex"
            style={{ maxWidth: "1456px" }}
          >
            <CircularTestimonials
              testimonials={testimonials}
              autoplay={true}
              colors={{
                name: "#0a0a0a",
                designation: "#454545",
                testimony: "#171717",
                arrowBackground: "#141414",
                arrowForeground: "#f1f1f7",
                arrowHoverBackground: "#00A6FB",
              }}
              fontSizes={{
                name: "28px",
                designation: "20px",
                quote: "20px",
              }}
            />
          </div>
        </div> */}
        {/* <div className="relative  w-full max-w-sm md:max-w-none md:w-[20.6vw] h-[48vh] md:h-[52vh]  mb-10 sm:mb-10 md:mb-0 md:mt-0 min-[1101px]:ml-[13vw] ">
          <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-lg"> */}
        <AnimatedOverlayCarousel />
        {/* <img
              src={
                activeIndex === 0
                  ? lifedata?.featuredImage?.node?.sourceUrl
                  : activeIndex === 1
                  ? cardata?.featuredImage?.node?.sourceUrl
                  : healthdata?.featuredImage?.node?.sourceUrl
              }
              alt="Family protected by insurance"
              className="absolute inset-0 w-full h-full rounded-3xl object-cover z-0"
            /> */}
        {/* <div className="absolute inset-0 rounded-3xl bg-black/30 z-10"></div>
            <div className="absolute inset-0 z-20 flex h-full flex-col items-center justify-end p-6 text-center text-white">
              <h2 className="text-xl font-semibold">MY INSURANCE ACCOUNT</h2>
              <p className="my-4 text-base max-w-[85%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <button className="w-full max-w-xs rounded-full bg-[#1E3161] px-6 py-3 font-semibold transition duration-300 hover:bg-opacity-90 hover:scale-105 transform cursor-pointer">
                MY-ACCESS
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* Stats Section */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center justify-evenly   sm:flex-row sm:flex-wrap gap-6">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse flex  flex-col overflow-hidden rounded-2xl bg-white w-full sm:w-[48%] md:w-[31%]"
                >
                  <div className="aspect-video bg-gray-800 w-full rounded-[6.9%]"></div>
                  <div className="flex flex-grow flex-col justify-between p-5">
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>
              ))
            : (activeIndex === 0
                ? lifedataposts
                : activeIndex === 1
                ? cardataposts
                : healthdataposts
              )
                ?.slice(0, 3)
                ?.map((stat) => (
                  <Link
                    href="https://admin.costaricaninsurance.com/understanding-medical-insurance-a-comprehensive-guide/"
                    // <div
                    key={stat?.title}
                    className="flex flex-col  overflow-hidden rounded-t-3xl group   w-full sm:w-[48%] md:w-[31%]"
                  >
                    <div className="aspect-video  w-full">
                      <img
                        src={
                          stat?.featuredImage?.node?.sourceUrl ||
                          "/placeholder.png"
                        }
                        alt={stat?.title}
                        className="object-cover w-full h-[29.5vh] opacity-100 rounded-[6.9%]"
                      />
                    </div>
                    <div className="flex flex-grow flex-col bg-white rounded-3xl justify-between -mt-6 p-4">
                      <h3 className="text-[16px] font-semibold text-gray-800">
                        {stat?.title}
                      </h3>
                      <div className="mt-3 flex items-center group-hover:ml-4 duration-200  group-hover:bg-[#191919]  group-hover:text-white rounded-2xl  py-2 px-2 justify-center w-fit text-gray-500">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        <span>{stat?.subtitle}</span>
                      </div>
                    </div>
                  </Link>
                ))}
          {/* {statsData.map((stat, index) => (
            <div key={index} className="...">
              <img src={stat.imgSrc} alt={stat.title} />
              <h3>{stat.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: stat.content }} />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
// }
