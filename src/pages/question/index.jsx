import React, { useState, useMemo } from "react";
import QuestList from "./QuestList";
import { allQuestions } from "../../assets/data";
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  Sparkles, 
  Filter, 
  FileQuestion,
  ChevronRight
} from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "সব মাসায়েল" },
  { id: "wajib", label: "ওয়াজিবের শর্ত ও নেসাব" },
  { id: "animal", label: "পশুর ধরন ও অংশীদারিত্ব" },
  { id: "meat", label: "গোশত ও চামড়া বণ্টন" },
  { id: "misc", label: "অন্যান্য বিধান" },
];

const QuestionIndex = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((item) => {
      const matchesSearch =
        (item.ques && item.ques.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.ans && item.ans.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.ask && item.ask.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.ref && item.ref.toLowerCase().includes(searchTerm.toLowerCase()));

      if (!matchesSearch) return false;

      if (selectedCategory === "all") return true;
      if (selectedCategory === "wajib") {
        return (
          item.ques.includes("ওয়াজিব") ||
          item.ques.includes("নেসাব") ||
          item.ques.includes("টাকা") ||
          item.ques.includes("সামর্থ্য")
        );
      }
      if (selectedCategory === "animal") {
        return (
          item.ques.includes("পশু") ||
          item.ques.includes("গরু") ||
          item.ques.includes("ছাগল") ||
          item.ques.includes("উট") ||
          item.ques.includes("শরিক") ||
          item.ques.includes("অংশীদার") ||
          item.ques.includes("দাঁত")
        );
      }
      if (selectedCategory === "meat") {
        return (
          item.ques.includes("গোশত") ||
          item.ques.includes("চামড়া") ||
          item.ques.includes("বন্টন") ||
          item.ques.includes("বিক্রি")
        );
      }
      if (selectedCategory === "misc") {
        return true;
      }
      return true;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-800 to-teal-800 text-white p-6 sm:p-10 shadow-xl border border-emerald-700/60">
        <div className="max-w-2xl relative z-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-700/80 backdrop-blur-sm text-emerald-200 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-amber-300" />
            <span>মাসিক আল-কাওসার সংকলিত ফাতাওয়া</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            কুরবানীর সমকালীন মাসায়েল ও প্রশ্নোত্তর
          </h1>
          <p className="text-emerald-100/90 text-sm leading-relaxed">
            কুরবানী বিষয়ক নানা জটিল প্রশ্ন ও তার সহীহ ইসলামী ফাতাওয়া। আপনার প্রয়োজনীয় বিষয়টি সহজে খুঁজে পেতে নিচে অনুসন্ধান করুন।
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="প্রশ্ন, উত্তর, ফাতাওয়া রেফারেন্স বা প্রশ্নকারী খুঁজুন..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              মুছে ফেলুন
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 ml-1 hidden sm:block" />
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                selectedCategory === cat.id
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1 pt-1 border-t border-slate-100 dark:border-slate-800">
          <span>
            সর্বমোট <strong>{allQuestions.length}</strong> টির মধ্যে{" "}
            <strong>{filteredQuestions.length}</strong> টি মাসআলা পাওয়া গেছে
          </span>
          {searchTerm && (
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">
              ফিল্টার সক্রিয়
            </span>
          )}
        </div>
      </div>

      {/* Question Cards Grid */}
      {filteredQuestions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredQuestions.map((item) => (
            <QuestList key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-4">
            <FileQuestion className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">
            কোনো মাসআলা খুঁজে পাওয়া যায়নি
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-4">
            অনুগ্রহ করে ভিন্ন কোনো শব্দ দিয়ে অনুসন্ধান করুন অথবা ফিল্টার পরিবর্তন করুন।
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
            }}
            className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition"
          >
            সব মাসায়েল দেখুন
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionIndex;
