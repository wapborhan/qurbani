import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";
import { SplashScreen, TopProgressBar } from "./components/LoadingScreen";

// Pages
import {
  Home,
  Amol,
  History,
  Question,
  Developer,
  QurbaniDetails,
  Answer,
} from "./pages";

const AppContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [splashExiting, setSplashExiting] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();

  // Initial Splash Screen Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashExiting(true);
      setTimeout(() => setShowSplash(false), 500);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  // Top progress bar on route change
  useEffect(() => {
    setIsNavigating(true);
    const navTimer = setTimeout(() => {
      setIsNavigating(false);
    }, 300);

    return () => clearTimeout(navTimer);
  }, [location.pathname]);

  return (
    <>
      {showSplash && <SplashScreen isExiting={splashExiting} />}
      <TopProgressBar isAnimating={isNavigating} />

      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        {/* Main Area: offset by sidebar on large screens */}
        <div className="flex-1 flex flex-col lg:pl-72 transition-all duration-300">
          {/* Topbar */}
          <NavBar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />

          {/* Page Content with smooth route entrance animation */}
          <main
            key={location.pathname}
            className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 animate-fadeIn"
          >
            <Routes>
              <Route path="/" element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/question" element={<Question />} />
              <Route path="/question/:id" element={<Answer />} />
              <Route path="/history" element={<History />} />
              <Route path="/amol" element={<Amol />} />
              <Route path="/qurbani-details" element={<QurbaniDetails />} />
              <Route path="/about" element={<Developer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Modern Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
