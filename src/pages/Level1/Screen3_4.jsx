import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Screen3_4() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";
  
  const [isCharging, setIsCharging] = useState(false);
  const [energy, setEnergy] = useState(0);

  useEffect(() => {
    let interval;
    if (isCharging && energy < 100) {
      interval = setInterval(() => setEnergy(prev => Math.min(prev + 2, 100)), 50);
    } else if (!isCharging && energy < 100 && energy > 0) {
      interval = setInterval(() => setEnergy(prev => Math.max(prev - 1, 0)), 50);
    }
    return () => clearInterval(interval);
  }, [isCharging, energy]);

  return (
    <div style={{
      width: '100%', minHeight: '100vh', background: '#f5f3ff',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '40px 20px', fontFamily: cuteFont, userSelect: 'none', 
      overflowX: 'hidden', overflowY: 'auto', boxSizing: 'border-box' // Fix tràn viền
    }}>
      <h1 style={{ fontSize: '34px', color: '#6d28d9', textAlign: 'center', marginBottom: '10px' }}>SÂN TẬP KHẨU LỆNH</h1>
      <p style={{ fontSize: '20px', color: '#5b21b6', textAlign: 'center', marginBottom: '30px' }}>
        Nhấn giữ nút liên tục để nói thật dứt khoát nhé!
      </p>

      <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-end', justifyContent: 'center' }}>
        
        {/* Thỏ Trắng */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div
            animate={{ scale: energy === 100 ? [1, 1.1, 1] : 1 }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ fontSize: '90px', zIndex: 10 }}
          >
            🐰
          </motion.div>
          <div style={{ width: '130px', height: '25px', background: 'radial-gradient(ellipse, #d8b4fe, transparent)', borderRadius: '50%', border: '2px solid #a855f7', boxShadow: '0 0 20px #d8b4fe' }} />
        </div>

        {/* Thanh Năng Lượng */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '50px', height: '220px', background: 'white', borderRadius: '30px',
            border: '4px solid #c4b5fd', padding: '5px', display: 'flex', flexDirection: 'column-reverse', overflow: 'hidden'
          }}>
            <div style={{ width: '100%', height: `${energy}%`, background: 'linear-gradient(to top, #a855f7, #f472b6, #fde047)', borderRadius: '25px', transition: 'height 0.1s' }} />
          </div>
          <span style={{ fontSize: '18px', color: '#7e22ce', fontWeight: 'bold' }}>{energy}% Uy Lực</span>
        </div>
      </div>

      {/* Lời thoại bay lên khi đang sạc */}
      <div style={{ height: '40px', marginTop: '15px', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {isCharging && energy < 100 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '22px', color: '#db2777', fontWeight: 'bold', textAlign: 'center' }}>
            "Dừng lại. Mình không đồng ý!"
          </motion.div>
        )}
      </div>

      <div style={{ paddingBottom: '30px', width: '100%', display: 'flex', justifyContent: 'center' }}>
        {energy < 100 ? (
          <motion.div
            onPointerDown={() => setIsCharging(true)}
            onPointerUp={() => setIsCharging(false)}
            onPointerLeave={() => setIsCharging(false)}
            whileTap={{ scale: 0.95 }}
            style={{
              background: isCharging ? '#c084fc' : '#a855f7', color: 'white', padding: '15px 30px',
              borderRadius: '50px', fontSize: '22px', cursor: 'pointer', border: '4px solid #7e22ce',
              boxShadow: isCharging ? 'none' : '0 8px 0 #7e22ce', textAlign: 'center'
            }}
          >
            🎙️ {isCharging ? 'Đang nói to...' : 'Nhấn giữ để nói dứt khoát'}
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ textAlign: 'center', background: 'white', padding: '20px 30px', borderRadius: '30px', border: '4px solid #facc15', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', maxWidth: '500px' }}>
              <div style={{ fontSize: '60px', filter: 'drop-shadow(0 0 10px #facc15)' }}>⭐</div>
              <h2 style={{ color: '#d97706', fontSize: '24px', margin: '10px 0' }}>BẠN ĐÃ LÀM RẤT TỐT!</h2>
              <p style={{ color: '#0f172a', fontSize: '20px', fontWeight: 'bold', margin: '0 0 15px 0' }}>
                Câu ghi nhớ: “Rõ ràng – Dứt khoát – Không đánh lại.”
              </p>
              <button
                onClick={() => navigate('/level1/screen4_1')}
                style={{ background: '#a855f7', color: 'white', padding: '12px 40px', borderRadius: '50px', fontSize: '20px', border: 'none', cursor: 'pointer', fontFamily: cuteFont, boxShadow: '0 6px 0 #7e22ce' }}
              >
                Vào phần 4 🚀
              </button>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}