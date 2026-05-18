import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Screen4_2() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";
  const [feedback, setFeedback] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChoice = (isSafe) => {
    if (isSafe) {
      setFeedback({ type: 'success', text: 'Chính xác! Hãy luôn đi về phía có ánh sáng và người lớn nhé!' });
      setSuccess(true);
    } else {
      setFeedback({ type: 'error', text: 'Ôi, đường này tối và vắng quá. Không an toàn đâu!' });
    }
  };

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: '#e0f2fe',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px',
      fontFamily: cuteFont
    }}>
      <h1 style={{ fontSize: '38px', color: '#0369a1', textAlign: 'center', marginBottom: '10px' }}>CHỌN ĐƯỜNG AN TOÀN</h1>
      <p style={{ fontSize: '22px', color: '#0284c7', textAlign: 'center', marginBottom: '40px' }}>Thỏ Trắng đang bị Cáo Đỏ chặn lại. Thỏ nên chạy hướng nào?</p>

      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Đường tối */}
        <motion.div
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          onClick={() => handleChoice(false)}
          style={{
            background: '#334155', padding: '30px', borderRadius: '30px', border: '5px solid #475569',
            width: '280px', textAlign: 'center', cursor: 'pointer', boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
          }}
        >
          <div style={{ fontSize: '80px', marginBottom: '15px' }}>🌑🐾</div>
          <h3 style={{ fontSize: '24px', color: '#f8fafc', margin: 0 }}>Góc cầu thang vắng</h3>
        </motion.div>

        {/* Đường sáng */}
        <motion.div
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          onClick={() => handleChoice(true)}
          style={{
            background: '#fef08a', padding: '30px', borderRadius: '30px', border: '5px solid #fde047',
            width: '280px', textAlign: 'center', cursor: 'pointer', boxShadow: '0 10px 20px rgba(250, 204, 21, 0.3)'
          }}
        >
          <div style={{ fontSize: '80px', marginBottom: '15px' }}>☀️👩‍🏫</div>
          <h3 style={{ fontSize: '24px', color: '#854d0e', margin: 0 }}>Sân trường có Cô giáo</h3>
        </motion.div>
      </div>

      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{
              marginTop: '30px', padding: '20px 40px', borderRadius: '20px',
              background: feedback.type === 'success' ? '#dcfce7' : '#fee2e2',
              border: `3px solid ${feedback.type === 'success' ? '#22c55e' : '#ef4444'}`
            }}
          >
            <p style={{ fontSize: '22px', color: feedback.type === 'success' ? '#166534' : '#991b1b', margin: 0 }}>
              {feedback.type === 'success' ? '🌟 ' : '⚠️ '}{feedback.text}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {success && (
        <motion.button
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          onClick={() => navigate('/level1/screen4_3')}
          style={{ marginTop: '30px', background: '#0ea5e9', color: 'white', padding: '15px 50px', borderRadius: '50px', fontSize: '24px', border: 'none', cursor: 'pointer', fontFamily: cuteFont, boxShadow: '0 8px 0 #0284c7' }}
        >
          Tiếp tục ➡️
        </motion.button>
      )}
    </div>
  );
}