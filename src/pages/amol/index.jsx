import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  RotateCcw, 
  Volume2, 
  Heart, 
  Calendar, 
  CheckCircle2, 
  Check, 
  Award, 
  Scissors, 
  Moon,
  Clock,
  BookOpen
} from "lucide-react";

const Amol = () => {
  const [activeSection, setActiveSection] = useState("all");
  const [tasbeehCount, setTasbeehCount] = useState(0);

  const incrementTasbeeh = () => {
    setTasbeehCount((prev) => prev + 1);
    if (navigator.vibrate) {
      navigator.vibrate(30);
    }
  };

  const resetTasbeeh = () => setTasbeehCount(0);

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-900 via-emerald-800 to-emerald-900 text-white p-6 sm:p-10 shadow-xl border border-teal-700/60">
        <div className="max-w-3xl relative z-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-800/80 backdrop-blur-sm text-teal-200 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>বছরের সর্বশ্রেষ্ঠ দশ দিন</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            যিলহজের প্রথম দশ দিন: ফযীলত ও বিশেষ আমল
          </h1>
          <p className="text-teal-100/90 text-sm leading-relaxed">
            রাসূলুল্লাহ (সা.) ইরশাদ করেছেন— "পৃথিবীর দিনগুলোর মধ্যে সর্বশ্রেষ্ঠ দিনগুলো হলো যিলহজের প্রথম দশদিন।" (মুসনাদ বাযযার)
          </p>
        </div>
      </div>

      {/* Interactive Takbeer-e-Tashreeq Counter Card */}
      <div className="rounded-3xl bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-800 text-white p-6 sm:p-8 shadow-xl border border-emerald-600/50 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-white/10 text-amber-300">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-bold text-lg text-white">
                তাকবীরে তাশরীক ডিজিটাল তাসবীহ
              </h3>
              <span className="text-xs text-emerald-200">
                ৯ই যিলহজ ফজর হতে ১৩ই যিলহজ আসর পর্যন্ত মোট ২৩ ওয়াক্ত ফরজ সালাতের পর ওয়াজিব
              </span>
            </div>
          </div>

          <button
            onClick={resetTasbeeh}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold backdrop-blur-sm transition text-emerald-100"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>রিসেট</span>
          </button>
        </div>

        {/* Arabic Ayah */}
        <div className="p-5 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/15 text-center space-y-2">
          <div className="arabic-text text-2xl sm:text-3xl text-amber-300 font-bold tracking-wide">
            اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ لَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ
          </div>
          <div className="text-xs sm:text-sm text-emerald-100 font-medium">
            "আল্লাহু আকবার, আল্লাহু আকবার, লা ইলাহা ইল্লাল্লাহু ওয়াল্লাহু আকবার, আল্লাহু আকবার, ওয়া লিল্লাহিল হাম্দ।"
          </div>
        </div>

        {/* Counter Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="text-xs text-emerald-100/90 max-w-sm">
            একবার করে পাঠ করুন এবং নিচের বাটনে ক্লিক করে আপনার পাঠের সংখ্যা বৃদ্ধি করুন।
          </div>

          <button
            onClick={incrementTasbeeh}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-900 font-extrabold text-lg shadow-lg shadow-amber-400/30 flex items-center justify-center gap-3 transition"
          >
            <span>পাঠ করেছি</span>
            <span className="px-3 py-1 rounded-xl bg-slate-900 text-amber-300 font-black text-base shadow-inner">
              {tasbeehCount}
            </span>
          </button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        <button
          onClick={() => setActiveSection("all")}
          className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition ${
            activeSection === "all"
              ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
              : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
          }`}
        >
          সকল আমল ও ফযীলত
        </button>
        <button
          onClick={() => setActiveSection("virtues")}
          className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition ${
            activeSection === "virtues"
              ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
              : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
          }`}
        >
          দশকের মর্যাদা ও শপথ
        </button>
        <button
          onClick={() => setActiveSection("fasting")}
          className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition ${
            activeSection === "fasting"
              ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
              : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
          }`}
        >
          আরাফার রোজা
        </button>
        <button
          onClick={() => setActiveSection("nails")}
          className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition ${
            activeSection === "nails"
              ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
              : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
          }`}
        >
          চুল ও নখ না কাটার সুন্নাত
        </button>
        <button
          onClick={() => setActiveSection("eid")}
          className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition ${
            activeSection === "eid"
              ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
              : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
          }`}
        >
          ঈদের দিনের সুন্নাত
        </button>
      </div>

      {/* Main Articles Content */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-10 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        {/* Section 1: Virtues */}
        {(activeSection === "all" || activeSection === "virtues") && (
          <section className="space-y-4 animate-fadeIn">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              <span>যিলহজ মাসের প্রথম দশ দিনের অনন্য ফযীলত</span>
            </h2>

            <p>
              আল্লাহ তা‘আলা আপন বান্দাদের পরম ভালোবাসেন এবং তাদেরকে ক্ষমার সুযোগ দিতে ভালোবাসেন। এ উদ্দেশ্যে তিনি বছরে কিছু বরকতময় ও কল্যাণবাহী দিন রেখেছেন—যাতে আমলের সওয়াব বহুগুণে বৃদ্ধি করা হয়।
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 space-y-2">
                <strong className="text-emerald-800 dark:text-emerald-300 font-bold block text-sm">
                  ১. আল্লাহ তা‘আলা এর কসম করেছেন:
                </strong>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  পবিত্র কুরআনে আল্লাহ বলেন: <span className="arabic-text font-bold">وَالْفَجْرِ • وَلَيَالٍ عَشْرٍ</span> "কসম ভোরবেলার। কসম দশ রাতের।" (সূরা আল-ফাজর : ১-২)। মুফাসসিরীনদের সর্বসম্মত মতে, এখানে দশ রাত বলতে যিলহজের প্রথম দশ রাতকে বুঝানো হয়েছে।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900/40 space-y-2">
                <strong className="text-teal-800 dark:text-teal-300 font-bold block text-sm">
                  ২. মৌলিক সকল ইবাদতের সমাবেশ:
                </strong>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  হাফেয ইবনে হাজার আসকালানী (রহ.) বলেন— এই দিনগুলোতে ইসলামের সকল স্তম্ভ একত্রিত হয়: সালাত, সিয়াম, হজ, সদকাহ ও কুরবানী; যা বছরের অন্য কোনো দিনসমূহে একত্রে ঘটে না। (ফাতহুল বারী ২/৪৬০)
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Section 2: Fasting of Arafah */}
        {(activeSection === "all" || activeSection === "fasting") && (
          <section className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800 animate-fadeIn">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Calendar className="w-6 h-6 text-amber-500" />
              <span>৯ই যিলহজ আরাফার রোজা (দুই বছরের গুনাহ মাফ)</span>
            </h2>

            <p>
              হজ পালনকারী ব্যতীত অন্যান্য সকল মুসলমানের জন্য ৯ই যিলহজ (আরাফা দিবস) সিয়াম পালন করা অত্যন্ত গুরুত্বপূর্ণ ও সাওয়াবের আমল। রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম ইরশাদ করেছেন:
            </p>

            <blockquote className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border-l-4 border-amber-500 text-slate-800 dark:text-slate-200 text-sm space-y-2">
              <div className="arabic-text text-base">
                «صِيَامُ يَوْمِ عَرَفَةَ أَحْتَسِبُ عَلَى اللَّهِ أَنْ يُكَفِّرَ السَّنَةَ الَّتِي قَبْلَهُ وَالسَّنَةَ الَّتِي بَعْدَهُ»
              </div>
              <p className="font-semibold">
                "আরাফার দিনের রোজার ব্যাপারে আমি আল্লাহর কাছে আশা রাখি যে, তিনি এর দ্বারা পূর্ববর্তী এক বছর এবং পরবর্তী এক বছরের গুনাহসমূহ ক্ষমা করে দেবেন।"
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                — সহীহ মুসলিম : ১১৬২
              </div>
            </blockquote>
          </section>
        )}

        {/* Section 3: Hair and Nails */}
        {(activeSection === "all" || activeSection === "nails") && (
          <section className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800 animate-fadeIn">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Scissors className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              <span>কুরবানীদাতার নখ ও চুল না কাটার বিধান</span>
            </h2>

            <p>
              যিলহজ মাসের নতুন চাঁদ ওঠার পর থেকে নিয়ে কুরবানী করা সম্পন্ন হওয়া পর্যন্ত কুরবানীদাতার জন্য নখ, চুল বা অবাঞ্ছিত পশম না কাটা মুস্তাহাব। উম্মে সালামাহ (রা.) থেকে বর্ণিত, নবী করীম (সা.) বলেন:
            </p>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm space-y-2">
              <p className="italic">
                "যখন তোমরা যিলহজ মাসের চাঁদ দেখতে পাবে এবং তোমাদের কেউ কুরবানী করার ইচ্ছা পোষণ করে, সে যেন নিজ চুল ও নখ স্পর্শ না করে (না কাটে)।" (সহীহ মুসলিম : ১৯৭৭)
              </p>
              <p className="text-slate-500 text-xs pt-1">
                এমনকি যিনি কুরবানী দিতে সামর্থ্য রাখেন না, তিনিও যদি এই দশ দিনে চুল-নখ না কেটে ঈদের দিন তা কাটেন, হাদীস অনুযায়ী আল্লাহ তাকেও একটি পূর্ণ কুরবানীর সওয়াব দান করবেন। (আবু দাউদ ২৭৮৯)
              </p>
            </div>
          </section>
        )}

        {/* Section 4: Eid Day Sunnahs */}
        {(activeSection === "all" || activeSection === "eid") && (
          <section className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800 animate-fadeIn">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              <span>ঈদুল আযহার দিনের বিশেষ সুন্নাতসমূহ</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>সকালে তাড়াতাড়ি ঘুম থেকে উঠে গোসল ও মিসওয়াক করা।</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>সাধ্যের মধ্যে উত্তম বা পরিষ্কার পোশাক পরিধান করা এবং সুগন্ধি লাগানো।</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>ঈদের সালাতের পূর্বে না খেয়ে থাকা এবং কুরবানীর গোশত দিয়ে দিনের প্রথম খাবার গ্রহণ করা।</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>ঈদগাহে যাওয়ার পথে উচ্চস্বরে তাকবীরে তাশরীক পাঠ করা।</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>এক রাস্তা দিয়ে ঈদগাহে যাওয়া এবং সালাত শেষে অন্য রাস্তা দিয়ে প্রত্যাবর্তন করা।</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>সালাত শেষে দ্রুত নিজ হাতে অথবা উপস্থিত থেকে কুরবানী সম্পন্ন করা।</span>
              </div>
            </div>
          </section>
        )}

        {/* Footer CTAs */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/qurbani-details"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md transition"
          >
            <BookOpen className="w-4 h-4" />
            <span>কুরবানীর নিয়মাবলী পড়ুন</span>
          </Link>
          <Link
            to="/home"
            className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            ক্যালকুলেটরে যান
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Amol;
