import React from "react";
import { Link } from "react-router-dom";
import { HelpCircle, User, BookOpen, ArrowRight } from "lucide-react";

const toBengaliNumber = (num) => {
  const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num
    .toString()
    .split("")
    .map((d) => bnDigits[d] || d)
    .join("");
};

const QuestList = ({ item }) => {
  return (
    <Link
      to={`/question/${item.id}`}
      className="group flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300"
    >
      <div className="space-y-3">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold text-xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>মাসআলা #{toBengaliNumber(item.id)}</span>
          </span>

          {item.ref && (
            <span className="text-[11px] text-slate-400 dark:text-slate-500 truncate max-w-[180px]">
              {item.ref.split(";")[0]}
            </span>
          )}
        </div>

        {/* Question Text */}
        <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition leading-snug line-clamp-3">
          {item.ques}
        </h3>

        {/* Answer Snippet */}
        {item.ans && (
          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {item.ans}
          </p>
        )}
      </div>

      {/* Footer Info */}
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 truncate max-w-[200px]">
          <User className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span className="truncate">{item.ask || "দ্বীনি ভাই/বোন"}</span>
        </div>

        <div className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold group-hover:translate-x-1 transition">
          <span>বিস্তারিত</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
};

export default QuestList;
