import React from "react";
import { Sparkles } from "lucide-react";
import { GithubIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <span>
            কুরবানী সহায়িকা ও মাসায়েল পোর্টাল — দ্বীনি খিদমতে নিবেদিত
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span>ডিজাইন ও উন্নয়ন:</span>
          <a
            href="https://www.srdreamlab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition"
          >
            SR Dream Lab
          </a>
          <span>•</span>
          <a
            href="https://github.com/wapborhan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-800 dark:hover:text-slate-200 transition inline-flex items-center gap-1"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Borhan Uddin</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
