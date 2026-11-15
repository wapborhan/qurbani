import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "./Breadcamp";
import { getQuestionById, allQuestions } from "../../assets/data";
import { 
  HelpCircle, 
  User, 
  BookOpen, 
  Copy, 
  Check, 
  Share2, 
  ArrowLeft, 
  ArrowRight,
  Sparkles,
  Info
} from "lucide-react";

const toBengaliNumber = (num) => {
  const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num
    .toString()
    .split("")
    .map((d) => bnDigits[d] || d)
    .join("");
};

const QuestionDetails = ({ data: propData }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  // Look up question by URL param id if not provided via props
  const item = propData || (id ? getQuestionById(id) : null);

  if (!item) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
        <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-950/50 text-amber-600 flex items-center justify-center mb-4">
          <HelpCircle className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
          মাসআলাটি খুঁজে পাওয়া যায়নি
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-sm">
          সম্ভবত লিংকটি সঠিক নয় অথবা মাসআলাটি সরানো হয়েছে।
        </p>
        <Link
          to="/question"
          className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-medium text-sm hover:bg-emerald-700 transition"
        >
          সকল মাসায়েল দেখুন
        </Link>
      </div>
    );
  }

  const currentId = Number(item.id);
  const prevId = currentId > 1 ? currentId - 1 : null;
  const nextId = currentId < allQuestions.length ? currentId + 1 : null;

  const handleCopy = () => {
    const textToCopy = `প্রশ্ন: ${item.ques}\n\nউত্তর: ${item.ans}\n\nরেফারেন্স: ${item.ref || 'মাসিক আল-কাওসার'}\n\nউৎস: কুরবানী সহায়িকা`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `মাসআলা #${toBengaliNumber(item.id)} - কুরবানী সহায়িকা`,
          text: item.ques,
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback to copy link
      }
    }
    navigator.clipboard.writeText(window.location.href);
    setShared(true);
    setTimeout(() => setShared(false), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      <Breadcrumbs currentTitle={`মাসআলা #${toBengaliNumber(item.id)}`} />

      {/* Main Card */}
      <article className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden transition-colors">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/60 backdrop-blur-md text-amber-300 font-bold text-xs border border-emerald-600/40">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>মাসআলা নং {toBengaliNumber(item.id)}</span>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-sm transition"
                title="উত্তর কপি করুন"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "কপি হয়েছে!" : "কপি করুন"}</span>
              </button>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-sm transition"
                title="শেয়ার করুন"
              >
                {shared ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{shared ? "লিংক কপি হয়েছে!" : "শেয়ার"}</span>
              </button>
            </div>
          </div>

          <h1 className="text-xl sm:text-2xl font-extrabold leading-snug">
            {item.ques}
          </h1>

          <div className="mt-4 pt-4 border-t border-emerald-600/50 flex items-center gap-2 text-xs text-emerald-100">
            <User className="w-4 h-4 text-amber-300" />
            <span>প্রশ্ন করেছেন:</span>
            <strong className="text-white">{item.ask || "দ্বীনি ভাই/বোন"}</strong>
          </div>
        </div>

        {/* Answer Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>শরয়ী সমাধান ও উত্তর:</span>
            </div>

            <div className="text-slate-800 dark:text-slate-100 text-sm sm:text-base leading-relaxed space-y-3 bg-emerald-50/40 dark:bg-emerald-950/20 p-5 sm:p-6 rounded-2xl border border-emerald-100 dark:border-emerald-900/50">
              <p className="whitespace-pre-line">{item.ans}</p>
            </div>
          </div>

          {/* Reference Book Box */}
          {item.ref && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3 text-xs">
              <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-700 dark:text-slate-300 block mb-0.5">
                  কিতাব ও ফাতাওয়া রেফারেন্স:
                </span>
                <span className="text-slate-600 dark:text-slate-400 font-medium">
                  {item.ref}
                </span>
              </div>
            </div>
          )}

          {/* Nav buttons between questions */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
            {prevId ? (
              <Link
                to={`/question/${prevId}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>পূর্ববর্তী মাসআলা (#{toBengaliNumber(prevId)})</span>
              </Link>
            ) : (
              <div />
            )}

            <Link
              to="/question"
              className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              সকল মাসায়েল
            </Link>

            {nextId ? (
              <Link
                to={`/question/${nextId}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-md shadow-emerald-600/20 transition"
              >
                <span>পরবর্তী মাসআলা (#{toBengaliNumber(nextId)})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default QuestionDetails;
