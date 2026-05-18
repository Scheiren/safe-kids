import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Screen6_1() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";

  const animals = [
    { id: 1, icon: "🦉", name: "Cú Mèo" },
    { id: 2, icon: "🐻‍❄️", name: "Gấu Trắng" },
    { id: 3, icon: "🐘", name: "Voi To" },
    { id: 4, icon: "🦁", name: "Sư Tử" },
    { id: 5, icon: "🦒", name: "Hươu Cao Cổ" }
  ];

  const [guardians, setGuardians] = useState([]);

  const toggleGuardian = (animal) => {
    if (guardians.find(g => g.id === animal.id)) {
      setGuardians(guardians.filter(g => g.id !== animal.id));
    } else if (guardians.length < 3) {
      setGuardians([...guardians, animal]);
    }
  };

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: 'radial-gradient(circle, #e0e7ff, #c7d2fe)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px', fontFamily: cuteFont
    }}>
      <h1 style={{ fontSize: '38px', color: '#3730a3', textAlign: 'center', marginBottom: '10px' }}>CHIẾC GƯƠNG THẦN KẾT NỐI</h1>
      <p style={{ fontSize: '22px', color: '#4338ca', textAlign: 'center', marginBottom: '30px' }}>Hãy chọn 3 linh thú đại diện cho người lớn mà cậu tin tưởng nhất!</p>

      {/* Gương thần */}
      <div style={{
        background: '#fff', border: '8px solid #a5b4fc', borderRadius: '40px', padding: '30px', 
        display: 'flex', gap: '20px', marginBottom: '40px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
        minWidth: '350px', justifyContent: 'center'
      }}>
        {[0, 1, 2].map((slot) => (
          <div key={slot} style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#e0e7ff', border: '4px dashed #818cf8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' }}>
            {guardians[slot] ? guardians[slot].icon : ''}
          </div>
        ))}
      </div>

      {/* Lựa chọn linh thú */}
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {animals.map(animal => {
          const isSelected = guardians.find(g => g.id === animal.id);
          return (
            <motion.div
              key={animal.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              onClick={() => toggleGuardian(animal)}
              style={{ background: isSelected ? '#818cf8' : 'white', border: `3px solid ${isSelected ? '#4338ca' : '#a5b4fc'}`, padding: '15px', borderRadius: '20px', fontSize: '40px', cursor: 'pointer', textAlign: 'center' }}
            >
              {animal.icon}
              <div style={{ fontSize: '16px', color: isSelected ? 'white' : '#4338ca', marginTop: '5px', fontWeight: 'bold' }}>{animal.name}</div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {guardians.length === 3 && (
          <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} onClick={() => navigate('/level1/screen6_2')} style={{ marginTop: '40px', background: '#4f46e5', color: 'white', padding: '15px 50px', borderRadius: '50px', fontSize: '24px', border: 'none', cursor: 'pointer', fontFamily: cuteFont }}>
            Khóa Gương Thần ➡️
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}