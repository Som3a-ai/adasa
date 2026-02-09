import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import Blog from "./Blog";
import Filter from "./Filter";
import NewBlogs from "./NewBlogs";
import EmailList from "./EmailList";


export default function Home() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30">
          <div className="text-center max-w-4xl mx-auto">
            <Title title="مرحباً بك في عدسة" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              اكتشف <span className="gradient-text">فن</span> 
              <br />
              التصوير الفوتوغرافي
            </h1>

            <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link
                className="btn-primary inline-flex items-center justify-center gap-2 group"
                to="/blog"
              >
                استكشف المقالات
                <i className="fas fa-arrow-left text-white"></i>
              </Link>

              <Link
                className="btn-secondary inline-flex items-center justify-center gap-2 group"
                to="/"
              >
                <i class="fa-solid fa-circle-exclamation"></i>
                اعرف المزيد
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="glass-card p-4 hover:scale-105 transition-transform duration-300">
                <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-1"></i>
                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  +50
                </p>
                <p className="text-neutral-500 text-sm">مقالة</p>
              </div>

              <div className="glass-card p-4 hover:scale-105 transition-transform duration-300">
                <i className="fa-solid fa-users text-2xl text-orange-500 mb-1"></i>
                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  +10ألف
                </p>
                <p className="text-neutral-500 text-sm">قارئ</p>
              </div>

              <div className="glass-card p-4 hover:scale-105 transition-transform duration-300">
                <i className="fa-solid fa-folder-open text-2xl text-orange-500 mb-1"></i>
                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  4
                </p>
                <p className="text-neutral-500 text-sm">تصنيفات</p>
              </div>

              <div className="glass-card p-4 hover:scale-105 transition-transform duration-300">
                <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-1"></i>
                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  6
                </p>
                <p className="text-neutral-500 text-sm">كاتب</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Blog/>
      <Filter/>
      <NewBlogs/>
      <EmailList/>
    </>
  );
}
