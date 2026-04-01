import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Import tất cả các màn hình
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
import Screen3_4 from './pages/Level1/Screen3_4';
import Screen4_1 from './pages/Level1/Screen4_1';
import Screen4_3 from './pages/Level1/Screen4_3';
import Screen5_1 from './pages/Level1/Screen5_1';
import Screen5_3 from './pages/Level1/Screen5_3';
import Screen6_1 from './pages/Level1/Screen6_1';
import Screen6_3 from './pages/Level1/Screen6_3';

// Wrapper để bọc từng trang, tạo hiệu ứng trượt (Slide-in / Slide-out)
const PageTransition = ({ children }) => {
  return (
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
};

// Component quản lý Routes để bắt được sự kiện đổi link
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    // mode="wait" đảm bảo trang cũ bay ra hết rồi trang mới mới bay vào
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Screen0_1 /></PageTransition>} />
        <Route path="/level1/screen0_2" element={<PageTransition><Screen0_2 /></PageTransition>} />
        <Route path="/level1/screen0_3" element={<PageTransition><Screen0_3 /></PageTransition>} />
        <Route path="/level1/screen1_1" element={<PageTransition><Screen1_1 /></PageTransition>} />
        <Route path="/level1/screen1_2" element={<PageTransition><Screen1_2 /></PageTransition>} />
        <Route path="/level1/screen1_3" element={<PageTransition><Screen1_3 /></PageTransition>} />
        <Route path="/level1/screen2_1" element={<PageTransition><Screen2_1 /></PageTransition>} />
        <Route path="/level1/screen2_2" element={<PageTransition><Screen2_2 /></PageTransition>} />
        <Route path="/level1/screen2_3" element={<PageTransition><Screen2_3 /></PageTransition>} />
        <Route path="/level1/screen3_1" element={<PageTransition><Screen3_1 /></PageTransition>} />
        <Route path="/level1/screen3_4" element={<PageTransition><Screen3_4 /></PageTransition>} />
        <Route path="/level1/screen4_1" element={<PageTransition><Screen4_1 /></PageTransition>} />
        <Route path="/level1/screen4_3" element={<PageTransition><Screen4_3 /></PageTransition>} />
        <Route path="/level1/screen5_1" element={<PageTransition><Screen5_1 /></PageTransition>} />
        <Route path="/level1/screen5_3" element={<PageTransition><Screen5_3 /></PageTransition>} />
        <Route path="/level1/screen6_1" element={<PageTransition><Screen6_1 /></PageTransition>} />
        <Route path="/level1/screen6_3" element={<PageTransition><Screen6_3 /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Giả lập chờ tải tài nguyên hoặc dùng thực tế với window.onload
    const timer = setTimeout(() => setIsLoading(false), 2000); 
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div style={{ 
        width: '100vw', height: '100vh', display: 'flex', 
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        background: '#f0fdf4', fontFamily: "'Itim', cursive" 
      }}>
        <div style={{ fontSize: '100px', marginBottom: '20px' }}>🐘</div>
        <h2 style={{ color: '#1e40af' }}>Pipo đang chuẩn bị hành trình...</h2>
      </div>
    );
  }
  return (
    <Router>
      {/* Background tổng của cả trang web (Màu tối để làm nổi bật App) */}
      <div className="w-full h-screen bg-slate-800 flex items-center justify-center p-0 md:p-6 overflow-hidden">
        
        {/* Khung giả lập màn hình Tablet/Điện thoại */}
        <div className="relative w-full h-full max-w-5xl bg-white shadow-2xl md:rounded-[3rem] border-0 md:border-[12px] border-slate-900 overflow-hidden">
          
          {/* Cụm Camera/Loa giả lập cho giống iPad */}
          <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-slate-900 rounded-b-3xl z-50"></div>
          
          {/* Khu vực chứa giao diện chính */}
          <div className="relative w-full h-full overflow-hidden bg-gray-50">
            <AnimatedRoutes />
          </div>

        </div>
      </div>
    </Router>
  );
}

export default App;