import React from "react";
import Title from "./Title";
import { Link } from 'react-router-dom';

export default function Filter() {
  return (
    <>
      <section className="py-24 bg-[#0a0a0a]  overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Title title="التصنيفات" />
            <h2 className="text-6xl font-bold text-white">استكشف حسب الموضوع</h2>
            <p className="text-xl text-neutral-500  mt-7 max-w-lg mx-auto">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <Link
              className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
              to="/blog"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                  <i className="fa-solid fa-sun text-xl text-orange-500 group-hover:text-white transition-colors duration-300"></i>
                </div>

                <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                  إضاءة
                </h3>

                <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                  3 مقالة
                </p>

                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                
                
                  <i className="fas fa-arrow-left text-white"></i>
                </div>
              </div>
            </Link>
             <Link
              className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
              to="/blog"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                  <i className="fa-solid fa-user text-xl text-orange-500 group-hover:text-white transition-colors duration-300"></i>
                </div>

                <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                  بورتريه
                </h3>

                <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                  3 مقالة
                </p>

                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                
                
                  <i className="fas fa-arrow-left text-white"></i>
                </div>
              </div>
            </Link>
             <Link
              className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
              to="/blog"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                  <i className="fa-solid fa-mountain-sun text-xl text-orange-500 group-hover:text-white transition-colors duration-300"></i>
                </div>

                <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                  مناظر طبيعية
                </h3>

                <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                  2 مقالة
                </p>

                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                
                
                  <i className="fas fa-arrow-left text-white"></i>
                </div>
              </div>
            </Link>
             <Link
              className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
              to="/blog"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                  <i className="fa-solid fa-sliders text-xl text-orange-500 group-hover:text-white transition-colors duration-300"></i>
                </div>

                <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                  تقنيات
                </h3>

                <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                  5 مقالة
                </p>

                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                
                
                  <i className="fas fa-arrow-left text-white"></i>
                </div>
              </div>
            </Link>
             <Link
              className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
              to="/blog"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                  <i className="fa-solid fa-sun text-xl text-orange-500 group-hover:text-white transition-colors duration-300"></i>
                </div>

                <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                  معدات
                </h3>

                <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                  3 مقالة
                </p>

                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                
                
                  <i className="fas fa-arrow-left text-white"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
