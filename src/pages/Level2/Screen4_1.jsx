import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function L2_Screen4_1() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";

  // Danh sách các địa điểm trên bản đồ
  const [locations, setLocations] = useState([
    { id: 1, name: "Phòng Giáo viên", isSafe: true, discovered: false, top: "15%", left: "20%" },
    { id: 2, name: "Cầu thang khuất", isSafe: false, discovered: false, top: "25%", left: "70%" },
    { id: 3, name: "Phòng Y tế", isSafe: true, discovered: false, top: "50%", left: "30%" },
    { id: 4, name: "Sau nhà xe", isSafe: false, discovered: false, top: "75%", left: "80%" },
    { id: 5, name: "Cổng Bảo vệ", isSafe: true, discovered: false, top: "80%", left: "15%" },
    { id: 6, name: "Cuối hành lang", isSafe: false, discovered: false, top: "55%", left: "60%" }
  ]);

  const allDiscovered = locations.every(loc => loc.discovered);

  const handleDiscover = (id) => {
    setLocations(prev => prev.map(loc => loc.id === id ? { ...loc, discovered: true } : loc));
  };

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: '#0f172a',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px 20px',
      fontFamily: cuteFont, color: '#f8fafc'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '800px', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '36px', color: '#38bdf8', margin: '0 0 10px 0' }}>BẢN ĐỒ VÙNG SÁNG</h1>
        <p style={{ fontSize: '20px', color: '#cbd5e1' }}>
          "Khi nguy hiểm xuất hiện, điều thông minh đầu tiên là rời khỏi vùng tối và đến vùng sáng."
        </p>
        <p style={{ color: '#facc15', fontSize: '16px' }}>* Chạm vào các chấm tròn để quét các khu vực trong trường.</p>
      </div>

      {/* Sa bàn trường học */}
      <div style={{
        position: 'relative', width: '100%', maxWidth: '800px', height: '450px',
        background: '#1e293b', borderRadius: '30px', border: '6px solid #334155',
        boxShadow: 'inset 0 0 50px rgba(0,0,0,0.5)'
      }}>
        {locations.map(loc => (
          <div key={loc.id} style={{ position: 'absolute', top: loc.top, left: loc.left, transform: 'translate(-50%, -50%)' }}>
            {!loc.discovered ? (
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                onClick={() => handleDiscover(loc.id)}
                style={{
                  width: '40px', height: '40px', background: 'rgba(148, 163, 184, 0.5)',
                  borderRadius: '50%', border: '3px dashed #94a3b8', cursor: 'pointer'
                }}
              />
            ) : (
              <motion.div
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                style={{
                  background: loc.isSafe ? '#ecfdf5' : '#fef2f2',
                  border: `3px solid ${loc.isSafe ? '#10b981' : '#ef4444'}`,
                  padding: '8px 15px', borderRadius: '20px', display: 'flex', flexDirection: 'column',
                  alignItems: 'center', boxShadow: `0 0 20px ${loc.isSafe ? 'rgba(16, 185, 129, 0.4)' : 'rgba(239, 68, 68, 0.4)'}`
                }}
              >
                <span style={{ fontSize: '24px' }}>{loc.isSafe ? '☀️' : '🌑'}</span>
                <span style={{ color: '#0f172a', fontWeight: 'bold', fontSize: '14px', whiteSpace: 'nowrap' }}>{loc.name}</span>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {allDiscovered && (
        <motion.button
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          onClick={() => navigate('/level2/screen4_2')}
          style={{
            marginTop: '30px', background: '#38bdf8', color: '#0f172a',
            padding: '15px 50px', borderRadius: '50px', fontSize: '24px',
            border: 'none', fontWeight: 'bold', cursor: 'pointer', fontFamily: cuteFont
          }}
        >
          Tiếp tục ➡️
        </motion.button>
      )}
    </div>
  );
}