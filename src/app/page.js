"use client";
import Image from "next/image";
import HeroSection from "../components/HeroSection";
import Insurance from "../components/InsuranceSection";
// import Footer from "../components/Footer";
import Review from "../components/Review";
import News from "../components/News";
import InsuranceTypes from "../components/InsuranceTypes";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";
import { useEffect, useState } from "react";
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
      }
    }
  }
`;

export default function Home() {
  const [reviewdata, setReviewdata] = useState([]);
  const [mortgagesdata, setMortgagesdata] = useState([]);
  const [insurancedata, setInsurancedata] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await graphQLClient.request(GET_HERO_AND_STATS);
        console.log(data, "data");
        // const sortedPosts = [...data.posts.nodes].sort(
        //   (a, b) => new Date(b.date) - new Date(a.date)
        // );

        data?.categories?.nodes?.forEach((category) => {
          // if (category?.slug === "car-insurance") {
          //   setCardata(category?.posts.nodes[0]);
          //   console.log(category?.posts.nodes[0], "category?.posts.nodes[0]");
          // }
          // if (category?.slug === "health-insurance") {
          //   sethealthdata(category.posts.nodes[0]);
          // }
          // if (category?.slug === "life-insurance") {
          //   setlifedata(category.posts.nodes[0]);
          // }
          if (category?.slug === "mortgages") {
            setMortgagesdata(category.posts.nodes);
          }
          if (category?.slug === "reviews") {
            setReviewdata(category.posts.nodes);
          }
          if (category?.slug === "insurance") {
            setInsurancedata(category.posts.nodes);
          }
        });
      } catch (err) {
        console.error("GraphQL Error:", err);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="space-y-10">
      <HeroSection />
      <Insurance insurancedata={insurancedata} />
      <Review reviewdata={reviewdata} mortgagesdata={mortgagesdata} />
      <News insurancedata={insurancedata} />
      <InsuranceTypes />
    </div>
  );
}
