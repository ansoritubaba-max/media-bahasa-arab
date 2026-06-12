import { motion } from 'framer-motion';

// --- KONSTANTA URL ---
const QUIZ_URL = "https://drive.google.com";

// --- ANIMASI TOMBOL (EFEK LIQUID GOLD SHINE) ---
const buttonVariants = {
  initial: { backgroundPosition: "0% 50%" },
  hover: { 
    backgroundPosition: "100% 50%", 
    scale: 1.05,
    boxShadow: "0px 10px 40px rgba(212,175,55,0.4)"
  },
  tap: { scale: 0.95 }
};

export default function Quiz() {
  return (
    // min-h-[80vh] untuk memberikan ruang lapang agar efek radar terlihat
    <section className="py-32 px-6 relative z-20 flex items-center justify-center min-h-[80vh] overflow-hidden">
      
      {/* --- EFEK BACKGROUND: RADAR / FOCUS RINGS --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full border border-[var(--color-gold-champagne)]/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] rounded-full border border-[var(--color-emerald-glow)]/30 border-dashed animate-[spin_60s_linear_infinite] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[var(--color-emerald-glow)] opacity-10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="relative max-w-4xl w-full">
        
        {/* --- FLOATING BADGE 1 (Info Soal) --- */}
        <motion.div 
          animate={{ y: [0, -12, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-8 -left-2 md:-top-10 md:-left-12 z-30 glass-premium px-5 py-3 rounded-full flex items-center gap-3 shadow-xl"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-gold-champagne)] animate-pulse" />
          <span className="text-[var(--color-platinum)] text-[10px] md:text-xs font-bold tracking-widest uppercase drop-shadow-md">
            15 Soal Pilihan
          </span>
        </motion.div>

        {/* --- FLOATING BADGE 2 (Info Waktu) --- */}
        <motion.div 
          animate={{ y: [0, 12, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-8 -right-2 md:-bottom-10 md:-right-12 z-30 glass-premium px-5 py-3 rounded-full flex items-center gap-3 shadow-xl"
        >
          <svg className="w-4 h-4 text-[var(--color-gold-champagne)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-[var(--color-platinum)] text-[10px] md:text-xs font-bold tracking-widest uppercase drop-shadow-md">
            Estimasi 20 Menit
          </span>
        </motion.div>

        {/* --- KARTU KUIS UTAMA --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-premium p-12 md:p-24 rounded-[3rem] md:rounded-[4rem] text-center relative group"
        >
          {/* Garis Cahaya Atas Kartu */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold-champagne)] to-transparent opacity-80" />
          
          {/* Ikon Mahkota Sertifikasi (Rotating on Hover) */}
          <motion.div 
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-10 rounded-full bg-black/40 border border-[var(--color-gold-champagne)]/30 shadow-[inset_0_0_20px_rgba(212,175,55,0.2)] flex items-center justify-center cursor-pointer"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-gold-champagne)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-gold-gradient mb-8 tracking-wide font-arab">
            Evaluasi Akhir Pembelajaran
          </h2>
          
          <p className="text-[var(--color-platinum)]/70 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-14 leading-loose">

          </p>
          
          {/* Tombol dengan Animasi Liquid Background */}
          <motion.a
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            href={QUIZ_URL}
            target="_blank"
            rel="noopener noreferrer"
            // bg-[length:200%_auto] memungkinkan background bergeser saat dihover (Liquid effect)
            className="relative inline-flex items-center justify-center px-12 md:px-16 py-6 text-sm md:text-base font-bold text-[var(--color-obsidian)] uppercase tracking-[0.25em] bg-gradient-to-r from-[var(--color-gold-champagne)] via-[#FFF4D2] to-[var(--color-gold-champagne)] bg-[length:200%_auto] rounded-full border-[0.5px] border-white/40 z-10"
          >
            Mulai Ujian
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}