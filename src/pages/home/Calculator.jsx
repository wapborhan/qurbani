import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Calculator as CalcIcon, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  Info, 
  RotateCcw, 
  ArrowRight, 
  ShieldAlert, 
  Coins, 
  Wallet, 
  Building2, 
  BadgePercent,
  Check,
  Loader2
} from "lucide-react";
import confetti from "canvas-confetti";

const DEFAULT_SILVER_RATE = 1516; // 1 tola 22k silver approx
const NISAB_TOLA = 52.5;

export const Calculator = () => {
  const [activeTab, setActiveTab] = useState("quick"); // "quick" | "detailed"
  const [userName, setUserName] = useState("");
  
  // Quick mode
  const [quickAmount, setQuickAmount] = useState("");
  
  // Detailed mode
  const [cash, setCash] = useState("");
  const [bank, setBank] = useState("");
  const [goldSilverValue, setGoldSilverValue] = useState("");
  const [extraAssets, setExtraAssets] = useState("");
  const [debts, setDebts] = useState("");

  // Silver rate settings
  const [silverRate, setSilverRate] = useState(DEFAULT_SILVER_RATE);
  const [showSettings, setShowSettings] = useState(false);

  // Result state
  const [hasCalculated, setHasCalculated] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [calculatedTotal, setCalculatedTotal] = useState(0);

  const currentNisabAmount = Math.round(silverRate * NISAB_TOLA);

  const calculateQuick = (e) => {
    e.preventDefault();
    setIsCalculating(true);
    setHasCalculated(false);

    setTimeout(() => {
      const amount = parseFloat(quickAmount) || 0;
      setCalculatedTotal(amount);
      setHasCalculated(true);
      setIsCalculating(false);

      if (amount >= currentNisabAmount) {
        triggerConfetti();
      }
    }, 350);
  };

  const calculateDetailed = (e) => {
    e.preventDefault();
    setIsCalculating(true);
    setHasCalculated(false);

    setTimeout(() => {
      const totalAssets =
        (parseFloat(cash) || 0) +
        (parseFloat(bank) || 0) +
        (parseFloat(goldSilverValue) || 0) +
        (parseFloat(extraAssets) || 0);
      const totalDebts = parseFloat(debts) || 0;
      const net = Math.max(0, totalAssets - totalDebts);

      setCalculatedTotal(net);
      setHasCalculated(true);
      setIsCalculating(false);

      if (net >= currentNisabAmount) {
        triggerConfetti();
      }
    }, 350);
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.65 },
        colors: ["#10b981", "#059669", "#f59e0b", "#3b82f6", "#ec4899"],
      });
    } catch {
      // ignore
    }
  };

  const resetAll = () => {
    setQuickAmount("");
    setCash("");
    setBank("");
    setGoldSilverValue("");
    setExtraAssets("");
    setDebts("");
    setHasCalculated(false);
    setCalculatedTotal(0);
  };

  const isWajib = calculatedTotal >= currentNisabAmount;
  const progressPercent = Math.min(
    100,
    Math.round((calculatedTotal / currentNisabAmount) * 100)
  );

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden mb-10 transition-all duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 opacity-10 pointer-events-none flex items-center pr-10">
          <CalcIcon className="w-64 h-64 text-white animate-pulseGlow" />
        </div>

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/50 backdrop-blur-sm border border-emerald-400/30 text-emerald-100 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
            <span>আধুনিক নেসাব ক্যালকুলেটর</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 leading-tight">
            আপনার উপর কি কুরবানী ওয়াজিব? হিসাব করুন
          </h2>
          <p className="text-emerald-100/90 text-sm leading-relaxed">
            ১০, ১১ ও ১২ যিলহজ্ব নিত্যপ্রয়োজনীয় খরচের অতিরিক্ত সাড়ে বায়ান্ন (৫২.৫) ভরি রুপা বা তার সমপরিমাণ সম্পদ থাকলে কুরবানী ওয়াজিব হয়।
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/15">
              বর্তমান নেসাব পরিমাণ: <strong className="text-amber-300 font-bold">৳ {currentNisabAmount.toLocaleString('bn-BD')}</strong>
            </span>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="text-emerald-200 underline hover:text-white transition"
            >
              {showSettings ? "দর লুকান" : "রুপার বাজারদর পরিবর্তন করুন"}
            </button>
          </div>
        </div>
      </div>

      {/* Silver Rate Modifier Dropdown */}
      {showSettings && (
        <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border-b border-emerald-100 dark:border-emerald-900/60 flex flex-wrap items-center justify-between gap-3 text-xs animate-slideDown">
          <div className="flex items-center gap-2">
            <Coins className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="font-semibold text-slate-700 dark:text-slate-200">
              ১ ভরি (তোলা) রুপার মূল্য (টাকায়):
            </span>
            <input
              type="number"
              value={silverRate}
              onChange={(e) => setSilverRate(Number(e.target.value) || 0)}
              className="w-28 px-2.5 py-1 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <button
            onClick={() => setSilverRate(DEFAULT_SILVER_RATE)}
            className="text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
          >
            ডিফল্ট রেটে রিসেট করুন (৳ {DEFAULT_SILVER_RATE})
          </button>
        </div>
      )}

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 px-6 pt-4 gap-4 bg-slate-50/50 dark:bg-slate-900/50">
        <button
          onClick={() => {
            setActiveTab("quick");
            setHasCalculated(false);
          }}
          className={`pb-3 text-sm font-semibold transition border-b-2 ${
            activeTab === "quick"
              ? "border-emerald-600 text-emerald-600 dark:text-emerald-400"
              : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
          }`}
        >
          দ্রুত পরীক্ষা (একক হিসাব)
        </button>
        <button
          onClick={() => {
            setActiveTab("detailed");
            setHasCalculated(false);
          }}
          className={`pb-3 text-sm font-semibold transition border-b-2 ${
            activeTab === "detailed"
              ? "border-emerald-600 text-emerald-600 dark:text-emerald-400"
              : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
          }`}
        >
          বিস্তারিত অ্যাসেট ব্রেকডাউন
        </button>
      </div>

      <div className="p-6 sm:p-8">
        {/* Name input */}
        <div className="mb-6 max-w-md">
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
            আপনার শুভ নাম (ঐচ্ছিক)
          </label>
          <input
            type="text"
            placeholder="যেমন: মোঃ আব্দুল্লাহ"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition text-sm"
          />
        </div>

        {/* Tab 1: Quick Form */}
        {activeTab === "quick" && (
          <form onSubmit={calculateQuick} className="space-y-6 animate-fadeIn">
            <div className="max-w-xl">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                কুরবানীর দিনগুলোতে প্রয়োজনীয় খরচের অতিরিক্ত আপনার মোট কত টাকা বা সম্পদ রয়েছে?
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">
                  ৳
                </span>
                <input
                  type="number"
                  min="0"
                  required
                  placeholder="যেমন: ৮০০০০"
                  value={quickAmount}
                  onChange={(e) => setQuickAmount(e.target.value)}
                  className="w-full pl-9 pr-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner"
                />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 flex items-center gap-1">
                <Info className="w-3.5 h-3.5 text-emerald-600" />
                নগদ অর্থ, সোনা-রুপা, অতিরিক্ত জমি বা অব্যবহৃত আসবাবপত্রের মোট মূল্য।
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={!quickAmount || isCalculating}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold text-sm shadow-md shadow-emerald-600/30 transition hover:shadow-lg active:scale-95 flex items-center gap-2"
              >
                {isCalculating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>যাচাই করা হচ্ছে...</span>
                  </>
                ) : (
                  <>
                    <CalcIcon className="w-4 h-4" />
                    <span>যাচাই করুন</span>
                  </>
                )}
              </button>

              {hasCalculated && (
                <button
                  type="button"
                  onClick={resetAll}
                  className="px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium text-sm transition flex items-center gap-1.5"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>রিসেট</span>
                </button>
              )}
            </div>
          </form>
        )}

        {/* Tab 2: Detailed Breakdown */}
        {activeTab === "detailed" && (
          <form onSubmit={calculateDetailed} className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  <Wallet className="w-3.5 h-3.5 text-emerald-600" />
                  <span>নগদ টাকা (হাতে ও ওয়ালেটে)</span>
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="৳ ০"
                  value={cash}
                  onChange={(e) => setCash(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  <Building2 className="w-3.5 h-3.5 text-teal-600" />
                  <span>ব্যাংক ও মোবাইল ব্যাংকিং ব্যালেন্স</span>
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="৳ ০"
                  value={bank}
                  onChange={(e) => setBank(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  <Coins className="w-3.5 h-3.5 text-amber-500" />
                  <span>স্বর্ণ ও রুপার বর্তমান বাজারমূল্য</span>
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="৳ ০"
                  value={goldSilverValue}
                  onChange={(e) => setGoldSilverValue(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                  <span>অতিরিক্ত জমি ও ব্যবসায়িক পণ্যের মূল্য</span>
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="৳ ০"
                  value={extraAssets}
                  onChange={(e) => setExtraAssets(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 mb-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>(বাদ যাবে) আবশ্যকীয় বকেয়া দেনা ও ঋণ</span>
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="৳ ০"
                  value={debts}
                  onChange={(e) => setDebts(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/40 dark:bg-rose-950/20 text-slate-800 dark:text-slate-100 text-sm focus:ring-2 focus:ring-rose-500"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={isCalculating}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md shadow-emerald-600/30 transition hover:shadow-lg active:scale-95 flex items-center gap-2"
              >
                {isCalculating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>হিসাব করা হচ্ছে...</span>
                  </>
                ) : (
                  <>
                    <CalcIcon className="w-4 h-4" />
                    <span>মোট সম্পদ হিসাব করুন</span>
                  </>
                )}
              </button>

              {hasCalculated && (
                <button
                  type="button"
                  onClick={resetAll}
                  className="px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium text-sm transition flex items-center gap-1.5"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>রিসেট</span>
                </button>
              )}
            </div>
          </form>
        )}

        {/* Result Showcase */}
        {hasCalculated && (
          <div
            className={`mt-8 p-6 sm:p-8 rounded-3xl border transition-all duration-500 animate-slideUp ${
              isWajib
                ? "bg-gradient-to-br from-emerald-50 via-teal-50/60 to-emerald-100/50 dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-emerald-900/20 border-emerald-300 dark:border-emerald-700/60 shadow-lg shadow-emerald-600/10"
                : "bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-slate-900 dark:to-slate-800/40 border-slate-200 dark:border-slate-700"
            }`}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {isWajib ? (
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-sm animate-scaleUp">
                      <Check className="w-3.5 h-3.5" />
                      কুরবানী ওয়াজিব
                    </span>
                  ) : (
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-sm animate-scaleUp">
                      <Info className="w-3.5 h-3.5" />
                      কুরবানী ওয়াজিব নয়
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {userName ? `সম্মানিত ${userName}, ` : ""}
                  {isWajib
                    ? "আলহামদুলিল্লাহ! আপনার উপর কুরবানী ওয়াজিব হয়েছে।"
                    : "বর্তমান হিসাবে আপনার উপর কুরবানী ওয়াজিব হয়নি।"}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isWajib
                    ? "আল্লাহ তাআলা আপনাকে সামর্থ্য দান করেছেন। কুরবানীর প্রস্তুতি গ্রহণ করার এবং কুরবানির সহীহ মাসায়েল অনুযায়ী পবিত্র আমলটি সম্পন্ন করার আহবান রইল।"
                    : "আল্লাহ তাআলা আপনার হালাল রিযিকে প্রভূত বরকত দান করুন এবং আগামীতে কুরবানী করার তাওফিক ও সামর্থ্য দান করুন। (আমিন)"}
                </p>

                {/* Progress bar towards Nisab */}
                <div className="pt-3">
                  <div className="flex justify-between text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                    <span>আপনার সম্পদ: ৳ {calculatedTotal.toLocaleString('bn-BD')}</span>
                    <span>নেসাব লক্ষ্যমাত্রা: ৳ {currentNisabAmount.toLocaleString('bn-BD')} ({progressPercent}%)</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${
                        isWajib
                          ? "bg-gradient-to-r from-emerald-500 to-teal-400"
                          : "bg-gradient-to-r from-amber-400 to-emerald-400"
                      }`}
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 w-full md:w-auto">
                <Link
                  to="/qurbani-details"
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs text-center shadow-md transition hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>কুরবানির নিয়মাবলী জানুন</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/question"
                  className="px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-xs text-center transition hover:scale-105"
                >
                  মাসায়েল ও ফাতাওয়া পড়ুন
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
