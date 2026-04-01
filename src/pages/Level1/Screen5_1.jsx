import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Screen5_1() {
  const navigate = useNavigate();
  const [situations, setSituations] = useState([
    { id: 1, text: "Bạn lỡ chân đá quả cầu trúng mình nhưng đã xin lỗi ngay.", type: "machleo" },
    { id: 2, text: "Một nhóm bạn cố tình chặn đường không cho mình bước qua.", type: "baocao" },
    { id: 3, text: "Bạn ấy mượn cục tẩy của mình mà chưa kịp xin phép.", type: "machleo" },
    { id: 4, text: "Có một bạn bị lấy mất đồ và đang khóc nức nở.", type: "baocao" }
  ]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);

  const handleDragEnd = (event, info, type) => {
    const isLeftHalf = info.point.x < window.innerWidth / 2;
    if ((isLeftHalf && type === "machleo") || (!isLeftHalf && type === "baocao")) {
      setScore(prev => prev + 1);
    } else {
      alert("Chưa chính xác rồi! Hãy xem lại nhé.");
    }
    setCurrentIdx(prev => prev + 1);
  };

  const isFinished = currentIdx >= situations.length;

  return (
    <div className="relative w-full h-screen flex overflow-hidden bg-slate-100">
      <div className="flex-1 bg-blue-100 border-r-4 border-amber-500 flex flex-col items-center justify-center relative">
        <h2 className="absolute top-10 text-3xl font-bold text-blue-800 bg-white px-8 py-2 rounded-full shadow-md">🪶 Chiếc Lông Chim (Kể lể)</h2>
        <p className="absolute top-24 text-blue-600 font-medium text-center px-10">Chuyện vặt, không nguy hiểm.</p>
      </div>

      <div className="flex-1 bg-rose-100 flex flex-col items-center justify-center relative">
        <h2 className="absolute top-10 text-3xl font-bold text-rose-800 bg-white px-8 py-2 rounded-full shadow-md">💎 Viên Đá Sáng (Báo cáo)</h2>
        <p className="absolute top-24 text-rose-600 font-medium text-center px-10">Có người bị đau, hoảng sợ.</p>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-xl border-2 border-amber-300 z-50 w-[90%] max-w-3xl flex items-center gap-4">
        <span className="text-4xl">🐘</span>
        <p className="text-slate-800 font-bold text-lg">
          "Kể lể chuyện vặt chỉ làm bạn bè bị mắng vô cớ. Còn báo cáo là hành động dũng cảm thông báo cho người lớn khi có ai đó gặp nguy hiểm."
        </p>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl z-10 pointer-events-none opacity-50">⚖️</div>

      <AnimatePresence mode="wait">
        {!isFinished && (
          <motion.div key={situations[currentIdx].id} drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} onDragEnd={(e, info) => handleDragEnd(e, info, situations[currentIdx].type)} initial={{ scale: 0, opacity: 0, y: 100 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0, opacity: 0 }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-80 h-40 rounded-2xl shadow-2xl border-4 border-slate-800 flex items-center justify-center cursor-grab active:cursor-grabbing z-40 p-6 text-center">
            <p className="text-xl font-bold text-slate-700">{situations[currentIdx].text}</p>
            <div className="absolute -bottom-4 bg-amber-400 text-amber-900 text-sm font-bold px-4 py-1 rounded-full shadow">Kéo sang Trái hoặc Phải</div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isFinished && (
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="absolute inset-0 bg-black/60 z-50 flex flex-col items-center justify-center backdrop-blur-sm">
            <h2 className="text-5xl font-extrabold text-yellow-400 mb-6 drop-shadow-lg">Phân biệt xuất sắc!</h2>
            <p className="text-white text-2xl font-bold mb-8">Điểm của bạn: {score}/{situations.length}</p>
            <button onClick={() => navigate('/level1/screen5_3')} className="bg-green-500 hover:bg-green-600 text-white font-bold text-2xl py-4 px-12 rounded-full shadow-2xl border-4 border-white transition">
              Tiếp tục ➡️
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}