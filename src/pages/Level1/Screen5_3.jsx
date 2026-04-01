import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, Reorder, AnimatePresence } from 'framer-motion';

export default function Screen5_3() {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    { id: 3, text: "Sự việc xảy ra tại đâu?" },
    { id: 1, text: "Bạn nào đang gặp rắc rối?" },
    { id: 4, text: "Bạn cần cô giáo hỗ trợ điều gì?" },
    { id: 2, text: "Tình huống nào đang diễn ra vậy?" }
  ]);
  const [isSuccess, setIsSuccess] = useState(false);

  const checkOrder = () => {
    const isOrdered = items.every((item, index) => item.id === index + 1);
    if (isOrdered) setIsSuccess(true);
    else alert("Thứ tự chưa đúng rồi, hãy thử lại nhé!");
  };

  return (
    <div className="relative w-full h-screen bg-pink-50 flex flex-col items-center p-10 overflow-hidden">
      <h1 className="text-4xl font-extrabold text-pink-700 mb-6 bg-white px-8 py-3 rounded-full shadow-md">Thông điệp khẩn cấp</h1>
      <p className="text-xl text-slate-700 font-medium mb-8 bg-white/80 px-6 py-2 rounded-xl">Kéo thả để ghép 4 mảnh báo cáo theo đúng thứ tự gửi cho Cô Cú Mèo nhé!</p>

      <div className="w-full max-w-lg bg-amber-100 p-8 rounded-3xl shadow-xl border-4 border-amber-300 relative z-10">
        <Reorder.Group axis="y" values={items} onReorder={setItems} className="flex flex-col gap-4">
          {items.map((item) => (
            <Reorder.Item key={item.id} value={item} className="bg-white p-4 rounded-xl shadow cursor-grab active:cursor-grabbing border-2 border-slate-200 text-lg font-bold text-slate-800 hover:border-blue-400 transition flex items-center gap-4">
              <span className="text-slate-400 cursor-ns-resize">↕️</span>{item.text}
            </Reorder.Item>
          ))}
        </Reorder.Group>
        <button onClick={checkOrder} className="w-full mt-8 bg-pink-500 hover:bg-pink-600 text-white font-bold text-xl py-3 rounded-xl shadow-md transition">Gửi thư cho Cô Cú Mèo 🦉</button>
      </div>

      <AnimatePresence>
        {isSuccess && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-blue-900/90 z-50 flex flex-col items-center justify-center">
            <motion.div initial={{ x: -300, y: 200, scale: 0.5 }} animate={{ x: 300, y: -200, scale: 1.5 }} transition={{ duration: 2 }} className="text-8xl absolute pointer-events-none">🕊️</motion.div>
            <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1 }} className="flex flex-col items-center bg-white p-10 rounded-3xl shadow-[0_0_50px_rgba(250,204,21,0.5)] border-8 border-yellow-400">
              <div className="text-8xl mb-4">🏆</div>
              <h2 className="text-4xl font-extrabold text-yellow-600 mb-2">Huy chương Chiếc Còi Vàng!</h2>
              <p className="text-xl text-slate-700 font-bold mb-8">Tin nhắn đã được gửi đến người lớn an toàn.</p>
              <button onClick={() => navigate('/level1/screen6_1')} className="bg-green-500 text-white font-bold text-2xl py-4 px-12 rounded-full shadow-lg hover:bg-green-400 transition">
                Tới Trạm Cuối Cùng ➡️
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}