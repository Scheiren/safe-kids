import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function L2_Screen4_2() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";
  const [feedback, setFeedback] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChoice = (isCorrect, text) => {
    if (isCorrect) {
      setFeedback({ type: 'success', text });
      setSuccess(true);
    } else {
      setFeedback({ type: 'error', text });
    }
  };

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: '#0f172a',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px 20px',
      fontFamily: cuteFont, color: '#f8fafc'
    }}>
      <h1 style={{ fontSize: '36px', color: '#38bdf8', textAlign: 'center', marginBottom: '10px' }}>CHỌN ĐƯỜNG RÚT LUI</h1>
      
      {/* Tình huống */}
      <div style={{ background: '#1e293b', padding: '20px 40px', borderRadius: '20px', border: '2px solid #334155', maxWidth: '700px', textAlign: 'center', marginBottom: '30px' }}>
        <p style={{ fontSize: '20px', margin: 0, color: '#cbd5e1' }}>
          Nhím Bạc đang ở cuối hành lang vắng. Phía trước, nhóm Sói Xám đang tiến lại gần với thái độ gây hấn. Nhím Bạc nên làm gì?
        </p>
      </div>

      {/* Hoạt cảnh minh họa */}
      <div style={{ fontSize: '60px', display: 'flex', gap: '50px', alignItems: 'center', marginBottom: '40px' }}>
        <motion.span animate={{ x: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>🦔</motion.span>
        <span style={{ fontSize: '30px', color: '#ef4444' }}>⚡</span>
        <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>🐺🐺</motion.span>
      </div>

      {/* 3 Lựa chọn */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '900px' }}>
        <motion.button
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          onClick={() => handleChoice(false, "Không đi vào nơi vắng để 'nói chuyện riêng'. Điều đó rất nguy hiểm!")}
          style={{ background: '#334155', color: '#f8fafc', padding: '20px', borderRadius: '20px', border: '3px solid #475569', fontSize: '20px', cursor: 'pointer', fontFamily: cuteFont, width: '250px' }}
        >
          🚪 1. Đi nép vào nhà kho vắng bên cạnh.
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          onClick={() => handleChoice(true, "Chính xác! Quay lại nơi có ánh sáng và người lớn là cách bảo vệ bản thân thông minh nhất.")}
          style={{ background: '#0f766e', color: '#ccfbf1', padding: '20px', borderRadius: '20px', border: '3px solid #14b8a6', fontSize: '20px', cursor: 'pointer', fontFamily: cuteFont, width: '250px' }}
        >
          🏥 2. Quay ngoắt lại, đi nhanh về phía Phòng Y tế.
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          onClick={() => handleChoice(false, "Không đứng lại đôi co. Khi họ đông và hung hăng, đôi co sẽ làm tình hình xấu đi.")}
          style={{ background: '#334155', color: '#f8fafc', padding: '20px', borderRadius: '20px', border: '3px solid #475569', fontSize: '20px', cursor: 'pointer', fontFamily: cuteFont, width: '250px' }}
        >
          🗣️ 3. Đứng tại chỗ, lớn tiếng cãi lại nhóm Sói Xám.
        </motion.button>
      </div>

      {/* Phản hồi */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            style={{
              marginTop: '30px', padding: '20px', borderRadius: '15px', maxWidth: '700px', textAlign: 'center',
              background: feedback.type === 'success' ? '#064e3b' : '#7f1d1d',
              border: `2px solid ${feedback.type === 'success' ? '#10b981' : '#ef4444'}`, fontSize: '20px'
            }}
          >
            {feedback.text}
          </motion.div>
        )}
      </AnimatePresence>

      {success && (
        <motion.button
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          onClick={() => navigate('/level2/screen4_3')}
          style={{
            marginTop: '30px', background: '#38bdf8', color: '#0f172a',
            padding: '15px 50px', borderRadius: '50px', fontSize: '24px',
            border: 'none', fontWeight: 'bold', cursor: 'pointer', fontFamily: cuteFont
          }}
        >
          Luyện tập di chuyển ➡️
        </motion.button>
      )}
    </div>
  );
}