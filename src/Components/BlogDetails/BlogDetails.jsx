import React from "react";
import data from "../data.json";
import { Link, useParams } from "react-router";

export default function BlogDetails() {
  let { slug } = useParams();

  const [article] = data.posts.filter((post) => post.slug === slug);

  return (
    <>
      <article className="bg-[#0a0a0a] min-h-screen">
        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            src={article.image}
          ></img>
          <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
          <div class="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/30 to-transparent"></div>
          <div class="absolute top-27 right-8 left-8">
            <nav class="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-sm border border-white/10">
              <Link
                class="text-white/70 hover:text-white transition-colors"
                to="/"
              >
                <i class="fa-solid fa-home"></i>
              </Link>
              <i class="fa-solid fa-chevron-left text-white/30 text-xs"></i>
              <Link
                class="text-white/70 hover:text-white transition-colors"
                to="/blog"
              >
                المدونة
              </Link>
              <i class="fa-solid fa-chevron-left text-white/30 text-xs"></i>
              <span class="text-orange-400 font-medium truncate max-w-[200px]">
                مناظر طبيعية
              </span>
            </nav>
          </div>

          <div class="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div class="max-w-5xl mx-auto">
              <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                {article.title}
              </h1>
              <div class="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit">
                <img
                  alt="محمد علي"
                  class="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/50"
                  src={article.author.avatar}
                ></img>
                <div>
                  <p class="font-bold text-white">{article.author.name}</p>
                  <p class="text-sm text-white/60">{article.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="grid lg:grid-cols-[1fr_300px] gap-12">
            <div class="order-2 lg:order-1">
              <div class="p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">
                <p class="text-lg text-neutral-200 leading-relaxed italic">
                  {article.excerpt}
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
