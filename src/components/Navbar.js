"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, Menu, Search } from "lucide-react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { gql, GraphQLClient } from "graphql-request";
import { useRouter } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },

  { href: "/", label: "Insurance" },
  { href: "/mortgages", label: "Mortgages" },
  { href: "../aboutUs", label: "About Us" },
  { href: "/contactUs", label: "Contact" },
];
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
        posts(first: 20) {
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
            posts(first: 20) {
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
                posts(first: 20) {
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
export default function Navbar() {
  const [menuOpenedByClick, setMenuOpenedByClick] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openmenu, setOpenmenu] = useState(false);
  const [showInsuranceMenu, setShowInsuranceMenu] = useState(false);
  const [activeType, setActiveType] = useState(0);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const router = useRouter();
  const [insuranceTypes, setInsuranceTypes] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const wrapperRef = useRef(null);
  const [mortgagesdata, setMortgagesdata] = useState({});

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowSearch(false);
        setSuggestions([]);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await graphQLClient.request(GET_HERO_AND_STATS);

        data?.categories?.nodes?.forEach((category) => {
          if (category?.slug === "insurance") {
            setInsuranceTypes(category?.children.nodes);
          }
          if (category?.slug === "mortgages") {
            setMortgagesdata(category);
          }
        });
      } catch (err) {
        console.error("GraphQL Error:", err);
      }
    }

    fetchData();
  }, []);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowSearch(false);
        setSuggestions([]);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchClick = () => {
    setShowSearch((prev) => !prev);
    setQuery("");
    setSuggestions([]);
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setQuery(input);

    const filtered = insuranceTypes.filter((opt) =>
      opt?.name?.toLowerCase().includes(input.toLowerCase())
    );
    setSuggestions(filtered);
  };
  return (
    <div className=" flex justify-center relative h-[80px] w-full">
      <div className="bg-gradient-to-tl w-[80%] from-[#f1cc94] blur-2xl h-[60px] to-[#f5b94118]"></div>
      <div className="w-full absolute mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center  justify-between h-14">
          <div className="flex-shrink-0 ">
            <a
              href="#"
              className="text-[1.67rem] font-normal text-[#003366]"
              style={{ fontFamily: "Marcellus, serif" }}
            >
              CostaRicaInsurance
            </a>
          </div>

          {/* <nav className="hidden relative md:flex items-center space-x-6">
            {navLinks.map(({ href, label }) => (
              <Link
                // key={label}
                href={href}
                onClick={() => {
                  setOpenmenu(true);
                }}
                className="text-gray-600 hover:text-[#003366] transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
            {openmenu && (
              <div className="absolute flex top-10 z-50 bg-white  flex-col gap-2 rounded-[14px] w-[100%] py-2 px-4 ">
                
                  {insuranceTypes.map((type, i) => (
                    <div className="flex gap-2 bg-yellow-500">
                      <div className="flex flex-col gap-2 bg-red-500">
                    <div key={i}>{type.name}</div>
                    </div>
                   
                    </div>
                  ))}
               
              </div>
            )}
          </nav> */}
          <nav className="hidden md:flex items-center space-x-8 relative">
            {navLinks.map(({ href, label }) =>
              label === "Insurance" ? (
                <div
                  key={label}
                  onClick={() => {
                    // Toggle popup on click
                    setShowInsuranceMenu((prev) => !prev);
                    setMenuOpenedByClick(true);
                  }}
                  onMouseEnter={() => {
                    if (!menuOpenedByClick) {
                      setShowInsuranceMenu(true);
                    }
                  }}
                  onMouseLeave={() => {
                    if (!menuOpenedByClick) {
                      setShowInsuranceMenu(false);
                      setActiveType(null);
                    }
                  }}
                  className="relative"
                >
                  <span
                    className={`cursor-pointer text-gray-700 ${
                      showInsuranceMenu && "border-b-1"
                    } font-medium hover:text-[#003366] transition duration-300`}
                  >
                    {label}
                  </span>

                  {/* Dropdown Mega Menu */}
                  {showInsuranceMenu && (
                    <div
                      className="fixed top-13 left-1/2 -translate-x-1/2 w-[90vw]   md:w-[80vw] max-w-6xl bg-white backdrop-blur-md bg-opacity-90 shadow-2xl border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row gap-6 z-50 animate-fadeIn"
                      onMouseLeave={() => {
                        setShowInsuranceMenu(false);
                        setActiveType(null);
                      }}
                    >
                      {/* Left Column: Types */}
                      <div className="w-full md:w-1/3 space-y-2 overflow-y-auto max-h-[310px]">
                        {insuranceTypes?.map((type, i) => (
                          <div
                            key={i}
                            onClick={() => {
                              sessionStorage.setItem(
                                "selectedType",
                                JSON.stringify(type)
                              );
                              router.push(`/${type?.slug}`);
                            }}
                            onMouseEnter={() => setActiveType(i)}
                            className={`px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-all duration-200 ${
                              activeType === i
                                ? "bg-[#ff7100] text-white"
                                : "hover:bg-gray-100 text-gray-800"
                            }`}
                          >
                            {type?.name}
                          </div>
                        ))}
                      </div>

                      {/* Right Column: Options */}
                      <div className="w-full md:w-2/3">
                        {activeType !== null && (
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                            {insuranceTypes?.[activeType]?.posts?.nodes?.map(
                              (option, j) => (
                                <li
                                  key={j}
                                  className="px-4 py-2 bg-gray-50 rounded-md hover:bg-[#f1cc94] hover:text-[#003366] transition cursor-pointer"
                                >
                                  {option?.title}
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  onClick={() => {
                    sessionStorage.setItem(
                      "selectedType",
                      JSON.stringify(mortgagesdata)
                    );
                    router.push("/mortgages");
                  }}
                  key={label}
                  href={href}
                  className="text-gray-700 font-medium hover:text-[#003366] transition duration-300"
                >
                  {label}
                </Link>
              )
            )}
          </nav>

          {/* <div className="hidden md:block"> */}
          {/* <button className="bg-black text-white font-normal text-[1rem] px-6 py-2 rounded-tl-[200px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-none hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-md">
              GET STARTED
            </button> */}
          <div ref={wrapperRef} className="relative hidden md:block">
            {!showSearch ? (
              <button
                className="bg-black  text-white font-normal text-[1rem] px-6 py-2 rounded-tl-[200px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-none hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-md flex items-center gap-2"
                onClick={handleSearchClick}
              >
                <FaSearch />
              </button>
            ) : (
              <div className="relative">
                <input
                  type="text"
                  autoFocus
                  value={query}
                  onChange={handleInputChange}
                  className="w-64 md:w-64 lg:w-64 px-6 py-2 text-black font-normal text-[1rem] rounded-tl-[200px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-none border border-gray-300 shadow-md focus:outline-none transition-all duration-300"
                  placeholder="Search Insurance..."
                />
                {suggestions.length > 0 && (
                  <ul className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-3xl shadow-lg z-50">
                    {suggestions.map((option, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-800"
                        onClick={() => {
                          setQuery(option?.name);
                          setSuggestions([]);
                          sessionStorage.setItem(
                            "selectedType",
                            JSON.stringify(option)
                          );
                          router.push("/blog3");
                        }}
                      >
                        {option?.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
          {/* </div> */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700  focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 ">
          <div className="flex flex-col gap-4 py-4 px-6">
            {navLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="text-gray-600  text-base sm:text-lg hover:text-[#003366] transition-colors duration-300"
              >
                {label}
              </a>
            ))}

            <button className="bg-[#1e3a8a] text-white font-semibold px-6 py-2 rounded-full hover:bg-opacity-90 hover:scale-105 transition duration-300 w-full">
              GET STARTED
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}
