import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Screen4_1() {
  const navigate = useNavigate();
  const [isSafe, setIsSafe] = useState(false);
  const cuteFont = "'Itim', cursive";

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: '#1e293b', // Nền tối ban đầu
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      fontFamily: cuteFont, padding: '20px', position: 'relative', overflow: 'hidden'
    }}>
      
      <motion.h1 
        animate={{ color: isSafe ? '#15803d' : '#f8fafc' }}
        style={{ fontSize: '40px', zIndex: 10, textAlign: 'center', marginBottom: '20px' }}
      >
        {isSafe ? "Tuyệt vời! Cậu đã đến nơi an toàn!" : "Kéo Thỏ Trắng đến vùng sáng an toàn!" /* [cite: 192] */}
      </motion.h1>

      <div style={{ 
        width: '100%', maxWidth: '800px', height: '500px', background: '#334155', 
        borderRadius: '30px', position: 'relative', overflow: 'hidden', border: '8px solid #475569' 
      }}>
        {/* Vùng tối (Nguy hiểm) */}
        <div style={{ position: 'absolute', left: 0, top: 0, width: '40%', height: '100%', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '100px', opacity: 0.5 }}>🦊</span>
        </div>

        {/* Vùng sáng (An toàn) */}
        <div style={{ position: 'absolute', right: 0, top: 0, width: '40%', height: '100%', background: '#fef08a', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '-20px 0 50px rgba(253, 224, 71, 0.5)' }}>
          <span style={{ fontSize: '80px' }}>👩‍🏫</span>
        </div>

        {/* Nhân vật Thỏ Trắng cho phép kéo thả [cite: 192] */}
        <motion.div
          drag
          dragConstraints={{ left: -100, right: 300, top: -200, bottom: 200 }}
          onDragEnd={(event, info) => {
            if (info.point.x > window.innerWidth / 2) {
              setIsSafe(true);
            }
          }}
          style={{
            position: 'absolute', left: '15%', top: '40%', fontSize: '90px', 
            cursor: 'grab', zIndex: 20, background: 'white', borderRadius: '50%', padding: '10px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
          }}
          whileTap={{ cursor: 'grabbing', scale: 1.1 }}
        >
          🐰
        </motion.div>
      </div>

      {isSafe && (
        <motion.button 
          initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          onClick={() => navigate('/level1/screen4_2')}
          style={{ marginTop: '30px', background: '#22c55e', color: 'white', padding: '15px 40px', borderRadius: '50px', fontSize: '24px', fontFamily: cuteFont, border: 'none', cursor: 'pointer' }}
        >
          Tiếp tục ➡️
        </motion.button>
      )}
    </div>
  );
}