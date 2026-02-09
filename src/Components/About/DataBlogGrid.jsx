import React from 'react'
import { Link } from 'react-router-dom'


export default function DataBlogGrid({image , title , category , avatar,name , slug}) {
  return (
        <article className="group card overflow-hidden">
              <Link className="block" to={`/blog/${slug}`}>
                <div className="relative h-52 overflow-hidden">
                  <img
                    alt="أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    src={image}
                  />

                  <div class="absolute top-4 right-4">
                    <span class="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                      {category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">

                                            {title}
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
                        src={avatar}
                      />

                      <div>
                        <p className="text-sm font-medium text-white">
                            {name}
                        </p>
                        <p className="text-xs text-neutral-500">مدرب تصوير</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>

  )
}
