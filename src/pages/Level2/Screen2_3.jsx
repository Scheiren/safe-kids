import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function L2_Screen2_3() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";

  const [spots, setSpots] = useState([
    { id: 1, name: "Hành lang khuất", top: "20%", left: "25%", found: false, desc: "Nhóm Sói ép Nhím Bạc đòi tiền." },
    { id: 2, name: "Ghế đá", top: "70%", left: "40%", found: false, desc: "Giật điện thoại quay clip trêu chọc." },
    { id: 3, name: "Nhà vệ sinh", top: "40%", left: "80%", found: false, desc: "Cố tình hắt nước làm ướt áo bạn." }
  ]);

  const allFound = spots.every(s => s.found);

  return (
    <div style={{ 
      width: '100vw', minHeight: '100vh', background: '#0f172a', 
      display: 'flex', flexDirection: 'column', alignItems: 'center', 
      padding: '20px', fontFamily: cuteFont, position: 'relative' 
    }}>
      
      <h1 style={{ fontSize: '34px', color: '#38bdf8', textAlign: 'center', marginBottom: '10px' }}>CAMERA QUAN SÁT</h1>
      <p style={{ fontSize: '20px', color: '#94a3b8', textAlign: 'center' }}>"Hiệp sĩ trưởng thành phải biết nhìn ra điều nguy hiểm ngay cả khi chưa ai kêu cứu."</p>

      {/* Bản đồ trường */}
      <div style={{ 
        width: '90%', maxWidth: '900px', height: '500px', background: '#1e293b', 
        borderRadius: '30px', position: 'relative', marginTop: '20px', 
        overflow: 'hidden', border: '8px solid #334155'
      }}>
        <p style={{ position: 'absolute', width: '100%', textAlign: 'center', top: '45%', color: '#475569', fontSize: '24px' }}>
          (Bản đồ Sân trường giờ ra chơi)
        </p>

        {spots.map(s => (
          <div 
            key={s.id} 
            onClick={() => setSpots(prev => prev.map(x => x.id === s.id ? {...x, found: true} : x))}
            style={{ position: 'absolute', top: s.top, left: s.left, transform: 'translate(-50%, -50%)', cursor: 'pointer', zIndex: 20 }}
          >
            {!s.found ? (
              <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ width: '60px', height: '60px', background: 'rgba(56, 189, 248, 0.3)', borderRadius: '50%', border: '2px solid #38bdf8' }} />
            ) : (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ fontSize: '45px', background: '#1e293b', borderRadius: '50%', padding: '5px', border: '3px solid #22c55e' }}>✅</motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Popup hoàn thành */}
      <AnimatePresence>
        {allFound && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
            style={{ position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.95)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}
          >
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ fontSize: '150px' }}>👁️‍🗨️</motion.div>
            <h2 style={{ color: '#38bdf8', fontSize: '45px', textAlign: 'center', marginTop: '20px', textShadow: '0 0 20px rgba(56, 189, 248, 0.5)' }}>HUY CHƯƠNG NHÃN QUAN SẮC BÉN!</h2>
            <button 
              onClick={() => navigate('/level2/screen3_1')} 
              style={{ marginTop: '40px', background: '#38bdf8', color: '#0f172a', padding: '15px 50px', borderRadius: '50px', fontSize: '26px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Tiếp tục ➡️
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}