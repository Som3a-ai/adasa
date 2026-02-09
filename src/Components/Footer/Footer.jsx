import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className=" bg-[#0a0a0a] text-neutral-300 overflow-hidden border-t border-[#262626]">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <Link className="flex items-center gap-3 mb-6 group" to="/">
                <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                  <span className="text-white font-bold text-xl">ع</span>
                </div>

                <span class="text-xl font-bold text-white">عدسة</span>
              </Link>

              <p class="text-sm text-neutral-500 mb-6 leading-relaxed">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم.
              </p>

              <div class="flex gap-2">
                <Link
                  to="/"
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>

                <Link
                  to="/"
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <i className="fa-brands fa-github"></i>
                </Link>
                <Link
                  to="/"
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <i className="fa-brands fa-youtube"></i>
                </Link>
                <Link
                  to="/"
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
              </div>
            </div>

            <div>
              <h3 class="text-white font-semibold mb-6 flex items-center gap-2">
                <span class="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                استكشف
              </h3>
              <ul class="space-y-4">
                <li>
                  <Link
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    to="/"
                  >
                    <i className="fas fa-arrow-left opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300"></i>
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    to="/blog"
                  >
                    <i className="fas fa-arrow-left opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300"></i>
                    المدونة
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-white font-semibold mb-6 flex items-center gap-2">
                <span class="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                التصنيفات
              </h3>
              <ul class="space-y-4">
                <li>
                  <Link
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    to="/"
                  >
                    <i className="fas fa-arrow-left opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300"></i>
                    إضاءة
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    to="/blog"
                  >
                    <i className="fas fa-arrow-left opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300"></i>
                    بورتريه
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    to="/blog"
                  >
                    <i className="fas fa-arrow-left opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300"></i>
                    مناظر طبيعية
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    to="/blog"
                  >
                    <i className="fas fa-arrow-left opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300"></i>
                    تقنيات
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-white font-semibold mb-6 flex items-center gap-2">
                <span class="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                ابقى على اطلاع
              </h3>

              <p class="text-sm text-neutral-500 mb-4">
                اشترك للحصول على أحدث المقالات والتحديثات.
              </p>

              <form class="space-y-3">
                <input
                  placeholder="أدخل بريدك الإلكتروني"
                  className="w-full px-4 py-3 bg-[#161616] border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-orange-500 transition-all duration-300 placeholder-neutral-600"
                  type="email"
                ></input>

                <button type="submit" className="w-full btn-primary text-sm">
                  اشترك
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-[#262626]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-neutral-600">
                © 2026 عدسة . صنع بكل
                <i className="fas fa-heart text-orange-500"></i>
                جميع الحقوق محفوظة.
              </p>

              <div class="flex gap-6">
                <Link
                  className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
                  to="/"
                >
                  سياسة الخصوصية
                </Link>
                 <Link
                  className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
                  to="/"
                >
                 شروط الخدمة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
