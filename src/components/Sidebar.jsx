import React from "react";
import { NavLink, Link } from "react-router-dom";
import { sidenavItems } from "./sidenav";
import { Sparkles, HeartHandshake, ShieldCheck, X } from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Brand Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <Link
            to="/home"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/25 group-hover:scale-105 transition">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-lg text-slate-800 dark:text-white leading-tight">
                কুরবানী সহায়িকা
              </div>
              <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                সহীহ সুন্নাহ নির্দেশিকা
              </div>
            </div>
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-1.5">
          <div className="px-3 pb-2 text-[11px] font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
            মেনু সূচি
          </div>

          {sidenavItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3.5 py-3 rounded-2xl text-sm font-medium transition group ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/20 font-semibold"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-emerald-600 dark:hover:text-emerald-400"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                          isActive
                            ? "text-white"
                            : "text-slate-400 dark:text-slate-400 group-hover:text-emerald-500"
                        }`}
                      />
                      <span>{item.title}</span>
                    </div>

                    {item.badge && (
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Islamic Quote / Dua Box at Bottom */}
        <div className="p-4 m-3 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-slate-800/40 border border-emerald-100 dark:border-emerald-900/40">
          <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-xs mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>আল্লাহর নৈকট্য লাভ</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            "আল্লাহর নিকট পৌঁছায় না তাদের গোশত ও রক্ত, বরং পৌঁছায় তোমাদের তাকওয়া।"
          </p>
          <div className="text-[11px] text-emerald-700 dark:text-emerald-400 mt-1 font-semibold">
            — সূরা আল-হাজ্জ : ৩৭
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
