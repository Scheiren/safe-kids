import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Screen6_2() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";
  const [selectedSpots, setSelectedSpots] = useState(0);

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: '#bae6fd',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px', fontFamily: cuteFont
    }}>
      <h1 style={{ fontSize: '38px', color: '#0369a1', textAlign: 'center', marginBottom: '10px' }}>BẢN ĐỒ NƠI AN TOÀN</h1>
      <p style={{ fontSize: '22px', color: '#0284c7', textAlign: 'center', marginBottom: '40px' }}>Chạm vào 3 điểm sáng trên trường để ghi nhớ nơi an toàn!</p>
      
      <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '50px' }}>
        {['🏥 Phòng Y Tế', '👩‍🏫 Phòng Cô Giáo', '🐘 Cổng Bác Bảo Vệ'].map((spot, idx) => (
          <motion.div
            key={idx} whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedSpots(prev => Math.min(prev + 1, 3))}
            style={{ background: 'white', border: '5px solid #38bdf8', borderRadius: '25px', padding: '25px', fontSize: '24px', color: '#0c4a6e', cursor: 'pointer', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
          >
            {spot}
          </motion.div>
        ))}
      </div>

      <div style={{ background: '#fef08a', padding: '20px 40px', borderRadius: '50px', border: '4px dashed #ca8a04', textAlign: 'center' }}>
        <p style={{ fontSize: '20px', color: '#a16207', margin: '0 0 5px 0' }}>KHẨU QUYẾT GHI NHỚ</p>
        <span style={{ fontSize: '28px', color: '#854d0e', fontWeight: 'bold' }}>“Nguy hiểm ➔ Rời đi ➔ Đến nơi sáng.”</span>
      </div>

      {selectedSpots >= 3 && (
        <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} onClick={() => navigate('/level1/screen6_3')} style={{ marginTop: '50px', background: '#0284c7', color: 'white', padding: '15px 50px', borderRadius: '50px', fontSize: '26px', border: 'none', cursor: 'pointer', fontFamily: cuteFont }}>
          Bước vào Lễ Phong Tước 🏰
        </motion.button>
      )}
    </div>
  );
}