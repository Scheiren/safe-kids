import React, { useState } from 'react'; // Thêm useState để quản lý trạng thái video
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- IMPORT ASSETS ---
import clickSnd from '../../assets/sounds/click.mp3';
import introVideo from '../../assets/videos/video1_1.mp4'; // Thêm video mới

export default function Screen1_1() {
  const navigate = useNavigate();
  const [videoFinished, setVideoFinished] = useState(false); // Trạng thái kiểm soát video
  const cuteFont = "'Itim', cursive";

  const playClick = () => {
    const navAudio = new Audio(clickSnd);
    navAudio.play();
  };

  // 1. GIAO DIỆN VIDEO ĐẦU TRANG
  if (!videoFinished) {
    return (
      <div style={{ 
        width: '100vw', height: '100vh', background: 'black', 
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden' 
      }}>
        <video 
          src={introVideo} 
          autoPlay 
          onEnded={() => setVideoFinished(true)} // Tự động chuyển màn khi xong video
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
        
        {/* Nút Bỏ qua video cho bé */}
        <button 
          onClick={() => setVideoFinished(true)}
          style={{ 
            position: 'absolute', bottom: '30px', right: '30px', 
            padding: '10px 25px', borderRadius: '15px', background: 'rgba(255,255,255,0.6)',
            border: 'none', cursor: 'pointer', fontFamily: cuteFont, fontSize: '18px',
            boxShadow: '0 4px 0 rgba(0,0,0,0.2)'
          }}
        >
          Bỏ qua ⏭️
        </button>
      </div>
    );
  }

  // 2. GIAO DIỆN MÀN 1.1 GỐC (HIỆN SAU KHI XONG VIDEO)
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      style={{
        width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
        background: 'linear-gradient(to bottom, #7dd3fc, #f0fdf4)', position: 'relative',
        fontFamily: cuteFont
      }}
    >
      <motion.div 
        animate={{ rotate: 360, scale: [1, 1.1, 1] }} 
        transition={{ rotate: { repeat: Infinity, duration: 20, ease: "linear" }, scale: { repeat: Infinity, duration: 4 } }}
        style={{ position: 'absolute', top: '40px', left: '40px', fontSize: '100px' }}
      >
        🌞
      </motion.div>
      
      <motion.div 
        animate={{ x: [-20, 20, -20] }} 
        transition={{ repeat: Infinity, duration: 6 }} 
        style={{ position: 'absolute', top: '15%', right: '15%', fontSize: '60px', opacity: 0.4 }}
      >
        ☁️
      </motion.div>

      <div style={{ zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', width: '100%', maxWidth: '800px', padding: '20px' }}>
        <motion.div 
          initial={{ scale: 0, rotate: -5 }} 
          animate={{ scale: 1, rotate: 0 }}
          style={{ background: 'white', padding: '30px 50px', borderRadius: '50px', border: '8px solid #fde047', boxShadow: '0 15px 30px rgba(0,0,0,0.1)', textAlign: 'center', position: 'relative' }}
        >
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e293b', margin: 0 }}>
            "Tèn ten! Xin chào Hiệp sĩ mới! Tớ là <span style={{ color: '#2563eb' }}>Pipo</span>. <br/>Cùng tớ bảo vệ nụ cười nhé!"
          </p>
          <div style={{ position: 'absolute', bottom: '-25px', left: '50%', transform: 'translateX(-50%) rotate(45deg)', width: '40px', height: '40px', background: 'white', borderRight: '8px solid #fde047', borderBottom: '8px solid #fde047' }} />
        </motion.div>

        <motion.div 
          animate={{ y: [0, -30, 0], rotate: [-2, 2, -2] }} 
          transition={{ repeat: Infinity, duration: 2 }} 
          style={{ fontSize: '180px' }}
        >
          🐘
        </motion.div>

        <motion.button 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }} 
          onClick={() => { 
            playClick();
            navigate('/level1/screen1_2'); 
          }}
          style={{ 
            background: '#facc15', color: '#713f12', fontSize: '34px', fontWeight: 'bold', 
            padding: '20px 60px', borderRadius: '100px', border: 'none', cursor: 'pointer', 
            boxShadow: '0 12px 0 #ca8a04', fontFamily: cuteFont 
          }}
        >
          ⭐ TỚ SẴN SÀNG!
        </motion.button>
      </div>
    </motion.div>
  );
}
