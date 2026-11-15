import React from "react";
import { Link } from "react-router-dom";
import { Home, AlertCircle, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-20 h-20 rounded-3xl bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-6 shadow-inner">
        <AlertCircle className="w-10 h-10" />
      </div>

      <h1 className="text-3xl font-extrabold text-slate-800 dark:text-white mb-2">
        পৃষ্ঠাটি খুঁজে পাওয়া যায়নি (৪০৪)
      </h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mb-8">
        আপনি যে পৃষ্ঠাটি খুঁজছেন তা স্থানান্তরিত হয়েছে অথবা লিংকটি সঠিক নয়। অনুগ্রহ করে মূল পাতায় ফিরে যান।
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/home"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow-md shadow-emerald-600/20 transition hover:shadow-lg"
        >
          <Home className="w-4 h-4" />
          <span>মূল পাতায় যান</span>
        </Link>
        <Link
          to="/question"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>মাসায়েল সমূহ</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
