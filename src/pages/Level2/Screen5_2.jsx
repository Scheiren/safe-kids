import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function L2_Screen5_2() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";

  const reportData = [
    { id: 1, question: "1. Ai?", answer: "Nhóm Sói Xám" },
    { id: 2, question: "2. Chuyện gì?", answer: "Đang chặn đường và đòi tiền ăn sáng" },
    { id: 3, question: "3. Ở đâu?", answer: "Cầu thang B" },
    { id: 4, question: "4. Khi nào?", answer: "Lúc ra chơi" },
    { id: 5, question: "5. Cần gì?", answer: "Cần Thầy Gấu Trắng ra giúp ngay" }
  ];

  const [revealed, setRevealed] = useState([]);

  const handleReveal = (id) => {
    if (!revealed.includes(id)) {
      setRevealed([...revealed, id]);
    }
  };

  const isComplete = revealed.length === reportData.length;

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: '#0f172a',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px',
      fontFamily: cuteFont, color: '#f8fafc'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '750px', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '36px', color: '#38bdf8', margin: '0 0 10px 0' }}>CUỘN MẬT THƯ BÁO CÁO</h1>
        <p style={{ fontSize: '20px', color: '#cbd5e1' }}>
          "Khi cậu báo rõ, người lớn sẽ giúp nhanh hơn. Cậu không cần nói dài. Chỉ cần nói đúng điều quan trọng."
        </p>
      </div>

      {/* Cuộn giấy da */}
      <motion.div
        initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} style={{ originY: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: '#fef3c7', width: '100%', maxWidth: '600px', borderRadius: '15px',
          border: '6px solid #b45309', padding: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          display: 'flex', flexDirection: 'column', gap: '15px'
        }}
      >
        <h2 style={{ color: '#78350f', textAlign: 'center', fontSize: '28px', margin: '0 0 10px 0', borderBottom: '3px dashed #d97706', paddingBottom: '10px' }}>
          📜 BÁO CÁO KHẨN CẤP
        </h2>

        {reportData.map((item) => (
          <div key={item.id} onClick={() => handleReveal(item.id)} style={{ cursor: 'pointer' }}>
            <div style={{
              background: revealed.includes(item.id) ? '#fde68a' : '#fef9c3',
              border: `2px solid ${revealed.includes(item.id) ? '#d97706' : '#fcd34d'}`,
              padding: '15px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', transition: 'all 0.3s'
            }}>
              <span style={{ fontSize: '22px', color: '#92400e', fontWeight: 'bold' }}>{item.question}</span>
              
              <AnimatePresence mode="wait">
                {revealed.includes(item.id) ? (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                    style={{ fontSize: '20px', color: '#065f46', textAlign: 'right', flex: 1, marginLeft: '20px' }}
                  >
                    {item.answer}
                  </motion.span>
                ) : (
                  <span style={{ fontSize: '18px', color: '#b45309', opacity: 0.6 }}>Chạm để mở mã...</span>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </motion.div>

      {isComplete && (
        <motion.button
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          onClick={() => navigate('/level2/screen5_3')}
          style={{
            marginTop: '40px', background: '#38bdf8', color: '#0f172a',
            padding: '15px 50px', borderRadius: '50px', fontSize: '24px',
            border: 'none', fontWeight: 'bold', cursor: 'pointer', fontFamily: cuteFont
          }}
        >
          Luyện Tập Truyền Tin Tốc Độ ➡️
        </motion.button>
      )}
    </div>
  );
}