import { useState } from 'react';
import { motion } from 'framer-motion';

// 1. EKSTRAKSI KONSTANTA
// Menyimpan ID YouTube di sini agar mudah diganti tanpa menyentuh struktur UI
const YOUTUBE_VIDEO_ID = "uHyI64B3s1U"; // Diupdate sesuai link iframe Anda

// 2. FRAMER MOTION VARIANTS
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

const descriptionAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { delay: 0.3, duration: 0.6, ease: "easeOut" } 
  }
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
    <section className="py-24 md:py-32 px-4 md:px-6 relative z-20">
      <div className="max-w-4xl mx-auto">
        
        {/* --- BAGIAN JUDUL --- */}
        <motion.div 
          variants={headerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
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
          viewport={{ once: true, amount: 0.1 }}
          className="bg-white/5 backdrop-blur-2xl border-[0.5px] border-white/10 p-4 md:p-8 rounded-[2rem] md:rounded-[3rem] shadow-[0_8px_40px_rgba(0,0,0,0.3)] relative overflow-hidden"
        >
          {/* Efek Cahaya Sudut */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#BF953F]/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Wadah Video Aspek Rasio (16:9) */}
          <div className="relative pb-[56.25%] h-0 rounded-xl md:rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#0a2e11] to-[#1B5E20] shadow-inner group ring-1 ring-white/10">
            
            {!isPlaying ? (
              /* Custom Facade (Sampul Eksklusif Sebelum Play) */
              <div 
                role="button" 
                tabIndex={0}  
                onClick={handlePlay}
                onKeyDown={handleKeyDown}
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#BF953F] focus:ring-offset-2 focus:ring-offset-[#0a2e11] transition-all"
                aria-label="Putar Video Pembelajaran"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                {/* Tombol Play Bergaya Frosted Glass */}
                <motion.div
                  variants={playButtonAnimation}
                  whileHover="hover"
                  whileTap="tap"
                  className="relative z-10 w-16 h-16 md:w-24 md:h-24 bg-white/10 backdrop-blur-md border-[0.5px] border-[#BF953F]/60 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(191,149,63,0.3)] group-hover:shadow-[0_0_50px_rgba(252,246,186,0.6)] transition-all duration-500"
                >
                  <svg className="w-8 h-8 md:w-12 md:h-12 text-[#FCF6BA] ml-1 md:ml-2 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                </motion.div>

                <p className="relative z-10 mt-4 md:mt-6 text-[#FCF6BA] font-light tracking-[0.25em] text-[10px] md:text-sm uppercase drop-shadow-md">
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
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
                title="Video Pembelajaran"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>

          {/* --- BAGIAN DESKRIPSI VIDEO --- */}
          <motion.div 
            variants={descriptionAnimation}
            className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10 flex flex-col gap-4 relative z-10"
          >
            {/* Header Deskripsi */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <span className="inline-block px-3 py-1 bg-[#BF953F]/20 border border-[#BF953F]/30 text-[#FCF6BA] rounded-full text-[10px] md:text-xs font-semibold tracking-wider uppercase mb-3">
                  Semester 2 • Bab 6
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Agama-agama di Indonesia</h3>
                <p className="text-sm md:text-base text-[#FCF6BA]/80">Bagian Kedua: Istima' Mufrodat dan Qiro'ah Agama</p>
              </div>
              
              {/* Teks Arab Rata Kanan */}
              <h4 className="text-xl md:text-2xl font-arab text-transparent bg-clip-text bg-gradient-to-l from-[#BF953F] to-[#FCF6BA] text-right drop-shadow-md" dir="rtl">
                الدرس السادس - الأديان في إندونيسيا - الاستماع
              </h4>
            </div>

            {/* Paragraf Penjelasan */}
            <p className="text-sm md:text-base text-gray-300/90 leading-relaxed font-light mt-2 mb-2">
              Pada video ini kita akan mempelajari kosakata dan teks qiro'ah tentang agama. Materi bahasa arab ini diadaptasi secara khusus untuk kelas 11 Madrasah Aliyah.
            </p>

            {/* Footer / Resource Link Area */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2 p-4 rounded-2xl bg-black/30 border border-white/5 backdrop-blur-md">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <svg className="w-5 h-5 text-[#BF953F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">Sumber Materi</p>
                  <p className="text-sm text-white font-medium">Buku Bahasa Arab MA Kelas XI</p>
                </div>
              </div>

              <a 
                href="https://docs.google.com/file/d/1Oqj04..." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto group flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#BF953F]/20 to-[#B38728]/20 border border-[#BF953F]/40 text-[#FCF6BA] hover:bg-[#BF953F]/40 hover:scale-105 transition-all duration-300 text-sm font-medium shadow-[0_0_15px_rgba(191,149,63,0.1)] hover:shadow-[0_0_25px_rgba(191,149,63,0.3)]"
              >
                <span>Unduh Buku (PDF)</span>
                <svg className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}