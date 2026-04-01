import React, { useEffect, useRef } from 'react'; // Thêm useEffect và useRef
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import clickSnd from '../../assets/sounds/click.mp3';
import voiceSnd from '../../assets/sounds/1.1.m4a'; // Import file âm thanh mới của bạn

export default function Screen1_1() {
  const navigate = useNavigate();
  const audioRef = useRef(null); // Quản lý âm thanh thoại Pipo
  const cuteFont = "'Itim', cursive";

  // Logic phát âm thanh thoại khi vừa vào màn hình
  useEffect(() => {
    audioRef.current = new Audio(voiceSnd);
    audioRef.current.play().catch(err => console.log("Chờ tương tác để phát nhạc:", err));

    // Cleanup: Ngắt thoại ngay khi nhấn nút chuyển màn
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
      background: 'linear-gradient(to bottom, #7dd3fc, #f0fdf4)', position: 'relative',
      fontFamily: cuteFont
    }}>
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
            "Tèn ten! Xin chào Hiệp sĩ mới! Tớ là <span style={{ color: '#2563eb' }}>Pipo</span>. <br/> từ hôm nay, cậu sẽ cùng tớ học cách dùng lá chắn an toàn để bảo vệ nụ cười nhé!"
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
            // Phát âm thanh click độc lập để không bị ngắt khi chuyển màn
            const navAudio = new Audio(clickSnd);
            navAudio.play();
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
    </div>
  );
}