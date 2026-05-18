import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function L2_Screen3_3() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";
  const [currentStep, setCurrentStep] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(false);

  // Kịch bản 4 bước xử lý bạo lực không gian mạng
  const cyberSteps = [
    { step: 1, title: 'BƯỚC 1: CHỤP MÀN HÌNH 📸', desc: 'Lưu giữ bằng chứng chính xác, không chỉnh sửa thông tin.' },
    { step: 2, title: 'BƯỚC 2: THOÁT KHỎI ĐÓ 🚪', desc: 'Rời khỏi nhóm chat tiêu cực ngay lập tức để bảo vệ cảm xúc.' },
    { step: 3, title: 'BƯỚC 3: CHẶN KẺ GÂY HẠI 🚫', desc: 'Khóa tài khoản ẩn danh bêu xấu để họ không thể gửi tin nhắn.' },
    { step: 4, title: 'BƯỚC 4: BÁO NGƯỜI LỚN TINCẬY 👨‍🏫', desc: 'Chia sẻ mật thư bằng chứng với thầy cô giáo hoặc bố mẹ xử lý.' }
  ];

  const startDefendingAction = () => {
    setWrongAnswer(false);
    setCurrentStep(1);
  };

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: '#0f172a',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px 20px',
      fontFamily: cuteFont, color: '#f8fafc'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '750px', marginBottom: '25px' }}>
        <h1 style={{ fontSize: '34px', color: '#38bdf8', margin: '0 0 8px 0' }}>MÀN HÌNH 3.3: BẢO VỆ THÀNH TRÌ MẠNG</h1>
        <p style={{ fontSize: '20px', color: '#cbd5e1' }}>
          “Hiệp sĩ không đôi co với bóng tối trên mạng. Hiệp sĩ lưu lại bằng chứng, chặn nguy cơ và gọi viện binh.”
        </p>
      </div>

      {/* Khung mô phỏng Điện thoại Nhóm chat bị bắt nạt */}
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
        <div style={{
          width: '320px', height: '420px', background: '#1e293b',
          borderRadius: '40px', border: '8px solid #475569', overflow: 'hidden',
          display: 'flex', flexDirection: 'column', boxShadow: '0 15px 30px rgba(0,0,0,0.5)'
        }}>
          {/* Header nhóm chat */}
          <div style={{ background: '#334155', padding: '12px', textAlign: 'center', borderBottom: '2px solid #475569' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#f1f5f9' }}>💬 Nhóm: Bóng Mây Xám</span>
          </div>
          {/* Nội dung tin nhắn độc hại */}
          <div style={{ padding: '15px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, background: '#0f172a' }}>
            <div style={{ background: '#334155', padding: '10px 14px', borderRadius: '15px', alignSelf: 'flex-start', maxWidth: '85%' }}>
              <div style={{ fontSize: '13px', color: '#38bdf8', marginBottom: '2px' }}>Tài khoản Ẩn danh 👤</div>
              <div style={{ fontSize: '16px', color: '#cbd5e1' }}>Ê đồ Nhím ngốc xếch! Ảnh chế cậu đây xấu tệ! 😂 🖼️❌</div>
            </div>
            <div style={{ background: '#334155', padding: '10px 14px', borderRadius: '15px', alignSelf: 'flex-start', maxWidth: '85%' }}>
              <div style={{ fontSize: '16px', color: '#cbd5e1' }}>Tẩy chay không cho Nhím vào nhóm học tập nữa đi bà con! 👎👎</div>
            </div>
          </div>
          {/* Chốt lá chắn bảo vệ của Pipo đè lên */}
          <div style={{ background: '#1e3a8a', padding: '10px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <span style={{ fontSize: '24px' }}>🐘🛡️</span>
            <span style={{ fontSize: '14px', color: '#60a5fa' }}>Pipo đang dựng khiên bảo vệ!</span>
          </div>
        </div>

        {/* Khung tương tác câu hỏi / quy trình */}
        <div style={{ width: '100%', maxWidth: '480px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {currentStep === 0 ? (
            <div>
              <h3 style={{ fontSize: '24px', color: '#facc15', marginBottom: '20px' }}>Nhím Bạc rất xấu hổ. Cậu sẽ giúp Nhím chọn phương án nào?</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button
                  onClick={() => setWrongAnswer(true)}
                  style={{ background: '#334155', color: '#f8fafc', border: '2px solid #ef4444', padding: '15px', borderRadius: '15px', cursor: 'pointer', fontFamily: cuteFont, fontSize: '18px', textAlign: 'left' }}
                >
                  🔴 A: Nhắn tin chửi lại, đôi co gay gắt công khai.
                </button>
                <button
                  onClick={() => setWrongAnswer(true)}
                  style={{ background: '#334155', color: '#f8fafc', border: '2px solid #ef4444', padding: '15px', borderRadius: '15px', cursor: 'pointer', fontFamily: cuteFont, fontSize: '18px', textAlign: 'left' }}
                >
                  🔵 B: Im lặng chịu đựng một mình và khóc.
                </button>
                <button
                  onClick={startDefendingAction}
                  style={{ background: '#1e3a8a', color: '#f8fafc', border: '2px solid #38bdf8', padding: '15px', borderRadius: '15px', cursor: 'pointer', fontFamily: cuteFont, fontSize: '19px', fontWeight: 'bold', textAlign: 'left' }}
                >
                  🟢 C: Áp dụng bí kíp 4 bước cứu viện hiệp sĩ mạng!
                </button>
              </div>
              {wrongAnswer && (
                <p style={{ color: '#ef4444', marginTop: '15px', fontSize: '17px' }}>⚠️ Lựa chọn này làm tình hình tệ hơn hoặc khiến cậu tổn thương một mình. Hãy chọn cách thông minh của hiệp sĩ!</p>
              )}
            </div>
          ) : (
            // Trình diễn chuỗi hoạt ảnh 4 bước phép thuật mạng
            <div style={{ background: '#1e293b', padding: '25px', borderRadius: '25px', border: '3px solid #38bdf8' }}>
              <h3 style={{ fontSize: '22px', color: '#4ade80', marginBottom: '15px', textAlign: 'center' }}>⚡ ĐANG KÍCH HOẠT QUY TRÌNH PHẢN KHÁNG</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {cyberSteps.map(s => (
                  <motion.div
                    key={s.step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: currentStep >= s.step ? 1 : 0.2, x: 0 }}
                    style={{ background: currentStep === s.step ? '#0f172a' : '#334155', padding: '12px 18px', borderRadius: '15px' }}
                  >
                    <div style={{ fontSize: '18px', fontWeight: 'bold', color: currentStep === s.step ? '#38bdf8' : '#cbd5e1' }}>{s.title}</div>
                    {currentStep === s.step && <p style={{ fontSize: '15px', color: '#f8fafc', margin: '4px 0 0 0' }}>{s.desc}</p>}
                  </motion.div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                {currentStep < 4 ? (
                  <button
                    onClick={() => setCurrentStep(currentStep + 1)}
                    style={{ background: '#38bdf8', color: '#0f172a', border: 'none', padding: '10px 25px', borderRadius: '10px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', marginLeft: 'auto', fontFamily: cuteFont }}
                  >
                    Bước kế tiếp ➡️
                  </button>
                ) : (
                  <button
                    onClick={() => navigate('/level2/screen3_4')}
                    style={{ background: '#22c55e', color: '#ffffff', border: 'none', padding: '12px 30px', borderRadius: '10px', fontSize: '20px', fontWeight: 'bold', cursor: 'pointer', width: '100%', fontFamily: cuteFont }}
                  >
                    Nhận Huy Hiệu Kế Tiếp 🌟
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}