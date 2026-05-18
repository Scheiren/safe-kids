import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- IMPORT ASSETS ---
import backgroundImage from '../../assets/images/background0_3.png'; // Đường dẫn nền của bạn

export default function Screen0_3() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";

  // Hiệu ứng viền chữ để nổi bật trên background
  const textOutline = "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 0px 2px 0 #fff, 0px -2px 0 #fff, 2px 0px 0 #fff, -2px 0px 0 #fff";

  // Cập nhật danh sách các mục để map đúng với các Route E1, E2, E3
  const sections = [
    { 
      title: "👨‍🏫 Dành cho Giáo viên", 
      desc: "Cách tổ chức chia sẻ trên lớp, gợi ý mẫu câu khi trẻ báo cáo bạo lực.",
      path: "/adults/e1"
    },
    { 
      title: "👨‍👩‍👧 Dành cho Phụ huynh", 
      desc: "Cách hỏi chuyện con không áp lực và phản ứng chuẩn khi con bị bắt nạt.",
      path: "/adults/e2"
    },
    { 
      title: "✨ Thông điệp & Thần chú", 
      desc: "6 giá trị cốt lõi của SafeKids và câu thần chú kết thúc hành trình.",
      path: "/adults/e3"
    }
  ];

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover', backgroundPosition: 'center', fontFamily: cuteFont,
      padding: '40px 20px', boxSizing: 'border-box', overflowX: 'hidden', position: 'relative'
    }}>
      
      {/* Nút Quay lại màn hình chọn Level */}
      <motion.button 
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/level1/screen0_2')}
        style={{
          position: 'absolute', top: '20px', left: '20px', background: 'rgba(255, 255, 255, 0.9)',
          border: '2px solid #60a5fa', borderRadius: '15px', padding: '10px 20px',
          cursor: 'pointer', fontSize: '18px', color: '#1e40af', fontWeight: 'bold',
          boxShadow: '0 4px 0 #60a5fa', zIndex: 10
        }}
      >
        ⬅ Quay lại
      </motion.button>

      {/* Tiêu đề chính */}
      <motion.div 
        initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        style={{ textAlign: 'center', marginBottom: '40px', marginTop: '40px', zIndex: 10 }}
      >
        <h1 style={{ fontSize: '48px', color: '#1e3a8a', margin: 0, textShadow: textOutline }}>Góc Người Lớn</h1>
        <p style={{ fontSize: '22px', color: '#1e3a8a', fontWeight: 'bold', textShadow: textOutline }}>
          Đồng hành cùng các hiệp sĩ nhỏ bảo vệ nụ cười
        </p>
      </motion.div>

      {/* Danh sách nội dung dạng Grid */}
      <div style={{ 
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '25px', width: '100%', maxWidth: '1100px', zIndex: 10
      }}>
        {sections.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(0,0,0,0.2)', borderColor: '#3b82f6' }}
            onClick={() => navigate(item.path)} // Điều hướng tới Route tương ứng
            style={{
              background: 'rgba(255, 255, 255, 0.95)', padding: '30px', borderRadius: '30px',
              border: '3px solid #bfdbfe', cursor: 'pointer', display: 'flex', 
              flexDirection: 'column', gap: '12px', backdropFilter: 'blur(5px)'
            }}
          >
            <h3 style={{ fontSize: '24px', color: '#1e40af', margin: 0 }}>{item.title}</h3>
            <p style={{ fontSize: '18px', color: '#334155', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
            <div style={{ marginTop: 'auto', textAlign: 'right', color: '#3b82f6', fontWeight: 'bold' }}>
              Đọc tài liệu ➡️
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ 
        marginTop: 'auto', paddingTop: '40px', textAlign: 'center', 
        background: 'rgba(255,255,255,0.5)', width: '100%', borderRadius: '20px'
      }}>
        <p style={{ fontSize: '16px', color: '#1e3a8a', fontWeight: 'bold' }}>
          SafeKids - Học viện Hiệp sĩ bảo vệ nụ cười © 2026
        </p>
      </div>
    </div>
  );
}