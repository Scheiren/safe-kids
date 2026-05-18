import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function L2_Screen4_3() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";
  const [step, setStep] = useState(1);

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: 'linear-gradient(to right, #1e293b, #0f172a)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px 20px',
      fontFamily: cuteFont, color: '#f8fafc', overflow: 'hidden'
    }}>
      <h1 style={{ fontSize: '36px', color: '#38bdf8', textAlign: 'center', marginBottom: '10px' }}>PHÁ VÒNG VÂY AN TOÀN</h1>
      <p style={{ fontSize: '20px', color: '#cbd5e1', marginBottom: '40px' }}>“Dùng giọng rõ ràng. Dùng bước chân dứt khoát. Không dùng tay chân.”</p>

      {/* Sân khấu ngang */}
      <div style={{
        position: 'relative', width: '100%', maxWidth: '800px', height: '350px',
        background: '#334155', borderRadius: '30px', border: '5px solid #475569',
        display: 'flex', alignItems: 'center', padding: '0 40px', overflow: 'hidden'
      }}>
        
        {/* Nhóm Sói Xám (Vật cản) */}
        <div style={{ position: 'absolute', right: '150px', fontSize: '90px', display: 'flex' }}>
          <span style={{ transform: 'scaleX(-1)' }}>🐺</span>
          <span style={{ transform: 'scaleX(-1)', marginLeft: '-30px' }}>🐺</span>
        </div>

        {/* Cổng ánh sáng / Lối thoát an toàn */}
        <div style={{
          position: 'absolute', right: '0', top: 0, bottom: 0, width: '100px',
          background: 'linear-gradient(to right, transparent, #fef08a)', display: 'flex',
          alignItems: 'center', justifyContent: 'center', borderLeft: '4px dashed #facc15'
        }}>
          <span style={{ fontSize: '50px' }}>👨‍🏫</span>
        </div>

        {/* Nhân vật Nhím Bạc */}
        <motion.div
          drag={step === 3 ? "x" : false}
          dragConstraints={{ left: 0, right: 600 }}
          onDragEnd={(e, info) => {
            if (info.offset.x > 300) setStep(4); // Hoàn thành vuốt tiến
          }}
          style={{ position: 'relative', zIndex: 10, cursor: step === 3 ? 'grab' : 'default' }}
          whileTap={{ cursor: step === 3 ? 'grabbing' : 'default' }}
        >
          {/* Nút tương tác: Đầu (Bước 1) */}
          {step === 1 && (
            <motion.div
              animate={{ y: [-5, 5, -5] }} transition={{ repeat: Infinity }}
              style={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', background: '#38bdf8', color: '#0f172a', padding: '5px 15px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer', whiteSpace: 'nowrap' }}
              onClick={() => setStep(2)}
            >
              👆 Chạm để ngẩng cao đầu
            </motion.div>
          )}

          {/* Nút tương tác: Miệng (Bước 2) */}
          {step === 2 && (
            <motion.div
              animate={{ y: [-5, 5, -5] }} transition={{ repeat: Infinity }}
              style={{ position: 'absolute', top: '10px', left: '100px', background: '#22c55e', color: '#fff', padding: '5px 15px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer', whiteSpace: 'nowrap' }}
              onClick={() => setStep(3)}
            >
              🗣️ Chạm để nói
            </motion.div>
          )}

          {/* Avatar Nhím Bạc */}
          <motion.div
            animate={{ 
              rotate: step >= 2 ? 0 : 15, // Cúi đầu lúc đầu, sau đó ngẩng lên
              scale: step >= 2 ? 1.1 : 1
            }}
            style={{ fontSize: '100px' }}
          >
            🦔
          </motion.div>

          {/* Lời thoại của Nhím (Bước 3) */}
          {step === 3 && (
            <div style={{ position: 'absolute', top: '-80px', left: '60px', background: 'white', color: '#0f172a', padding: '10px 15px', borderRadius: '20px', width: '280px', border: '3px solid #38bdf8', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}>
              "Tránh đường. Mình cần gặp Thầy Gấu Trắng ngay."
              <div style={{ position: 'absolute', bottom: '-10px', left: '20px', width: '15px', height: '15px', background: 'white', transform: 'rotate(45deg)', borderBottom: '3px solid #38bdf8', borderRight: '3px solid #38bdf8' }} />
            </div>
          )}
        </motion.div>

        {/* Hướng dẫn vuốt tiến (Bước 3) */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ position: 'absolute', bottom: '30px', left: '150px', color: '#facc15', fontSize: '22px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <motion.span animate={{ x: [0, 20, 0] }} transition={{ repeat: Infinity }}>➡️</motion.span>
            Vuốt Nhím Bạc chạy qua khe trống
          </motion.div>
        )}
      </div>

      {/* Popup Hoàn thành - Huy chương */}
      <AnimatePresence>
        {step === 4 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            style={{
              position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.95)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 100
            }}
          >
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 2 }} style={{ fontSize: '150px' }}>
              🏃‍♂️
            </motion.div>
            <h2 style={{ color: '#4ade80', fontSize: '45px', textAlign: 'center', margin: '20px 0 10px 0', textShadow: '0 0 20px rgba(74, 222, 128, 0.5)' }}>HUY CHƯƠNG BẬC THẦY DI CHUYỂN!</h2>
            <p style={{ color: '#cbd5e1', fontSize: '24px' }}>Cậu đã biết cách thoát hiểm an toàn tuyệt đối.</p>
            
            <button
              onClick={() => navigate('/level2/screen5_1')} // Route sang Phần 5
              style={{
                marginTop: '40px', background: '#38bdf8', color: '#0f172a',
                padding: '15px 50px', borderRadius: '50px', fontSize: '26px',
                border: 'none', fontWeight: 'bold', cursor: 'pointer', fontFamily: cuteFont
              }}
            >
              Tiến tới Phần 5 🌟
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}