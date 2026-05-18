import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Screen2_1() {
  const navigate = useNavigate();
  const [popped, setPopped] = useState([]);
  const cuteFont = "'Itim', cursive";

  const bubbles = [
    { id: 1, text: "Sợ hãi 😨", color: "#94a3b8" },
    { id: 2, text: "Tức giận 😡", color: "#ef4444" },
    { id: 3, text: "Xấu hổ 😳", color: "#a855f7" }
  ];

  const handlePop = (id) => {
    if (!popped.includes(id)) setPopped([...popped, id]);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', fontFamily: cuteFont, overflow: 'hidden' }}>
      {/* NỬA TRÁI: TRÊU ĐÙA (SÁNG) */}
      <div style={{ flex: 1, background: '#f0fdf4', padding: '40px', borderRight: '4px dashed #86efac', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ color: '#166534', fontSize: '30px' }}>🌈 TRÊU ĐÙA VUI</h2>
        <div style={{ fontSize: '120px', marginTop: '40px' }}>🐰⚽🐰</div>
        <p style={{ textAlign: 'center', fontSize: '20px', color: '#166534', marginTop: '20px' }}>
          Tất cả đều cười vui vẻ.<br/>Nếu lỡ làm đau, bạn sẽ xin lỗi ngay!
        </p>
      </div>

      {/* NỬA PHẢI: BẮT NẠT (TỐI NHẸ) */}
      <div style={{ flex: 1, background: '#f1f5f9', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
        <h2 style={{ color: '#1e40af', fontSize: '30px' }}>☁️ BẮT NẠT</h2>
        <div style={{ fontSize: '120px', marginTop: '40px', filter: 'grayscale(0.3)' }}>🦊🧸😭</div>
        <p style={{ textAlign: 'center', fontSize: '20px', color: '#1e3a8a', marginTop: '20px' }}>
          Có một bạn bị đau, bị khóc.<br/>Đó không còn là trò vui nữa!
        </p>

        {/* BÓNG CẢM XÚC */}
        <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
          {bubbles.map(b => (
            <AnimatePresence key={b.id}>
              {!popped.includes(b.id) && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => handlePop(b.id)}
                  exit={{ scale: 2, opacity: 0 }}
                  style={{
                    background: b.color, color: 'white', padding: '15px', 
                    borderRadius: '50%', cursor: 'pointer', boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                  }}
                >
                  {b.text}
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>

      {/* HIỆP SĨ PIPO Ở GIỮA */}
      <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} style={{ fontSize: '80px' }}>🐘🛡️</motion.div>
        {popped.length === 3 && (
          <motion.button
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            onClick={() => navigate('/level1/screen2_2')}
            style={{ 
              background: '#facc15', border: 'none', padding: '15px 40px', 
              borderRadius: '50px', fontSize: '24px', cursor: 'pointer', boxShadow: '0 8px 0 #ca8a04' 
            }}
          >
            Tìm hiểu Mây Đen ➡️
          </motion.button>
        )}
      </div>
    </div>
  );
}