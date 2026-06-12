import { useMemo } from 'react';
import { motion } from 'framer-motion';

// 1. Ekstraksi SVG ke luar komponen utama.
// Dengan begini, objek SVG hanya dimuat 1 kali di memori, membuat aplikasi jauh lebih ringan.
const ORNAMEN_SVGS = [
  // Bintang 8 Sudut (Rub el Hizb)
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full" key="star-8"><path d="M12 1L14.5 8.5L22 11L14.5 13.5L12 21L9.5 13.5L2 11L9.5 8.5L12 1ZM12 4.5L10.5 9L6 11L10.5 13L12 17.5L13.5 13L18 11L13.5 9L12 4.5Z" /><path d="M4 4L7.5 5.5L9 9L7.5 12.5L4 14L2.5 10.5L1 7L2.5 3.5L4 4Z" opacity="0.3" transform="rotate(45 12 12) scale(0.8) translate(6 6)" /></svg>,
  // Bulan Sabit Minimalis
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full" key="crescent"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>,
  // Bintang 4 Sudut Estetik
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full" key="star-4"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" /></svg>
];

const TOTAL_ITEMS = 12;

export default function BackgroundAnimated() {
  
  // 2. Mengunci nilai acak menggunakan 'useMemo' dengan array dependensi kosong [].
  // Sifat acak tetap ada saat halaman pertama dimuat, tetapi nilainya dikunci agar animasi berjalan mulus tanpa interupsi re-render.
  const items = useMemo(() => {
    return Array.from({ length: TOTAL_ITEMS }).map((_, i) => ({
      id: `ornamen-${i}`,
      svgIndex: i % ORNAMEN_SVGS.length,
      initialY: Math.random() * 100 + 100 + 'vh',
      initialX: Math.random() * 100 + 'vw',
      scale: Math.random() * 0.4 + 0.3,
      duration: Math.random() * 25 + 35,
      delay: Math.random() * 15,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a2e11] via-[#1B5E20] to-[#0a2e11]" />
      
      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-30" />

      {/* Render Elemen Animasi */}
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{
            opacity: 0,
            y: item.initialY,
            x: item.initialX,
            rotate: 0,
            scale: item.scale
          }}
          animate={{
            opacity: [0, 0.08, 0.08, 0], // Mempertahankan efek samar nan elegan bawaan Anda
            y: '-20vh',
            rotate: 360
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "linear"
          }}
          // Warna Emas Sampanye & Drop Shadow bawaan tetap dipertahankan sempurna
          className="absolute w-16 h-16 md:w-24 md:h-24 text-[#BF953F] drop-shadow-[0_0_15px_rgba(191,149,63,0.15)]"
        >
          {ORNAMEN_SVGS[item.svgIndex]}
        </motion.div>
      ))}
    </div>
  );
}