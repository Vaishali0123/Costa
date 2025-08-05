"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Activity, Percent, BellRing, Bell } from "lucide-react";

const icons = {
  Activity: <Activity className="w-4 h-4 text-orange-500" />,
  Percent: <Percent className="w-4 h-4 text-orange-500" />,
  BellRing: <BellRing className="w-4 h-4 text-orange-500" />,
  Bell: <Bell className="w-4 h-4 text-orange-500" />,
};
function stripImages(html) {
  if (!html) return "";
  return html.replace(/<img[^>]*>/g, ""); // Remove all <img ...> tags
}
const blogs = [
  {
    id: 1,
    title: "Secured Policy blog",
    icon: icons.Activity,
    description: "Trace your agents & monitor usage directly in production.",
    longDescription:
      "Trace your agents & monitor usage directly  in production Trace your agents & monitor usage directly  in production Trace your agents & monitor usage directly  in production Trace your agents & monitor usage directly  in production Trace your agents & monitor usage directly  in productionTrace your agents & monitor usage directly in production. This extended description provides more detail about the secured policy, ensuring that all stakeholders understand the benefits and the implementation process. We focus on transparency and real-time monitoring.",
    image: "/news.jpg",
  },
  {
    id: 2,
    title: "Undertaking Risks blog",
    icon: icons.Percent,
    description: "Trace your agents & monitor usage directly in production.",
    longDescription:
      "A deep dive into how we assess and undertake risks. Our methodology is designed to protect your interests while maximizing potential. This blog post explores our risk models and case studies of successful risk management in volatile markets.",
    image: "",
  },
  {
    id: 3,
    title: "Insurable Interest blog",
    icon: icons.BellRing,
    description: "Trace your agents & monitor usage directly in production.",
    longDescription:
      "What constitutes an insurable interest? This post clarifies the concept with clear examples and explains its importance in the validity of an insurance policy. A must-read for both new and experienced policyholders.",
    image: "",
  },
  {
    id: 4,
    title: "Financially Help blog",
    icon: icons.Bell,
    description: "Trace your agents & monitor usage directly in production.",
    longDescription:
      "Trace your agents & monitor usage directly  in production Trace your agents & monitor usage directly  in production Trace your agents & monitor usage directly  in production Trace your agents & monitor usage directly  in production Trace your agents & monitor usage directly  in production Trace your agents & monitor usage directly  in production Trace your agents & monitor usage directly  in productionDiscover the various ways our policies can provide financial help during unexpected life events. From lump-sum payouts to ongoing support, we detail the financial safety nets available to you and your family.",
    image: "",
  },
  {
    id: 5,
    title: "Retirement Planning blog",
    icon: icons.Percent,
    description: "Ensure your financial future with timely retirement plans.",
    longDescription:
      "It’s never too early to start planning for retirement. Our comprehensive guide walks you through creating a robust retirement plan, ensuring your financial future is secure and allowing you to enjoy your golden years with peace of mind.",
    image: "",
  },
];

export default function InsuranceNewsSection({ insurancedata }) {
  const [activeBlog, setActiveBlog] = useState(insurancedata?.[0]);
  useEffect(() => {
    setActiveBlog(insurancedata?.[0]);
  }, [insurancedata]);

  return (
    <div className="font-sans">
      <div className="py-16 sm:py-24 px-4 relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200/40 rounded-full opacity-50 blur-3xl" />
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-800">
            Latest Insurance News
          </h2>
          <div className="bg-white/70 rounded-2xl p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col  lg:flex-row gap-8 lg:h-[420px]">
              {/* Main Content Area */}
              <motion.div
                key={activeBlog?.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="flex-1  shadow-[-6px_4px_41.5px_0px_#FFF8E9]"
              >
                <div className="relative w-[35.5rem] h-[12.25rem] rounded-xl overflow-hidden mb-6 shadow-md">
                  {activeBlog?.featuredImage?.node?.sourceUrl ? (
                    <img
                      src={activeBlog?.featuredImage?.node?.sourceUrl}
                      alt="img"
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0 w-full h-full"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500 text-sm">
                      No image available
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl" />
                </div>
                <div className="flex items-center gap-3 text-lg font-bold text-gray-900 mb-3">
                  {activeBlog?.icon}
                  {activeBlog?.title}
                </div>
                {/* <p className="text-gray-600 text-sm leading-relaxed">
                  {activeBlog?.longDescription}
                </p> */}
                <div
                  className="text-gray-600 text-sm leading-relaxed overflow-hidden line-clamp-6"
                  dangerouslySetInnerHTML={{
                    __html: stripImages(activeBlog?.content || ""),
                  }}
                />
              </motion.div>

              {/* Blog List */}
              <div className="flex-1  overflow-y-auto pr-2 custom-scrollbar ">
                <div className="flex flex-col  gap-2  h-[120px]">
                  {insurancedata?.map((blog, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-[15px] cursor-pointer transition-all duration-200 ${
                        blog?.id === activeBlog?.id
                          ? "bg-orange-100/70 border border-orange-300"
                          : "hover:bg-gray-50 border border-gray-200/60"
                      }`}
                      onClick={() => setActiveBlog(insurancedata[index])}
                    >
                      <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                        {blog?.icon || blogs[index]?.icon}
                        {blog?.title}
                      </div>
                      <p className="text-gray-600 text-sm mt-1">
                        {blog?.description || "No description available"}
                      </p>

                      {/* ✅ Only show <hr> if NOT selected and NOT last blog */}
                      {blog?.id !== activeBlog?.id &&
                        blog?.id !== blogs[blogs.length - 1].id && (
                          <hr className="mt-4 border-gray-200/80" />
                        )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollbar styles */}
        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            height: 5px;
            width: 5px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #fcd3a6;
            border-radius: 10px;
            height: 5px;
          }
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #fcd3a6 transparent;
          }
        `}</style>
      </div>
    </div>
  );
}
