import React from "react";
import { Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";

const Breadcrumbs = ({ currentTitle = "মাসআলা বিস্তারিত" }) => {
  return (
    <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6 flex-wrap">
      <Link
        to="/home"
        className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
      >
        <Home className="w-3.5 h-3.5" />
        <span>মূল পাতা</span>
      </Link>
      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
      <Link
        to="/question"
        className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
      >
        মাসায়েল ও প্রশ্নোত্তর
      </Link>
      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
      <span className="font-semibold text-slate-800 dark:text-slate-200 truncate max-w-[200px]">
        {currentTitle}
      </span>
    </nav>
  );
};

export default Breadcrumbs;
