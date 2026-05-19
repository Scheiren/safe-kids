import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function L2_Screen3_1() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";

  const [waves, setWaves] = useState([
    { id: 'so-hai', name: 'Sợ hãi 😨', color: '#475569', x: -110, y: -50, active: true },
    { id: 'tuc-gian', name: 'Tức giận 😡', color: '#991b1b', x: 110, y: -50, active: true },
    { id: 'xau-ho', name: 'Xấu hổ 😳', color: '#6b21a8', x: 0, y: 100, active: true }
  ]);

  const [selectedMotto, setSelectedMotto] = useState(false);
  const allWavesCleared = waves.every(w => !w.active);

  const handleWaveClear = (id) => {
    setWaves(prev => prev.map(w => w.id === id ? { ...w, active: false } : w));
  };

  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
      background: 'linear-gradient(to bottom, #1e293b, #0f172a)',
      overflowX: 'hidden', overflowY: 'auto', boxSizing: 'border-box'
    }}>
      
      <div style={{
        minHeight: '100%', width: '100%',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '80px 20px 50px 20px', // padding-top 80px để không cấn nút Home góc trái
        fontFamily: cuteFont, color: '#f8fafc', boxSizing: 'border-box'
      }}>
        
        {/* Tiêu đề & Lời thoại */}
        <div style={{ textAlign: 'center', maxWidth: '750px', marginBottom: '25px' }}>
          <h1 style={{ fontSize: '32px', color: '#38bdf8', margin: '0 0 10px 0' }}>MÀN HÌNH 3.1: BÌNH TĨNH TRƯỚC SÓNG ĐEN</h1>
          <p style={{ fontSize: '18px', color: '#cbd5e1', lineHeight: 1.5 }}>
            “Khi cậu thấy tim đập nhanh, tay run hoặc rất tức giận, điều đó là bình thường. Nhưng hiệp sĩ giỏi sẽ không để cảm xúc lái mình vào nguy hiểm.”
          </p>
        </div>

        {/* Sân đấu tương tác */}
        <div style={{
          position: 'relative', width: '100%', maxWidth: '650px', height: '340px',
          background: '#1e293b', borderRadius: '30px', border: '4px solid #334155',
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px',
          flexShrink: 0
        }}>
          <div style={{ textAlign: 'center', zIndex: 10 }}>
            <div style={{ fontSize: '70px' }}>🦔</div>
            <span style={{ background: '#334155', padding: '4px 12px', borderRadius: '10px', fontSize: '14px' }}>Nhím Bạc</span>
          </div>

          <div style={{ position: 'absolute', left: '30px', bottom: '20px', fontSize: '60px', textAlign: 'center' }}>
            🐘
            <div style={{ fontSize: '12px', color: '#38bdf8' }}>Pipo Trưởng</div>
          </div>

          <AnimatePresence>
            {waves.map(w => w.active && (
              <motion.div
                key={w.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [1, 1.03, 1], opacity: 0.8 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                onClick={() => handleWaveClear(w.id)}
                style={{
                  position: 'absolute', transform: `translate(${w.x}px, ${w.y}px)`,
                  background: w.color, padding: '12px 22px', borderRadius: '50px',
                  cursor: 'pointer', border: '3px solid #f8fafc', boxShadow: '0 0 15px rgba(0,0,0,0.5)',
                  zIndex: 20
                }}
                whileHover={{ scale: 1.05 }}
              >
                <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{w.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>

          {!allWavesCleared && (
            <motion.div
              drag
              dragConstraints={{ left: -260, right: 260, top: -120, bottom: 120 }}
              style={{
                position: 'absolute', right: '30px', bottom: '20px',
                width: '60px', height: '60px', background: 'linear-gradient(to bottom, #cbd5e1, #94a3b8)',
                borderRadius: '50%', border: '4px solid #f8fafc', display: 'flex',
                alignItems: 'center', justifyContent: 'center', fontSize: '30px',
                cursor: 'grab', boxShadow: '0 0 15px #38bdf8', zIndex: 30
              }}
              whileTap={{ cursor: 'grabbing', scale: 1.1 }}
            >
              🛡️
            </motion.div>
          )}
        </div>

        {/* Giai đoạn chọn khẩu lệnh */}
        <div style={{ width: '100%', maxWidth: '500px' }}>
          {allWavesCleared && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              style={{ textAlign: 'center' }}
            >
              <p style={{ color: '#4ade80', fontSize: '20px', marginBottom: '15px', fontWeight: 'bold' }}>🌟 Đã làm dịu trái tim thành công!</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button
                  onClick={() => setSelectedMotto(true)}
                  style={{
                    background: selectedMotto ? '#0284c7' : '#1e293b',
                    color: '#f8fafc', border: `3px solid ${selectedMotto ? '#38bdf8' : '#334155'}`,
                    padding: '15px', borderRadius: '15px', fontSize: '20px', fontFamily: cuteFont,
                    cursor: 'pointer', transition: 'all 0.3s'
                  }}
                >
                  ⚔️ Hít sâu – Đứng vững – Nói rõ
                </button>
                <button
                  onClick={() => alert("Câu này chưa chính xác rồi!")}
                  style={{
                    background: '#1e293b', color: '#64748b', border: '3px solid #334155',
                    padding: '15px', borderRadius: '15px', fontSize: '18px', fontFamily: cuteFont, cursor: 'pointer'
                  }}
                >
                  🛡️ Im lặng chịu đựng cho qua chuyện
                </button>
              </div>

              {selectedMotto && (
                <motion.button
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  onClick={() => navigate('/level2/screen3_2')}
                  style={{
                    marginTop: '25px', background: '#38bdf8', color: '#0f172a',
                    padding: '15px 45px', borderRadius: '50px', fontSize: '22px',
                    border: 'none', fontWeight: 'bold', cursor: 'pointer', fontFamily: cuteFont,
                    boxShadow: '0 5px 0 #0284c7'
                  }}
                >
                  Tiếp tục hành trình ➡️
                </motion.button>
              )}
            </motion.div>
          )}
        </div>

      </div>
    </div>
  );
}