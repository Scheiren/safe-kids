import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function L2_Screen3_1() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";

  // Quản lý trạng thái của 3 làn sóng cảm xúc đen
  const [waves, setWaves] = useState([
    { id: 'so-hai', name: 'Sợ hãi 😨', color: '#475569', x: -120, y: -60, active: true },
    { id: 'tuc-gian', name: 'Tức giận 😡', color: '#991b1b', x: 120, y: -60, active: true },
    { id: 'xau-ho', name: 'Xấu hổ 😳', color: '#6b21a8', x: 0, y: 120, active: true }
  ]);

  const [selectedMotto, setSelectedMotto] = useState(false);
  const allWavesCleared = waves.every(w => !w.active);

  const handleWaveClear = (id) => {
    setWaves(prev => prev.map(w => w.id === id ? { ...w, active: false } : w));
  };

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: 'linear-gradient(to bottom, #1e293b, #0f172a)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px 20px',
      fontFamily: cuteFont, color: '#f8fafc', overflowX: 'hidden'
    }}>
      {/* Tiêu đề & Lời thoại */}
      <div style={{ textAlign: 'center', maxWidth: '750px', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '36px', color: '#38bdf8', margin: '0 0 10px 0' }}>MÀN HÌNH 3.1: BÌNH TĨNH TRƯỚC SÓNG ĐEN</h1>
        <p style={{ fontSize: '20px', color: '#cbd5e1', lineHeight: 1.5 }}>
          “Khi cậu thấy tim đập nhanh, tay run hoặc rất tức giận, điều đó là bình thường. Nhưng hiệp sĩ giỏi sẽ không để cảm xúc lái mình vào nguy hiểm.”
        </p>
      </div>

      {/* Sân đấu tương tác */}
      <div style={{
        position: 'relative', width: '100%', maxWidth: '700px', height: '400px',
        background: '#1e293b', borderRadius: '30px', border: '4px solid #334155',
        display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center'
      }}>
        {/* Nhím Bạc đứng ở trung tâm */}
        <div style={{ textAlign: 'center', zIndex: 10 }}>
          <div style={{ fontSize: '80px' }}>🦔</div>
          <span style={{ background: '#334155', padding: '4px 12px', borderRadius: '10px', fontSize: '16px' }}>Nhím Bạc</span>
        </div>

        {/* Pipo Trưởng hỗ trợ đứng bên cạnh */}
        <div style={{ position: 'absolute', left: '40px', bottom: '30px', fontSize: '70px', textAlign: 'center' }}>
          🐘
          <div style={{ fontSize: '14px', color: '#38bdf8' }}>Pipo Trưởng</div>
        </div>

        {/* Hiển thị các làn sóng đen bao quanh */}
        <AnimatePresence>
          {waves.map(w => w.active && (
            <motion.div
              key={w.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.05, 1], opacity: 0.8 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              onClick={() => handleWaveClear(w.id)} // Chạm hoặc dùng khiên quét qua để làm dịu
              style={{
                position: 'absolute', transform: `translate(${w.x}px, ${w.y}px)`,
                background: w.color, padding: '15px 25px', borderRadius: '50px',
                cursor: 'pointer', border: '3px solid #f8fafc', boxShadow: '0 0 20px rgba(0,0,0,0.5)',
                zIndex: 20
              }}
              whileHover={{ scale: 1.1 }}
            >
              <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{w.name}</span>
              <div style={{ fontSize: '12px', opacity: 0.7, textAlign: 'center' }}>💥 Nhấn để phá hủy</div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Khiên Bạc Phép Thuật có thể Drag để di chuyển bôi xóa nguy cơ */}
        {!allWavesCleared && (
          <motion.div
            drag
            dragConstraints={{ left: -300, right: 300, top: -150, bottom: 150 }}
            style={{
              position: 'absolute', right: '40px', bottom: '30px',
              width: '70px', height: '70px', background: 'linear-gradient(to bottom, #cbd5e1, #94a3b8)',
              borderRadius: '50%', border: '4px solid #f8fafc', display: 'flex',
              alignItems: 'center', justifyContent: 'center', fontSize: '35px',
              cursor: 'grab', boxShadow: '0 0 20px #38bdf8', zIndex: 30
            }}
            whileTap={{ cursor: 'grabbing', scale: 1.1 }}
          >
            🛡️
          </motion.div>
        )}
      </div>

      {/* Giai đoạn 2: Chọn câu thần chú để đi tiếp */}
      {allWavesCleared && (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={{ marginTop: '30px', textAlign: 'center', width: '100%', maxWidth: '500px' }}
        >
          <p style={{ color: '#4ade80', fontSize: '22px', marginBottom: '15px' }}>🌟 Đã làm dịu trái tim thành công!</p>
          <p style={{ color: '#94a3b8', fontSize: '18px', marginBottom: '15px' }}>Hãy chọn đúng khẩu lệnh ghi nhớ của hiệp sĩ:</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              onClick={() => setSelectedMotto(true)}
              style={{
                background: selectedMotto ? '#0284c7' : '#1e293b',
                color: '#f8fafc', border: `3px solid ${selectedMotto ? '#38bdf8' : '#334155'}`,
                padding: '15px', borderRadius: '15px', fontSize: '22px', fontFamily: cuteFont,
                cursor: 'pointer', transition: 'all 0.3s'
              }}
            >
              ⚔️ Hít sâu – Đứng vững – Nói rõ
            </button>
            <button
              onClick={() => alert("Câu này chưa chính xác, hãy chọn câu giúp chúng ta tự tin dứt khoát nhé!")}
              style={{
                background: '#1e293b', color: '#64748b', border: '3px solid #334155',
                padding: '15px', borderRadius: '15px', fontSize: '20px', fontFamily: cuteFont, cursor: 'pointer'
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
                padding: '15px 50px', borderRadius: '50px', fontSize: '24px',
                border: 'none', fontWeight: 'bold', cursor: 'pointer', fontFamily: cuteFont
              }}
            >
              Tiếp tục hành trình ➡️
            </motion.button>
          )}
        </motion.div>
      )}
    </div>
  );
}