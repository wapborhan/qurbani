import React, { useState } from "react";
import { Link } from "react-router-dom";
import { History as HistoryIcon, Sparkles, BookOpen, Clock, HeartHandshake, ShieldCheck } from "lucide-react";

const History = () => {
  const [activeChapter, setActiveChapter] = useState("all"); // all | adam | ibrahim | proof

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-800 via-amber-900 to-emerald-900 text-white p-6 sm:p-10 shadow-xl border border-amber-700/50">
        <div className="space-y-3 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-700/70 backdrop-blur-sm text-amber-200 text-xs font-semibold">
            <HistoryIcon className="w-3.5 h-3.5 text-amber-300" />
            <span>কুরআনিক ইতিহাস ও তাফসীর</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            কুরবানীর আদি ও ঐতিহাসিক প্রেক্ষাপট
          </h1>
          <p className="text-amber-100/90 text-sm leading-relaxed max-w-2xl">
            আদি পিতা আদম (আ.)-এর যুগ থেকে শুরু করে হযরত ইবরাহীম (আ.)-এর পুত্র বিসর্জনের ঐতিহাসিক পরীক্ষা ও মিল্লাতে ইব্রাহিমীর অমর আত্মত্যাগের সত্য উপাখ্যান।
          </p>
        </div>
      </div>

      {/* Chapter Selection Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        <button
          onClick={() => setActiveChapter("all")}
          className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition ${
            activeChapter === "all"
              ? "bg-amber-600 text-white shadow-md shadow-amber-600/20"
              : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
          }`}
        >
          সম্পূর্ণ ইতিহাস
        </button>
        <button
          onClick={() => setActiveChapter("adam")}
          className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition ${
            activeChapter === "adam"
              ? "bg-amber-600 text-white shadow-md shadow-amber-600/20"
              : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
          }`}
        >
          ১. পৃথিবীর সর্বপ্রথম কুরবানী (হাবীল ও কাবীল)
        </button>
        <button
          onClick={() => setActiveChapter("ibrahim")}
          className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition ${
            activeChapter === "ibrahim"
              ? "bg-amber-600 text-white shadow-md shadow-amber-600/20"
              : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
          }`}
        >
          ২. ইবরাহীম (আ.) ও ইসমাঈল (আ.)-এর ত্যাগ
        </button>
        <button
          onClick={() => setActiveChapter("proof")}
          className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition ${
            activeChapter === "proof"
              ? "bg-amber-600 text-white shadow-md shadow-amber-600/20"
              : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
          }`}
        >
          ৩. কুরবানীকৃত পুত্র কে ছিলেন? (প্রামাণ্য বিশ্লেষণ)
        </button>
      </div>

      {/* Main Content Area */}
      <article className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-10 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        {/* Chapter 1: Habil & Qabil */}
        {(activeChapter === "all" || activeChapter === "adam") && (
          <section className="space-y-5 animate-fadeIn">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 font-bold flex items-center justify-center text-sm">
                ১
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                পৃথিবীর সর্বপ্রথম কুরবানী: হাবিল ও কাবিলের ঘটনা
              </h2>
            </div>

            <p>
              কুরবানীর ইতিহাস অত্যন্ত প্রাচীন। মানবজাতির আদি পিতা আদম (আ.)-এর যুগ থেকেই কুরবানীর বিধান চলে আসছে। আদম (আ.)-এর দুই ছেলে হাবীল ও কাবীলের কুরবানী পেশ করার কথা মহাগ্রন্থ আল-কুরআনে বর্ণিত হয়েছে। মহান আল্লাহ সুবহানাহু তা‘আলা বলেন:
            </p>

            <div className="p-6 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-center space-y-3">
              <div className="arabic-text text-xl sm:text-2xl text-amber-950 dark:text-amber-200">
                وَاتْلُ عَلَيْهِمْ نَبَأَ ابْنَيْ آدَمَ بِالْحَقِّ إِذْ قَرَّبَا قُرْبَانًا فَتُقُبِّلَ مِنْ أَحَدِهِمَا وَلَمْ يُتَقَبَّلْ مِنَ الْآخَرِ قَالَ لَأَقْتُلَنَّكَ ۖ قَالَ إِنَّمَا يَتَقَبَّلُ اللَّهُ مِنَ الْمُتَّقِينَ
              </div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                "আর আপনি তাদেরকে আদমের দুই পুত্রের (হাবিল ও কাবিল) সত্য বৃত্তান্ত যথাযথভাবে পাঠ করে শুনান; যখন তারা উভয়েই কুরবানী পেশ করেছিল, তখন একজনের কুরবানী কবুল হলো এবং অন্যজনের কুরবানী কবুল হলো না। সে বলল, ‘আমি অবশ্যই তোমাকে হত্যা করব!’ অপরজন বলল, ‘নিশ্চয় আল্লাহ তো কেবল মুত্তাক্বীদের কর্মই কবুল করেন।’"
              </p>
              <div className="text-xs text-amber-700 dark:text-amber-400 font-medium">
                — সূরা আল-মায়িদা : ২৭
              </div>
            </div>

            <h3 className="font-bold text-base text-slate-800 dark:text-white pt-2">
              ঘটনার মূল প্রেক্ষাপট ও শিক্ষা:
            </h3>

            <p>
              কাবীল ছিল কৃষক বা চাষী। তাই সে তার ফসলের মধ্য থেকে নিচু মানের এক আঁটি গম কুরবানীর জন্য উপস্থাপন করল। অপরদিকে হাবীল ছিল পশুপালনকারী। সে তার পশুগুলোর মধ্য থেকে সবচেয়ে হৃষ্টপুষ্ট ও প্রিয় দুম্বাটি পরম শ্রদ্ধায় আল্লাহর উদ্দেশ্যে পেশ করল।
            </p>

            <p>
              তৎকালীন শরীয়তে কুরবানী কবুল হওয়ার আসমানী নিদর্শন ছিল যে, আকাশ থেকে একখণ্ড শুভ্র অগ্নিশিখা এসে কবুলকৃত কুরবানীকে ভস্মীভূত করে নিয়ে যেত। নিয়ম অনুযায়ী অগ্নিশিখা এসে হাবীলের দুম্বাটি গ্রহণ করে নিল এবং কাবীলের শস্য পড়ে রইল। এতে কাবীল ক্ষোভে ফেটে পড়ে এবং নিজ সহোদর হাবীলকে হত্যার হুমকি দেয়। হাবীল তখন রাগ না দেখিয়ে প্রশান্ত চিত্তে বলেছিল— "আল্লাহ তো কেবল তাকওয়াবানদের কুরবানীই কবুল করেন।"
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-400 border-l-2 border-emerald-500 pl-3">
              তাফসীরে ইবনে কাসীর, দুররে মনসুর, ফতহুল বায়ান ৩/৪৫ ও ফতহুল ক্বাদীর ২/২৮-২৯।
            </p>
          </section>
        )}

        {/* Chapter 2: Ibrahim (AS) & Ismail (AS) */}
        {(activeChapter === "all" || activeChapter === "ibrahim") && (
          <section className="space-y-5 pt-8 border-t border-slate-200 dark:border-slate-800 animate-fadeIn">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-bold flex items-center justify-center text-sm">
                ২
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                মিল্লাতে ইবরাহিমী: বর্তমান কুরবানীর ঐতিহাসিক মূল ভিত্তি
              </h2>
            </div>

            <p>
              আজ সমগ্র মুসলিম উম্মাহ বিশ্বজুড়ে যে কুরবানী পালন করে, তা মূলত হযরত ইবরাহীম (আ.) ও তাঁর পুত্র হযরত ইসমাঈল (আ.)-এর সেই অবিস্মরণীয় আত্মত্যাগের সুন্নাত। পবিত্র কুরআনে আল্লাহ তাআলা এই ঘটনার বিবরণ অত্যন্ত আবেগময় ভাষায় তুলে ধরেছেন:
            </p>

            <div className="p-6 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
              <div className="arabic-text text-xl sm:text-2xl text-emerald-950 dark:text-emerald-200">
                فَلَمَّا بَلَغَ مَعَهُ السَّعْيَ قَالَ يَا بُنَيَّ إِنِّي أَرَىٰ فِي الْمَنَامِ أَنِّي أَذْبَحُكَ فَانظُرْ مَاذَا تَرَىٰ ۚ قَالَ يَا أَبَتِ افْعَلْ مَا تُؤْمَرُ ۖ سَتَجِدُنِي إِن شَاءَ اللَّهُ مِنَ الصَّابِرِينَ
              </div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                "অতঃপর সে যখন পিতার সাথে চলাফেরা ও কাজ করার বয়সে উপনীত হলো, তখন ইবরাহীম বললেন: ‘হে আমার প্রিয় বৎস! আমি স্বপ্নে দেখছি যে তোমাকে যবাই করছি; অতএব চিন্তা করে বল তোমার অভিমত কী?’ সে বলল: ‘হে আমার পিতা! আপনাকে যা আদেশ করা হয়েছে আপনি তা-ই করুন। ইনশাআল্লাহ আপনি আমাকে ধৈর্যশীলদের মধ্যেই পাবেন।’"
              </p>
              <div className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                — সূরা আস-সাফফাত : ১০২
              </div>
            </div>

            <p>
              বৃদ্ধ বয়সে প্রাপ্ত প্রাণপ্রিয় একমাত্র সন্তানকে আল্লাহর আদেশে কুরবানী করতে পিতা ইবরাহীম (আ.) দ্বিধাহীন চিত্তে মিনার প্রান্তরে উপস্থিত হন। পুত্র ইসমাঈল (আ.)-কে কাত করে শুইয়ে দিয়ে যখন তিনি ধারালো ছুরি চালালেন, তখন মহান রব আকাশ থেকে ঘোষণা দিলেন:
            </p>

            <blockquote className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 text-sm space-y-2">
              <div className="arabic-text text-lg text-slate-900 dark:text-white">
                وَنَادَيْنَاهُ أَن يَا إِبْرَاهِيمُ • قَدْ صَدَّقْتَ الرُّؤْيَا ۚ إِنَّا كَذَٰلِكَ نَجْزِي الْمُحْسِنِينَ • إِنَّ هَٰذَا لَهُوَ الْبَلَاءُ الْمُبِينُ • وَفَدَيْنَاهُ بِذِبْحٍ عَظِيمٍ
              </div>
              <p className="font-medium">
                "তখন আমি তাকে ডেকে বললাম: ‘হে ইবরাহীম! তুমি তো স্বপ্নাদেশ সত্যে পরিণত করে দেখালে!’ নিশ্চয় আমি সৎকর্মশীলদের এভাবেই প্রতিদান দিয়ে থাকি। নিশ্চয় এটি ছিল এক সুস্পষ্ট পরীক্ষা। আর আমি এক মহান কুরবানীর বিনিময়ে পুত্রটিকে মুক্ত করে নিলাম।"
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                — সূরা আস-সাফফাত : ১০৪-১০৭
              </div>
            </blockquote>

            <p>
              আল্লাহ তাআলা জান্নাত থেকে একটি হৃষ্টপুষ্ট দুম্বা প্রেরণ করে ইসমাঈল (আ.)-এর স্থলাভিষিক্ত করেন এবং কেয়ামত পর্যন্ত মুমিনদের জন্য এই ত্যাগকে সুন্নাত হিসেবে জারি রাখেন।
            </p>
          </section>
        )}

        {/* Chapter 3: Scholarly Proof */}
        {(activeChapter === "all" || activeChapter === "proof") && (
          <section className="space-y-5 pt-8 border-t border-slate-200 dark:border-slate-800 animate-fadeIn">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-700 dark:text-teal-400 font-bold flex items-center justify-center text-sm">
                ৩
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                যাঁকে কুরবানী করার আদেশ হয়েছিল তিনি কে ছিলেন? (প্রামাণ্য বিশ্লেষণ)
              </h2>
            </div>

            <p>
              ইমাম ইবনে কাসীর (রহ.) তাঁর তাফসীর ও 'আল বিদায়া ওয়ান নিহায়া' গ্রন্থে প্রামাণ্য দলিলের ভিত্তিতে উল্লেখ করেছেন যে, যাকে কুরবানীর আদেশ করা হয়েছিল তিনি ছিলেন প্রথম সন্তান <strong>হযরত ইসমাঈল (আ.)</strong>, ইসহাক (আ.) নন। তার প্রধান প্রমাণসমূহ:
            </p>

            <div className="grid grid-cols-1 gap-3">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-800 dark:text-white text-sm mb-1">
                    ১. ইসমাঈল (আ.) ছিলেন প্রথম সন্তান:
                  </strong>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    ইবরাহীম (আ.)-এর ৮৬ বছর বয়সে বিবি হাজেরার গর্ভে হযরত ইসমাঈল (আ.) জন্মগ্রহণ করেন। এর ১৩ বছর পর ৯৯ বছর বয়সে বিবি সারার গর্ভে ইসহাক (আ.) জন্ম নেন।
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-800 dark:text-white text-sm mb-1">
                    ২. ‘একমাত্র পুত্র’ হিসেবে পরীক্ষার তাৎপর্য:
                  </strong>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    আহলে কিতাবদের কিতাবেও বর্ণিত যে, ইবরাহীম (আ.)-কে তাঁর ‘প্রথম ও একমাত্র পুত্র’ কুরবানী দিতে বলা হয়েছিল। ইসহাক (আ.) জন্মের আগে পর্যন্ত ইসমাঈল (আ.)-ই ছিলেন তাঁর একমাত্র পুত্র।
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-800 dark:text-white text-sm mb-1">
                    ৩. কুরআনের ধারাবাহিক সুসংবাদ:
                  </strong>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    সূরা সাফফাতে কুরবানীর পরীক্ষা উত্তীর্ণ হওয়ার পরই ইসহাক (আ.)-এর শুভ জন্মের সুসংবাদ উল্লেখ করা হয়েছে (আয়াত ১১২)। তাছাড়া ইসহাক (আ.)-এর ক্ষেত্রে পূর্বেই অঙ্গীকার ছিল যে তাঁর ঘরে ইয়াকূব (আ.) জন্ম নেবেন—তাই তাঁকে শৈশবে কুরবানীর আদেশ হওয়া প্রাসঙ্গিক নয়।
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Back and links */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/amol"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md transition"
          >
            <span>যিলহজ মাসের বিশেষ আমলসমূহ জানুন</span>
            <HistoryIcon className="w-4 h-4" />
          </Link>

          <Link
            to="/home"
            className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            মূল পাতায় ফিরে যান
          </Link>
        </div>
      </article>
    </div>
  );
};

export default History;
