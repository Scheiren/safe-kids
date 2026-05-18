import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Screen3_2() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";
  const [activeSpeaker, setActiveSpeaker] = useState(null);

  const phrases = [
    { id: 1, text: "“Dừng lại! Mình không thích.”" },
    { id: 2, text: "“Không được chạm vào đồ của mình!”" },
    { id: 3, text: "“Mình sẽ báo cô giáo ngay!”" }
  ];

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: '#fffbeb',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px',
      fontFamily: cuteFont, overflowX: 'hidden'
    }}>
      <h1 style={{ fontSize: '38px', color: '#d97706', textAlign: 'center', marginBottom: '10px' }}>GIỌNG SƯ TỬ CỦA HIỆP SĨ 🦁</h1>
      <p style={{ fontSize: '22px', color: '#b45309', textAlign: 'center', marginBottom: '40px' }}>
        Hãy bấm vào loa sư tử để học thuộc câu thần chú bảo vệ mình!
      </p>

      <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} style={{ fontSize: '130px' }}>
          🐘🛡️
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {phrases.map(phrase => (
            <motion.div
              key={phrase.id}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSpeaker(phrase.id)}
              style={{
                background: activeSpeaker === phrase.id ? '#fef3c7' : 'white',
                border: `4px solid ${activeSpeaker === phrase.id ? '#f59e0b' : '#fcd34d'}`,
                padding: '20px 30px', borderRadius: '25px', display: 'flex', alignItems: 'center', gap: '15px',
                cursor: 'pointer', width: '350px', boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
              }}
            >
              <div style={{ fontSize: '50px' }}>📢</div>
              <div>
                <div style={{ fontSize: '16px', color: '#d97706', fontWeight: 'bold' }}>LOA SỐ {phrase.id}</div>
                <div style={{ fontSize: '22px', color: '#92400e', fontWeight: 'bold' }}>
                  {activeSpeaker === phrase.id ? phrase.text : 'Chạm để hiện chữ...'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeSpeaker && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: '40px', textAlign: 'center' }}>
            <p style={{ fontSize: '24px', color: '#047857', fontWeight: 'bold' }}>Cậu đã thuộc câu này chưa? Giỏi quá!</p>
            <button
              onClick={() => navigate('/level1/screen3_3')}
              style={{ background: '#10b981', color: 'white', padding: '15px 50px', borderRadius: '50px', fontSize: '24px', border: 'none', cursor: 'pointer', fontFamily: cuteFont, boxShadow: '0 8px 0 #047857' }}
            >
              Tiếp tục hành trình ➡️
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}