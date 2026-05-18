import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function L2_Screen1_1() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom, #1e293b, #0f172a)',
      fontFamily: cuteFont, padding: '20px', position: 'relative', overflow: 'hidden'
    }}>
      
      {/* Background Particles mờ ảo */}
      <motion.div animate={{ opacity: [0.3, 0.67, 0.3] }} transition={{ repeat: Infinity, duration: 4 }} style={{ position: 'absolute', top: '10%', left: '10%', fontSize: '100px', filter: 'blur(1.5px)' }}>💠</motion.div>
      <motion.div animate={{ opacity: [0.3, 0.67, 0.3] }} transition={{ repeat: Infinity, duration: 3, delay: 1 }} style={{ position: 'absolute', bottom: '20%', right: '15%', fontSize: '100px', filter: 'blur(1.5px)' }}>⚡</motion.div>
      <motion.div animate={{ opacity: [0.3, 0.67, 0.3] }} transition={{ repeat: Infinity, duration: 4 }} style={{ position: 'absolute', top: '40%', left: '20%', fontSize: '100px', filter: 'blur(1.5px)' }}>⚡</motion.div>
      <motion.div animate={{ opacity: [0.3, 0.67, 0.3] }} transition={{ repeat: Infinity, duration: 3, delay: 1 }} style={{ position: 'absolute', bottom: '50%', right: '10%', fontSize: '100px', filter: 'blur(1.5px)' }}>💠</motion.div>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }}
        style={{ textAlign: 'center', zIndex: 10, marginBottom: '50px' }}
      >
        <div style={{ fontSize: '100px', filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.5))' }}>🛡️</div>
        <h1 style={{ fontSize: '55px', color: '#38bdf8', margin: '20px 0 10px 0', textShadow: '0 5px 15px rgba(0,0,0,0.5)' }}>
          HIỆP SĨ TRƯỞNG THÀNH
        </h1>
        <p style={{ fontSize: '22px', color: '#cbd5e1', maxWidth: '700px', lineHeight: 1.6 }}>
          Cậu đã lớn hơn, thử thách cũng khó hơn. Vũ khí làm tổn thương nhau giờ đây không chỉ là nắm đấm, mà còn là <b>lời nói</b> và <b>mạng xã hội</b>.
        </p>
      </motion.div>

      <motion.button 
        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(56, 189, 248, 0.6)' }} 
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/level2/screen1_2')}
        style={{ 
          background: 'transparent', color: '#38bdf8', fontSize: '28px', 
          padding: '20px 60px', borderRadius: '50px', border: '4px solid #38bdf8', 
          cursor: 'pointer', fontFamily: cuteFont, textTransform: 'uppercase',
          letterSpacing: '2px', zIndex: 10, transition: 'all 0.3s'
        }}
      >
        Bắt đầu Nhiệm vụ 🚀
      </motion.button>
    </div>
  );
}