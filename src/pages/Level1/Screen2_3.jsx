import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// --- IMPORT ASSETS ---
import clickSnd from '../../assets/sounds/click.mp3';
import tadaSnd from '../../assets/sounds/tada.mp3';
import successSnd from '../../assets/sounds/success.mp3';
import voiceSnd from '../../assets/sounds/2.3.m4a'; // Giọng thoại hướng dẫn

export default function Screen2_3() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const cuteFont = "'Itim', cursive";

  // Danh sách 3 điểm bất thường theo kịch bản
  const [spots, setSpots] = useState([
    { id: 1, name: "Hành lang", top: "25%", left: "20%", found: false, desc: "Hai bạn Cáo chặn một bạn nhỏ" },
    { id: 2, name: "Ghế đá", top: "65%", left: "45%", found: false, desc: "Một bạn bị giật đồ dùng học tập" },
    { id: 3, name: "Nhà vệ sinh", top: "35%", left: "75%", found: false, desc: "Một bạn bị hất nước làm ướt áo" }
  ]);

  const allFound = spots.every(s => s.found);

  // Hiệu ứng Outline giúp vật phẩm nổi bật
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
    <div style={{ 
      width: '100vw', minHeight: '100vh', background: '#f0fdf4', 
      display: 'flex', flexDirection: 'column', alignItems: 'center', 
      padding: '20px', fontFamily: cuteFont, position: 'relative' 
    }}>
      
      {/* KHUNG HƯỚNG DẪN TRÊN CÙNG */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }}
        style={{ 
          background: 'white', padding: '20px 60px', borderRadius: '100px', 
          border: '6px solid #86efac', fontSize: '26px', color: '#166534', 
          boxShadow: '0 10px 25px rgba(0,0,0,0.05)', zIndex: 10 
        }}
      >
        "Quan sát kỹ để giúp đỡ bạn bè nhé!"
      </motion.div>

      {/* BẢN ĐỒ SÂN TRƯỜNG TƯƠNG TÁC */}
      <div style={{ 
        width: '92%', height: '480px', background: '#cbd5e1', 
        borderRadius: '55px', position: 'relative', marginTop: '40px', 
        overflow: 'hidden', border: '15px solid #94a3b8',
        boxShadow: 'inset 0 0 50px rgba(0,0,0,0.1)'
      }}>
        {/* Placeholder cho ảnh nền sân trường lớn (nếu có) */}
        <p style={{ position: 'absolute', width: '100%', textAlign: 'center', top: '45%', opacity: 0.3, fontSize: '20px' }}>
          (Ảnh sân trường giờ ra chơi)
        </p>

        {spots.map(s => (
          <div 
            key={s.id} 
            onClick={() => { 
              if(!s.found) { 
                playSfx(clickSnd); 
                setSpots(prev => prev.map(x => x.id === s.id ? {...x, found: true} : x)); 
              } 
            }}
            style={{ 
              position: 'absolute', top: s.top, left: s.left, 
              transform: 'translate(-50%, -50%)', cursor: 'pointer', zIndex: 20 
            }}
          >
            {!s.found ? (
              // Vùng Radar nhấp nháy phát sáng
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }} 
                transition={{ repeat: Infinity, duration: 2 }} 
                style={{ 
                  width: '90px', height: '90px', background: 'rgba(239, 68, 68, 0.5)', 
                  borderRadius: '50%', border: '2px dashed red' 
                }} 
              />
            ) : (
              // Hiện dấu tích khi đã tìm thấy
              <motion.div 
                initial={{ scale: 0, rotate: -180 }} 
                animate={{ scale: 1, rotate: 0 }} 
                style={{ 
                  fontSize: '60px', background: 'white', borderRadius: '50%', 
                  padding: '10px', border: '5px solid #22c55e', filter: itemOutline 
                }}
              >
                ✅
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* LỜI THOẠI KẾT THÚC CỦA PIPO */}
      <div style={{ marginTop: '30px', textAlign: 'center', maxWidth: '800px' }}>
        <p style={{ fontSize: '22px', color: '#1e40af', lineHeight: '1.5' }}>
          "Hiệp sĩ giỏi không chỉ biết tự bảo vệ mình. <br/>
          Hiệp sĩ còn biết nhìn ra khi bạn khác đang cần giúp đỡ."
        </p>
      </div>

      {/* POPUP NHẬN HUY CHƯƠNG MẮT THẦN */}
      <AnimatePresence>
        {allFound && (
          <motion.div 
            onViewportEnter={() => playSfx(tadaSnd)} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            style={{ 
              position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.95)', 
              display: 'flex', flexDirection: 'column', alignItems: 'center', 
              justifyContent: 'center', zIndex: 100 
            }}
          >
            {/* Hiệu ứng huy chương xoay 3D sinh động */}
            <motion.div 
              animate={{ rotateY: 360, scale: [1, 1.1, 1] }} 
              transition={{ 
                rotateY: { repeat: Infinity, duration: 4, ease: "linear" }, 
                scale: { repeat: Infinity, duration: 2 } 
              }} 
              style={{ fontSize: '220px', filter: itemOutline }}
            >
              👁️‍🗨️
            </motion.div>
            
            <h2 style={{ 
              color: '#facc15', fontSize: '50px', textAlign: 'center', 
              textShadow: '0 0 30px #facc15', marginTop: '20px' 
            }}>
              HUY CHƯƠNG MẮT THẦN!
            </h2>
            
            <p style={{ color: 'white', fontSize: '24px', marginTop: '10px', opacity: 0.8 }}>
              Cậu đã hoàn thành xuất sắc Radar Sân Trường
            </p>

            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
              onClick={() => { 
                const navAudio = new Audio(successSnd);
                navAudio.play();
                navigate('/level1/screen3_1'); // Chuyển sang phần kết thúc/tổng kết
              }} 
              style={{ 
                marginTop: '50px', background: '#facc15', color: '#713f12', 
                padding: '25px 90px', borderRadius: '100px', fontSize: '34px', 
                border: '8px solid white', boxShadow: '0 15px 0 #ca8a04', 
                fontFamily: cuteFont, cursor: 'pointer' 
              }}
            >
              Tiếp tục ➡️
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}