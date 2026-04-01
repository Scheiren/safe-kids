import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// --- IMPORT ASSETS ---
import backgroundImage from '../../assets/images/background0_2.jpg'; 
import clickSnd from '../../assets/sounds/click.mp3';
import magicSnd from '../../assets/sounds/magic.mp3';

export default function Screen0_2() {
  const navigate = useNavigate();
  const [showAdultPopup, setShowAdultPopup] = useState(false);
  const [answer, setAnswer] = useState('');
  const cuteFont = "'Itim', cursive";
  
  // 1. QUẢN LÝ CẮT ÂM THANH
  const audioRef = useRef(null);
  
  const playSound = (src) => { 
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    audioRef.current = new Audio(src); 
    audioRef.current.play().catch(() => {}); 
  };

  useEffect(() => {
    // Tắt toàn bộ âm thanh khi chuyển sang screen khác
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  // 2. HIỆU ỨNG VIỀN (OUTLINE)
  const textOutline = "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 0px 2px 0 #fff, 0px -2px 0 #fff, 2px 0px 0 #fff, -2px 0px 0 #fff";
  const itemOutline = "drop-shadow(3px 0 0 white) drop-shadow(-3px 0 0 white) drop-shadow(0 3px 0 white) drop-shadow(0 -3px 0 white)";

  const handleAdultVerify = () => {
    if (answer === '17') { // 12 + 5
      setShowAdultPopup(false);
      navigate('/level1/screen0_3'); // Chuyển đến Góc Người Lớn
    } else {
      alert("Câu trả lời chưa đúng rồi!");
    }
  };

  return (
    <div style={{
      width: '100vw', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', // 🎯 CĂN GIỮA TOÀN BỘ NỘI DUNG THEO TRỤC DỌC (MỚI)
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      fontFamily: cuteFont, 
      padding: '40px 20px', 
      boxSizing: 'border-box'
    }}>
      
      {/* Nút Ổ khóa ẩn (Góc người lớn) - GIỮ LẠI ĐỂ TRUY CẬP 0_3 */}
      <button 
        onClick={() => { playSound(clickSnd); setShowAdultPopup(true); }}
        style={{ 
          position: 'absolute', top: '20px', right: '20px', // Đưa về vị trí mặc định
          background: 'rgba(255, 255, 255, 0.7)', border: 'none', 
          borderRadius: '15px', padding: '10px', cursor: 'pointer', 
          fontSize: '24px', filter: itemOutline,
          zIndex: 10
        }}
      >
        🔒
      </button>

      {/* 🚫 KHU VỰC HIỂN THỊ TÊN & HỒ SƠ ĐÃ LOẠI BỎ */}
      {/* 🚫 BIỂU TƯỢNG CÀI ĐẶT ĐÃ LOẠI BỎ */}

      <h1 style={{ 
        fontSize: '45px', color: '#1e3a8a', textAlign: 'center', 
        textShadow: textOutline, 
        marginBottom: '60px', // 🎯 TĂNG KHOẢNG CÁCH DƯỚI TIÊU ĐỀ (MỚI)
        marginTop: '0px'
      }}>
        Chào cậu! Cậu đang học lớp mấy?
      </h1>
      
      {/* 🚫 BIỂU TƯỢNG PIPO & VĂN BẢN TRUNG TÂM ĐÃ LOẠI BỎ */}

      {/* CONTAINER CHỨA 2 Ô CHỌN - TỰ ĐỘNG CĂN GIỮA NẰM TRONG PARENT FLEX */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '60px', // 🎯 TĂNG KHOẢNG CÁCH GIỮA 2 CỬA (MỚI)
        width: '100%', 
        maxWidth: '1200px', // 🎯 TĂNG MAXWIDTH ĐỂ PHÙ HỢP BỐ CỤC CĂN GIỮA (MỚI)
        flexWrap: 'wrap' 
      }}>
        
        {/* Cửa Trái - Lớp 1, 2, 3 */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          // ✨ NÂNG CẤP: HIỆU ỨNG PHÁT SÁNG NHÈ NHẸ CỰC THU HÚT
          animate={{ boxShadow: ['0 20px 50px rgba(249, 115, 22, 0.3)', '0 20px 70px rgba(249, 115, 22, 0.6)', '0 20px 50px rgba(249, 115, 22, 0.3)'] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          onClick={() => { playSound(magicSnd); navigate('/level1/screen1_1'); }}
          style={{ 
            width: '350px', // Tăng width cho cửa
            height: '450px', 
            background: 'linear-gradient(to bottom, #fb923c, #f97316)',
            borderRadius: '40px', // Bo tròn đều 4 góc
            border: '10px solid #fdba74', 
            cursor: 'pointer', display: 'flex', flexDirection: 'column', 
            alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 20px 50px rgba(249, 115, 22, 0.3)', position: 'relative'
          }}
        >
          <div style={{ fontSize: '120px', marginBottom: '20px', filter: itemOutline }}>🛡️</div>
          <h3 style={{ 
            color: 'white', fontSize: '28px', textAlign: 'center', 
            padding: '0 20px', textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            margin: 0,
            fontFamily: cuteFont
          }}>
            Lớp 1, 2, 3 <br/> Hành trình Hiệp sĩ Tập sự
          </h3>
        </motion.div>

        {/* Cửa Phải - Lớp 4, 5 */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          // ✨ NÂNG CẤP: HIỆU ỨNG PHÁT SÁNG NHÈ NHẸ CỰC THU HÚT
          animate={{ boxShadow: ['0 20px 50px rgba(71, 85, 105, 0.3)', '0 20px 70px rgba(71, 85, 105, 0.6)', '0 20px 50px rgba(71, 85, 105, 0.3)'] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          onClick={() => { playSound(clickSnd); alert("Chế độ Lớp 4, 5 đang phát triển!"); }}
          style={{ 
            width: '350px', // Tăng width cho cửa
            height: '450px', 
            background: 'linear-gradient(to bottom, #94a3b8, #475569)',
            borderRadius: '40px', // Bo tròn đều 4 góc
            border: '10px solid #cbd5e1', 
            cursor: 'pointer', display: 'flex', flexDirection: 'column', 
            alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 20px 50px rgba(71, 85, 105, 0.3)'
          }}
        >
          <div style={{ fontSize: '120px', marginBottom: '20px', filter: itemOutline }}>⚔️</div>
          <h3 style={{ 
            color: 'white', fontSize: '28px', textAlign: 'center', 
            padding: '0 20px', textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            margin: 0,
            fontFamily: cuteFont
          }}>
            Lớp 4, 5 <br/> Hành trình Hiệp sĩ Trưởng thành
          </h3>
        </motion.div>
      </div>

      {/* Popup Người lớn (Giữ nguyên) */}
      <AnimatePresence>
        {showAdultPopup && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ 
              position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', 
              zIndex: 100, display: 'flex', alignItems: 'center', 
              justifyContent: 'center', padding: '20px' 
            }}
          >
            <motion.div 
              initial={{ y: 50 }} animate={{ y: 0 }}
              style={{ 
                background: 'white', padding: '40px', borderRadius: '30px', 
                maxWidth: '400px', width: '100%', textAlign: 'center', fontFamily: cuteFont
              }}
            >
              <h2 style={{ color: '#1e3a8a' }}>Góc Người Lớn</h2>
              <p>Để tiếp tục, hãy giải câu đố sau:</p>
              <div style={{ fontSize: '32px', margin: '20px 0', fontWeight: 'bold' }}>12 + 5 = ?</div>
              <input 
                type="number" 
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                style={{ 
                  width: '100%', padding: '15px', borderRadius: '10px', 
                  border: '2px solid #cbd5e1', fontSize: '20px', 
                  textAlign: 'center', marginBottom: '20px', fontFamily: cuteFont
                }}
                placeholder="Nhập kết quả..."
              />
              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  onClick={() => setShowAdultPopup(false)} 
                  style={{ 
                    flex: 1, padding: '15px', borderRadius: '10px', 
                    background: '#f1f5f9', border: 'none', cursor: 'pointer', fontFamily: cuteFont 
                  }}
                >
                  Hủy
                </button>
                <button 
                  onClick={handleAdultVerify} 
                  style={{ 
                    flex: 1, padding: '15px', borderRadius: '10px', 
                    background: '#3b82f6', color: 'white', border: 'none', 
                    cursor: 'pointer', fontFamily: cuteFont 
                  }}
                >
                  Xác nhận
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}