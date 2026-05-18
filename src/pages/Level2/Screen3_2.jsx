import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function L2_Screen3_2() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";
  const [selectedTactic, setSelectedTactic] = useState(null);

  const tactics = [
    {
      id: 1,
      title: '1. Im lặng chịu đựng',
      icon: '🤐',
      animation: '🦔🙇‍♂️ ─── 🐺💢',
      result: 'Nhím Bạc cúi đầu lo sợ, nhóm Sói Xám lại tiếp tục dọa nạt nặng hơn vào lần sau. Cách này không an toàn!',
      isCorrect: false
    },
    {
      id: 2,
      title: '2. Nổi giận đánh lại',
      icon: '🤬',
      animation: '🦔🔥 🥊💥 🐺⚡',
      result: 'Nhím lao vào đánh nhau tay đôi, cả hai bên đều bị thương tích nguy hiểm và vi phạm nội quy trường học!',
      isCorrect: false
    },
    {
      id: 3,
      title: '3. Dùng lá chắn quyết đoán',
      icon: '🛡️',
      animation: '🦔✋ 👀✨  [Rời đi]',
      result: 'Nhím lùi một bước, nhìn thẳng dứt khoát và nói lớn: “Dừng lại. Mình không đồng ý. Nếu còn tiếp tục, mình sẽ báo người lớn.”',
      isCorrect: true
    }
  ];

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: '#0f172a',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px',
      fontFamily: cuteFont, color: '#f8fafc'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '36px', color: '#38bdf8', margin: '0 0 10px 0' }}>MÀN HÌNH 3.2: BA CHIẾN THUẬT PHẢN ỨNG</h1>
        <p style={{ fontSize: '22px', color: '#94a3b8' }}>
          “Quyết đoán không phải là gây hấn. Quyết đoán là nói rõ ranh giới và rời khỏi nguy cơ.”
        </p>
      </div>

      {/* Danh sách 3 thẻ chiến thuật */}
      <div style={{
        display: 'flex', gap: '20px', width: '100%', maxWidth: '950px',
        flexWrap: 'wrap', justifyContent: 'center', marginBottom: '30px'
      }}>
        {tactics.map(t => (
          <motion.div
            key={t.id}
            whileHover={{ y: -8, boxShadow: '0 10px 25px rgba(56, 189, 248, 0.2)' }}
            onClick={() => setSelectedTactic(t)}
            style={{
              background: '#1e293b', border: `3px solid ${selectedTactic?.id === t.id ? '#38bdf8' : '#334155'}`,
              borderRadius: '25px', padding: '25px', width: '280px', cursor: 'pointer',
              textAlign: 'center', transition: 'border-color 0.3s'
            }}
          >
            <div style={{ fontSize: '50px', marginBottom: '10px' }}>{t.icon}</div>
            <h3 style={{ fontSize: '22px', color: '#f8fafc', margin: '0 0 10px 0' }}>{t.title}</h3>
            <p style={{ fontSize: '15px', color: '#94a3b8', margin: 0 }}>Nhấp vào để xem diễn biến</p>
          </motion.div>
        ))}
      </div>

      {/* Khung mô phỏng hoạt cảnh và kết quả chọn lựa */}
      {selectedTactic && (
        <motion.div
          key={selectedTactic.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            width: '100%', maxWidth: '700px', background: '#1e293b',
            borderRadius: '25px', padding: '30px', border: `4px solid ${selectedTactic.isCorrect ? '#22c55e' : '#ef4444'}`,
            textAlign: 'center', boxShadow: '0 15px 30px rgba(0,0,0,0.3)'
          }}
        >
          <div style={{ fontSize: '28px', color: '#94a3b8', letterSpacing: '4px', marginBottom: '15px' }}>
            {selectedTactic.animation}
          </div>
          <h4 style={{ fontSize: '24px', margin: '0 0 10px 0', color: selectedTactic.isCorrect ? '#4ade80' : '#f87171' }}>
            {selectedTactic.isCorrect ? '🌟 CHIẾN THUẬT HIỆP SĨ ĐÚNG ĐẮN' : '⚠️ KẾT QUẢ NGUY HIỂM'}
          </h4>
          <p style={{ fontSize: '19px', color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>
            {selectedTactic.result}
          </p>
        </motion.div>
      )}

      {/* Nút điều hướng khi đã hiểu chiến thuật chuẩn */}
      {selectedTactic?.isCorrect && (
        <motion.button
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          onClick={() => navigate('/level2/screen3_3')}
          style={{
            marginTop: '40px', background: '#22c55e', color: '#ffffff',
            padding: '15px 60px', borderRadius: '50px', fontSize: '24px',
            border: 'none', fontWeight: 'bold', cursor: 'pointer', fontFamily: cuteFont,
            boxShadow: '0 8px 0 #166534'
          }}
        >
          Lên mạng an toàn ➡️
        </motion.button>
      )}
    </div>
  );
}