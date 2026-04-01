import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import magicSnd from '../../assets/sounds/magic.mp3';
import clickSnd from '../../assets/sounds/click.mp3';
import voiceSnd from '../../assets/sounds/1.2.m4a'; // Import file thoại mới

export default function Screen1_2() {
  const navigate = useNavigate();
  const [hasInteracted, setHasInteracted] = useState(false);
  const [hearts, setHearts] = useState([]);
  const audioRef = useRef(null); // Quản lý âm thanh thoại và hiệu ứng
  const cuteFont = "'Itim', cursive";

  // Phát giọng thoại Pipo khi vừa vào màn hình
  useEffect(() => {
    audioRef.current = new Audio(voiceSnd);
    audioRef.current.play().catch(err => console.log("Chờ tương tác để phát thoại:", err));

    // Cleanup: Ngắt thoại ngay khi nhấn nút chuyển màn
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const playSound = (src) => { 
    // Dùng đối tượng Audio riêng cho hiệu ứng để không đè lên giọng thoại đang phát
    const sfx = new Audio(src);
    sfx.play();
  };

  const handleTouch = (e) => {
    setHasInteracted(true);
    playSound(magicSnd); // Phát tiếng magic khi chạm vào các bạn nhỏ
    const newHeart = { id: Date.now(), x: e.clientX, y: e.clientY };
    setHearts(prev => [...prev, newHeart]);
    setTimeout(() => setHearts(prev => prev.filter(h => h.id !== newHeart.id)), 1500);
  };

  return (
    <div 
      style={{ 
        width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column', 
        alignItems: 'center', justifyContent: 'center', background: '#f0fdf4', 
        padding: '20px', fontFamily: cuteFont, overflow: 'hidden' 
      }} 
      onClick={handleTouch}
    >
      <motion.h1 
        animate={{ scale: [1, 1.05, 1] }} 
        transition={{ repeat: Infinity, duration: 3 }}
        style={{ fontSize: '50px', color: '#1e40af', textAlign: 'center', marginBottom: '20px' }}
      >
        CẬU CÓ QUYỀN AN TOÀN!
      </motion.h1>

      <div style={{ 
        background: 'white', padding: '30px', borderRadius: '40px', 
        border: '5px solid #bfdbfe', maxWidth: '600px', textAlign: 'center', marginBottom: '40px' 
      }}>
        <p style={{ fontSize: '28px' }}>
          "Cậu có <span style={{ color: '#2563eb' }}>phép thuật</span> đặc biệt: <br/>Đó là quyền luôn được an toàn, được bảo vệ! Không ai được phép <span style={{color: '#2563eb'}}>đánh, xô đẩy, doạ nạt hay làm cậu sợ hãi.</span>"
        </p>
      </div>

      <div style={{ 
        display: 'flex', gap: '40px', padding: '40px', 
        background: 'rgba(254, 249, 195, 0.5)', borderRadius: '100px', border: '8px dashed #fde047' 
      }}>
        <motion.span animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ fontSize: '100px' }}>🐰</motion.span>
        <motion.span animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} style={{ fontSize: '100px' }}>🐘</motion.span>
        <motion.span animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} style={{ fontSize: '100px' }}>🐿️</motion.span>
      </div>

      <AnimatePresence>
        {hearts.map(h => (
          <motion.div 
            key={h.id} 
            initial={{ y: 0, opacity: 1 }} 
            animate={{ y: -300, opacity: 0 }} 
            style={{ position: 'fixed', left: h.x, top: h.y, fontSize: '50px', pointerEvents: 'none' }}
          >
            ❤️
          </motion.div>
        ))}
      </AnimatePresence>

      {hasInteracted && (
        <motion.button 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }}
          onClick={(e) => { 
            e.stopPropagation(); 
            // Phát âm thanh click độc lập để không bị ngắt khi chuyển màn
            const navAudio = new Audio(clickSnd);
            navAudio.play();
            navigate('/level1/screen1_3'); 
          }} 
          style={{ 
            position: 'absolute', bottom: '40px', background: '#22c55e', 
            color: 'white', fontSize: '28px', padding: '15px 50px', 
            borderRadius: '100px', border: 'none', boxShadow: '0 10px 0 #15803d', 
            fontFamily: cuteFont, cursor: 'pointer' 
          }}
        >
          Tiếp tục ➡️
        </motion.button>
      )}
    </div>
  );
}