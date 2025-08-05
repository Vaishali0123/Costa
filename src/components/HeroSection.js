"use client";
import React, { act, useEffect, useState } from "react";
import { Play, ArrowRight } from "lucide-react";
import BlurText from "./BlurText";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";
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
        console.log(data, "data");
        // const sortedPosts = [...data.posts.nodes].sort(
        //   (a, b) => new Date(b.date) - new Date(a.date)
        // );

        data?.categories?.nodes?.forEach((category) => {
          if (category?.slug === "car-insurance") {
            setCardata(category?.posts.nodes[0]);
            setCardataposts(category?.posts.nodes);
            console.log(category?.posts.nodes[0], "category?.posts.nodes[0]");
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

  // const statsData = [
  //   {
  //     imgSrc: "/img1.jpg",
  //     title: "1.2 million customers world wide",
  //     subtitle: "We're handling",
  //   },
  //   {
  //     imgSrc: "/img2.jpg",
  //     title: "Trusted by thousands globally",
  //     subtitle: "Customer support 24/7",
  //   },
  //   {
  //     imgSrc: "/img3.jpg",
  //     title: "Award winning protection plans",
  //     subtitle: "Certified & licensed",
  //   },
  // ];

  // Auto-switch label every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % labels.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [labels.length]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center py-20">
      {/* Hero Content Flex Wrapper */}
      <div className="relative flex px-4 sm:px-6 lg:px-8 flex-col items-center gap-10  md:flex-row md:items-start">
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
            <button className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ededed] transition-transform duration-300 hover:scale-105 ">
              <Play className="h-8 w-8 text-[#003366]" />
            </button>
          </div>

          <div className="mt-8 flex  flex-wrap justify-center gap-3 md:justify-start">
            {labels.map((label, index) => (
              <button
                key={label}
                className={`flex h-11 items-center whitespace-nowrap rounded-full border px-5 font-semibold transition-all duration-300
                ${
                  activeIndex === index
                    ? "scale-105 border-[#003366] bg-transparent text-[#003366]"
                    : "border-transparent bg-[#EDEDED] text-gray-700 hover:bg-[#003366] hover:text-white"
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
        <div className="relative  w-full max-w-sm md:max-w-none md:w-[20.6vw] h-[48vh] md:h-[52vh]  mb-10 sm:mb-10 md:mb-0 md:mt-0 min-[1101px]:ml-[13vw] ">
          <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-lg">
            <img
              src={
                activeIndex === 0
                  ? lifedata?.featuredImage?.node?.sourceUrl
                  : activeIndex === 1
                  ? cardata?.featuredImage?.node?.sourceUrl
                  : healthdata?.featuredImage?.node?.sourceUrl
              }
              alt="Family protected by insurance"
              className="absolute inset-0 w-full h-full rounded-3xl object-cover z-0"
            />
            <div className="absolute inset-0 rounded-3xl bg-black/30 z-10"></div>
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
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col  sm:flex-row sm:flex-wrap gap-6">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse flex flex-col overflow-hidden rounded-2xl bg-white w-full sm:w-[48%] md:w-[31%]"
                >
                  <div className="aspect-video bg-gray-200 w-full rounded-[6.9%]"></div>
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
                  <div
                    key={stat?.title}
                    className="flex flex-col  overflow-hidden rounded-2xl bg-white   w-full sm:w-[48%] md:w-[31%]"
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
                    <div className="flex flex-grow flex-col justify-between p-5">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {stat?.title}
                      </h3>
                      <div className="mt-3 flex items-center text-gray-500">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        <span>{stat?.subtitle}</span>
                      </div>
                    </div>
                  </div>
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

// "use client";
// import React, { useEffect, useState } from "react";
// import { Play, ArrowRight } from "lucide-react";
// import BlurText from "./BlurText";
// import { GraphQLClient } from "graphql-request";
// import { gql } from "graphql-request";

// const graphQLClient = new GraphQLClient(
//   "https://admin.costaricaninsurance.com/graphql",
//   {
//     headers: { "Content-Type": "application/json" },
//   }
// );

// const GET_HERO_AND_STATS = gql`
//   query GetAllPosts {
//     posts(first: 100) {
//       nodes {
//         id
//         title
//         slug
//         excerpt
//         content
//         date
//         featuredImage {
//           node {
//             sourceUrl
//           }
//         }
//         categories {
//           nodes {
//             name
//             slug
//           }
//         }
//       }
//     }
//   }
// `;

// export default function HeroSection() {
//   const labels = ["Life Insurance", "Car Insurance", "Home Insurance"];
//   const categoryMappings = {
//     "Life Insurance": "health-insurance", // Based on your data structure
//     "Car Insurance": "car-insurance",
//     "Home Insurance": "home-insurance",
//   };

//   const [hero, setHero] = useState(null);
//   const [stats, setStats] = useState([]);
//   const [posts, setPosts] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [categoryPosts, setCategoryPosts] = useState({});
//   const [currentDisplayPosts, setCurrentDisplayPosts] = useState([]);
//   const [latestPost, setLatestPost] = useState(null);
//   const [categoryContent, setCategoryContent] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await graphQLClient.request(GET_HERO_AND_STATS);
//         console.log(data, "data");
//         setPosts(data.posts.nodes);

//         // Get the latest post (first one after sorting by date)
//         const sortedPosts = [...data.posts.nodes].sort(
//           (a, b) => new Date(b.date) - new Date(a.date)
//         );
//         const latest = sortedPosts[0];
//         setLatestPost(latest);

//         // Group posts by category
//         const groupedPosts = {};
//         data.posts.nodes.forEach((post) => {
//           post.categories.nodes.forEach((category) => {
//             if (!groupedPosts[category.slug]) {
//               groupedPosts[category.slug] = [];
//             }
//             groupedPosts[category.slug].push(post);
//           });
//         });

//         // Sort posts by date (most recent first) for each category
//         Object.keys(groupedPosts).forEach((categorySlug) => {
//           groupedPosts[categorySlug].sort(
//             (a, b) => new Date(b.date) - new Date(a.date)
//           );
//         });

//         setCategoryPosts(groupedPosts);

//         // Set initial posts for first category
//         const firstCategorySlug = categoryMappings[labels[0]];
//         setCurrentDisplayPosts(
//           (groupedPosts[firstCategorySlug] || []).slice(0, 3)
//         );
//       } catch (err) {
//         console.error("GraphQL Error:", err);
//       }
//     }

//     fetchData();
//   }, []);

//   // Update displayed posts when active category changes
//   useEffect(() => {
//     const currentCategorySlug = categoryMappings[labels[activeIndex]];
//     const postsForCategory = (categoryPosts[currentCategorySlug] || []).slice(
//       0,
//       3
//     );
//     setCurrentDisplayPosts(postsForCategory);

//     // Extract category-specific content from latest post
//     if (latestPost && latestPost.content) {
//       const categoryContent = extractCategoryContent(
//         latestPost.content,
//         labels[activeIndex]
//       );
//       setCategoryContent(categoryContent);
//     }
//   }, [activeIndex, categoryPosts, latestPost]);

//   function handleAnimationComplete() {
//     console.log("Animation finished");
//   }

//   // Fallback stats data
//   const fallbackStatsData = [
//     {
//       imgSrc: "/img1.jpg",
//       title: "1.2 million customers world wide",
//       subtitle: "We're handling",
//     },
//     {
//       imgSrc: "/img2.jpg",
//       title: "Trusted by thousands globally",
//       subtitle: "Customer support 24/7",
//     },
//     {
//       imgSrc: "/img3.jpg",
//       title: "Award winning protection plans",
//       subtitle: "Certified & licensed",
//     },
//   ];

//   // Auto-switch label every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % labels.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [labels.length]);

//   // Function to strip HTML tags from excerpt
//   const stripHtml = (html) => {
//     const tmp = document.createElement("DIV");
//     tmp.innerHTML = html;
//     return tmp.textContent || tmp.innerText || "";
//   };

//   // Function to handle manual category selection
//   const handleCategoryClick = (index) => {
//     setActiveIndex(index);
//   };

//   // Function to extract content related to specific category from post content
//   const extractCategoryContent = (content, category) => {
//     if (!content)
//       return "Discover comprehensive insurance solutions tailored to your needs.";

//     // Convert HTML to text for better processing
//     const tempDiv = document.createElement("div");
//     tempDiv.innerHTML = content;
//     const textContent = tempDiv.textContent || tempDiv.innerText || "";

//     // Split content into paragraphs
//     const paragraphs = textContent
//       .split("\n")
//       .filter((p) => p.trim().length > 50);

//     // Look for category-related content
//     const categoryKeywords = {
//       "Life Insurance": [
//         "life insurance",
//         "life coverage",
//         "beneficiaries",
//         "death",
//         "premium",
//         "term life",
//         "whole life",
//       ],
//       "Car Insurance": [
//         "auto insurance",
//         "car insurance",
//         "vehicle",
//         "collision",
//         "comprehensive",
//         "liability",
//         "automotive",
//       ],
//       "Home Insurance": [
//         "home insurance",
//         "property",
//         "homeowner",
//         "dwelling",
//         "personal property",
//         "liability coverage",
//       ],
//     };

//     const keywords = categoryKeywords[category] || [];

//     // Find paragraphs that contain category keywords
//     let relevantParagraphs = paragraphs.filter((paragraph) =>
//       keywords.some((keyword) =>
//         paragraph.toLowerCase().includes(keyword.toLowerCase())
//       )
//     );

//     // If no specific content found, return first few sentences
//     if (relevantParagraphs.length === 0) {
//       const sentences = textContent
//         .split(".")
//         .filter((s) => s.trim().length > 20);
//       return sentences.slice(0, 2).join(". ") + ".";
//     }

//     // Return first relevant paragraph or combine first two if short
//     const result = relevantParagraphs[0];
//     return result.length > 150 ? result.substring(0, 150) + "..." : result;
//   };

//   return (
//     <div className="relative w-full h-full flex flex-col items-center justify-center py-20">
//       {/* Hero Content Flex Wrapper */}
//       <div className="relative flex px-4 sm:px-6 lg:px-8 flex-col items-center gap-10 md:flex-row md:items-start">
//         {/* Left Section - Text and Buttons */}
//         <div className="w-full max-w-lg text-center md:text-left">
//           <BlurText
//             text="We guarantee the future of the things you care about!"
//             delay={150}
//             animateBy="words"
//             direction="top"
//             onAnimationComplete={handleAnimationComplete}
//             className="text-4xl md:text-5xl text-gray-800 leading-tight mb-6"
//             style={{ fontFamily: "Marcellus, serif" }}
//           />

//           <p className="mt-4 text-gray-600">
//             Discover comprehensive insurance solutions tailored to your needs.
//             From protecting your family to securing your assets, we've got you
//             covered.
//           </p>

//           <div className="mt-8 flex items-center justify-center gap-6 md:justify-start">
//             <button className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ededed] transition-transform duration-300 hover:scale-105">
//               <Play className="h-8 w-8 text-[#003366]" />
//             </button>
//           </div>

//           <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
//             {labels.map((label, index) => (
//               <button
//                 key={label}
//                 onClick={() => handleCategoryClick(index)}
//                 className={`flex h-11 items-center whitespace-nowrap rounded-full border px-5 font-semibold transition-all duration-300 cursor-pointer
//                 ${
//                   activeIndex === index
//                     ? "scale-105 border-[#003366] bg-transparent text-[#003366]"
//                     : "border-transparent bg-[#EDEDED] text-gray-700 hover:bg-[#003366] hover:text-white"
//                 }`}
//               >
//                 {label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Right Section - Image with Overlay */}
//         <div className="relative w-full max-w-sm md:max-w-none md:w-[20.6vw] h-[48vh] md:h-[52vh] mb-10 sm:mb-10 md:mb-0 md:mt-0 min-[1101px]:ml-[13vw]">
//           <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-lg">
//             <img
//               src="/hero.jpg"
//               alt="Family protected by insurance"
//               className="absolute inset-0 w-full h-full rounded-3xl object-cover z-0"
//             />
//             <div className="absolute inset-0 rounded-3xl bg-black/30 z-10"></div>
//             <div className="absolute inset-0 z-20 flex h-full flex-col items-center justify-end p-6 text-center text-white">
//               <h2 className="text-xl font-semibold">MY INSURANCE ACCOUNT</h2>
//               <p className="my-4 text-base max-w-[85%]">
//                 Access your personalized insurance dashboard and manage all your
//                 policies in one place.
//               </p>
//               <button className="w-full max-w-xs rounded-full bg-[#1E3161] px-6 py-3 font-semibold transition duration-300 hover:bg-opacity-90 hover:scale-105 transform cursor-pointer">
//                 MY-ACCESS
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Dynamic Posts Section */}
//       <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8 py-10">
//         <div className="mb-6">
//           <h2 className="text-2xl font-bold text-gray-800 text-center">
//             Latest {labels[activeIndex]} Articles
//           </h2>
//         </div>

//         <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6">
//           {currentDisplayPosts.length > 0
//             ? currentDisplayPosts.map((post, index) => (
//                 <div
//                   key={post.id}
//                   className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg w-full sm:w-[48%] md:w-[31%] transition-transform duration-300 hover:scale-105"
//                 >
//                   <div className="aspect-video w-full">
//                     <img
//                       src={
//                         post.featuredImage?.node?.sourceUrl ||
//                         `/img${index + 1}.jpg`
//                       }
//                       alt={post.title}
//                       className="object-cover w-full h-[29.5vh] opacity-100 rounded-t-2xl"
//                     />
//                   </div>
//                   <div className="flex flex-grow flex-col justify-between p-5">
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
//                         {post.title}
//                       </h3>
//                       <p className="text-sm text-gray-600 mb-3 line-clamp-3">
//                         {stripHtml(post.excerpt)}
//                       </p>
//                     </div>
//                     <div className="mt-3 flex items-center justify-between">
//                       <div className="flex items-center text-gray-500">
//                         <ArrowRight className="mr-2 h-4 w-4" />
//                         <span className="text-sm">Read More</span>
//                       </div>
//                       <span className="text-xs text-gray-400">
//                         {new Date(post.date).toLocaleDateString()}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             : // Fallback to static data if no posts available
//               fallbackStatsData.map((stat, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg w-full sm:w-[48%] md:w-[31%]"
//                 >
//                   <div className="aspect-video w-full">
//                     <img
//                       src={stat.imgSrc}
//                       alt={stat.title}
//                       className="object-cover w-full h-[29.5vh] opacity-100 rounded-t-2xl"
//                     />
//                   </div>
//                   <div className="flex flex-grow flex-col justify-between p-5">
//                     <h3 className="text-lg font-semibold text-gray-800">
//                       {stat.title}
//                     </h3>
//                     <div className="mt-3 flex items-center text-gray-500">
//                       <ArrowRight className="mr-2 h-4 w-4" />
//                       <span>{stat.subtitle}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//         </div>
//       </div>
//     </div>
//   );
// }
