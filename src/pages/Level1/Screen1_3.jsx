import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import clickSnd from '../../assets/sounds/click.mp3';
import alarmSnd from '../../assets/sounds/alarm.mp3';
import owlSnd from '../../assets/sounds/owl.mp3';
import successSnd from '../../assets/sounds/success.mp3';
import voiceSnd from '../../assets/sounds/1.3.m4a'; // Import giọng thoại 1.3

export default function Screen1_3() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const audioRef = useRef(null); // Quản lý âm thanh thoại và báo động
  const cuteFont = "'Itim', cursive";

  // Phát giọng thoại hướng dẫn ngay khi vào màn hình
  useEffect(() => {
    audioRef.current = new Audio(voiceSnd);
    audioRef.current.play().catch(err => console.log("Chờ tương tác để phát thoại:", err));

    // Dừng toàn bộ âm thanh khi rời khỏi màn hình
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const playSound = (src) => { 
    if (audioRef.current) { 
      audioRef.current.pause(); 
      audioRef.current.currentTime = 0; 
    }
    audioRef.current = new Audio(src); 
    audioRef.current.play(); 
  };

  const handleWhistle = () => {
    playSound(alarmSnd); // Phát tiếng còi báo động
    // Sau 0.6s phát tiếng Cô Cú Mèo phản hồi
    setTimeout(() => {
      const owlAudio = new Audio(owlSnd);
      owlAudio.play();
    }, 600);
    setShowPopup(true);
    setIsUnlocked(true);
  };

  return (
    <div style={{ width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom right, #fff7ed, #ffedd5)', position: 'relative', fontFamily: cuteFont }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '50px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 4 }} style={{ fontSize: '150px' }}>🐘</motion.div>
          <div style={{ background: 'white', padding: '15px 30px', borderRadius: '25px', border: '4px solid #fed7aa', fontSize: '22px', fontWeight: 'bold', maxWidth: '400px' }}>
            "Bấm Còi Đỏ khi cậu thấy nguy hiểm, cậu có thể gọi người lớn giúp ngay"
          </div>
        </div>

        <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} style={{ background: '#92400e', padding: '45px', borderRadius: '50px', border: '12px solid #78350f', display: 'flex', flexDirection: 'column', gap: '25px', width: '380px', boxShadow: '0 25px 50px rgba(0,0,0,0.3)' }}>
          {/* Nút Đôi Tai Voi */}
          <button onClick={() => playSound(clickSnd)} style={{ background: '#3b82f6', color: 'white', padding: '15px', borderRadius: '20px', border: 'none', boxShadow: '0 8px 0 #1e40af', fontFamily: cuteFont, fontSize: '22px', cursor: 'pointer' }}>👂 Đôi Tai Voi</button>
          
          {/* Nút Bàn Tay Nhỏ */}
          <button onClick={() => playSound(clickSnd)} style={{ background: '#22c55e', color: 'white', padding: '15px', borderRadius: '20px', border: 'none', boxShadow: '0 8px 0 #15803d', fontFamily: cuteFont, fontSize: '22px', cursor: 'pointer' }}>🖐️ Bàn Tay Nhỏ</button>
          
          {/* Nút Chiếc Còi Đỏ (Tương tác bắt buộc) */}
          <motion.button 
            whileTap={{ scale: 0.9 }} 
            animate={{ scale: [1, 1.05, 1], rotate: [-1, 1, -1] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
            onClick={handleWhistle} 
            style={{ background: '#ef4444', color: 'white', padding: '25px', borderRadius: '20px', fontSize: '32px', fontWeight: 'bold', border: 'none', boxShadow: '0 12px 0 #991b1b', fontFamily: cuteFont, cursor: 'pointer' }}
          >
            🚨 CHIẾC CÒI ĐỎ
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div initial={{ y: 100, opacity: 0, scale: 0.5 }} animate={{ y: 0, opacity: 1, scale: 1 }} style={{ position: 'absolute', bottom: '15%', background: 'white', padding: '30px 60px', borderRadius: '100px', border: '8px solid #f472b6', display: 'flex', alignItems: 'center', gap: '30px', boxShadow: '0 0 60px rgba(244,114,182,0.4)', zIndex: 100 }}>
            <motion.span animate={{ rotate: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 2 }} style={{ fontSize: '80px' }}>🦉</motion.span>
            <h2 style={{ color: '#db2777', fontSize: '38px', margin: 0 }}>"Cô đây, con an toàn rồi nhé!"</h2>
          </motion.div>
        )}
      </AnimatePresence>

      {isUnlocked && (
        <motion.button 
          initial={{ x: 100 }} 
          animate={{ x: 0 }} 
          onClick={() => { 
            const navAudio = new Audio(successSnd);
            navAudio.play();
            navigate('/level1/screen2_1'); 
          }} 
          style={{ position: 'absolute', bottom: '40px', right: '40px', background: '#4f46e5', color: 'white', padding: '20px 50px', borderRadius: '100px', fontSize: '28px', border: 'none', boxShadow: '0 10px 0 #3730a3', fontFamily: cuteFont, cursor: 'pointer' }}
        >
          Vào bài học ➡️
        </motion.button>
      )}
    </div>
  );
}