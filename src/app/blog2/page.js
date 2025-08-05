"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard";
import BlogHome from "./components/BlogHome";
import FeaturedPost from "./components/FeaturedPost";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";
function stripHtml(html) {
  return html.replace(/<[^>]*>?/gm, "");
}

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
const page = () => {
  const [insurancedata, setInsurancedata] = useState([]);
  const [cards, setCards] = useState([]);
  const [blog, setBlog] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await graphQLClient.request(GET_HERO_AND_STATS);
        console.log(data, "data");
        // Flatten posts from all categories
        const allPosts = data.categories.nodes.flatMap((category) =>
          category.posts.nodes.map((post) => ({
            id: post.id,
            title: post.title,
            content: post.content,
            image: post.featuredImage?.node?.sourceUrl || "/images/default.png",
          }))
        );

        setInsurancedata(allPosts); // use for rendering BlogCard
        data?.categories?.nodes?.forEach((category) => {
          if (category?.slug === "insurance") {
            setCards(category?.children?.nodes);
            setBlog(category?.children?.nodes[0]);
          }
        });
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <BlogCard />
      <BlogHome />
      <FeaturedPost />
    </div>
  );
};

export default page;
