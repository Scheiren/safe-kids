import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ScreenE_2() {
  const navigate = useNavigate();
  const font = "'Itim', cursive";

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: '#fffbeb',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px',
      fontFamily: font, color: '#451a03', overflowX: 'hidden'
    }}>
      <div style={{ width: '100%', maxWidth: '900px' }}>
        <button 
          onClick={() => navigate('/level1/screen0_3')}
          style={{ background: 'white', border: '2px solid #fde68a', padding: '10px 20px', borderRadius: '15px', cursor: 'pointer', fontFamily: font, fontSize: '18px', color: '#b45309', marginBottom: '20px' }}
        >
          ⬅ Quay lại Góc Người Lớn
        </button>

        <h1 style={{ fontSize: '38px', color: '#d97706', textAlign: 'center', marginBottom: '10px' }}>
          👨‍👩‍👧 TÀI LIỆU DÀNH CHO PHỤ HUYNH
        </h1>
        <p style={{ fontSize: '18px', color: '#78350f', textAlign: 'center', marginBottom: '40px' }}>
          Đồng hành cùng con tại nhà và xây dựng vòng tròn bảo vệ vững chắc.
        </p>

        {/* Nội dung chính */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
          <motion.div whileHover={{ scale: 1.02 }} style={{ background: 'white', padding: '25px', borderRadius: '20px', border: '3px solid #fef08a' }}>
            <h2 style={{ fontSize: '24px', color: '#b45309', margin: '0 0 10px 0' }}>🏡 Cách hỏi chuyện con sau giờ học</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
              Thay vì hỏi "Hôm nay có ai bắt nạt con không?", hãy thử: <b>"Hôm nay điều gì làm con vui nhất?"</b> hoặc <b>"Giờ ra chơi con chơi với bạn nào?"</b> để con cởi mở chia sẻ mà không thấy bị tra hỏi.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} style={{ background: 'white', padding: '25px', borderRadius: '20px', border: '3px solid #fef08a' }}>
            <h2 style={{ fontSize: '24px', color: '#b45309', margin: '0 0 10px 0' }}>📱 Phản ứng với Bắt nạt trên mạng</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
              Nếu con bị bêu xấu trên mạng, <b>đừng vội tịch thu điện thoại</b> của con. Điều đó làm con sợ và lần sau sẽ giấu giếm. Hãy cùng con chụp màn hình, chặn kẻ xấu và động viên con.
            </p>
          </motion.div>
        </div>

        {/* Gợi ý mẫu câu */}
        <div style={{ background: '#fef3c7', padding: '30px', borderRadius: '20px', border: '3px solid #fcd34d', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', color: '#92400e', margin: '0 0 20px 0' }}>💖 Những câu "Chữa lành" nên nói với con</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
            <span style={{ background: 'white', padding: '15px 25px', borderRadius: '30px', fontSize: '20px', color: '#065f46', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
              "Con không có lỗi."
            </span>
            <span style={{ background: 'white', padding: '15px 25px', borderRadius: '30px', fontSize: '20px', color: '#065f46', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
              "Con kể cho bố/mẹ nghe từ đầu nhé."
            </span>
            <span style={{ background: 'white', padding: '15px 25px', borderRadius: '30px', fontSize: '20px', color: '#065f46', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
              "Bố/mẹ sẽ giúp con."
            </span>
            <span style={{ background: 'white', padding: '15px 25px', borderRadius: '30px', fontSize: '20px', color: '#065f46', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
              "Nói với người lớn là dũng cảm, không phải mách lẻo."
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}