import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ScreenE_3() {
  const navigate = useNavigate();
  const font = "'Itim', cursive";

  const messages = [
    "Con có quyền được an toàn.",
    "Bị bắt nạt không bao giờ là lỗi của con.",
    "Hiệp sĩ không đánh lại trong nóng giận.",
    "Hiệp sĩ biết rời khỏi nguy cơ và tìm nơi sáng.",
    "Gọi người lớn giúp đỡ là thông minh, không phải mách lẻo.",
    "Con không cần chịu đựng một mình."
  ];

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: 'radial-gradient(circle, #1e3a8a, #020617)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '40px 20px', fontFamily: font, color: '#f8fafc', overflowX: 'hidden'
    }}>
      
      {/* 6 Thông điệp cốt lõi */}
      <div style={{ width: '100%', maxWidth: '800px', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '28px', color: '#38bdf8', textAlign: 'center', marginBottom: '30px', letterSpacing: '2px' }}>
          🛡️ THÔNG ĐIỆP XUYÊN SUỐT SAFEKIDS
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {messages.map((msg, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
              style={{ background: 'rgba(30, 41, 59, 0.7)', borderLeft: '4px solid #38bdf8', padding: '15px 20px', borderRadius: '0 15px 15px 0' }}
            >
              <p style={{ fontSize: '18px', margin: 0, lineHeight: '1.5' }}>{msg}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Câu thần chú kết thúc */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}
        style={{ width: '100%', maxWidth: '900px', background: 'linear-gradient(135deg, #fef3c7, #fde68a)', padding: '40px', borderRadius: '30px', textAlign: 'center', border: '6px solid #f59e0b', boxShadow: '0 0 50px rgba(245, 158, 11, 0.3)' }}
      >
        <h1 style={{ fontSize: '32px', color: '#b45309', margin: '0 0 20px 0' }}>✨ CÂU THẦN CHÚ KẾT THÚC ✨</h1>
        <p style={{ fontSize: '34px', color: '#0f172a', lineHeight: '1.6', margin: 0, fontWeight: 'bold', textShadow: '1px 1px 0px white' }}>
          “Con có quyền được an toàn.<br/>
          Con biết nói rõ ràng.<br/>
          Con biết đi đến nơi an toàn.<br/>
          Con biết gọi viện binh.<br/>
          <span style={{ color: '#ea580c', fontSize: '40px' }}>Con là Hiệp sĩ bảo vệ nụ cười.</span>”
        </p>
      </motion.div>

      <motion.button 
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/')}
        style={{ marginTop: '50px', background: 'transparent', color: '#94a3b8', border: '2px solid #475569', padding: '12px 30px', borderRadius: '30px', fontSize: '18px', cursor: 'pointer', fontFamily: font }}
      >
        Về Trang Chủ Khởi Đầu
      </motion.button>

    </div>
  );
}