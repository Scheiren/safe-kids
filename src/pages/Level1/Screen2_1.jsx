import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import popSnd from '../../assets/sounds/pop.mp3';
import successSnd from '../../assets/sounds/success.mp3';
import voiceSnd from '../../assets/sounds/2.1.m4a'; // Import giọng thoại 2.1

export default function Screen2_1() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const cuteFont = "'Itim', cursive";
  
  // Danh sách bóng cảm xúc theo kịch bản
  const [bubbles, setBubbles] = useState([
    { id: 1, text: "Sợ hãi.", color: "#a855f7", icon: '😟' },
    { id: 2, text: "Tức giận.", color: "#ef4444", icon: '😡' },
    { id: 3, text: "Xấu hổ.", color: "#6b7280", icon: '😳' }
  ]);

  const textOutline = "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 0px 2px 0 #fff, 0px -2px 0 #fff, 2px 0px 0 #fff, -2px 0px 0 #fff";
  const itemOutline = "drop-shadow(3px 0 0 white) drop-shadow(-3px 0 0 white) drop-shadow(0 3px 0 white) drop-shadow(0 -3px 0 white)";

  // Phát giọng thoại hướng dẫn ngay khi vào màn hình
  useEffect(() => {
    audioRef.current = new Audio(voiceSnd);
    audioRef.current.play().catch(err => console.log("Chờ tương tác để phát thoại:", err));

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const playSfx = (src) => { 
    const sfx = new Audio(src);
    sfx.play();
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', fontFamily: cuteFont }}>
      
      {/* CHIA MÀN HÌNH THEO KỊCH BẢN */}
      <div style={{ display: 'flex', flex: 1 }}>
        
        {/* NỬA TRÁI: TƯƠI SÁNG - CÙNG VUI */}
        <div style={{ flex: 1, background: 'linear-gradient(to bottom, #dcfce7, #bbf7d0)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRight: '8px solid white' }}>
          <motion.div 
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }} 
            transition={{ repeat: Infinity, duration: 4 }} 
            style={{ fontSize: '120px', filter: itemOutline }}
          >
            🐰⚽🐰
          </motion.div>
          <h2 style={{ background: 'white', padding: '15px 45px', borderRadius: '100px', fontSize: '28px', color: '#166534', boxShadow: '0 8px 0 #86efac', marginTop: '20px' }}>
            Cả hai cùng vui
          </h2>
        </div>

        {/* NỬA PHẢI: TỐI NHẸ - BẮT NẠT */}
        <div style={{ flex: 1, background: 'linear-gradient(to bottom, #475569, #1e293b)', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div 
            animate={{ x: [-5, 5, -5] }} 
            transition={{ repeat: Infinity, duration: 0.5 }} 
            style={{ fontSize: '120px', filter: itemOutline }}
          >
            🦊🧸😭
          </motion.div>
          
          {/* TƯƠNG TÁC CHẠM NỔ BÓNG */}
          <AnimatePresence>
            {bubbles.map((b, i) => (
              <motion.button 
                key={b.id} 
                initial={{ scale: 0 }} 
                animate={{ scale: 1, y: [0, -20, 0] }} 
                exit={{ scale: 2, opacity: 0 }} 
                transition={{ y: { repeat: Infinity, duration: 2, delay: i * 0.4 } }}
                onClick={() => { playSfx(popSnd); setBubbles(prev => prev.filter(x => x.id !== b.id)); }}
                style={{ 
                  position: 'absolute', top: `${20+i*22}%`, left: `${20+(i%2)*40}%`, 
                  width: '150px', height: '150px', borderRadius: '50%', background: b.color, 
                  color: 'white', border: '5px solid white', fontSize: '22px', 
                  fontFamily: cuteFont, cursor: 'pointer', boxShadow: '0 10px 20px rgba(0,0,0,0.3)', 
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' 
                }}
              >
                <span style={{ fontSize: '40px' }}>{b.icon}</span>{b.text}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* PIPO ĐỨNG GIỮA CẦM RADAR */}
      <motion.div 
        style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 20, filter: itemOutline }}
      >
        <div style={{ position: 'relative', fontSize: '100px' }}>
          🐘
          <motion.span 
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '40px' }}
          >
            📡
          </motion.span>
        </div>
      </motion.div>

      {/* LỜI THOẠI RADAR */}
      <motion.div 
        initial={{ y: 100, x: '-50%' }} 
        animate={{ y: 0, x: '-50%' }} 
        style={{ 
          position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', 
          background: 'white', padding: '25px 50px', borderRadius: '45px', 
          border: '6px solid #60a5fa', width: '85%', display: 'flex', 
          alignItems: 'center', gap: '30px', zIndex: 10 
        }}
      >
        <p style={{ margin: 0, fontSize: '24px', color: '#1e40af', textAlign: 'center', lineHeight: '1.4' }}>
          "Trêu đùa là khi <b>TẤT CẢ</b> đều thấy vui. Nhưng nếu có một bạn bị đau, bị sợ, bị khóc… thì đó không còn là trò vui nữa. Đó là bắt nạt."
        </p>
      </motion.div>

      {/* NÚT TIẾP TỤC SAU KHI NỔ HẾT BÓNG */}
      {bubbles.length === 0 && (
        <motion.button 
          initial={{ scale: 0, x: '-50%', y: '-50%' }} 
          animate={{ scale: 1, x: '-50%', y: '-50%' }} 
          onClick={() => { 
            const navAudio = new Audio(successSnd);
            navAudio.play();
            navigate('/level1/screen2_2'); 
          }} 
          style={{ 
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 
            background: '#facc15', padding: '35px 80px', borderRadius: '100px', 
            fontSize: '40px', border: '8px solid white', boxShadow: '0 15px 0 #ca8a04', 
            fontFamily: cuteFont, cursor: 'pointer', zIndex: 100 
          }}
        >
          TỚ ĐÃ HIỂU! ➡️
        </motion.button>
      )}
    </div>
  );
}