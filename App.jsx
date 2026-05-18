import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// --- LEVEL 1 ---
import Screen0_1 from './pages/Level1/Screen0_1';
import Screen0_2 from './pages/Level1/Screen0_2';
import Screen0_3 from './pages/Level1/Screen0_3';
import Screen1_1 from './pages/Level1/Screen1_1';
import Screen1_2 from './pages/Level1/Screen1_2';
import Screen2_3 from './pages/Level1/Screen2_3';
import Screen3_1 from './pages/Level1/Screen3_1';
import Screen3_2 from './pages/Level1/Screen3_2';
import Screen4_1 from './pages/Level1/Screen4_1';

// --- LEVEL 2 ---
import L2_Screen1_1 from './pages/Level2/Screen1_1';
import L2_Screen1_2 from './pages/Level2/Screen1_2';
import L2_Screen2_1 from './pages/Level2/Screen2_1';
import L2_Screen3_1 from './pages/Level2/Screen3_1';


const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 50, scale: 0.98 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    exit={{ opacity: 0, x: -50, scale: 0.95 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="w-full h-full absolute top-0 left-0"
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Intro */}
        <Route path="/" element={<PageTransition><Screen0_1 /></PageTransition>} />
        <Route path="/level1/screen0_2" element={<PageTransition><Screen0_2 /></PageTransition>} />
        <Route path="/level1/screen0_3" element={<PageTransition><Screen0_3 /></PageTransition>} />
        
        {/* Level 1 Routes */}
        <Route path="/level1/screen1_1" element={<PageTransition><Screen1_1 /></PageTransition>} />
        <Route path="/level1/screen1_2" element={<PageTransition><Screen1_2 /></PageTransition>} />
        <Route path="/level1/screen2_3" element={<PageTransition><Screen2_3 /></PageTransition>} />
        <Route path="/level1/screen3_1" element={<PageTransition><Screen3_1 /></PageTransition>} />
        <Route path="/level1/screen3_2" element={<PageTransition><Screen3_2 /></PageTransition>} />
        <Route path="/level1/screen4_1" element={<PageTransition><Screen4_1 /></PageTransition>} />

        {/* Level 2 Routes */}
        <Route path="/level2/screen1_1" element={<PageTransition><L2_Screen1_1 /></PageTransition>} />
        <Route path="/level2/screen1_2" element={<PageTransition><L2_Screen1_2 /></PageTransition>} />
        <Route path="/level2/screen2_1" element={<PageTransition><L2_Screen2_1 /></PageTransition>} />
        <Route path="/level2/screen3_1" element={<PageTransition><L2_Screen3_1 /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500); 
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-green-50" style={{ fontFamily: "'Itim', cursive" }}>
        <div className="text-8xl mb-5 animate-bounce">🐘</div>
        <h2 className="text-blue-800 text-3xl">Pipo đang chuẩn bị hành trình...</h2>
      </div>
    );
  }

  return (
    <Router>
      <div className="w-full h-screen bg-slate-800 flex items-center justify-center p-0 md:p-6 overflow-hidden">
        <div className="relative w-full h-full max-w-5xl bg-white shadow-2xl md:rounded-[3rem] border-0 md:border-[12px] border-slate-900 overflow-hidden">
          <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-slate-900 rounded-b-3xl z-50"></div>
          <div className="relative w-full h-full overflow-hidden bg-gray-50">
            <AnimatedRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;