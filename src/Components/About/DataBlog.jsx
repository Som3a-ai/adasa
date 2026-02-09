import React from "react";
import { Link } from "react-router-dom";

export default function DataBlog({ image, title, category, avatar, name , slug}) {
  return (
    <>
      <article className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500">
        <Link className="block" to={`/blog/${slug}`}>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-72 md:h-[400px] overflow-hidden">
              <img
                alt="إتقان تصوير الساعة الذهبية: دليل شامل"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                src={image}
              ></img>
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                  <i className="fas fa-star"></i>
                  مميز
                </span>
              </div>
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
              <div className="flex items-center gap-3 mb-4"></div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                {title}
              </h2>

              <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
                تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح
                احترافية حول الإضاءة والتكوين.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      alt="سالم أحمد"
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                      src={avatar}
                    ></img>

                    <div class="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]"></div>
                  </div>

                  <div>
                    <p class="text-sm font-semibold text-white"> {name}</p>

                    <p class="text-xs text-neutral-500">١٥ يناير ٢٠٢٦</p>
                  </div>
                </div>

                <span class="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  اقرأ المقال
                  <i className="fas fa-arrow-left"></i>
                </span>
              </div>
            </div>
          </div>
        </Link>
      </article>
    </>
  );
}
