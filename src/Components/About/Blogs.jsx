import React, { useState, useEffect } from "react";
import DataBlog from "./DataBlog";
import DataBlogGrid from "./DataBlogGrid";
import data from "./../data.json";

export default function Blogs() {
  let [copiedData, setCopiedData] = useState(structuredClone(data.posts));
  let [layout, setLayout] = useState("grid");
  let [activeIndex, setActiveIndex] = useState(0);
  const [activePage, setActivePage] = useState(0);
  const itemsPerPage = 6;
  const categories = [
    "جميع المقالات",
    "إضاءة",
    "بورتريه",
    "مناظر طبيعية",
    "تقنيات",
    "معدات",
  ];

  useEffect(() => {
    const startIndex = 0;
    const endIndex = startIndex + itemsPerPage;
    setCopiedData(data.posts.slice(startIndex, endIndex));
  }, []);

  const numBtns = new Array(5).fill(null);

  function filter(index) {
    setActiveIndex(index);
    if (index === 0) {
      setCopiedData(structuredClone(data.posts));
      return;
    }

    let filteredData = structuredClone(data.posts);

    let newFilter = filteredData.filter((blog) => {
      return blog.category === categories[index];
    });

    setCopiedData(newFilter);
  }

  function search(input) {
    let copyData = structuredClone(data.posts);

    let searchResults = copyData.filter((blog) => {
      return (
        blog.category.includes(input) ||
        blog.title.includes(input) ||
        blog.content.includes(input)
      );
    });

    setCopiedData(searchResults);
  }

  function getPage(index) {
    setActivePage(index);

    let startIndex = index * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;

    let currentItems = data.posts.slice(startIndex, endIndex);

    setCopiedData(currentItems);
  }

  function nextPage(){

    if(activePage < 5){
      getPage(activePage + 1);
    }
  }
  function previousPage(){

    if(activePage > 0){
      getPage(activePage - 1);
    }
  }

  return (
    <>
      <section className="bg-[#0a0a0a]">
        <div className="sticky top-20 z-40 bg-[#0a0a0a]  border-b border-[#262626]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative w-full md:w-80">
                <input
                  placeholder="ابحث في المقالات..."
                  className="input-dark w-full px-5 py-3 pr-12 rounded-2xl text-neutral-500"
                  type="text"
                  onChange={(e) => search(e.target.value)}
                ></input>
                <i className="fas fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-xl text-neutral-500"></i>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((cat, index) => (
                  <button
                    key={cat}
                    onClick={() => filter(index)}
                    className={`
                px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30
                cursor-pointer
                ${
                  activeIndex === index
                    ? "bg-orange-500 text-white"
                    : "text-neutral-400 hover:bg-neutral-800"
                }
              `}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-[146px]">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-neutral-400">
              عرض{" "}
              <span className="font-bold text-white">{copiedData.length} </span>
              مقالات
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                <button
                  className={`p-2 rounded-lg transition-all duration-300  text-white cursor-pointer ${layout === "grid" ? "bg-orange-500" : ""}`}
                  onClick={() => setLayout("grid")}
                >
                  <i className="fa-solid fa-table-cells-large text-white"></i>
                </button>
                <button
                  className={`p-2 rounded-lg transition-all duration-300  text-white  cursor-pointer ${layout === "list" ? "bg-orange-500" : ""}`}
                  onClick={() => setLayout("list")}
                >
                  <i className="fa-solid fa-bars text-white"></i>
                </button>
              </div>
            </div>
          </div>

          <div
            class={`${layout === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col gap-6"}`}
          >
            {layout === "grid"
              ? copiedData.map((blog) => (
                  <DataBlogGrid
                    key={blog.id}
                    title={blog.title}
                    image={blog.image}
                    category={blog.category}
                    avatar={blog.author.avatar}
                    name={blog.author.name}
                     slug={blog.slug}
                  />
                ))
              : copiedData.map((blog) => (
                  <DataBlog
                    key={blog.id}
                    title={blog.title}
                    image={blog.image}
                    category={blog.category}
                    avatar={blog.author.avatar}
                    name={blog.author.name}
                    slug={blog.slug}
                  />
                ))}
          </div>

          <div class="flex justify-center items-center gap-2 mt-12">
            <button class={`p-3 rounded-xl border transition-all duration-300 bg-[#0a0a0a] border-[#262626] text-neutral-600 ${activePage > 0 ? "cursor-pointer" : "cursor-not-allowed"}`} disabled={activePage < 1} onClick={()=> previousPage()}>
              <i className="fas fa-arrow-right"></i>
            </button>
            <div class="flex items-center gap-1">
              {numBtns.map((btn, index) => {
                return (
                  <button
                    class={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300  ${activePage === index ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"}`}
                    onClick={() => getPage(index)}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
            <button class={`p-3 rounded-xl border transition-all duration-300 bg-[#0a0a0a] border-[#262626] text-neutral-600 ${activePage < 4 ? "cursor-pointer" : "cursor-not-allowed"}`}    disabled={activePage >= 4} onClick={()=>nextPage()}>
              <i className="fas fa-arrow-left"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
