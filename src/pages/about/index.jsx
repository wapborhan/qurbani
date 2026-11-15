import React from "react";
import { 
  User, 
  MapPin, 
  Mail, 
  Globe, 
  Code2, 
  Sparkles, 
  ExternalLink,
  Award,
  CheckCircle2
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, GlobeIcon } from "../../components/Icons";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white p-6 sm:p-10 shadow-xl border border-emerald-700/60">
        <div className="space-y-3 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-700/80 backdrop-blur-sm text-emerald-200 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>ডেভেলপার ও উদ্যোগ পরিচিতি</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            আমাদের সম্পর্কে ও ডেভেলপার প্রোফাইল
          </h1>
          <p className="text-emerald-100/90 text-sm leading-relaxed max-w-xl">
            আধুনিক প্রযুক্তি ও সহজবোধ্য ইন্টারফেসে মুসলিম উম্মাহর খিদমতে দ্বীনি অ্যাপ্লিকেশন ও ওয়েব সল্যুশন নির্মাণ।
          </p>
        </div>
      </div>

      {/* Main Profile Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden transition-colors">
        {/* Cover banner */}
        <div className="h-32 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-700 relative">
          <div className="absolute right-4 bottom-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-emerald-300 font-bold text-xs border border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Projects</span>
            </span>
          </div>
        </div>

        {/* Profile Info Area */}
        <div className="px-6 sm:px-10 pb-8 relative">
          {/* Avatar */}
          <div className="-mt-16 mb-4 flex items-end justify-between flex-wrap gap-4">
            <div className="relative">
              <img
                src="https://avatars.githubusercontent.com/u/68281712?v=4"
                alt="Borhan Uddin"
                className="w-28 h-28 rounded-3xl border-4 border-white dark:border-slate-900 shadow-xl object-cover bg-emerald-100"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>

            <div className="flex items-center gap-2">
              <a
                href="mailto:borhaninfos@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md shadow-emerald-600/20 transition"
              >
                <Mail className="w-4 h-4" />
                <span>ইমেইল পাঠান</span>
              </a>
              <a
                href="https://www.srdreamlab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold transition"
              >
                <Globe className="w-4 h-4 text-emerald-500" />
                <span>SR Dream Lab</span>
              </a>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Borhan Uddin
                </h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-bold">
                  বোরহান উদ্দিন
                </span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                Front-End & React Developer • Founder at SR Dream Lab
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Bheramara, Kushtia, Bangladesh</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4 text-amber-500" />
                <span>3+ Years Web Experience</span>
              </div>
            </div>

            {/* Bio Box */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                পরিচিতি ও উদ্দেশ্য
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                আসসালামু আলাইকুম, আমি বোরহান উদ্দিন। আধুনিক জাভাস্ক্রিপ্ট, React, Vite ও Tailwind CSS দিয়ে নান্দনিক এবং ব্যবহারকারীবান্ধব ওয়েব অ্যাপ্লিকেশন তৈরি করতে ভালোবাসি। এই "কুরবানী সহায়িকা" প্রজেক্টটি সাধারণ মুসলিমদের জন্য কুরবানির বিধান ও নেসাব হিসাব সহজ করার লক্ষ্যে একটি বিশেষ দ্বীনি খিদমত হিসেবে তৈরি করা হয়েছে।
              </p>
            </div>

            {/* Tech stack pills */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                টেকনোলজি স্ট্যাক
              </div>
              <div className="flex flex-wrap gap-2">
                {["Vite", "React 19", "Tailwind CSS", "JavaScript ES6+", "HTML5 / CSS3", "Lucide Icons", "Islamic Web App"].map(
                  (skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/wapborhan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/wapborhan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5 text-blue-600" />
              </a>
              <a
                href="https://twitter.com/wapborhan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition"
                title="Twitter / X"
              >
                <TwitterIcon className="w-5 h-5 text-sky-500" />
              </a>
              <a
                href="https://codepen.io/wapborhan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition"
                title="CodePen"
              >
                <Code2 className="w-5 h-5 text-amber-500" />
              </a>
              <a
                href="https://www.wapborhan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition"
                title="Website"
              >
                <GlobeIcon className="w-5 h-5 text-emerald-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
