import React from "react";
import logo from "../../assets/logo-GdqARQRt.png";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

            
          <Link className="flex items-center gap-3 group" to="/">
            <div class="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
              <img src={logo} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="flex flex-col">
              <span class="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                عدسة
              </span>
              <span class="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
              <NavLink
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white"
                to="/"
              >
                الرئيسية
              </NavLink>
              <NavLink
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white"
                to="/blog"
              >
                المدونة
              </NavLink>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626] hover:cursor-pointer">

                <i className="fas fa-magnifying-glass"></i>
            </button>

            <Link className={`btn-primary text-sm hover:-translate-y-0.5`} href="/blog">ابدأ القراءة</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
