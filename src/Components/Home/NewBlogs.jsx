import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";

export default function NewBlogs() {
  return (
    <>
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-500/5 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <Title title="الأحدث" />
              <h2 className="text-5xl font-bold text-white">أحدث المقالات</h2>

              <p className="text-xl text-neutral-500  max-w-lg mt-7">
                محتوى جديد طازج من المطبعة
              </p>
            </div>

            <Link
              className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
              to="/blog"
            >
              عرض جميع المقالات
              <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform text-orange-500"></i>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="group card overflow-hidden">
              <Link className="block" to="/blog">
                <div className="relative h-52 overflow-hidden">
                  <img
                    alt="أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop"
                  />

                  <div class="absolute top-4 right-4">
                    <span class="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                      تقنيات
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                    أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي
                  </h3>

                  <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                    افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم
                    الكامل في صورك.
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                    <div className="flex items-center gap-3">
                      <img
                        alt="داود خالد"
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                      />

                      <div>
                        <p className="text-sm font-medium text-white">
                          داود خالد
                        </p>
                        <p className="text-xs text-neutral-500">مدرب تصوير</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>

            <article className="group card overflow-hidden">
              <Link className="block" to="/blog">
                <div className="relative h-52 overflow-hidden">
                  <img
                    alt="أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=400&fit=crop"
                  />

                  <div class="absolute top-4 right-4">
                    <span class="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                      تقنيات
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                    قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية
                  </h3>

                  <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                    تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون
                    لإنشاء صور مؤثرة بصرياً.
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                    <div className="flex items-center gap-3">
                      <img
                        alt="داود خالد"
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
                      />

                      <div>
                        <p className="text-sm font-medium text-white">
                          ليث محمود
                        </p>
                        <p className="text-xs text-neutral-500">فنان بصري</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>

            <article className="group card overflow-hidden">
              <Link className="block" to="/blog">
                <div className="relative h-52 overflow-hidden">
                  <img
                    alt="أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop"
                  />

                  <div class="absolute top-4 right-4">
                    <span class="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                      معدات
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                    تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك{" "}
                  </h3>

                  <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                    اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه
                    النصائح والتقنيات.
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                    <div className="flex items-center gap-3">
                      <img
                        alt="داود خالد"
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                        src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face"
                      />

                      <div>
                        <p className="text-sm font-medium text-white">
                          جمال عبدالله
                        </p>
                        <p className="text-xs text-neutral-500">مصور ومراجع تقني</p>
                      </div>
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
