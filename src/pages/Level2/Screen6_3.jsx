import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function L2_Screen6_2() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";

  // Quản lý trạng thái đánh dấu 3 khu vực an toàn
  const [checklist, setChecklist] = useState({
    school: false,
    online: false,
    adults: false
  });

  const allChecked = Object.values(checklist).every(Boolean);

  const toggleCheck = (key) => {
    setChecklist(prev => ({ ...prev, [key]: true }));
  };

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: '#0f172a',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px',
      fontFamily: cuteFont, color: '#f8fafc', overflowX: 'hidden'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '38px', color: '#38bdf8', margin: '0 0 10px 0' }}>THÀNH TRÌ NƠI AN TOÀN</h1>
        <p style={{ fontSize: '20px', color: '#cbd5e1' }}>Chạm vào từng thẻ để đánh dấu xác nhận các lớp khiên bảo vệ của cậu!</p>
      </div>

      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1000px', width: '100%' }}>
        
        {/* Thẻ 1: Ở trường */}
        <motion.div
          whileHover={{ y: -8 }} whileTap={{ scale: 0.95 }}
          onClick={() => toggleCheck('school')}
          style={{
            flex: '1 1 280px', background: checklist.school ? '#064e3b' : '#1e293b',
            border: `4px solid ${checklist.school ? '#10b981' : '#334155'}`, borderRadius: '25px',
            padding: '30px 20px', cursor: 'pointer', transition: 'all 0.3s', position: 'relative'
          }}
        >
          <div style={{ fontSize: '60px', textAlign: 'center', marginBottom: '15px' }}>🏫</div>
          <h3 style={{ color: checklist.school ? '#34d399' : '#f8fafc', fontSize: '24px', textAlign: 'center', margin: '0 0 10px 0' }}>An toàn ở trường</h3>
          <p style={{ color: '#cbd5e1', fontSize: '18px', textAlign: 'center', margin: 0 }}>Phòng Y tế, Phòng Giáo viên, Cổng bảo vệ.</p>
          {checklist.school && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ position: 'absolute', top: '10px', right: '15px', fontSize: '35px' }}>✅</motion.div>}
        </motion.div>

        {/* Thẻ 2: Trên mạng */}
        <motion.div
          whileHover={{ y: -8 }} whileTap={{ scale: 0.95 }}
          onClick={() => toggleCheck('online')}
          style={{
            flex: '1 1 280px', background: checklist.online ? '#1e3a8a' : '#1e293b',
            border: `4px solid ${checklist.online ? '#3b82f6' : '#334155'}`, borderRadius: '25px',
            padding: '30px 20px', cursor: 'pointer', transition: 'all 0.3s', position: 'relative'
          }}
        >
          <div style={{ fontSize: '60px', textAlign: 'center', marginBottom: '15px' }}>📱</div>
          <h3 style={{ color: checklist.online ? '#93c5fd' : '#f8fafc', fontSize: '24px', textAlign: 'center', margin: '0 0 10px 0' }}>An toàn trên mạng</h3>
          <p style={{ color: '#cbd5e1', fontSize: '18px', textAlign: 'center', margin: 0 }}>Chụp màn hình 📸 ➔ Chặn 🚫 ➔ Báo cáo 👨‍🏫</p>
          {checklist.online && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ position: 'absolute', top: '10px', right: '15px', fontSize: '35px' }}>✅</motion.div>}
        </motion.div>

        {/* Thẻ 3: Người lớn */}
        <motion.div
          whileHover={{ y: -8 }} whileTap={{ scale: 0.95 }}
          onClick={() => toggleCheck('adults')}
          style={{
            flex: '1 1 280px', background: checklist.adults ? '#4c1d95' : '#1e293b',
            border: `4px solid ${checklist.adults ? '#8b5cf6' : '#334155'}`, borderRadius: '25px',
            padding: '30px 20px', cursor: 'pointer', transition: 'all 0.3s', position: 'relative'
          }}
        >
          <div style={{ fontSize: '60px', textAlign: 'center', marginBottom: '15px' }}>🛡️</div>
          <h3 style={{ color: checklist.adults ? '#c4b5fd' : '#f8fafc', fontSize: '24px', textAlign: 'center', margin: '0 0 10px 0' }}>Người lớn an toàn</h3>
          <p style={{ color: '#cbd5e1', fontSize: '18px', textAlign: 'center', margin: 0 }}>3 người lớn luôn sẵn sàng lắng nghe và giúp đỡ.</p>
          {checklist.adults && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ position: 'absolute', top: '10px', right: '15px', fontSize: '35px' }}>✅</motion.div>}
        </motion.div>

      </div>

      {/* Thông điệp xuất hiện khi hoàn thành checklist */}
      <AnimatePresence>
        {allChecked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            style={{ marginTop: '50px', textAlign: 'center', zIndex: 10 }}
          >
            <h2 style={{ color: '#facc15', fontSize: '28px', marginBottom: '15px' }}>KHẨU QUYẾT GHI NHỚ CỦA HIỆP SĨ:</h2>
            <div style={{ background: '#1e293b', padding: '15px 50px', borderRadius: '50px', border: '3px solid #facc15', display: 'inline-block', boxShadow: '0 10px 30px rgba(250, 204, 21, 0.2)' }}>
              <span style={{ fontSize: '26px', color: '#f8fafc', fontWeight: 'bold' }}>“Rời khỏi – Đến nơi sáng – Báo rõ ràng.”</span>
            </div>
            
            <div style={{ marginTop: '40px' }}>
              <button
                onClick={() => navigate('/')}
                style={{ background: '#38bdf8', color: '#0f172a', padding: '15px 50px', borderRadius: '50px', fontSize: '24px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontFamily: cuteFont, boxShadow: '0 8px 0 #0284c7' }}
              >
                Tiến Vào Đại Sảnh 🏰
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}