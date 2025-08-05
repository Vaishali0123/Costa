"use client";
import Head from "next/head";
import Banner from "./components/CSSBanner";
import Banner2 from "./components/CSSBanner2";
import BlogCard from "./components/BlogCard";
import ExtraSection from "./components/ExtraSection";
import LoadMore from "./components/LoadMore";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";
import { useEffect, useState } from "react";
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
export default function Page() {
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false); // ✅ Mark loading complete
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="bg-white min-h-screen">
        <main className="max-w-7xl mx-auto px-4 py-6">
          <Banner />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-full max-w-sm bg-white rounded-xl shadow-md overflow-hidden animate-pulse"
                  >
                    {/* Image Placeholder */}
                    <div className="h-48 w-full bg-gray-300" />

                    {/* Content Placeholder */}
                    <div className="p-4 space-y-4">
                      {/* Title Placeholder */}
                      <div className="h-4 bg-gray-300 rounded w-3/4" />
                      {/* Text Placeholder */}
                      <div className="h-3 bg-gray-200 rounded w-full" />
                      <div className="h-3 bg-gray-200 rounded w-5/6" />
                      {/* Author & Meta Placeholder */}
                      <div className="flex items-center space-x-3 mt-4">
                        <div className="h-8 w-8 bg-gray-300 rounded-full" />
                        <div className="h-3 bg-gray-200 rounded w-1/3" />
                      </div>
                    </div>
                  </div>
                ))
              : blog?.posts?.nodes?.map((post, i) => (
                  <BlogCard
                    key={i}
                    title={post?.title}
                    image={
                      post?.featuredImage?.node?.sourceUrl ||
                      "/images/default.png"
                    }
                    description={stripHtml(post.content).slice(0, 120) + "..."}
                  />
                ))}
            {/* {blog?.posts?.nodes?.map((post, i) => (
              <BlogCard
                key={i}
                title={post?.title}
                image={
                  post?.featuredImage?.node?.sourceUrl || "/images/default.png"
                }
                description={stripHtml(post.content).slice(0, 120) + "..."}
              />
            ))} */}
            {/* <BlogCard
              title="Integer Maecenas Eget Viverra"
              image="/images/ocean-beach.png"
            />
            <BlogCard
              title="Aenean eleifend ante maecenas"
              image="/images/mountain-lake.png"
            />
            <BlogCard
              title="Integer Maecenas Eget Viverra"
              image="/images/starry-night.png"
            />
            <BlogCard
              title="Integer Maecenas Eget Viverra"
              image="/images/mountain-hiker.png"
            />
            <BlogCard
              title="Aenean eleifend ante maecenas"
              image="/images/woman-photographer.png"
            />
            <BlogCard
              title="Integer Maecenas Eget Viverra"
              image="/images/city-street.png"
            />
            <BlogCard
              title="Travel Adventures"
              image="/images/mountain-lake-reflection.png"
            />
            <BlogCard
              title="Photography Tips"
              image="/images/desert-highway.png"
            />
            <BlogCard
              title="Lifestyle Stories"
              image="/images/passport-travel.png"
            /> */}
          </div>
          {/* <LoadMore /> */}
          <Banner2 />
          <ExtraSection cards={cards} />
        </main>
      </div>
    </>
  );
}
