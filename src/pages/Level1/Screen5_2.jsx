import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Screen5_2() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";
  
  const fingers = [
    { id: 1, name: "Cô Cú Mèo", icon: "🦉" },
    { id: 2, name: "Thầy Gấu", icon: "🐻‍❄️" },
    { id: 3, name: "Bố", icon: "👨" },
    { id: 4, name: "Mẹ", icon: "👩" },
    { id: 5, name: "Bác Voi", icon: "🐘" }
  ];

  const [activeFingers, setActiveFingers] = useState([]);

  const toggleFinger = (id) => {
    if (!activeFingers.includes(id)) setActiveFingers([...activeFingers, id]);
  };

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: '#fffbeb', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px 20px', fontFamily: cuteFont
    }}>
      <h1 style={{ fontSize: '38px', color: '#d97706', textAlign: 'center', marginBottom: '10px' }}>BÀN TAY ÁNH SÁNG</h1>
      <p style={{ fontSize: '22px', color: '#b45309', textAlign: 'center', marginBottom: '40px' }}>
        “Hiệp sĩ dũng cảm không chiến đấu một mình.”<br/> Chạm vào 5 ngón tay để tìm viện binh!
      </p>

      {/* 5 ngón tay người lớn */}
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '800px' }}>
        {fingers.map(f => (
          <motion.div 
            key={f.id} whileHover={{ y: -10 }} whileTap={{ scale: 0.95 }}
            onClick={() => toggleFinger(f.id)} 
            style={{ 
              background: activeFingers.includes(f.id) ? '#fde047' : 'white', 
              border: `4px solid ${activeFingers.includes(f.id) ? '#f59e0b' : '#fef08a'}`, 
              padding: '25px', borderRadius: '30px', textAlign: 'center', cursor: 'pointer', width: '130px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ fontSize: '60px' }}>{activeFingers.includes(f.id) ? f.icon : '✋'}</div>
            <div style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '10px', color: '#92400e' }}>
              {activeFingers.includes(f.id) ? f.name : 'Chạm mở'}
            </div>
          </motion.div>
        ))}
      </div>

      {activeFingers.length === 5 && (
        <motion.button 
          initial={{ scale: 0 }} animate={{ scale: 1 }} 
          onClick={() => navigate('/level1/screen5_3')} 
          style={{ 
            marginTop: '50px', background: '#f59e0b', color: 'white', padding: '15px 40px', 
            borderRadius: '50px', fontSize: '24px', border: 'none', cursor: 'pointer', fontFamily: cuteFont,
            boxShadow: '0 8px 0 #d97706'
          }}
        >
          Chuẩn bị Viết Thư ✉️
        </motion.button>
      )}
    </div>
  );
}