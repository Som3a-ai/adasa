import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <>
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent"></div>

        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <Title title="مميز" />
              <h2 className="text-6xl font-bold text-white">مقالات مختارة</h2>
              <p className=" text-neutral-500 text-lg mt-6 text max-w-lg">
                محتوى منتقى لبدء رحلة تعلمك
              </p>
            </div>

            <Link
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
              to="/blog"
            >
              عرض الكل
              <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform "></i>
            </Link>
          </div>

          <div className="space-y-8">
            <article className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500">
              <Link className="block" to="/blog">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-72 md:h-[400px] overflow-hidden">
                    <img
                      alt="إتقان تصوير الساعة الذهبية: دليل شامل"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=400&fit=crop"
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
                      إتقان تصوير الساعة الذهبية: دليل شامل
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
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                          ></img>

                          <div class="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]"></div>
                        </div>

                        <div>
                          <p class="text-sm font-semibold text-white">
                            سالم أحمد
                          </p>

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
            <article className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500">
              <Link className="block" to="/blog">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-72 md:h-[400px] overflow-hidden">
                    <img
                      alt="إتقان تصوير الساعة الذهبية: دليل شامل"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
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
                      أسرار تصوير البورتريه: كيف تلتقط روح الشخصية
                    </h2>
                    <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
                      اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن
                      شخصية الموضوع الحقيقية.
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img
                            alt="سالم أحمد"
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
                          ></img>

                          <div class="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]"></div>
                        </div>

                        <div>
                          <p class="text-sm font-semibold text-white">
                            محمد علي
                          </p>

                          <p class="text-xs text-neutral-500">١٢ يناير ٢٠٢٦</p>
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

            <article className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500">
              <Link className="block" to="/blog">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-72 md:h-[400px] overflow-hidden">
                    <img
                      alt="إتقان تصوير الساعة الذهبية: دليل شامل"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
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
                      دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف
                    </h2>
                    <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
                      استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط
                      جمال الطبيعة بعدستك.
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img
                            alt="سالم أحمد"
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                          ></img>

                          <div class="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]"></div>
                        </div>

                        <div>
                          <p class="text-sm font-semibold text-white">
                            إبراهيم حسن{" "}
                          </p>

                          <p class="text-xs text-neutral-500">١٠  يناير ٢٠٢٦</p>
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
          </div>
        </div>
      </section>
    </>
  );
}
