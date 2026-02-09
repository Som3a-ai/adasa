import React from "react";
import Title from "../Home/Title";
import Blogs from "./Blogs";

export default function About() {
  return (
    <>
      <div className=" py-30  bg-[#0a0a0a]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Title title="مدونتنا" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            استكشف <span className="gradient-text">مقالاتنا</span>
          </h1>

          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </div>

      <Blogs/>
    </>
  );
}
