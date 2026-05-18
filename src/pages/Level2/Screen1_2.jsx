import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function L2_Screen1_2() {
  const navigate = useNavigate();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const cuteFont = "'Itim', cursive";

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: '#0f172a',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      fontFamily: cuteFont, padding: '20px', position: 'relative'
    }}>
      <h1 style={{ fontSize: '40px', color: '#f8fafc', marginBottom: '30px', letterSpacing: '2px' }}>
        NGUYÊN TẮC HIỆP SĨ
      </h1>

      {/* Cuộn lệnh cổ */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }}
        style={{ 
          background: '#fef3c7', padding: '40px', borderRadius: '15px', 
          maxWidth: '600px', border: '4px solid #b45309', boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          position: 'relative'
        }}
      >
        <p style={{ fontSize: '24px', color: '#78350f', lineHeight: 1.6, margin: 0, textAlign: 'justify' }}>
          "Hiệp sĩ xứng đáng được tôn trọng. Bị bắt nạt không bao giờ là lỗi của cậu. Giữ im lặng trước điều nguy hiểm không phải là dũng cảm. Dũng cảm là biết bảo vệ mình đúng cách."
        </p>
      </motion.div>

      {/* Ổ khóa kéo để mở */}
      <div style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ color: '#94a3b8', fontSize: '18px', marginBottom: '15px' }}>
          {isUnlocked ? "Đã mở khóa!" : "Vuốt ổ khóa sang phải để đồng ý"}
        </p>
        
        <div style={{ 
          width: '300px', height: '60px', background: '#334155', 
          borderRadius: '30px', position: 'relative', display: 'flex', alignItems: 'center',
          border: '2px solid #475569', overflow: 'hidden'
        }}>
          {isUnlocked && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              style={{ position: 'absolute', width: '100%', textAlign: 'center', color: '#34d399', fontSize: '20px', fontWeight: 'bold' }}
            >
              ĐÃ XÁC NHẬN
            </motion.div>
          )}

          {!isUnlocked && (
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 240 }}
              onDragEnd={(e, info) => {
                if (info.offset.x > 150) {
                  setIsUnlocked(true);
                  setTimeout(() => navigate('/level2/screen1_3'), 1000); // Chuyển sang 1.3
                }
              }}
              style={{ 
                width: '60px', height: '60px', background: '#e2e8f0', borderRadius: '50%', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                fontSize: '30px', cursor: 'grab', boxShadow: '2px 0 10px rgba(0,0,0,0.3)', zIndex: 10 
              }}
            >
              🔒
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}