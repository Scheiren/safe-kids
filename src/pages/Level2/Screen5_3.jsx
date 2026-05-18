import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function L2_Screen5_3() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";

  const [timeLeft, setTimeLeft] = useState(7);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);

  // Đếm ngược 7 giây
  useEffect(() => {
    if (timeLeft > 0 && !selectedOption) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else if (timeLeft === 0 && !selectedOption) {
      setFeedback({ type: 'warning', text: "🐘 Hết giờ mất rồi! Trong lúc khẩn cấp cậu phải nhanh lên nhé. Cùng thử lại nào!" });
    }
  }, [timeLeft, selectedOption]);

  const options = [
    { id: 'A', text: "A: “Thầy ơi… hức… con sợ lắm…”", feedback: "🐘 Con đang rất sợ, điều đó bình thường. Nhưng thử nói thêm ai đang làm gì và ở đâu nhé.", correct: false },
    { id: 'B', text: "B: “Thầy ơi phạt nhóm Sói Xám đi!”", feedback: "🐘 Câu này chưa đủ để người lớn biết chuyện gì đang diễn ra ở đâu.", correct: false },
    { id: 'C', text: "C: “Thầy ơi giúp con! Nhóm Sói Xám đang chặn các bạn ở cầu thang B. Thầy ra đó ngay nhé!”", feedback: "👨‍🏫 Đã rõ! Thầy sẽ có mặt ngay!", correct: true }
  ];

  const handleSelect = (opt) => {
    if (selectedOption || timeLeft === 0) return;
    setSelectedOption(opt.id);
    setFeedback({ type: opt.correct ? 'success' : 'error', text: opt.feedback });
  };

  const handleRetry = () => {
    setTimeLeft(7);
    setSelectedOption(null);
    setFeedback(null);
  };

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: '#0f172a',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px 20px',
      fontFamily: cuteFont, color: '#f8fafc', overflow: 'hidden'
    }}>
      <h1 style={{ fontSize: '36px', color: '#38bdf8', marginBottom: '10px', textAlign: 'center' }}>TRẠM TRUYỀN TIN TỐC ĐỘ</h1>
      
      {/* Khung cảnh: Nhím Bạc gặp Thầy Gấu Trắng */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '30px', marginBottom: '30px', height: '150px' }}>
        <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity }} style={{ fontSize: '80px' }}>🦔</motion.div>
        
        {/* Đồng hồ đếm ngược */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div
            animate={timeLeft <= 3 && !selectedOption ? { scale: [1, 1.2, 1], color: ['#ef4444', '#f8fafc', '#ef4444'] } : {}}
            transition={{ repeat: Infinity, duration: 0.5 }}
            style={{ fontSize: '50px', fontWeight: 'bold', color: timeLeft <= 3 ? '#ef4444' : '#facc15', background: '#1e293b', padding: '10px 30px', borderRadius: '20px', border: '4px solid #334155' }}
          >
            00:0{timeLeft}
          </motion.div>
          <span style={{ color: '#94a3b8', fontSize: '16px', marginTop: '5px' }}>Thời gian báo cáo</span>
        </div>

        <div style={{ fontSize: '100px' }}>🐻‍❄️</div>
      </div>

      {/* Lựa chọn */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', maxWidth: '700px' }}>
        {options.map(opt => (
          <button
            key={opt.id}
            onClick={() => handleSelect(opt)}
            disabled={!!selectedOption || timeLeft === 0}
            style={{
              background: selectedOption === opt.id ? (opt.correct ? '#064e3b' : '#7f1d1d') : '#1e293b',
              border: `3px solid ${selectedOption === opt.id ? (opt.correct ? '#10b981' : '#ef4444') : '#334155'}`,
              color: '#f8fafc', padding: '20px', borderRadius: '20px', fontSize: '20px',
              textAlign: 'left', cursor: (selectedOption || timeLeft === 0) ? 'not-allowed' : 'pointer', fontFamily: cuteFont,
              opacity: (selectedOption && selectedOption !== opt.id) ? 0.5 : 1
            }}
          >
            {opt.text}
          </button>
        ))}
      </div>

      {/* Feedback & Popup Hoàn Thành */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{
              marginTop: '30px', padding: '20px 40px', borderRadius: '20px', maxWidth: '700px', textAlign: 'center',
              background: feedback.type === 'success' ? '#ecfdf5' : '#fef2f2',
              color: feedback.type === 'success' ? '#065f46' : '#991b1b',
              border: `3px solid ${feedback.type === 'success' ? '#10b981' : '#ef4444'}`, fontSize: '22px'
            }}
          >
            {feedback.text}
            
            {feedback.type !== 'success' && (
              <div style={{ marginTop: '20px' }}>
                <button onClick={handleRetry} style={{ background: '#ef4444', color: 'white', padding: '10px 30px', borderRadius: '15px', border: 'none', fontSize: '18px', cursor: 'pointer', fontFamily: cuteFont }}>
                  🔄 Thử lại
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hiển thị Huy Chương khi Thành công */}
      <AnimatePresence>
        {feedback?.type === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.95)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}
          >
            <motion.div animate={{ rotateY: 360 }} transition={{ repeat: Infinity, duration: 3, ease: 'linear' }} style={{ fontSize: '160px', filter: 'drop-shadow(0 0 40px #facc15)' }}>
              🛡️
            </motion.div>
            <h2 style={{ color: '#facc15', fontSize: '42px', textAlign: 'center', marginTop: '20px' }}>HUY CHƯƠNG KHIÊN VÀNG CHIẾN THUẬT!</h2>
            <p style={{ color: '#cbd5e1', fontSize: '22px' }}>Thầy Gấu Trắng đã nhận được thông tin và đang đi xử lý.</p>
            
            <button
              onClick={() => navigate('/level2/screen6_1')} // Route sang Phần 6 (Phần Cuối)
              style={{
                marginTop: '40px', background: '#38bdf8', color: '#0f172a', padding: '15px 50px',
                borderRadius: '50px', fontSize: '26px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontFamily: cuteFont
              }}
            >
              Tiến tới Cửa Ải Cuối Cùng 🌟
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}