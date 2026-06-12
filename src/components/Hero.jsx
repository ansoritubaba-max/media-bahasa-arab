import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- 1. KOMPONEN TOMBOL MAGNETIK ---
const MagneticButton = ({ children, onClick }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.button
      ref={ref}
      onClick={onClick} 
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative overflow-hidden glass-premium px-12 py-5 rounded-full group cursor-pointer"
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[var(--color-gold-champagne)] to-transparent opacity-0 group-hover:opacity-20 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out" />
      <span className="relative z-10 font-bold text-[var(--color-gold-champagne)] uppercase tracking-[0.25em] text-sm group-hover:text-[var(--color-gold-light)] transition-colors duration-300">
        {children}
      </span>
    </motion.button>
  );
};

// --- 2. KOMPONEN UTAMA HERO ---
export default function Hero({ setActivePage }) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]); // Parallax pelan untuk video

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center p-6 lg:p-12 xl:p-24 overflow-hidden gap-12 lg:gap-8">
      
      {/* --- AMBIENT GLOW GLOBAL --- */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--color-emerald-glow)] rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--color-gold-champagne)] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none" />

      {/* --- BAGIAN TEKS KIRI --- */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 w-full lg:w-5/12 text-center lg:text-left flex flex-col items-center lg:items-start mt-10 lg:mt-0"
      >
        {/* --- LOGO PRIBADI DENGAN HALO GLOW (Agar warna hijau logo tidak mati/bentrok) --- */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          className="mb-8 relative flex items-center justify-center lg:justify-start"
        >
          {/* Cincin Cahaya di belakang logo */}
          <div className="absolute w-24 h-24 md:w-32 md:h-32 bg-white/40 blur-2xl rounded-full opacity-60" />
          
          <img 
            src="/icons.png" 
            alt="Logo Anda" 
            className="relative z-10 w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] filter contrast-125 saturate-150"
          />
        </motion.div>

        {/* --- TEKS SAPAAN: SELAMAT DATANG --- */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-3"
        >
          <span className="text-[var(--color-platinum)]/80 text-sm md:text-base tracking-[0.3em] uppercase font-light">
            Selamat Datang di Pembelajaran
          </span>
        </motion.div>
        
        {/* Teks Arab (Judul Materi) */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 font-arab text-gold-gradient drop-shadow-2xl leading-[1.2]" 
          dir="rtl" 
        >
          الأَدْيَانُ فِي إِنْدُوْنِيْسِيَا
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-base md:text-lg lg:text-xl text-[var(--color-platinum)] opacity-80 font-light mb-12 leading-loose max-w-lg tracking-wide"
        >
          Jelajahi keanekaragaman dan toleransi beragama melalui antarmuka interaktif yang dirancang khusus untuk kenyamanan visual tingkat tinggi.
        </motion.p>

        {/* Pemanggilan Tombol */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <MagneticButton onClick={() => setActivePage('intro')}>
            Petunjuk Penggunaan
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* --- BAGIAN KANAN: VIDEO CINEMATIC --- */}
      <motion.div
        style={{ y: videoY }}
        initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
        className="relative z-10 w-full lg:w-7/12 flex justify-center perspective-1000"
      >
        {/* Wadah Video bergaya Kaca Premium */}
        <div className="relative w-full max-w-2xl aspect-video md:aspect-[4/3] lg:aspect-video rounded-[2.5rem] md:rounded-[3rem] glass-premium p-3 md:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[var(--color-gold-champagne)]/20 overflow-hidden group">
          
          {/* Pendaran Cahaya Emas di dalam Wadah (Bereaksi saat di-hover) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-emerald-glow)] to-[var(--color-gold-champagne)] opacity-10 group-hover:opacity-30 transition-opacity duration-1000 pointer-events-none" />

          {/* Elemen Video */}
          <div className="relative w-full h-full rounded-[1.8rem] md:rounded-[2.2rem] overflow-hidden bg-black/50">
            <video 
              src="/toleransi.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out opacity-90 group-hover:opacity-100"
            />
            
            {/* Gradien Vignette (Gelap di pinggir) agar video menyatu dengan desain gelap */}
            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] pointer-events-none" />
          </div>

          {/* Ornamen Teks Terapung di atas Video */}
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20 pointer-events-none">
            <div className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2 mb-2 w-max">
              <span className="w-2 h-2 rounded-full bg-[var(--color-gold-champagne)] animate-pulse" />
              <span className="text-[10px] text-white/80 tracking-widest uppercase font-bold">Visual Konteks</span>
            </div>
            <h3 className="text-white/90 font-arab text-2xl md:text-3xl drop-shadow-lg font-bold">
              التَّسَامُحُ الدِّيْنِيُّ
            </h3>
          </div>
          
        </div>
      </motion.div>

    </section>
  );
}