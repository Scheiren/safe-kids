import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Screen4_3() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";
  const [step, setStep] = useState(1);

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: '#f0fdf4',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px 20px',
      fontFamily: cuteFont, overflowX: 'hidden'
    }}>
      <h1 style={{ fontSize: '38px', color: '#166534', textAlign: 'center', marginBottom: '10px' }}>THOÁT KHỎI VÒNG VÂY</h1>
      <p style={{ fontSize: '22px', color: '#15803d', marginBottom: '40px' }}>“Không xô đẩy. Không đứng lại cãi nhau. Đi nhanh đến nơi an toàn.”</p>

      <div style={{
        position: 'relative', width: '100%', maxWidth: '800px', height: '400px',
        background: '#dcfce7', borderRadius: '30px', border: '5px solid #86efac',
        display: 'flex', alignItems: 'center', overflow: 'hidden'
      }}>
        
        {/* Vùng an toàn ở bên phải */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '150px', background: '#fef08a', display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '4px dashed #facc15' }}>
          <span style={{ fontSize: '60px' }}>☀️</span>
        </div>

        {/* Nhân vật Thỏ Trắng */}
        <motion.div
          drag={step === 3 ? "x" : false}
          dragConstraints={{ left: 0, right: 500 }}
          onDragEnd={(e, info) => { if (info.offset.x > 250) setStep(4); }}
          style={{ position: 'relative', left: '50px', zIndex: 10, cursor: step === 3 ? 'grab' : 'default' }}
        >
          {/* Nút 1: Chạm đầu */}
          {step === 1 && (
            <motion.div animate={{ y: [-5, 5, -5] }} transition={{ repeat: Infinity }} onClick={() => setStep(2)} style={{ position: 'absolute', top: '-50px', left: '20px', background: '#facc15', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }}>
              👆 Chạm để ngẩng cao đầu
            </motion.div>
          )}

          {/* Nút 2: Chạm miệng */}
          {step === 2 && (
            <motion.div animate={{ y: [-5, 5, -5] }} transition={{ repeat: Infinity }} onClick={() => setStep(3)} style={{ position: 'absolute', top: '10px', left: '100px', background: '#38bdf8', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }}>
              🗣️ Chạm để nói
            </motion.div>
          )}

          <motion.div animate={{ rotate: step >= 2 ? 0 : 15, scale: step >= 2 ? 1.1 : 1 }} style={{ fontSize: '110px' }}>
            🐰
          </motion.div>

          {/* Bóng thoại */}
          {step === 3 && (
            <div style={{ position: 'absolute', top: '-80px', left: '80px', background: 'white', padding: '15px', borderRadius: '20px', border: '3px solid #38bdf8', width: '250px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
              "Tránh đường, mình cần gặp cô ngay!"
            </div>
          )}
        </motion.div>

        {step === 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ position: 'absolute', bottom: '20px', left: '100px', color: '#15803d', fontSize: '24px', fontWeight: 'bold' }}>
            ➡️ Vuốt Thỏ Trắng về phía mặt trời!
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {step === 4 && (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} style={{ position: 'fixed', inset: 0, background: 'rgba(255,255,255,0.95)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 2 }} style={{ fontSize: '150px' }}>🏅</motion.div>
            <h2 style={{ color: '#d97706', fontSize: '45px', textAlign: 'center', marginTop: '20px' }}>HUY CHƯƠNG: BƯỚC CHÂN DŨNG CẢM!</h2>
            <button onClick={() => navigate('/level1/screen5_1')} style={{ marginTop: '30px', background: '#22c55e', color: 'white', padding: '15px 50px', borderRadius: '50px', fontSize: '26px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontFamily: cuteFont }}>Tiến tới Phần 5 🚀</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}