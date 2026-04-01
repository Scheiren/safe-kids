import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- IMPORT ASSETS ---
import backgroundImage from '../../assets/images/background0_3.png'; // Hình nền mới
import clickSnd from '../../assets/sounds/click.mp3';

export default function Screen0_3() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const cuteFont = "'Itim', cursive";

  // Hiệu ứng viền chữ để nổi bật trên background
  const textOutline = "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 0px 2px 0 #fff, 0px -2px 0 #fff, 2px 0px 0 #fff, -2px 0px 0 #fff";

  const playSound = (src) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    audioRef.current = new Audio(src);
    audioRef.current.play().catch(() => {});
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const sections = [
    { title: "📖 Hướng dẫn sử dụng sổ tay", desc: "Cách cùng trẻ tương tác và ghi chép hành trình hiệp sĩ." },
    { title: "👨‍🏫 Tài liệu dành cho Giáo viên", desc: "Giáo án điện tử và các học liệu bổ trợ trực quan." },
    { title: "🎨 Gợi ý hoạt động tại lớp", desc: "Các trò chơi đóng vai và thảo luận nhóm về an toàn." },
    { title: "📝 Phiếu quan sát Trước - Sau", desc: "Đánh giá sự thay đổi nhận thức và thái độ của trẻ." },
    { title: "🛡️ Hướng dẫn hỗ trợ trẻ", desc: "Quy trình lắng nghe và xử lý khi trẻ kể về bạo lực học đường." }
  ];

  return (
    <div style={{
      width: '100vw', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      backgroundImage: `url(${backgroundImage})`, // Áp dụng background0_3.png
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      fontFamily: cuteFont,
      padding: '40px 20px', 
      boxSizing: 'border-box', 
      overflowX: 'hidden',
      position: 'relative'
    }}>
      
      {/* Nút Quay lại */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => { playSound(clickSnd); navigate('/level1/screen0_2'); }}
        style={{
          position: 'absolute', top: '20px', left: '20px', background: 'rgba(255, 255, 255, 0.9)',
          border: '2px solid #60a5fa', borderRadius: '15px', padding: '10px 20px',
          cursor: 'pointer', fontSize: '18px', color: '#1e40af', fontWeight: 'bold',
          boxShadow: '0 4px 0 #60a5fa', zIndex: 10
        }}
      >
        ⬅ Quay lại
      </motion.button>

      {/* Tiêu đề chính có Outline để không bị chìm */}
      <motion.div 
        initial={{ y: -30, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }}
        style={{ textAlign: 'center', marginBottom: '40px', marginTop: '40px', zIndex: 10 }}
      >
        <h1 style={{ fontSize: '48px', color: '#1e3a8a', margin: 0, textShadow: textOutline }}>Góc Người Lớn</h1>
        <p style={{ fontSize: '22px', color: '#1e3a8a', fontWeight: 'bold', textShadow: textOutline }}>Đồng hành cùng các hiệp sĩ nhỏ bảo vệ nụ cười</p>
      </motion.div>

      {/* Danh sách nội dung dạng Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '25px', 
        width: '100%', 
        maxWidth: '1100px',
        zIndex: 10
      }}>
        {sections.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }}
            style={{
              background: 'rgba(255, 255, 255, 0.92)', // Nền trắng mờ để thấy background bên dưới
              padding: '30px', 
              borderRadius: '30px',
              border: '3px solid #bfdbfe', 
              cursor: 'pointer',
              display: 'flex', 
              flexDirection: 'column', 
              gap: '12px',
              backdropFilter: 'blur(5px)' // Hiệu ứng kính mờ hiện đại
            }}
            onClick={() => { playSound(clickSnd); alert(`Đang mở: ${item.title}`); }}
          >
            <h3 style={{ fontSize: '24px', color: '#1e40af', margin: 0 }}>{item.title}</h3>
            <p style={{ fontSize: '17px', color: '#334155', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Footer ghi chú */}
      <div style={{ 
        marginTop: 'auto', 
        paddingTop: '40px', 
        textAlign: 'center', 
        background: 'rgba(255,255,255,0.5)',
        width: '100%',
        borderRadius: '20px'
      }}>
        <p style={{ fontSize: '16px', color: '#1e3a8a', fontWeight: 'bold' }}>
          SafeKids - Học viện Hiệp sĩ bảo vệ nụ cười © 2026
        </p>
      </div>
    </div>
  );
}