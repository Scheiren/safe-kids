import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Screen3_3() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";
  const [feedback, setFeedback] = useState(null);
  const [success, setSuccess] = useState(false);

  const cards = [
    { id: 1, title: 'Cuộn Tròn Im Lặng', icon: '🤐', isSafe: false, msg: 'Im lặng và khóc một mình sẽ khiến Cáo Đỏ tiếp tục bắt nạt. Lá chắn này không an toàn!' },
    { id: 2, title: 'Vung Gươm Loạn Xạ', icon: '⚔️', isSafe: false, msg: 'Tức giận đánh lại sẽ khiến cả hai bị đau và rắc rối to. Lá chắn này không an toàn!' },
    { id: 3, title: 'Lá Chắn Quyết Đoán', icon: '🛡️', isSafe: true, msg: 'Chính xác! Đứng thẳng, nói to "Dừng lại!" và đi báo cô giáo là cách thông minh nhất.' }
  ];

  const handleCardClick = (card) => {
    setFeedback(card);
    if (card.isSafe) setSuccess(true);
  };

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: '#e0f2fe',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px',
      fontFamily: cuteFont, overflowX: 'hidden'
    }}>
      <h1 style={{ fontSize: '38px', color: '#0369a1', textAlign: 'center', marginBottom: '10px' }}>CHỌN LÁ CHẮN ĐÚNG</h1>
      <p style={{ fontSize: '22px', color: '#0284c7', textAlign: 'center', marginBottom: '40px' }}>Theo cậu, Thỏ Trắng nên chọn thẻ bài nào để bảo vệ mình?</p>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {cards.map(card => (
          <motion.div
            key={card.id}
            whileHover={{ y: -10 }} whileTap={{ scale: 0.95 }}
            onClick={() => handleCardClick(card)}
            style={{
              background: 'white', border: `4px solid ${feedback?.id === card.id ? (card.isSafe ? '#22c55e' : '#ef4444') : '#bae6fd'}`,
              borderRadius: '25px', padding: '30px', width: '260px', textAlign: 'center', cursor: 'pointer',
              boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ fontSize: '70px', marginBottom: '15px' }}>{card.icon}</div>
            <h3 style={{ fontSize: '24px', color: '#0f172a', margin: 0 }}>{card.title}</h3>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{
              marginTop: '30px', padding: '20px 40px', borderRadius: '20px', maxWidth: '700px', textAlign: 'center',
              background: feedback.isSafe ? '#dcfce7' : '#fee2e2', border: `3px solid ${feedback.isSafe ? '#22c55e' : '#ef4444'}`
            }}
          >
            <p style={{ fontSize: '22px', color: feedback.isSafe ? '#166534' : '#991b1b', margin: 0 }}>
              {feedback.isSafe ? '🌟 ' : '⚠️ '}{feedback.msg}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {success && (
        <motion.button
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          onClick={() => navigate('/level1/screen3_4')}
          style={{ marginTop: '30px', background: '#0284c7', color: 'white', padding: '15px 50px', borderRadius: '50px', fontSize: '24px', border: 'none', cursor: 'pointer', fontFamily: cuteFont, boxShadow: '0 8px 0 #0369a1' }}
        >
          Luyện Khẩu Lệnh ➡️
        </motion.button>
      )}
    </div>
  );
}