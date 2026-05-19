import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// --- IMPORT LEVEL 1 ---
import Screen0_1 from './pages/Level1/Screen0_1';
import Screen0_2 from './pages/Level1/Screen0_2';
import Screen0_3 from './pages/Level1/Screen0_3';
import Screen1_1 from './pages/Level1/Screen1_1';
import Screen1_2 from './pages/Level1/Screen1_2';
import Screen1_3 from './pages/Level1/Screen1_3';
import Screen2_1 from './pages/Level1/Screen2_1';
import Screen2_2 from './pages/Level1/Screen2_2';
import Screen2_3 from './pages/Level1/Screen2_3';
import Screen3_1 from './pages/Level1/Screen3_1';
import Screen3_2 from './pages/Level1/Screen3_2';
import Screen3_3 from './pages/Level1/Screen3_3';
import Screen3_4 from './pages/Level1/Screen3_4';
import Screen4_1 from './pages/Level1/Screen4_1';
import Screen4_2 from './pages/Level1/Screen4_2';
import Screen4_3 from './pages/Level1/Screen4_3';
import Screen5_1 from './pages/Level1/Screen5_1';
import Screen5_2 from './pages/Level1/Screen5_2';
import Screen5_3 from './pages/Level1/Screen5_3';
import Screen6_1 from './pages/Level1/Screen6_1';
import Screen6_2 from './pages/Level1/Screen6_2';
import Screen6_3 from './pages/Level1/Screen6_3';

// --- IMPORT LEVEL 2 ---
import L2_Screen1_1 from './pages/Level2/Screen1_1';
import L2_Screen1_2 from './pages/Level2/Screen1_2';
import L2_Screen1_3 from './pages/Level2/Screen1_3';
import L2_Screen2_1 from './pages/Level2/Screen2_1';
import L2_Screen2_2 from './pages/Level2/Screen2_2';
import L2_Screen2_3 from './pages/Level2/Screen2_3';
import L2_Screen3_1 from './pages/Level2/Screen3_1';
import L2_Screen3_2 from './pages/Level2/Screen3_2';
import L2_Screen3_3 from './pages/Level2/Screen3_3';
import L2_Screen3_4 from './pages/Level2/Screen3_4';
import L2_Screen4_1 from './pages/Level2/Screen4_1';
import L2_Screen4_2 from './pages/Level2/Screen4_2';
import L2_Screen4_3 from './pages/Level2/Screen4_3';
import L2_Screen5_1 from './pages/Level2/Screen5_1';
import L2_Screen5_2 from './pages/Level2/Screen5_2';
import L2_Screen5_3 from './pages/Level2/Screen5_3';
import L2_Screen6_1 from './pages/Level2/Screen6_1';
import L2_Screen6_2 from './pages/Level2/Screen6_2';
import L2_Screen6_3 from './pages/Level2/Screen6_3';

// --- IMPORT ADULTS ---
import ScreenE_1 from './pages/Adults/ScreenE_1';
import ScreenE_2 from './pages/Adults/ScreenE_2';
import ScreenE_3 from './pages/Adults/ScreenE_3';

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    style={{ width: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column' }}
  >
    {children}
  </motion.div>
);

// ✨ NÚT HOME TOÀN CỤC (TỰ ĐỘNG XUẤT HIỆN Ở TỪNG TRANG)
const GlobalHomeButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Ẩn nút Home khi đang ở màn hình Welcome đầu tiên (/)
  if (location.pathname === '/') return null;

  return (
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: '#f8fafc' }}
      whileTap={{ scale: 0.9 }}
      onClick={() => navigate('/level1/screen0_2')} // Đưa bé quay về màn chọn Level chính
      style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 9999, // Đảm bảo luôn nổi lên trên cùng layout
        background: '#ffffff',
        border: '3px solid #60a5fa',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        cursor: 'pointer',
        boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
      }}
      title="Quay về trang chủ chọn bài học"
    >
      🏠
    </motion.button>
  );
};

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
        <Route path="/level1/screen1_3" element={<PageTransition><Screen1_3 /></PageTransition>} />
        <Route path="/level1/screen2_1" element={<PageTransition><Screen2_1 /></PageTransition>} />
        <Route path="/level1/screen2_2" element={<PageTransition><Screen2_2 /></PageTransition>} />
        <Route path="/level1/screen2_3" element={<PageTransition><Screen2_3 /></PageTransition>} />
        <Route path="/level1/screen3_1" element={<PageTransition><Screen3_1 /></PageTransition>} />
        <Route path="/level1/screen3_2" element={<PageTransition><Screen3_2 /></PageTransition>} />
        <Route path="/level1/screen3_3" element={<PageTransition><Screen3_3 /></PageTransition>} />
        <Route path="/level1/screen3_4" element={<PageTransition><Screen3_4 /></PageTransition>} />
        <Route path="/level1/screen4_1" element={<PageTransition><Screen4_1 /></PageTransition>} />
        <Route path="/level1/screen4_2" element={<PageTransition><Screen4_2 /></PageTransition>} />
        <Route path="/level1/screen4_3" element={<PageTransition><Screen4_3 /></PageTransition>} />
        <Route path="/level1/screen5_1" element={<PageTransition><Screen5_1 /></PageTransition>} />
        <Route path="/level1/screen5_2" element={<PageTransition><Screen5_2 /></PageTransition>} />
        <Route path="/level1/screen5_3" element={<PageTransition><Screen5_3 /></PageTransition>} />
        <Route path="/level1/screen6_1" element={<PageTransition><Screen6_1 /></PageTransition>} />
        <Route path="/level1/screen6_2" element={<PageTransition><Screen6_2 /></PageTransition>} />
        <Route path="/level1/screen6_3" element={<PageTransition><Screen6_3 /></PageTransition>} />

        {/* Level 2 Routes */}
        <Route path="/level2/screen1_1" element={<PageTransition><L2_Screen1_1 /></PageTransition>} />
        <Route path="/level2/screen1_2" element={<PageTransition><L2_Screen1_2 /></PageTransition>} />
        <Route path="/level2/screen1_3" element={<PageTransition><L2_Screen1_3 /></PageTransition>} />
        <Route path="/level2/screen2_1" element={<PageTransition><L2_Screen2_1 /></PageTransition>} />
        <Route path="/level2/screen2_2" element={<PageTransition><L2_Screen2_2 /></PageTransition>} />
        <Route path="/level2/screen2_3" element={<PageTransition><L2_Screen2_3 /></PageTransition>} />
        <Route path="/level2/screen3_1" element={<PageTransition><L2_Screen3_1 /></PageTransition>} />
        <Route path="/level2/screen3_2" element={<PageTransition><L2_Screen3_2 /></PageTransition>} />
        <Route path="/level2/screen3_3" element={<PageTransition><L2_Screen3_3 /></PageTransition>} />
        <Route path="/level2/screen3_4" element={<PageTransition><L2_Screen3_4 /></PageTransition>} />
        <Route path="/level2/screen4_1" element={<PageTransition><L2_Screen4_1 /></PageTransition>} />
        <Route path="/level2/screen4_2" element={<PageTransition><L2_Screen4_2 /></PageTransition>} />
        <Route path="/level2/screen4_3" element={<PageTransition><L2_Screen4_3 /></PageTransition>} />
        <Route path="/level2/screen5_1" element={<PageTransition><L2_Screen5_1 /></PageTransition>} />
        <Route path="/level2/screen5_2" element={<PageTransition><L2_Screen5_2 /></PageTransition>} />
        <Route path="/level2/screen5_3" element={<PageTransition><L2_Screen5_3 /></PageTransition>} />
        <Route path="/level2/screen6_1" element={<PageTransition><L2_Screen6_1 /></PageTransition>} />
        <Route path="/level2/screen6_2" element={<PageTransition><L2_Screen6_2 /></PageTransition>} />
        <Route path="/level2/screen6_3" element={<PageTransition><L2_Screen6_3 /></PageTransition>} />

        {/* Adults Routes */}
        <Route path="/adults/e1" element={<PageTransition><ScreenE_1 /></PageTransition>} />
        <Route path="/adults/e2" element={<PageTransition><ScreenE_2 /></PageTransition>} />
        <Route path="/adults/e3" element={<PageTransition><ScreenE_3 /></PageTransition>} />
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
          
          {/* Vùng hiển thị nội dung có thanh cuộn mượt dọc khi tràn nội dung */}
          <div className="relative w-full h-full overflow-y-auto overflow-x-hidden bg-gray-50">
            <GlobalHomeButton /> {/* Gọi nút Home nổi toàn cục */}
            <AnimatedRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;