import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Screen6_3() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: 'radial-gradient(circle, #fef08a, #fef9c3)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', fontFamily: cuteFont, overflow: 'hidden'
    }}>
      
      {/* Hiệu ứng pháo hoa nhẹ */}
      <motion.div animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ position: 'absolute', top: '10%', left: '15%', fontSize: '50px' }}>✨</motion.div>
      <motion.div animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }} style={{ position: 'absolute', top: '20%', right: '15%', fontSize: '60px' }}>🌟</motion.div>

      <motion.div animate={{ rotateY: 360 }} transition={{ repeat: Infinity, duration: 5, ease: "linear" }} style={{ fontSize: '160px', filter: 'drop-shadow(0 0 40px #facc15)' }}>
        🛡️
      </motion.div>
      
      <h1 style={{ color: '#b45309', fontSize: '50px', textAlign: 'center', margin: '20px 0 10px 0', textShadow: '0 5px 10px rgba(0,0,0,0.1)' }}>LỄ PHONG TƯỚC</h1>
      <h2 style={{ color: '#d97706', fontSize: '35px', margin: '0 0 30px 0' }}>HIỆP SĨ TẬP SỰ DŨNG CẢM</h2>
      
      <div style={{ background: 'white', padding: '30px 50px', borderRadius: '40px', border: '5px solid #f59e0b', textAlign: 'center', maxWidth: '700px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
        <p style={{ fontSize: '30px', color: '#92400e', margin: 0, fontWeight: 'bold', lineHeight: 1.5 }}>
          “Con có quyền được an toàn.<br/>Con không im lặng một mình.”
        </p>
      </div>

      <motion.button 
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/')} 
        style={{ marginTop: '50px', background: '#f59e0b', color: 'white', padding: '20px 70px', borderRadius: '50px', fontSize: '28px', border: 'none', cursor: 'pointer', fontFamily: cuteFont, boxShadow: '0 10px 0 #d97706' }}
      >
        Hoàn Thành Cấp Độ 1 🌟
      </motion.button>
    </div>
  );
}