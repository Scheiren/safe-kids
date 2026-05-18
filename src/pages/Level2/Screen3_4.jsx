import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function L2_Screen3_4() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";
  
  const [energy, setEnergy] = useState(0);
  const [selectedStatement, setSelectedStatement] = useState(null);

  const commands = [
    { id: 1, text: "“Dừng lại. Mình không đồng ý.” ✋" },
    { id: 2, text: "“Đừng chạm vào đồ của mình.” 🎒" },
    { id: 3, text: "“Mình sẽ báo thầy cô ngay lập tức.” 👩‍🏫" }
  ];

  const chargeVoiceEnergy = (id) => {
    setSelectedStatement(id);
    if (energy < 100) {
      setEnergy(prev => Math.min(prev + 35, 100)); // Mỗi lần click tăng cột năng lượng uy lực lên
    }
  };

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: 'linear-gradient(to bottom, #0f172a, #1e1b4b)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px',
      fontFamily: cuteFont, color: '#f8fafc', overflow: 'hidden'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '36px', color: '#38bdf8', margin: '0 0 10px 0' }}>MÀN HÌNH 3.4: LUYỆN KHẨU LỆNH UY LỰC</h1>
        <p style={{ fontSize: '22px', color: '#cbd5e1' }}>Bấm liên tục vào các khẩu lệnh dứt khoát bên dưới để nạp đầy thanh năng lượng phòng thủ!</p>
      </div>

      {/* Sân tập phân bố dạng cột ngang */}
      <div style={{
        display: 'flex', gap: '50px', alignItems: 'center', width: '100%',
        maxWidth: '850px', flexWrap: 'wrap', justifyContent: 'center'
      }}>
        
        {/* Nhím Bạc đứng trên bục ánh sáng thần thoại */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
          <motion.div
            animate={{ scale: energy === 100 ? [1, 1.1, 1] : 1, y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ fontSize: '110px', zIndex: 10 }}
          >
            🦔
          </motion.div>
          {/* Bục phát sáng */}
          <div style={{
            width: '160px', height: '25px', background: 'radial-gradient(#38bdf8, transparent)',
            borderRadius: '50%', border: '2px solid #0ea5e9', boxShadow: '0 0 30px #38bdf8'
          }} />
          <span style={{ fontSize: '20px', color: '#38bdf8', marginTop: '10px', fontWeight: 'bold' }}>SÂN TẬP KHẨU LỆNH</span>
        </div>

        {/* Thanh sạc năng lượng uy lực (Vertical Gauge) */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '45px', height: '240px', background: '#334155', borderRadius: '30px',
            border: '4px solid #f8fafc', padding: '4px', display: 'flex', flexDirection: 'column-reverse',
            overflow: 'hidden', boxShadow: '0 0 15px rgba(0,0,0,0.5)'
          }}>
            <motion.div
              animate={{ height: `${energy}%` }}
              transition={{ type: 'spring', stiffness: 60 }}
              style={{
                width: '100%',
                background: 'linear-gradient(to top, #3b82f6, #34d399, #facc15)',
                borderRadius: '20px'
              }}
            />
          </div>
          <span style={{ fontSize: '18px', color: '#facc15', fontWeight: 'bold' }}>{energy}% UY LỰC</span>
        </div>

        {/* Danh sách nút bấm lựa chọn nạp giọng nói */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '340px' }}>
          {commands.map(cmd => (
            <motion.button
              key={cmd.id}
              whileTap={{ scale: 0.96 }}
              onClick={() => chargeVoiceEnergy(cmd.id)}
              style={{
                background: selectedStatement === cmd.id ? '#1e3a8a' : '#1e293b',
                color: '#f8fafc', border: `3px solid ${selectedStatement === cmd.id ? '#38bdf8' : '#475569'}`,
                padding: '15px', borderRadius: '15px', fontSize: '20px', textAlign: 'left',
                fontFamily: cuteFont, cursor: 'pointer', transition: 'all 0.2s',
                boxShadow: '0 5px 10px rgba(0,0,0,0.2)'
              }}
            >
              {cmd.text}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Điều kiện đạt 100% năng lượng - Pipo Trưởng phong ngôi sao bạc */}
      {energy === 100 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.95)',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', zIndex: 100, padding: '20px'
          }}
        >
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ rotate: { repeat: Infinity, duration: 5, ease: "linear" }, scale: { repeat: Infinity, duration: 2 } }}
            style={{ fontSize: '160px', filter: 'drop-shadow(0 0 30px #facc15)' }}
          >
            ⭐
          </motion.div>
          <h2 style={{ color: '#facc15', fontSize: '46px', textAlign: 'center', marginTop: '20px' }}>HUY HIỆU SAO BẠC KHẨU LỆNH!</h2>
          <p style={{ color: '#cbd5e1', fontSize: '24px', marginTop: '10px', textAlign: 'center' }}>“Rõ ràng – dứt khoát – không đánh lại.”</p>
          
          <button
            onClick={() => navigate('/level2/screen4_1')} // Tiến sang Phần 4: Thoát hiểm vùng sáng
            style={{
              marginTop: '40px', background: '#38bdf8', color: '#0f172a',
              padding: '16px 65px', borderRadius: '50px', fontSize: '26px',
              border: 'none', fontWeight: 'bold', cursor: 'pointer', fontFamily: cuteFont,
              boxShadow: '0 8px 0 #0284c7'
            }}
          >
            Vào bài học kế tiếp 🚀
          </button>
        </motion.div>
      )}
    </div>
  );
}