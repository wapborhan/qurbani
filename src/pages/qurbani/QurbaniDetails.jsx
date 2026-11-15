import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Calculator, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  AlertTriangle, 
  Coins, 
  HeartHandshake, 
  BookOpen, 
  ArrowRight,
  Flame
} from "lucide-react";

export const QurbaniDetails = () => {
  const [activeTab, setActiveTab] = useState("nisab"); // nisab | animals | partnership | meat | slaughter

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-800 text-white p-6 sm:p-10 shadow-xl border border-emerald-700/60">
        <div className="max-w-3xl relative z-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-700/80 backdrop-blur-sm text-amber-300 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>শরীয়াহ নির্দেশিকা ও পূর্ণাঙ্গ গাইড</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            কুরবানীর নিয়মাবলী ও জরুরি বিধান
          </h1>
          <p className="text-emerald-100/90 text-sm leading-relaxed">
            কুরবানী শুদ্ধ হওয়ার জন্য প্রয়োজনীয় শরয়ী শর্ত, পশুর বয়স, কুরবানীর দিনক্ষণ, অংশীদারিত্ব এবং গোশত বণ্টনের প্রামাণ্য বিধিমালা।
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800 no-scrollbar">
        <button
          onClick={() => setActiveTab("nisab")}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
            activeTab === "nisab"
              ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
              : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          }`}
        >
          নেসাব ও ওয়াজিবের শর্ত
        </button>

        <button
          onClick={() => setActiveTab("animals")}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
            activeTab === "animals"
              ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
              : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          }`}
        >
          পশুর বয়স ও সুস্থতা
        </button>

        <button
          onClick={() => setActiveTab("partnership")}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
            activeTab === "partnership"
              ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
              : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          }`}
        >
          শরিক বা অংশীদারিত্ব
        </button>

        <button
          onClick={() => setActiveTab("meat")}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
            activeTab === "meat"
              ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
              : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          }`}
        >
          গোশত ও চামড়া বণ্টন
        </button>

        <button
          onClick={() => setActiveTab("slaughter")}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
            activeTab === "slaughter"
              ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
              : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          }`}
        >
          যবাইয়ের নিয়ম ও দু‘আ
        </button>
      </div>

      {/* Tab 1: Nisab */}
      {activeTab === "nisab" && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
                <Coins className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                কী পরিমাণ সম্পদ থাকলে কুরবানী ওয়াজিব হয়?
              </h2>
            </div>

            <div className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed space-y-4">
              <p>
                জিলহজ্ব মাসের <strong>১০, ১১ ও ১২ তারিখে</strong> নিজের এবং পরিবারের নিত্যপ্রয়োজনীয় খরচের অতিরিক্ত <strong>সাড়ে বায়ান্ন (৫২.৫০) ভরি রুপা</strong> বা তার মূল্য পরিমাণ সম্পদের মালিক হলে কুরবানী ওয়াজিব হবে।
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40">
                  <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 block mb-1">
                    ২২ ক্যারেট রুপার দর হিসাব
                  </span>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">
                    ৳ ৭৯,৫৯০
                  </div>
                  <span className="text-[11px] text-slate-500">
                    (১৫১৬ × ৫২.৫০ ভরি)
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900/40">
                  <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 block mb-1">
                    ২১ ক্যারেট রুপার দর হিসাব
                  </span>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">
                    ৳ ৭৫,২৮৫
                  </div>
                  <span className="text-[11px] text-slate-500">
                    (১৪৩৪ × ৫২.৫০ ভরি)
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900/40">
                  <span className="text-xs font-semibold text-amber-800 dark:text-amber-300 block mb-1">
                    ১৮ ক্যারেট রুপার দর হিসাব
                  </span>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">
                    ৳ ৬৪,২৬০
                  </div>
                  <span className="text-[11px] text-slate-500">
                    (১২২৪ × ৫২.৫০ ভরি)
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold text-slate-800 dark:text-white mb-2">
                  নেসাবের অন্তর্ভুক্ত সম্পদসমূহ:
                </h4>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <li>নগদ অর্থ এবং ব্যাংকে গচ্ছিত আমানত।</li>
                  <li>স্বর্ণ ও রুপার অলংকার (ব্যবহৃত বা অব্যবহৃত)।</li>
                  <li>ব্যবসায়িক পণ্য ও মালপত্র।</li>
                  <li>যে জমি বা বাড়ি বাৎসরিক জীবিকা বা খোরাকীর জন্য অপরিহার্য নয়।</li>
                  <li>সারা বছরেও ব্যবহৃত হয় না এমন অপ্রয়োজনীয় সৌখিন আসবাবপত্র বা সরঞ্জামাদি।</li>
                </ul>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                রেফারেন্স: বাদায়েউস সানায়ে ৪/১৯৬; আলমুহীতুল বুরহানী ৮/৪৫৫; খুলাসাতুল ফাতাওয়া ৪/৩০৯।
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <Link
                to="/home"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition"
              >
                <Calculator className="w-4 h-4" />
                <span>আপনার সম্পদের নেসাব হিসাব করুন</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Animals */}
      {activeTab === "animals" && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Camel */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 text-xs font-bold">
                উট (Camel)
              </span>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                ন্যূনতম বয়স: ৫ বছর
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                উট কুরবানী দেওয়ার জন্য বয়স পূর্ণ ৫ বছর হতে হবে এবং ষষ্ঠ বছরে পদার্পণ করতে হবে। সর্বোচ্চ ৭ জন শরিক হতে পারবে।
              </p>
            </div>

            {/* Cow / Buffalo */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                গরু ও মহিষ (Cow / Buffalo)
              </span>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                ন্যূনতম বয়স: ২ বছর
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                গরু বা মহিষের বয়স পূর্ণ ২ বছর হতে হবে এবং ৩ বছরে পদার্পণ করতে হবে। ১ থেকে সর্বোচ্চ ৭ জন অংশীদার শরিক হতে পারেন।
              </p>
            </div>

            {/* Goat / Sheep */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950/60 text-teal-700 dark:text-teal-400 text-xs font-bold">
                ছাগল, ভেড়া ও দুম্বা
              </span>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                ন্যূনতম বয়স: ১ বছর
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                ছাগলের বয়স পূর্ণ ১ বছর হতে হবে। তবে ৬ মাসের ভেড়া বা দুম্বা যদি দেখতে ১ বছরের মতো স্বাস্থ্যবান ও মোটাতাজা মনে হয় তবে কুরবানী জায়েয। (এতে ১ জনই কুরবানী দিতে পারবেন)।
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span>যেসব ত্রুটি থাকলে পশু কুরবানী করা জায়েয নয়:</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                <span>দৃষ্টিশক্তিহীন বা অন্ধ পশু অথবা এক চোখের এক-তৃতীয়াংশের বেশি নষ্ট হলে।</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                <span>এমন খোঁড়া পশু যা নিজের পায়ে হেঁটে যবাইয়ের স্থান পর্যন্ত যেতে অক্ষম।</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                <span>অত্যন্ত শীর্ণ ও দুর্বল, যার হাড়ে কোনো মজ্জা নেই।</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                <span>কান বা লেজের এক-তৃতীয়াংশের বেশি কাটা থাকলে।</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                <span>শিং যদি মূল থেকে এমনভাবে ভেঙে যায় যা মগজ পর্যন্ত ক্ষতিগ্রস্ত করে।</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                <span>দাঁত সবগুলো বা অধিকাংশ পড়ে যাওয়ার ফলে ঘাস খেতে অক্ষম হলে।</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Partnership */}
      {activeTab === "partnership" && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              অংশীদারিত্ব বা শরিকের মূল শর্তাবলি
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40">
                <strong className="text-emerald-800 dark:text-emerald-300 block mb-1">
                  ১. সর্বোচ্চ শরিক সংখ্যা:
                </strong>
                গরু, মহিষ বা উটে সর্বোচ্চ ৭ জন ব্যক্তি শরিক হতে পারেন। ছাগল, ভেড়া বা দুম্বায় একাধিক শরিক জায়েয নয়—কেবল একজনের পক্ষ থেকেই আদায় হবে।
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900/40">
                <strong className="text-amber-800 dark:text-amber-300 block mb-1">
                  ২. নিয়তের বিশুদ্ধতা (খুবই গুরুত্বপূর্ণ):
                </strong>
                শরিকদের প্রত্যেকের নিয়ত হতে হবে কেবল আল্লাহর সন্তুষ্টি অর্জন ও কুরবানী আদায় করা। যদি কোনো একজন শরিকের নিয়ত কেবল গোশত খাওয়া বা লৌকিকতা হয়, তবে কারোর কুরবানীই আল্লাহর দরবারে কবুল হবে না।
              </div>

              <div className="p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900/40">
                <strong className="text-teal-800 dark:text-teal-300 block mb-1">
                  ৩. গোশত বণ্টন পদ্ধতি:
                </strong>
                শরিকদারদের মধ্যে গোশত ওজন করে নিখুঁতভাবে সমবণ্টন করতে হবে। অনুমান করে বণ্টন করা সম্পূর্ণ নাজায়েয ও গোনাহের কাজ।
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Meat and Skin */}
      {activeTab === "meat" && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              গোশত ও চামড়ার সহীহ বণ্টন পদ্ধতি
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40 text-center space-y-2">
                <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  ১/৩ অংশ
                </div>
                <div className="font-bold text-slate-800 dark:text-white text-sm">
                  নিজের পরিবারের জন্য
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  কুরবানীদাতা ও তার পরিবার-পরিজনের খাওয়ার জন্য সংরক্ষণ করা মুস্তাহাব।
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-100 dark:border-teal-900/40 text-center space-y-2">
                <div className="text-2xl font-black text-teal-600 dark:text-teal-400">
                  ১/৩ অংশ
                </div>
                <div className="font-bold text-slate-800 dark:text-white text-sm">
                  আত্মীয়-স্বজন ও প্রতিবেশী
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  নিকটাত্মীয়, বন্ধু-বান্ধব ও প্রতিবেশীদের হাদিয়া হিসেবে পাঠানো।
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/40 text-center space-y-2">
                <div className="text-2xl font-black text-amber-600 dark:text-amber-400">
                  ১/৩ অংশ
                </div>
                <div className="font-bold text-slate-800 dark:text-white text-sm">
                  দরিদ্র ও অভাবী ব্যক্তি
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  সমাজ ও এলাকার মিসকীন, দুঃস্থ ও গরীবদের মাঝে সদকাহ করা।
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-2 text-slate-700 dark:text-slate-300">
              <strong className="block text-slate-900 dark:text-white text-sm">
                পশুর চামড়া সংক্রান্ত জরুরি বিধান:
              </strong>
              <p>
                কুরবানীর পশুর চামড়া নিজে ব্যবহার করতে পারেন (যেমন জায়নামাজ বা চামড়ার সামগ্রী বানিয়ে)। তবে বিক্রি করলে তার পূর্ণ বিক্রয়লব্ধ অর্থ কোনো সওয়াবের নিয়ত ব্যতীতই গরীব-মিসকীন বা এতিমখানায় সদকাহ করে দিতে হবে।
              </p>
              <p className="text-rose-600 dark:text-rose-400 font-semibold">
                কসাই বা সহযোগীদের পারিশ্রমিক হিসেবে পশুর চামড়া বা গোশত দেওয়া সম্পূর্ণরূপে হারাম।
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Slaughter */}
      {activeTab === "slaughter" && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              যবাই করার সুন্নাত তরিকা ও তাকবীর
            </h3>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-widest block">
                  যবাইয়ের মূল তাকবীর
                </span>
                <div className="arabic-text text-2xl sm:text-3xl font-bold text-emerald-900 dark:text-emerald-200">
                  بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ
                </div>
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  উচ্চারণ: <span className="text-emerald-700 dark:text-emerald-400">বিসমিল্লাহি ওয়াল্লাহু আকবার</span>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  অর্থ: "আল্লাহর নামে এবং আল্লাহ সর্বশ্রেষ্ঠ।"
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  যবাই করার আবশ্যকীয় আদব:
                </h4>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                  <li>ছুরি অত্যন্ত ধারালো করে নেওয়া, যাতে পশুর কষ্ট কম হয়।</li>
                  <li>এক পশুর সামনে অন্য পশুকে যবাই না করা এবং পশুর সামনে ছুরি ধার না দেওয়া।</li>
                  <li>পশুকে কিবলামুখী করে বাম কাতে শোয়ানো।</li>
                  <li>কণ্ঠনালী, খাদ্যনালী এবং দুই পাশের প্রধান রক্তনালী (শাহরগ) কেটে দ্রুত রক্ত প্রবাহিত করা।</li>
                  <li>পশু নিস্তেজ ও সম্পূর্ণ প্রাণ নির্গত হওয়ার পূর্বে চামড়া ছাড়ানো বা অঙ্গচ্ছেদ না করা।</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QurbaniDetails;
