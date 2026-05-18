import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function L2_Screen5_1() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";

  // Các lớp sương mù cản trở tâm lý
  const [fogs, setFogs] = useState([
    { id: 1, text: "“Đồ mách lẻo!”", message: "Kẻ gây hại dọa cậu im lặng vì chúng sợ người lớn biết chuyện.", cleared: false },
    { id: 2, text: "“Im đi!”", message: "Báo cáo khi có nguy hiểm là tự bảo vệ, không phải hèn nhát.", cleared: false },
    { id: 3, text: "“Dám nói là biết tay!”", message: "Gọi viện binh là chiến thuật thông minh của hiệp sĩ.", cleared: false }
  ]);

  const [currentMessage, setCurrentMessage] = useState("");
  const allCleared = fogs.every(f => f.cleared);

  const handleSlash = (id, msg) => {
    setFogs(prev => prev.map(f => f.id === id ? { ...f, cleared: true } : f));
    setCurrentMessage(msg);
  };

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: allCleared ? 'linear-gradient(to bottom, #1e293b, #0f172a)' : '#020617',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px',
      fontFamily: cuteFont, color: '#f8fafc', overflow: 'hidden', transition: 'background 1.5s ease'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '40px', zIndex: 10 }}>
        <h1 style={{ fontSize: '36px', color: '#38bdf8', margin: '0 0 10px 0' }}>PHÁ GIẢI LỜI NGUYỀN IM LẶNG</h1>
        <p style={{ fontSize: '20px', color: '#cbd5e1' }}>Vuốt mạnh sang ngang để dùng kiếm ánh sáng chém đứt sương mù tăm tối!</p>
      </div>

      <div style={{ position: 'relative', width: '100%', maxWidth: '600px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Ổ khóa đá lớn ở trung tâm */}
        <motion.div
          animate={allCleared ? { scale: 1.2, opacity: 0, rotate: 180 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ fontSize: '150px', zIndex: 1, filter: allCleared ? 'brightness(2)' : 'brightness(0.5)' }}
        >
          🔒
        </motion.div>

        {/* Các lớp sương mù đen (Draggable) */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '30px', zIndex: 10 }}>
          <AnimatePresence>
            {fogs.map(fog => !fog.cleared && (
              <motion.div
                key={fog.id}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (Math.abs(info.offset.x) > 100) {
                    handleSlash(fog.id, fog.message);
                  }
                }}
                exit={{ opacity: 0, scale: 1.5, filter: 'blur(10px)' }}
                whileTap={{ cursor: 'grabbing' }}
                style={{
                  background: 'rgba(15, 23, 42, 0.8)', border: '2px dashed #475569',
                  padding: '20px', borderRadius: '15px', textAlign: 'center', cursor: 'grab',
                  boxShadow: '0 0 30px rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)'
                }}
              >
                <span style={{ fontSize: '28px', color: '#94a3b8', letterSpacing: '2px' }}>{fog.text}</span>
                <div style={{ fontSize: '14px', color: '#facc15', marginTop: '10px' }}>⚔️ Vuốt để chém đứt</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Thông điệp của Pipo sau mỗi nhát chém */}
      <div style={{ height: '100px', marginTop: '20px', textAlign: 'center', width: '100%', maxWidth: '700px' }}>
        <AnimatePresence mode="wait">
          {currentMessage && !allCleared && (
            <motion.div
              key={currentMessage}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              style={{ background: '#1e3a8a', padding: '15px 30px', borderRadius: '20px', border: '2px solid #3b82f6' }}
            >
              <span style={{ fontSize: '22px', color: '#bfdbfe' }}>🐘 "{currentMessage}"</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Nút đi tiếp khi hoàn thành */}
      {allCleared && (
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} style={{ textAlign: 'center', zIndex: 20 }}>
          <h2 style={{ color: '#4ade80', fontSize: '32px', marginBottom: '20px', textShadow: '0 0 20px #22c55e' }}>✨ Ổ KHÓA ĐÃ VỠ! ÁNH SÁNG TRỞ LẠI!</h2>
          <button
            onClick={() => navigate('/level2/screen5_2')}
            style={{ background: '#38bdf8', color: '#0f172a', padding: '15px 50px', borderRadius: '50px', fontSize: '24px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontFamily: cuteFont }}
          >
            Viết Mật Thư Báo Cáo ➡️
          </button>
        </motion.div>
      )}
    </div>
  );
}