"use client";
import React, { useEffect, useState } from "react";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";
import { useRouter } from "next/navigation";
const graphQLClient = new GraphQLClient(
  "https://admin.costaricaninsurance.com/graphql",
  {
    headers: { "Content-Type": "application/json" },
  }
);

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

const PopularBlogs = ({ mortgagesdata }) => {
  const [insurancedata, setInsurancedata] = useState([]);
  const router = useRouter();
  const [mortgage, setMortgages] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await graphQLClient.request(GET_HERO_AND_STATS);
        console.log(data, "vbnkm");

        data?.categories?.nodes?.forEach((category) => {
          if (category?.slug === "insurance") {
            setInsurancedata(category?.children?.nodes);
          }
          if (category?.slug === "mortgages") {
            setMortgages(category);
          }
        });
      } catch (err) {
        console.error("GraphQL Error:", err);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-center  px-6 py-16 font-sans">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-[marcellus] mb-2">
          Latest Mortgages
        </h2>
        <p className="text-gray-600 text-lg">
          Ideas, trends, and inspiration for a brighter future
        </p>
      </div>

      {/* Blog Section */}
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-[1400px] sm:ml-27">
        {/* Left Column: One Tall Card */}
        <div className="w-full lg:w-2/5">
          <div className="flex flex-col bg-gray-50 rounded-3xl overflow-hidden hover:scale-105 duration-150 lg:h-[550px] w-full">
            <img
              src={mortgagesdata?.[0]?.featuredImage?.node?.sourceUrl}
              alt={mortgagesdata?.[0]?.title}
              className="w-full h-[200px] lg:h-2/3 object-cover"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h3 className="text-[24px] lg:text-[28px] font-[marcellus] font-bold text-gray-900 mb-3 break-words">
                {mortgagesdata?.[0]?.title}
              </h3>
              <div className="flex justify-between items-center text-sm text-gray-600 mt-auto">
                {/* <div className="flex items-center gap-2">
                  <img
                    src="/blog/card1logo.png"
                    alt="Clara Wilson"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>Clara Wilson</span>
                </div> */}
                {/* <span>Nov 29, 2024</span> */}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Two Cards */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          {/* Card 1 */}
          <div className="flex flex-col lg:flex-row bg-gray-50 rounded-3xl overflow-hidden hover:scale-105 duration-150 w-full lg:h-[260px]">
            {/* Image */}
            <div className="w-full lg:w-[40%] h-[200px] lg:h-full">
              <img
                src={mortgagesdata?.[1]?.featuredImage?.node?.sourceUrl}
                alt={mortgagesdata?.[1]?.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <div className="w-full lg:w-[60%] p-4 flex flex-col justify-between">
              <h3 className="text-[24px] lg:text-[30px] font-bold font-[marcellus] text-gray-900 mb-3 break-words">
                {mortgagesdata?.[1]?.title}
              </h3>
              <div className="flex justify-between items-center text-sm text-gray-600 mt-auto">
                {/* <div className="flex items-center gap-2">
                  <img
                    src="/blog/card2logo.png"
                    alt="Amelia Scott"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>Amelia Scott</span>
                </div> */}
                {/* <span>Nov 29, 2024</span> */}
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col lg:flex-row bg-gray-50 rounded-3xl overflow-hidden hover:scale-105 duration-150 w-full lg:h-[260px]">
            {/* Image */}
            <div className="w-full lg:w-[40%] h-[200px] lg:h-full">
              <img
                src={mortgagesdata?.[2]?.featuredImage?.node?.sourceUrl}
                alt={mortgagesdata?.[2]?.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <div className="w-full lg:w-[60%] p-4 flex flex-col justify-between">
              <h3 className="text-[24px] lg:text-[30px] font-bold font-[marcellus] text-gray-900 mb-3 break-words">
                {mortgagesdata?.[2]?.title}
              </h3>
              <div className="flex justify-between items-center text-sm text-gray-600 mt-auto">
                {/* <div className="flex items-center gap-2">
                  <img
                    src={mortgagesdata?.[2]?.featuredImage?.node?.sourceUrl}
                    alt="Blog 3"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>Oliver Grant</span>
                </div> */}
                {/* <span>Nov 29, 2024</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* View More Button */}
      <div className="mt-15 text-center">
        <button
          onClick={() => {
            sessionStorage.setItem("selectedType", JSON.stringify(mortgage));
            router.push("/mortgages");
          }}
          className="bg-yellow-400 cursor-pointer hover:bg-yellow-300 text-black font-semibold px-10 py-3 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default PopularBlogs;
