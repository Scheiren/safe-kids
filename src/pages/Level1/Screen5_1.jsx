import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Screen5_1() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";

  const [items, setItems] = useState([
    { id: 1, text: "Bạn không cho mượn cục tẩy", type: "machleo", sorted: null },
    { id: 2, text: "Bạn xô ngã làm mình khóc", type: "baocao", sorted: null },
    { id: 3, text: "Bạn giật đồ và dọa nạt", type: "baocao", sorted: null }
  ]);
  
  const [feedback, setFeedback] = useState(null);
  const allSorted = items.every(i => i.sorted !== null);

  const handleSort = (item, category) => {
    if (item.type === category) {
      setItems(items.map(i => i.id === item.id ? { ...i, sorted: category } : i));
      setFeedback(null);
    } else {
      setFeedback('Chưa đúng rồi! Chuyện làm mình đau và sợ thì phải Báo cáo nhé!');
      setTimeout(() => setFeedback(null), 3000);
    }
  };

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: '#faf5ff',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px 20px',
      fontFamily: cuteFont
    }}>
      <h1 style={{ fontSize: '36px', color: '#7e22ce', textAlign: 'center' }}>CHIẾC CÂN PHÉP THUẬT</h1>
      <p style={{ fontSize: '22px', color: '#6b21a8', textAlign: 'center', marginBottom: '30px' }}>Đâu là chuyện nhỏ (Mách lẻo) và đâu là chuyện lớn (Báo cáo)?</p>

      {/* Rổ phân loại */}
      <div style={{ display: 'flex', gap: '30px', marginBottom: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ background: '#f3e8ff', padding: '20px', borderRadius: '20px', border: '4px dashed #d8b4fe', width: '280px', textAlign: 'center' }}>
          <h2 style={{ color: '#9333ea', margin: '0 0 10px 0' }}>🤫 MÁCH LẺO</h2>
          <p style={{ color: '#a855f7', fontSize: '18px' }}>(Chuyện nhỏ tự giải quyết)</p>
        </div>
        <div style={{ background: '#fef08a', padding: '20px', borderRadius: '20px', border: '4px dashed #facc15', width: '280px', textAlign: 'center' }}>
          <h2 style={{ color: '#b45309', margin: '0 0 10px 0' }}>🛡️ BÁO CÁO</h2>
          <p style={{ color: '#d97706', fontSize: '18px' }}>(Bị làm đau, làm sợ hãi)</p>
        </div>
      </div>

      <AnimatePresence>
        {feedback && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ color: '#ef4444', fontSize: '20px', marginBottom: '20px', fontWeight: 'bold' }}>
            ⚠️ {feedback}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Danh sách thẻ */}
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <AnimatePresence>
          {items.filter(i => !i.sorted).map(item => (
            <motion.div key={item.id} initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} style={{ background: 'white', padding: '15px 20px', borderRadius: '15px', border: '3px solid #cbd5e1', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', width: '300px' }}>
              <div style={{ fontSize: '20px', marginBottom: '15px', fontWeight: 'bold', color: '#334155', textAlign: 'center' }}>{item.text}</div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => handleSort(item, 'machleo')} style={{ flex: 1, background: '#d8b4fe', color: 'white', border: 'none', padding: '10px', borderRadius: '10px', cursor: 'pointer', fontFamily: cuteFont, fontSize: '18px' }}>Mách lẻo</button>
                <button onClick={() => handleSort(item, 'baocao')} style={{ flex: 1, background: '#facc15', color: '#713f12', border: 'none', padding: '10px', borderRadius: '10px', cursor: 'pointer', fontFamily: cuteFont, fontSize: '18px' }}>Báo cáo</button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {allSorted && (
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => navigate('/level1/screen5_2')} style={{ marginTop: '50px', background: '#9333ea', color: 'white', padding: '15px 50px', borderRadius: '50px', fontSize: '24px', border: 'none', cursor: 'pointer', fontFamily: cuteFont }}>
          Tuyệt vời! Đi tiếp ➡️
        </motion.button>
      )}
    </div>
  );
}