import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function L2_Screen1_3() {
  const navigate = useNavigate();
  const [isEquipped, setIsEquipped] = useState(false);
  const cuteFont = "'Itim', cursive";

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: '#0f172a',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      fontFamily: cuteFont, padding: '20px', position: 'relative'
    }}>
      <h1 style={{ fontSize: '36px', color: '#38bdf8', marginBottom: '20px' }}>TRANG BỊ KHIÊN SÁNG</h1>
      
      <p style={{ fontSize: '20px', color: '#cbd5e1', maxWidth: '700px', textAlign: 'center', marginBottom: '40px' }}>
        "Đây là Khiên Sáng của cậu. Nó nhắc cậu ba điều: nhìn ra nguy cơ (👁️), chọn cách an toàn (⚙️), và gọi viện binh khi cần (🛡️)."
      </p>

      <div style={{ display: 'flex', gap: '50px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        
        {/* Vùng Đồng hồ / Giao diện Khiên sáng */}
        <div style={{ 
          background: '#1e293b', padding: '30px', borderRadius: '30px', 
          border: '4px solid #475569', display: 'flex', gap: '20px' 
        }}>
          <div style={{ fontSize: '50px', background: '#334155', padding: '15px', borderRadius: '20px' }}>👁️</div>
          <div style={{ fontSize: '50px', background: '#334155', padding: '15px', borderRadius: '20px' }}>⚙️</div>
          
          {!isEquipped && (
            <motion.div
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              onDragEnd={(e, info) => {
                // Nếu kéo đủ xa về phía vùng an toàn bên phải
                if (info.point.x > window.innerWidth / 2) {
                  setIsEquipped(true);
                }
              }}
              style={{ fontSize: '50px', background: '#ef4444', padding: '15px', borderRadius: '20px', cursor: 'grab', zIndex: 10, boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)' }}
            >
              🛡️
            </motion.div>
          )}
        </div>

        {/* Vùng An Toàn (Gọi người lớn) */}
        <div style={{ 
          width: '200px', height: '200px', borderRadius: '50%', 
          border: `6px dashed ${isEquipped ? '#22c55e' : '#64748b'}`, 
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          background: isEquipped ? 'rgba(34, 197, 94, 0.2)' : 'transparent', transition: 'all 0.5s'
        }}>
          {isEquipped ? (
            <span style={{ fontSize: '60px' }}>👨‍🏫</span>
          ) : (
            <span style={{ color: '#94a3b8', textAlign: 'center', padding: '10px' }}>Kéo Khiên Đỏ vào đây để gọi viện binh</span>
          )}
        </div>
      </div>

      {isEquipped && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: '40px', textAlign: 'center' }}>
          <p style={{ color: '#4ade80', fontSize: '22px', marginBottom: '20px' }}>"Ta đang lắng nghe!" - Người lớn</p>
          <button 
            onClick={() => navigate('/level2/screen2_1')}
            style={{ background: '#38bdf8', color: '#0f172a', border: 'none', padding: '15px 40px', borderRadius: '50px', fontSize: '24px', cursor: 'pointer', fontFamily: cuteFont, fontWeight: 'bold' }}
          >
            Bắt đầu huấn luyện 🚀
          </button>
        </motion.div>
      )}
    </div>
  );
}