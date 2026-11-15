import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Heart, Sparkles, BookOpen, ArrowRight, Award } from "lucide-react";

const QurbaniInfo = () => {
  return (
    <div className="space-y-8 pb-12 max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-800 text-white p-6 sm:p-10 shadow-xl border border-emerald-700/60">
        <div className="space-y-3 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-700/80 backdrop-blur-sm text-amber-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ইসলামের মহান শি’আর</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            কুরবানীর গুরুত্ব, তাৎপর্য ও মহান উদ্দেশ্য
          </h1>
          <p className="text-emerald-100/90 text-sm leading-relaxed max-w-2xl">
            কুরবানী শুধুমাত্র একটি পশু যবাই নয়; বরং এটি পরম প্রভূর দরবারে নিঃশর্ত আনুগত্য, তাকওয়া ও আত্মত্যাগের এক অনন্য পরাকাষ্ঠা।
          </p>
        </div>
      </div>

      {/* Main Content Article */}
      <article className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-8">
        {/* Section 1: Importance */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              কুরবানীর শরয়ী গুরুত্ব ও বিধান
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            কুরবানী হলো ইসলামের একটি শি’য়ার বা মহান নিদর্শন। পবিত্র কুরআন মাজীদে মহান আল্লাহ তা‘আলা নির্দেশ দিয়েছেন:
          </p>

          <div className="p-6 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
            <div className="arabic-text text-2xl sm:text-3xl text-emerald-900 dark:text-emerald-200 font-bold">
              فَصَلِّ لِرَبِّكَ وَانْحَرْ
            </div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              "অতএব আপনার রবের উদ্দেশ্যেই সালাত আদায় করুন এবং কুরবানী সম্পন্ন করুন।"
            </div>
            <span className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
              — সূরা আল-কাওসার : ২
            </span>
          </div>

          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            হযরত আবু হুরায়রা (রা.) থেকে বর্ণিত, রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম বলেছেন:
          </p>

          <blockquote className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border-l-4 border-amber-500 text-slate-700 dark:text-slate-300 text-sm space-y-2">
            <div className="arabic-text text-base text-slate-900 dark:text-white">
              «مَنْ وَجَدَ سَعَةً فَلَمْ يُضَحِّ فَلَا يَقْرَبَنَّ مُصَلَّانَا»
            </div>
            <p className="font-medium">
              "যে ব্যক্তি সামর্থ্য থাকা সত্ত্বেও কুরবানী করে না, সে যেন আমাদের ঈদগাহের নিকটবর্তী না হয়।"
            </p>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              — মুসনাদে আহমাদ, সুনানে ইবনে মাজাহ : ৩১২৩ (হাদীসটি হাসান)
            </div>
          </blockquote>
        </section>

        {/* Section 2: Objectives */}
        <section className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              কুরবানীর মূল উদ্দেশ্য ও লক্ষ্য
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-bold">১</span>
                <span>শর্তহীন আনুগত্য ও আত্মসমর্পণ</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                আল্লাহ তা‘আলা তার বান্দাকে যে কোনো নির্দেশ দেওয়ার পূর্ণ ইখতিয়ার রাখেন এবং বান্দা তা পালনে বাধ্য। ইবরাহীম (আ.)-এর আনুগত্য ছিল কোনো দ্বিধাদ্বন্দ্বহীন ও শর্তহীন।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-bold">২</span>
                <span>অন্তরের তাকওয়া ও খোদাভীতি অর্জন</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                পশুর রক্ত বা গোশত আল্লাহর কাছে পৌঁছায় না, বরং পৌঁছে বান্দার হৃদয়ের বিশুদ্ধ ইখলাস ও তাকওয়া। লোকদেখানো মনোভাব ত্যাগ করে খাঁটি নিয়ত করা আবশ্যক।
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-center space-y-3">
            <div className="arabic-text text-xl sm:text-2xl text-amber-900 dark:text-amber-200">
              لَن يَنَالَ اللَّهَ لُحُومُهَا وَلَا دِمَاؤُهَا وَلَٰكِن يَنَالُهُ التَّقْوَىٰ مِنكُمْ
            </div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              "আল্লাহর নিকট কখনই তাদের গোশত ও রক্ত পৌঁছায় না, বরং পৌঁছায় তোমাদের অন্তরের তাকওয়া।"
            </div>
            <span className="text-xs text-amber-700 dark:text-amber-400 font-medium">
              — সূরা আল-হাজ্জ : ৩৭
            </span>
          </div>
        </section>

        {/* CTA to rules */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/qurbani-details"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md transition"
          >
            <BookOpen className="w-4 h-4" />
            <span>কুরবানীর বিস্তারিত মাসায়েল ও নিয়ম দেখুন</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/home"
            className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            নেসাব ক্যালকুলেটরে যান
          </Link>
        </div>
      </article>
    </div>
  );
};

export default QurbaniInfo;
