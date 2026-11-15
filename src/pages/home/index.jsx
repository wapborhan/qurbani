import React from "react";
import { Link } from "react-router-dom";
import Calculator from "./Calculator";
import { 
  Sparkles, 
  BookOpen, 
  HelpCircle, 
  History, 
  Calendar, 
  ShieldCheck, 
  ArrowRight, 
  HeartHandshake,
  CheckCircle2
} from "lucide-react";

const Home = () => {
  return (
    <div className="space-y-10 pb-12">
      {/* Hero Welcome Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white p-8 sm:p-12 shadow-2xl border border-emerald-700/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-700/60 backdrop-blur-md border border-emerald-500/30 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>বিসমিল্লাহির রাহমানির রাহিম • পবিত্র কুরবানী সহায়িকা</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug">
            সহীহ সুন্নাহ মোতাবেক <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-200 to-teal-200">
              কুরবানীর প্রস্তুতি ও নেসাব নির্ধারণ
            </span>
          </h1>

          <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed max-w-2xl">
            কুরবানী ইসলামের অন্যতম শ্রেষ্ঠ শি’আর বা নিদর্শন। ত্যাগ, আনুগত্য ও আত্মশুদ্ধির এই মহান ইবাদত সহীহভাবে আদায় করতে প্রয়োজনীয় মাসায়েল, ইতিহাস ও হিসাব জেনে নিন।
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              to="/question"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-sm shadow-lg shadow-amber-400/20 transition hover:scale-[1.02]"
            >
              <HelpCircle className="w-4 h-4" />
              <span>জরুরি মাসায়েল পড়ুন</span>
            </Link>
            <Link
              to="/qurbani-details"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-sm transition"
            >
              <BookOpen className="w-4 h-4" />
              <span>কুরবানির নিয়মাবলী</span>
            </Link>
          </div>
        </div>

        {/* Feature quick badges */}
        <div className="relative z-10 mt-8 pt-6 border-t border-emerald-700/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div className="flex items-center gap-2 text-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>৩০+ নির্ভরযোগ্য ফাতাওয়া</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>হালনাগাদ নেসাব ক্যালকুলেটর</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>যিলহজের আমল ও তাকবীর</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>পশু নির্বাচন ও গোশত বণ্টন</span>
          </div>
        </div>
      </section>

      {/* Main Interactive Calculator */}
      <Calculator />

      {/* Quick Access Cards */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              গুরুত্বপূর্ণ বিষয়াবলি ও নির্দেশিকা
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              কুরবানী পালনে যা জানা অপরিহার্য
            </p>
          </div>
          <Link
            to="/qurbani-details"
            className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
          >
            <span>সব দেখুন</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 */}
          <Link
            to="/qurbani-details"
            className="group p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-800 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
              কুরবানির নিয়ম ও শর্তসমূহ
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
              কার উপর কুরবানী ওয়াজিব, পশুর বয়সসীমা (ছাগল ১ বছর, গরু ২ বছর, উট ৫ বছর), অঙ্গহানির ত্রুটি ও গ্রহণযোগ্যতা।
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span>বিস্তারিত পড়ুন</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            to="/history"
            className="group p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <History className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-800 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition">
              কুরবানির ঐতিহাসিক প্রেক্ষাপট
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
              পৃথিবীর সর্বপ্রথম হাবিল ও কাবিলের কুরবানী এবং হযরত ইব্রাহিম (আ.) ও ইসমাইল (আ.)-এর ঐতিহাসিক সুন্নাত।
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400">
              <span>ইতিহাস পড়ুন</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            to="/amol"
            className="group p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950/60 text-teal-700 dark:text-teal-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-800 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition">
              যিলহজের আমল ও তাকবীর
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
              যিলহজ মাসের প্রথম দশদিনের অপার ফযীলত, আরাফার রোজা, চুল-নখ না কাটার সুন্নাত ও তাকবীরে তাশরীকের ডিজিটাল তাসবীহ।
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400">
              <span>আমল ও তাসবীহ</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
