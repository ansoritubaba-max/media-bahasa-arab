import { useState } from 'react';
import { motion } from 'framer-motion';

// 1. EKSTRAKSI KONSTANTA
// Menyimpan ID YouTube di sini agar mudah diganti tanpa menyentuh struktur UI
const YOUTUBE_VIDEO_ID = "ScMzIvxBSi4";

// 2. FRAMER MOTION VARIANTS (Agar JSX lebih bersih & memori lebih ringan)
const headerAnimation = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const containerAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const playButtonAnimation = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Fungsi untuk menangani klik dan tombol keyboard (Enter/Space)
  const handlePlay = () => setIsPlaying(true);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handlePlay();
    }
  };

  return (
    <section className="py-32 px-6 text-center relative z-20">
      <div className="max-w-4xl mx-auto">
        
        {/* --- BAGIAN JUDUL --- */}
        <motion.div 
          variants={headerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] mb-6 tracking-wide">
            Simak Pelafalan
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#BF953F] to-transparent mx-auto" />
        </motion.div>
        
        {/* --- BINGKAI KACA LUAR --- */}
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white/5 backdrop-blur-2xl border-[0.5px] border-white/20 p-4 md:p-8 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_8px_40px_rgba(0,0,0,0.3)] relative"
        >
          {/* Wadah Video Aspek Rasio (16:9) */}
          <div className="relative pb-[56.25%] h-0 rounded-2xl md:rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#0a2e11] to-[#1B5E20] shadow-inner group">
            
            {!isPlaying ? (
              /* Custom Facade (Sampul Eksklusif Sebelum Play) */
              <div 
                role="button" // Aksesibilitas: Memberi tahu browser ini bertindak sebagai tombol
                tabIndex={0}  // Aksesibilitas: Bisa difokuskan menggunakan tombol Tab
                onClick={handlePlay}
                onKeyDown={handleKeyDown}
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#BF953F] focus:ring-offset-2 focus:ring-offset-[#0a2e11] transition-all"
                aria-label="Putar Video Pembelajaran"
              >
                {/* Latar Belakang Custom */}
                <div className="absolute inset-0 bg-islamic-pattern opacity-20" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                {/* Tombol Play Bergaya Frosted Glass */}
                <motion.div
                  variants={playButtonAnimation}
                  whileHover="hover"
                  whileTap="tap"
                  className="relative z-10 w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md border-[0.5px] border-[#BF953F]/60 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(191,149,63,0.3)] group-hover:shadow-[0_0_50px_rgba(252,246,186,0.6)] transition-all duration-500"
                >
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-[#FCF6BA] ml-2 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                </motion.div>

                {/* Teks Instruksi */}
                <p className="relative z-10 mt-6 text-[#FCF6BA] font-light tracking-[0.25em] text-xs md:text-sm uppercase drop-shadow-md">
                  Putar Video
                </p>
              </div>
            ) : (
              /* Iframe YouTube */
              <motion.iframe
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&autoplay=1`}
                title="Video Pembelajaran"
                // Penambahan atribut allow yang lengkap untuk menghindari warning console
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}

          </div>
        </motion.div>
      </div>
    </section>
  );
}