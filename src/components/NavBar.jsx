import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, Calculator, Calendar as CalendarIcon, Sparkles } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const NavBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const [hijriDate, setHijriDate] = useState("");
  const [gregorianDate, setGregorianDate] = useState("");

  useEffect(() => {
    try {
      const hijri = new Intl.DateTimeFormat("bn-BD-u-ca-islamic", {
        day: "numeric",
        month: "long",
        weekday: "long",
        year: "numeric",
      }).format(new Date());
      setHijriDate(hijri);
    } catch {
      setHijriDate("যিলহজ্ব ১৪৪৬ হিজরি");
    }

    try {
      const greg = new Intl.DateTimeFormat("bn-BD", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date());
      setGregorianDate(greg);
    } catch {
      setGregorianDate("");
    }
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Left: Mobile Menu Toggle & Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            aria-label="Toggle navigation"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold bg-gradient-to-r from-emerald-700 to-teal-600 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent leading-none">
                কুরবানী সহায়িকা
              </h1>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                সহীহ মাসায়েল ও নেসাব ক্যালকুলেটর
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Hijri & Gregorian Dates */}
        <div className="hidden md:flex flex-col items-center justify-center text-center px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50 rounded-2xl">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300">
            <CalendarIcon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{hijriDate}</span>
          </div>
          {gregorianDate && (
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              ইংরেজি তারিখ: {gregorianDate}
            </span>
          )}
        </div>

        {/* Right: Quick Action & Theme Toggle */}
        <div className="flex items-center gap-2">
          <Link
            to="/home"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium shadow-sm shadow-emerald-600/30 transition hover:shadow-md"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>হিসাব করুন</span>
          </Link>

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition focus:outline-none focus:ring-2 focus:ring-emerald-500"
            title={isDark ? "লাইট মোড চালু করুন" : "ডার্ক মোড চালু করুন"}
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-amber-400 animate-spin-slow" />
            ) : (
              <Moon className="w-5 h-5 text-slate-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
