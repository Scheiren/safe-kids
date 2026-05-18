import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function L2_Screen6_1() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";

  const availableAdults = [
    { id: 1, icon: '👨‍👩‍👧', name: 'Bố Mẹ' },
    { id: 2, icon: '🦉', name: 'Cô Cú Mèo' },
    { id: 3, icon: '🐻‍❄️', name: 'Thầy Gấu Trắng' },
    { id: 4, icon: '🐘', name: 'Bác Voi Bảo Vệ' },
    { id: 5, icon: '👵', name: 'Ông Bà' }
  ];

  const [selectedAdults, setSelectedAdults] = useState([]);

  const toggleAdult = (adult) => {
    if (selectedAdults.find(a => a.id === adult.id)) {
      setSelectedAdults(selectedAdults.filter(a => a.id !== adult.id));
    } else if (selectedAdults.length < 3) {
      setSelectedAdults([...selectedAdults, adult]);
    }
  };

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: '#0f172a',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px',
      fontFamily: cuteFont, color: '#f8fafc'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '800px', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '38px', color: '#38bdf8', margin: '0 0 10px 0' }}>VÒNG TRÒN BẢO VỆ</h1>
        <p style={{ fontSize: '22px', color: '#cbd5e1', lineHeight: 1.5 }}>
          “Hiệp sĩ không đơn độc. Khiên mạnh nhất là vòng tròn người lớn luôn sẵn sàng lắng nghe.”
        </p>
      </div>

      {/* Vòng tròn ánh sáng */}
      <div style={{
        position: 'relative', width: '350px', height: '350px', borderRadius: '50%',
        border: `6px dashed ${selectedAdults.length === 3 ? '#38bdf8' : '#475569'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: selectedAdults.length === 3 ? '0 0 40px rgba(56, 189, 248, 0.4)' : 'none',
        transition: 'all 0.5s', marginBottom: '40px'
      }}>
        <div style={{ fontSize: '80px', zIndex: 10 }}>🦔</div>
        
        {/* 3 Vị trí bảo vệ xung quanh Nhím Bạc */}
        {[0, 1, 2].map((index) => {
          const angle = (index * 120 - 90) * (Math.PI / 180);
          const radius = 175; // Bán kính
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const adult = selectedAdults[index];

          return (
            <div key={index} style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              width: '90px', height: '90px', borderRadius: '50%',
              background: adult ? '#1e3a8a' : '#1e293b', border: `4px solid ${adult ? '#38bdf8' : '#334155'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px',
              boxShadow: adult ? '0 0 20px #38bdf8' : 'none', transition: 'all 0.3s'
            }}>
              {adult ? adult.icon : '+'}
            </div>
          );
        })}
      </div>

      <p style={{ color: '#94a3b8', fontSize: '20px', marginBottom: '20px' }}>
        {selectedAdults.length < 3 ? `Hãy chọn thêm ${3 - selectedAdults.length} người lớn tin cậy:` : 'Vòng tròn bảo vệ đã hoàn tất!'}
      </p>

      {/* Danh sách lựa chọn */}
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '700px' }}>
        {availableAdults.map(adult => {
          const isSelected = selectedAdults.find(a => a.id === adult.id);
          return (
            <motion.button
              key={adult.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleAdult(adult)}
              style={{
                background: isSelected ? '#38bdf8' : '#1e293b', color: isSelected ? '#0f172a' : '#f8fafc',
                border: `3px solid ${isSelected ? '#0284c7' : '#475569'}`, padding: '10px 20px',
                borderRadius: '20px', fontSize: '18px', cursor: 'pointer', fontFamily: cuteFont,
                display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'bold'
              }}
            >
              <span style={{ fontSize: '24px' }}>{adult.icon}</span> {adult.name}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedAdults.length === 3 && (
          <motion.button
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            onClick={() => navigate('/level2/screen6_2')}
            style={{
              marginTop: '40px', background: '#22c55e', color: '#ffffff',
              padding: '15px 50px', borderRadius: '50px', fontSize: '24px',
              border: 'none', fontWeight: 'bold', cursor: 'pointer', fontFamily: cuteFont,
              boxShadow: '0 8px 0 #166534'
            }}
          >
            Lưu Vòng Tròn An Toàn ➡️
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}