import React from "react";
import { Sparkles } from "lucide-react";

export const SplashScreen = ({ isExiting }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 text-white transition-opacity duration-500 ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative flex flex-col items-center space-y-6 text-center px-4 max-w-sm">
        {/* Animated Emblem */}
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-emerald-500/30 blur-2xl animate-pulseGlow" />
          <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 p-0.5 shadow-2xl flex items-center justify-center animate-float">
            <div className="w-full h-full rounded-[22px] bg-slate-900/40 backdrop-blur-sm flex items-center justify-center text-white">
              <Sparkles className="w-10 h-10 text-amber-300 animate-spin-slow" />
            </div>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-1.5 animate-slideUp">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 via-teal-200 to-amber-300 bg-clip-text text-transparent">
            কুরবানী সহায়িকা
          </h2>
          <p className="text-xs sm:text-sm text-emerald-200/80 font-medium">
            সহীহ সুন্নাহ নির্দেশিকা ও নেসাব ক্যালকুলেটর
          </p>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden relative shadow-inner">
          <div className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 rounded-full animate-progress" />
        </div>

        <div className="text-[11px] text-slate-400 tracking-wider">
          লোড হচ্ছে... অনুগ্রহ করে অপেক্ষা করুন
        </div>
      </div>
    </div>
  );
};

export const TopProgressBar = ({ isAnimating }) => {
  if (!isAnimating) return null;
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-emerald-100 dark:bg-emerald-950/60 overflow-hidden">
      <div className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 animate-progress" />
    </div>
  );
};

export const CardSkeleton = () => {
  return (
    <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 relative overflow-hidden">
      <div className="absolute inset-0 animate-shimmer" />
      <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-slate-800" />
      <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-lg w-3/4" />
      <div className="space-y-2">
        <div className="h-3 bg-slate-100 dark:bg-slate-850 rounded w-full" />
        <div className="h-3 bg-slate-100 dark:bg-slate-850 rounded w-5/6" />
      </div>
    </div>
  );
};

export default SplashScreen;
