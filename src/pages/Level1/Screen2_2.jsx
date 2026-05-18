import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Screen2_2() {
  const navigate = useNavigate();
  const [decoded, setDecoded] = useState([]);
  const [activeStory, setActiveStory] = useState(null);
  const cuteFont = "'Itim', cursive";

  const clouds = [
    { id: 1, name: "Đụng tay chân", icon: "👊", story: "Cáo Đỏ xô Thỏ Trắng ngã khi đang xếp hàng." },
    { id: 2, name: "Đụng lời nói", icon: "🗣️", story: "Cáo Đỏ gọi bạn là 'đồ nhút nhát' để cả nhóm cười." },
    { id: 3, name: "Đụng cảm xúc", icon: "😢", story: "Nhóm bạn không cho Thỏ chơi cùng và dọa nạt bạn." }
  ];

  return (
    <div style={{ 
      width: '100vw', height: '100vh', background: '#f8fafc', 
      display: 'flex', flexDirection: 'column', alignItems: 'center', 
      padding: '20px', fontFamily: cuteFont 
    }}>
      <h1 style={{ color: '#1e3a8a', fontSize: '36px' }}>TỪ ĐIỂN ĐÁM MÂY ĐEN</h1>
      
      <div style={{ display: 'flex', gap: '40px', marginTop: '60px', width: '100%', justifyContent: 'space-around' }}>
        {/* DANH SÁCH MÂY */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {clouds.map(c => (
            <motion.div
              key={c.id}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              onDragEnd={(e, info) => {
                if (info.point.x > window.innerWidth / 2) {
                  setDecoded(prev => [...new Set([...prev, c.id])]);
                  setActiveStory(c.story);
                }
              }}
              style={{
                background: 'white', padding: '20px', borderRadius: '20px',
                border: '4px solid #cbd5e1', cursor: 'grab', display: 'flex', alignItems: 'center', gap: '15px'
              }}
            >
              <span style={{ fontSize: '40px' }}>☁️</span>
              <span style={{ fontSize: '22px' }}>{c.name}</span>
            </motion.div>
          ))}
        </div>

        {/* KHIÊN GIẢI MÃ CỦA PIPO */}
        <div style={{ textAlign: 'center' }}>
          <motion.div 
            animate={{ rotate: [0, 5, -5, 0] }} 
            transition={{ repeat: Infinity, duration: 3 }}
            style={{ fontSize: '150px', filter: 'drop-shadow(0 0 20px #facc15)' }}
          >
            🛡️
          </motion.div>
          <p style={{ color: '#64748b' }}>Kéo mây vào khiên để giải mã!</p>
          
          <AnimatePresence>
            {activeStory && (
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                style={{ 
                  marginTop: '20px', background: 'white', padding: '20px', 
                  borderRadius: '20px', border: '4px solid #facc15', maxWidth: '300px' 
                }}
              >
                {activeStory}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {decoded.length === 3 && (
        <motion.button
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          onClick={() => navigate('/level1/screen2_3')}
          style={{ 
            marginTop: 'auto', background: '#22c55e', color: 'white', 
            padding: '15px 50px', borderRadius: '50px', border: 'none', fontSize: '24px', 
            boxShadow: '0 8px 0 #16a34a', cursor: 'pointer', marginBottom: '40px'
          }}
        >
          Bật Radar Sân Trường 📡
        </motion.button>
      )}
    </div>
  );
}