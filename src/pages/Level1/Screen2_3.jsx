import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Screen2_3() {
  const navigate = useNavigate();
  const [found, setFound] = useState([]);
  const [showBadge, setShowBadge] = useState(false);
  const cuteFont = "'Itim', cursive";

  const hazards = [
    { id: 1, name: "Góc hành lang", top: '25%', left: '20%', icon: "🦊🚫🐰" },
    { id: 2, name: "Ghế đá", top: '65%', left: '45%', icon: "🦊🧸😭" },
    { id: 3, name: "Nhà vệ sinh", top: '35%', left: '75%', icon: "🦊💦🐰" }
  ];

  const handleFound = (id) => {
    if (!found.includes(id)) {
      setFound([...found, id]);
      if (found.length + 1 === 3) {
        setTimeout(() => setShowBadge(true), 1000);
      }
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#f0fdf4', position: 'relative', fontFamily: cuteFont, overflow: 'hidden' }}>
      {/* BACKGROUND SÂN TRƯỜNG (Placeholder) */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(#bae6fd, #f0fdf4)', opacity: 0.5 }} />
      
      <div style={{ position: 'relative', zIndex: 10, padding: '20px', textAlign: 'center' }}>
        <h1 style={{ color: '#1e40af', fontSize: '32px' }}>NHIỆM VỤ: QUÉT RADAR SÂN TRƯỜNG</h1>
        <p style={{ color: '#1e3a8a' }}>Hãy chạm vào 3 nơi bạn nhỏ đang cần giúp đỡ!</p>
      </div>

      {/* CÁC ĐIỂM NGUY CƠ */}
      {hazards.map(h => (
        <div 
          key={h.id} 
          onClick={() => handleFound(h.id)}
          style={{ position: 'absolute', top: h.top, left: h.left, transform: 'translate(-50%, -50%)', cursor: 'pointer' }}
        >
          {!found.includes(h.id) ? (
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{ width: '80px', height: '80px', background: 'rgba(239, 68, 68, 0.4)', borderRadius: '50%', border: '2px solid red' }}
            />
          ) : (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ fontSize: '50px' }}>
              ✅ {h.icon}
            </motion.div>
          )}
        </div>
      ))}

      {/* POPUP NHẬN HUY CHƯƠNG */}
      <AnimatePresence>
        {showBadge && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ 
              position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.9)', 
              zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' 
            }}
          >
            <motion.div 
              animate={{ rotateY: 360, scale: [1, 1.1, 1] }} 
              transition={{ rotateY: { duration: 3, repeat: Infinity }, scale: { duration: 1, repeat: Infinity } }}
              style={{ fontSize: '200px' }}
            >
              👁️‍🗨️
            </motion.div>
            <h2 style={{ color: '#facc15', fontSize: '40px', marginTop: '20px' }}>HUY HIỆU: MẮT THẦN TẬP SỰ</h2>
            <p style={{ color: 'white', fontSize: '20px' }}>Cậu đã nhận diện nguy cơ rất giỏi!</p>
            <button 
              onClick={() => navigate('/level1/screen3_1')}
              style={{ 
                marginTop: '30px', background: '#facc15', color: '#713f12', 
                padding: '15px 60px', borderRadius: '50px', border: 'none', fontSize: '24px', 
                fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 10px 0 #ca8a04' 
              }}
            >
              Tiếp tục hành trình ➡️
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}