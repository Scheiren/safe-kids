import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ScreenE_1() {
  const navigate = useNavigate();
  const font = "'Itim', cursive";

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: '#f0f9ff',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px',
      fontFamily: font, color: '#0f172a', overflowX: 'hidden'
    }}>
      <div style={{ width: '100%', maxWidth: '900px' }}>
        <button 
          onClick={() => navigate('/level1/screen0_3')}
          style={{ background: 'white', border: '2px solid #bae6fd', padding: '10px 20px', borderRadius: '15px', cursor: 'pointer', fontFamily: font, fontSize: '18px', color: '#0369a1', marginBottom: '20px' }}
        >
          ⬅ Quay lại Góc Người Lớn
        </button>

        <h1 style={{ fontSize: '38px', color: '#0284c7', textAlign: 'center', marginBottom: '10px' }}>
          👨‍🏫 TÀI LIỆU DÀNH CHO GIÁO VIÊN
        </h1>
        <p style={{ fontSize: '18px', color: '#475569', textAlign: 'center', marginBottom: '40px' }}>
          Hướng dẫn đồng hành và xử lý tình huống bạo lực học đường tại lớp.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
          {/* Box 1: Tổ chức trên lớp */}
          <motion.div whileHover={{ y: -5 }} style={{ background: 'white', padding: '25px', borderRadius: '20px', border: '3px solid #e0f2fe', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontSize: '24px', color: '#0369a1', margin: '0 0 15px 0' }}>📋 Tổ chức theo 3 vòng</h2>
            <ul style={{ fontSize: '18px', color: '#334155', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li><strong>Vòng 1:</strong> Xem – Nghe (Khám phá câu chuyện của Pipo).</li>
              <li><strong>Vòng 2:</strong> Thảo luận (Đặt câu hỏi mở cho học sinh).</li>
              <li><strong>Vòng 3:</strong> Thực hành đóng vai (Luyện khẩu lệnh và di chuyển).</li>
            </ul>
          </motion.div>

          {/* Box 2: Dấu hiệu */}
          <motion.div whileHover={{ y: -5 }} style={{ background: 'white', padding: '25px', borderRadius: '20px', border: '3px solid #e0f2fe', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontSize: '24px', color: '#b91c1c', margin: '0 0 15px 0' }}>⚠️ Dấu hiệu nhận biết</h2>
            <p style={{ fontSize: '18px', color: '#334155', lineHeight: '1.6', margin: 0 }}>
              Học sinh đột ngột khép kín, sợ đi học, mất đồ dùng học tập thường xuyên, hoặc có các vết xước/bầm tím không rõ nguyên nhân. Hãy chủ động quan sát các góc khuất trong giờ ra chơi.
            </p>
          </motion.div>
        </div>

        {/* Box 3: Kỹ năng giao tiếp */}
        <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '20px', border: '3px solid #cbd5e1' }}>
          <h2 style={{ fontSize: '26px', color: '#0f766e', textAlign: 'center', margin: '0 0 20px 0' }}>🗣️ Khi học sinh kể chuyện bị bắt nạt</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            <div>
              <h3 style={{ color: '#16a34a', fontSize: '20px', borderBottom: '2px solid #bbf7d0', paddingBottom: '10px' }}>✅ Nên nói:</h3>
              <ul style={{ fontSize: '18px', color: '#334155', lineHeight: '1.8', listStyleType: 'none', padding: 0 }}>
                <li>💚 "Cô tin con."</li>
                <li>💚 "Con kể tiếp cho cô nghe nhé."</li>
                <li>💚 "Con làm đúng khi nói với người lớn."</li>
                <li>💚 "Bây giờ chúng ta cùng nghĩ cách an toàn tiếp theo."</li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: '#dc2626', fontSize: '20px', borderBottom: '2px solid #fecaca', paddingBottom: '10px' }}>❌ KHÔNG nên nói:</h3>
              <ul style={{ fontSize: '18px', color: '#334155', lineHeight: '1.8', listStyleType: 'none', padding: 0 }}>
                <li>🛑 "Chắc con làm gì bạn mới trêu."</li>
                <li>🛑 "Chuyện trẻ con ấy mà, bỏ qua đi."</li>
                <li>🛑 "Sao con không đánh lại nó?"</li>
                <li>🛑 "Lần sau tự giải quyết đi nhé."</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}