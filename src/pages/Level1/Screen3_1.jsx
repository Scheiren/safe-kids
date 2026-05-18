import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Screen3_1() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";

  const [isHolding, setIsHolding] = useState(false);
  const [breathCount, setBreathCount] = useState(0);
  const [bubbleScale, setBubbleScale] = useState(1);

  // LOGIC ĐÃ FIX: Chỉ phụ thuộc vào hành động nhấn/thả (isHolding)
  useEffect(() => {
    let interval;

    if (isHolding) {
      // Hít vào: Bóng to dần
      interval = setInterval(() => {
        setBubbleScale((prev) => (prev < 2 ? prev + 0.05 : 2));
      }, 50);
    } else {
      // Khoảnh khắc thả tay: Kiểm tra ngay xem bóng đã đủ to chưa
      setBubbleScale((prev) => {
        if (prev >= 1.8) {
          setBreathCount((c) => Math.min(c + 1, 3)); // Tăng đếm nhịp thở (Tối đa 3)
        }
        return prev;
      });

      // Thở ra: Bóng nhỏ dần về lại 1
      interval = setInterval(() => {
        setBubbleScale((prev) => (prev > 1 ? prev - 0.1 : 1));
      }, 50);
    }

    return () => clearInterval(interval);
  }, [isHolding]);

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: '#ecfccb',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px 20px',
      fontFamily: cuteFont, userSelect: 'none', overflow: 'hidden'
    }}>
      <h1 style={{ fontSize: '36px', color: '#4d7c0f', textAlign: 'center', marginBottom: '10px' }}>
        PHÉP THUẬT BONG BÓNG BÌNH TĨNH
      </h1>
      
      <div style={{ background: 'white', padding: '15px 30px', borderRadius: '20px', border: '3px solid #bef264', textAlign: 'center', maxWidth: '600px', marginBottom: '40px' }}>
        <p style={{ fontSize: '22px', color: '#3f6212', margin: 0 }}>
          Pipo: “Trước tiên, chúng ta làm dịu trái tim đã.”
        </p>
      </div>

      {/* Khu rừng & Tương tác */}
      <div style={{ position: 'relative', width: '350px', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Thỏ Trắng khóc/bình tĩnh */}
        <div style={{ position: 'absolute', left: '-50px', bottom: '20px', fontSize: '80px', transition: 'all 0.5s' }}>
          {breathCount >= 3 ? '🐰✨' : '🐰💦'}
        </div>
        
        {/* Pipo */}
        <div style={{ position: 'absolute', right: '-50px', bottom: '20px', fontSize: '90px' }}>
          🐘
        </div>

        {/* Bong bóng ánh sáng */}
        <motion.div
          animate={{ scale: bubbleScale, opacity: isHolding ? 0.8 : 0.5 }}
          style={{
            width: '120px', height: '120px', background: 'radial-gradient(circle, #fef08a, #fde047)',
            borderRadius: '50%', border: '4px solid #facc15', boxShadow: '0 0 30px #fef08a'
          }}
        />
      </div>

      {/* Nút Nhấn Giữ */}
      <div style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
        {breathCount < 3 ? (
          <>
            <motion.div 
              // Bắt sự kiện touch trên mobile và click chuột trên web
              onPointerDown={() => setIsHolding(true)}
              onPointerUp={() => setIsHolding(false)}
              onPointerLeave={() => setIsHolding(false)}
              whileTap={{ scale: 0.95 }}
              style={{
                background: isHolding ? '#a3e635' : '#84cc16', color: 'white', padding: '20px 40px',
                borderRadius: '50px', fontSize: '26px', cursor: 'pointer', border: '4px solid #4d7c0f',
                boxShadow: isHolding ? 'none' : '0 10px 0 #4d7c0f'
              }}
            >
              {isHolding ? '🌬️ Đang hít vào...' : '👉 Nhấn giữ để hít sâu'}
            </motion.div>
            <span style={{ fontSize: '22px', color: '#4d7c0f', fontWeight: 'bold' }}>
              Đã thở: {breathCount}/3 lần
            </span>
          </>
        ) : (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '24px', color: '#15803d', fontWeight: 'bold' }}>Thỏ Trắng đã đứng vững hơn rồi!</p>
            <button
              onClick={() => navigate('/level1/screen3_2')}
              style={{ background: '#f59e0b', color: 'white', padding: '15px 50px', borderRadius: '50px', fontSize: '24px', border: 'none', cursor: 'pointer', fontFamily: cuteFont, boxShadow: '0 8px 0 #b45309' }}
            >
              Tiếp tục ➡️
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}