import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import Assets
import backgroundImage from '../../assets/images/background0_1.jpg';
import tingSnd from '../../assets/sounds/ting.mp3';
import bgmSnd from '../../assets/sounds/happy_bgm.mp3';

export default function Screen0_1() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";

  // Công thức tạo viền chữ trắng dày (Outline)
  const textOutline = "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 0px 2px 0 #fff, 0px -2px 0 #fff, 2px 0px 0 #fff, -2px 0px 0 #fff";

  // Công thức tạo viền trắng cho Emoji/Vật phẩm
  const itemOutline = "drop-shadow(3px 0 0 white) drop-shadow(-3px 0 0 white) drop-shadow(0 3px 0 white) drop-shadow(0 -3px 0 white)";

  useEffect(() => {
    const bgm = new Audio(bgmSnd);
    bgm.loop = true;
    bgm.volume = 0.2;
    bgm.play().catch(() => {});

    // --- ĐÃ XOÁ SETTIMEOUT TẠI ĐÂY ---

    return () => {
      bgm.pause();
    };
  }, []); // useEffect giờ chỉ quản lý nhạc nền

  return (
    <div 
      // Giờ đây người dùng PHẢI bấm vào màn hình mới có thể chuyển màn
      onClick={() => navigate('/level1/screen0_2')}
      style={{
        width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        position: 'relative', fontFamily: cuteFont, cursor: 'pointer'
      }}
    >
      {/* 1. LOGO SAFEKIDS CÓ VIỀN */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        style={{ textAlign: 'center', zIndex: 10, marginBottom: '20px' }}
      >
        <h1 style={{ 
          fontSize: '110px', color: '#1e40af', margin: 0, 
          textShadow: textOutline 
        }}>
          SafeKids
        </h1>
        <p style={{ 
          fontSize: '34px', color: '#f59e0b', fontWeight: 'bold',
          textShadow: textOutline 
        }}>
          Bí kíp Hiệp sĩ bảo vệ nụ cười
        </p>
      </motion.div>

      {/* 2. VOI PIPO & VẬT PHẨM CÓ VIỀN */}
      <motion.div 
        initial={{ x: '100vw', rotate: 10 }} animate={{ x: 0, rotate: 0 }}
        transition={{ duration: 1.2, type: 'spring' }}
        onAnimationComplete={() => new Audio(tingSnd).play()}
        style={{ position: 'relative', filter: itemOutline }}
      >
        <div style={{ fontSize: '220px' }}>
          {/* ✨ NÂNG CẤP: PIPO NHÚN NHẢY LÒ CÒ LÊN XUỐNG VUI VẺ */}
          <motion.span
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            style={{ display: 'inline-block' }}
          >
            🐘
          </motion.span>
          
          {/* ✨ NÂNG CẤP: HIỆU ỨNG LẤP LÁNH & PHÓNG TO THU NHỎ CỰC KỲ SINH ĐỘNG */}
          <motion.span 
            animate={{ 
              opacity: [0, 1, 0, 1, 0], // Lấp lánh nhịp nhàng
              scale: [1, 1.3, 1, 1.3, 1], // Phóng to thu nhỏ
            }} 
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            style={{ position: 'absolute', top: '10%', right: '-10%', fontSize: '60px', display: 'inline-block' }}
          >
            ✨
          </motion.span>
        </div>
        
        {/* ✨ NÂNG CẤP: HIỆU ỨNG LÁ CỜ VẪY NHÈ NHẸ CỰC ĐẸP */}
        <motion.div 
          animate={{ rotate: [-15, 15, -15] }} // Vẫy cờ
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          style={{ position: 'absolute', left: '-40px', top: '55%', fontSize: '90px', zIndex: -1 }}
        >
          🚩
        </motion.div>
      </motion.div>

      {/* 3. LỜI THOẠI */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }}
        style={{ 
          marginTop: '40px', background: 'rgba(255, 255, 255, 0.95)', 
          padding: '25px 50px', borderRadius: '40px',
          border: '8px solid #60a5fa', 
          boxShadow: '0 15px 30px rgba(0,0,0,0.2)', 
          maxWidth: '85%', zIndex: 10
        }}
      >
        <p style={{ fontSize: '26px', color: '#1e3a8a', margin: 0, textAlign: 'center', fontWeight: 'bold' }}>
          “Xin chào! Tớ là <b>Voi Pipo</b>. Chào mừng cậu đến với SafeKids – nơi mỗi bạn nhỏ đều có thể trở thành hiệp sĩ!”
        </p>
      </motion.div>

      <p style={{ 
        position: 'absolute', bottom: '20px', color: '#1e3a8a', 
        fontSize: '18px', background: 'white', padding: '5px 15px', borderRadius: '20px' 
      }}>
        (Chạm màn hình để bắt đầu)
      </p>
    </div>
  );
}