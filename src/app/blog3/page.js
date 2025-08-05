import Head from "next/head";
import Banner from "./components/CSSBanner";
import Banner2 from "./components/CSSBanner2";
import BlogCard from "./components/BlogCard";
import ExtraSection from "./components/ExtraSection";
import LoadMore from "./components/LoadMore";
export default function Home() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <main className="max-w-7xl mx-auto px-4 py-6">
          <Banner />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            <BlogCard
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
            />
          </div>
          <LoadMore />
          <Banner2 />
          <ExtraSection />
        </main>
      </div>
    </>
  );
}
