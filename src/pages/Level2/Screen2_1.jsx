import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, Reorder } from 'framer-motion';

export default function L2_Screen2_1() {
  const navigate = useNavigate();
  const cuteFont = "'Itim', cursive";

  const [items, setItems] = useState([
    { id: 1, text: "Một bạn trêu rồi dừng khi bạn kia khó chịu.", type: "fun" }, // [cite: 260]
    { id: 2, text: "Một nhóm chặn đường đòi đồ ăn sáng.", type: "harm" }, // [cite: 261, 262]
    { id: 3, text: "Quay video bạn bị ngã rồi cười nhạo.", type: "harm" } // [cite: 262]
  ]);

  return (
    <div style={{
      width: '100vw', minHeight: '100vh', background: '#0f172a',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px',
      fontFamily: cuteFont, color: '#f8fafc'
    }}>
      <h1 style={{ fontSize: '40px', color: '#38bdf8', marginBottom: '10px' }}>TRÒ VUI HAY HÀNH VI GÂY HẠI?</h1>
      <p style={{ fontSize: '20px', color: '#94a3b8', maxWidth: '700px', textAlign: 'center', marginBottom: '40px' }}>
        "Khi có ép buộc, làm nhục, gây đau, gây sợ hoặc lặp đi lặp lại, đó là hành vi gây hại." {/* [cite: 264, 265] */}
      </p>

      {/* Giao diện kéo thả hồ sơ đơn giản */}
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <Reorder.Group axis="y" values={items} onReorder={setItems} style={{ listStyle: 'none', padding: 0 }}>
          {items.map((item) => (
            <Reorder.Item key={item.id} value={item} style={{ marginBottom: '20px' }}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                style={{ 
                  background: '#1e293b', border: '2px solid #334155', borderRadius: '15px', 
                  padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  cursor: 'grab'
                }}
              >
                <span style={{ fontSize: '20px' }}>{item.text}</span>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button style={{ background: '#065f46', color: '#34d399', border: 'none', padding: '10px', borderRadius: '10px', cursor: 'pointer' }}>Trò vui</button>
                  <button style={{ background: '#7f1d1d', color: '#f87171', border: 'none', padding: '10px', borderRadius: '10px', cursor: 'pointer' }}>Gây hại</button>
                </div>
              </motion.div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>

      <motion.button 
        onClick={() => navigate('/level2/screen3_1')}
        style={{ marginTop: '40px', background: '#38bdf8', color: '#0f172a', padding: '15px 50px', borderRadius: '50px', fontSize: '22px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
      >
        Tiếp tục ➡️
      </motion.button>
    </div>
  );
}