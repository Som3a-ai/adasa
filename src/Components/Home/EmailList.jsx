import React from "react";

export default function EmailList() {
  return (
    <>
      <section className="py-24 bg-[#0a0a0a] relative">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-3xl"></div>

        <div class=" max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-[#161616] rounded-3xl border border-[#262626] p-8 md:p-12 lg:p-16 text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="fa-regular fa-envelope text-2xl text-white"></i>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
              اشترك في  <span class="gradient-text">نشرتنا الإخبارية </span>
            </h2>
            <p class="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
              الإلكتروني
            </p>


            <form class="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">


                <input placeholder="أدخل بريدك الإلكتروني" class="flex-1 px-5 py-4 rounded-xl bg-[#0a0a0a] border border-[#262626] focus:outline-none focus:border-orange-500/50 text-white placeholder-neutral-500 transition-colors" type="email"></input>
                <button type="submit" class="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300">اشترك الآن</button>
            </form>
  
          </div>
        </div>
      </section>
    </>
  );
}
