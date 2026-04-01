import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import whooshSnd from '../../assets/sounds/whoosh.mp3';
import successSnd from '../../assets/sounds/success.mp3';
import voiceSnd from '../../assets/sounds/2.2.m4a'; // Import giọng thoại 2.2

export default function Screen2_2() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const cuteFont = "'Itim', cursive";

  // Danh sách mây đen theo kịch bản: Đụng tay chân, Đụng lời nói, Đụng cảm xúc
  const [clouds, setClouds] = useState([
    { id: 1, type: "Đụng tay chân", color: "#1f2937", desc: "Xô đẩy, đánh, giật đồ..." },
    { id: 2, type: "Đụng lời nói", color: "#374151", desc: "Chửi, chế giễu, gọi tên xấu..." },
    { id: 3, type: "Đụng cảm xúc", color: "#4b5563", desc: "Cô lập, dọa nạt, ép buộc..." }
  ]);

  const textOutline = "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 0px 2px 0 #fff, 0px -2px 0 #fff, 2px 0px 0 #fff, -2px 0px 0 #fff";

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
    <div style={{ 
      width: '100vw', minHeight: '100vh', background: '#1e1b4b', 
      display: 'flex', flexDirection: 'column', alignItems: 'center', 
      position: 'relative', padding: '20px', fontFamily: cuteFont, overflow: 'hidden' 
    }}>
      
      {/* TIÊU ĐỀ CUỐN SÁCH PHÉP THUẬT */}
      <motion.div 
        initial={{ y: -50 }} 
        animate={{ y: 0 }} 
        style={{ 
          background: '#4338ca', color: 'white', padding: '20px 60px', 
          borderRadius: '0 0 40px 40px', fontSize: '32px', zIndex: 10,
          boxShadow: '0 5px 15px rgba(0,0,0,0.3)' 
        }}
      >
        Từ điển Đám mây đen
      </motion.div>

      {/* KHU VỰC CÁC ĐÁM MÂY ĐANG BAY */}
      <div style={{ display: 'flex', gap: '35px', marginTop: '70px', zIndex: 10 }}>
        <AnimatePresence>
          {clouds.map((c, i) => (
            <motion.div 
              key={c.id} 
              drag 
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 600 }}
              animate={{ x: [0, 10, -10, 0], y: [0, 5, -5, 0] }} 
              transition={{ repeat: Infinity, duration: 4 + i }}
              onDragEnd={(e, info) => { 
                // Kéo mây vào khiên (xuống dưới màn hình) để giải mã
                if(info.offset.y > 200) { 
                  playSfx(whooshSnd); 
                  setClouds(prev => prev.filter(x => x.id !== c.id)); 
                } 
              }}
              whileTap={{ scale: 1.1, cursor: 'grabbing' }}
              style={{ 
                width: '180px', height: '120px', background: c.color, 
                borderRadius: '60px', display: 'flex', flexDirection: 'column', 
                alignItems: 'center', justifyContent: 'center', color: 'white', 
                borderBottom: '8px solid black', cursor: 'grab', textAlign: 'center', 
                padding: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.5)'
              }}
            >
              <strong style={{ fontSize: '20px' }}>{c.type}</strong>
              <span style={{ fontSize: '12px', marginTop: '5px', opacity: 0.8 }}>{c.desc}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* KHIÊN BẢO VỆ ĐANG XOAY SINH ĐỘNG */}
      <motion.div 
        animate={{ rotate: 360, scale: [1, 1.1, 1] }} 
        transition={{ 
          rotate: { repeat: Infinity, duration: 10, ease: "linear" }, 
          scale: { repeat: Infinity, duration: 2 } 
        }}
        style={{ 
          position: 'absolute', bottom: '60px', width: '240px', height: '240px', 
          borderRadius: '50%', background: '#facc15', display: 'flex', 
          alignItems: 'center', justifyContent: 'center', fontSize: '110px', 
          boxShadow: '0 0 50px #facc15', border: '10px solid #ca8a04' 
        }}
      >
        🛡️
      </motion.div>

      {/* LỜI THOẠI PIPO */}
      <div style={{ position: 'absolute', bottom: '20px', textAlign: 'center', width: '90%' }}>
        <p style={{ color: 'white', fontSize: '22px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)', margin: 0 }}>
          "Có những vết đau nhìn thấy được. Có những vết đau ở trong tim. <br/><b>Cả hai đều là điều không ổn.</b>"
        </p>
        <p style={{ color: '#94a3b8', fontSize: '16px', marginTop: '10px' }}>
          (Kéo những đám mây đen vào Khiên Bảo Vệ để giải mã nhé!)
        </p>
      </div>

      {/* NÚT TIẾP TỤC SAU KHI DỌN SẠCH MÂY */}
      {clouds.length === 0 && (
        <motion.button 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          onClick={() => { 
            const navAudio = new Audio(successSnd);
            navAudio.play();
            navigate('/level1/screen2_3'); 
          }} 
          style={{ 
            position: 'absolute', bottom: '130px', background: '#22c55e', 
            color: 'white', padding: '25px 70px', borderRadius: '100px', 
            fontSize: '32px', border: '8px solid white', boxShadow: '0 10px 0 #15803d', 
            fontFamily: cuteFont, cursor: 'pointer', zIndex: 100 
          }}
        >
          Tiếp tục ➡️
        </motion.button>
      )}
    </div>
  );
}