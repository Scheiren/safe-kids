import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function L2_Screen2_2() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    { id: 1, title: "Bạo lực thể chất", icon: "👊", desc: "Xô đẩy, chặn đường, giật đồ." },
    { id: 2, title: "Bạo lực lời nói", icon: "🗣️", desc: "Chửi rủa, hạ nhục, đặt biệt danh xấu." },
    { id: 3, title: "Bạo lực quan hệ", icon: "🚫", desc: "Tẩy chay, ép cả nhóm không chơi cùng, cô lập." },
    { id: 4, title: "Bạo lực mạng", icon: "📱", desc: "Chụp lén, chế ảnh, bêu xấu trong nhóm chat." }
  ];

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: '#0f172a',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px',
      fontFamily: cuteFont
    }}>
      <h1 style={{ fontSize: '38px', color: '#38bdf8', textAlign: 'center', marginBottom: '10px' }}>HỒ SƠ NHỮNG ĐÁM MÂY ĐEN</h1>
      <p style={{ fontSize: '20px', color: '#94a3b8', textAlign: 'center', maxWidth: '800px', marginBottom: '40px' }}>
        "Có những vết thương nằm trên da. Có những vết thương nằm trong lòng. Có những vết thương nằm trên màn hình. Cả ba đều cần được ngăn lại."
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', width: '100%', maxWidth: '900px' }}>
        {cards.map(card => (
          <motion.div 
            key={card.id}
            whileHover={{ scale: 1.05, y: -5 }}
            onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
            style={{ 
              background: '#1e293b', padding: '30px', borderRadius: '20px', border: '2px solid #334155',
              cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '60px', marginBottom: '15px' }}>{card.icon}</div>
            <h3 style={{ color: '#f8fafc', fontSize: '24px', margin: '0 0 10px 0' }}>{card.title}</h3>
            
            {activeCard === card.id && (
              <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} style={{ color: '#cbd5e1', fontSize: '18px', margin: 0 }}>
                {card.desc}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>

      <motion.button 
        onClick={() => navigate('/level2/screen2_3')}
        style={{ marginTop: '50px', background: '#38bdf8', color: '#0f172a', border: 'none', padding: '15px 50px', borderRadius: '50px', fontSize: '22px', cursor: 'pointer', fontFamily: cuteFont, fontWeight: 'bold' }}
      >
        Thử thách Radar ➡️
      </motion.button>
    </div>
  );
}