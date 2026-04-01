// src/utils/soundPlayer.js

// Hàm tiện ích để phát âm thanh nhanh chóng
export const playSound = (type) => {
  const sounds = {
    pop: '/assets/sounds/pop.mp3',       // Tiếng nổ bong bóng
    ting: '/assets/sounds/ting.mp3',     // Tiếng hoàn thành/ăn điểm
    click: '/assets/sounds/click.mp3',   // Tiếng bấm nút thông thường
    error: '/assets/sounds/error.mp3',   // Tiếng chọn sai
    cheer: '/assets/sounds/cheer.mp3',   // Tiếng vỗ tay hoan hô
  };

  if (sounds[type]) {
    const audio = new Audio(sounds[type]);
    audio.play().catch(e => console.log("Trình duyệt chặn autoplay âm thanh:", e));
  }
};