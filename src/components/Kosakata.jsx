import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// --- DATA KOSAKATA BAB 1 ---
const KOSAKATA_DATA = [
  { id: 1, arab: "الإِسْلَامُ", arti: "Agama Islam", audio: "/sound/islam1.mp3", icon: "🕋" },
  { id: 2, arab: "بِرُوْتِسْتَانْتِيَّة", arti: "Agama Protestan", audio: "/sound/protestan.mp3", icon: "✝️" },
  { id: 3, arab: "الْكَاثُوْلِيْكِيَّة", arti: "Agama Katolik", audio: "/sound/katolik.mp3", icon: "⛪" },
  { id: 4, arab: "هِنْدُوْسِيَّة", arti: "Agama Hindu", audio: "/sound/hindu.mp3", icon: "🕉️" },
  { id: 5, arab: "بُوْذِيَّة", arti: "Agama Buddha", audio: "/sound/budda.mp3", icon: "☸️" },
  { id: 6, arab: "كُوْنْفُوْشِيُوْسِيَّة", arti: "Agama Konghucu", audio: "/sound/khonghucu.mp3", icon: "⛩️" },
  { id: 7, arab: "مَسْجِدٌ", arti: "Masjid", audio: "/sound/masjid.mp3", icon: "🕌" },
  { id: 8, arab: "كَنِيْسَةٌ", arti: "Gereja", audio: "/sound/greja.mp3", icon: "💒" },
  { id: 9, arab: "مَعْبَدٌ", arti: "Kuil / Candi", audio: "/sound/candi.mp3", icon: "🛕" },
  { id: 10, arab: "التَّسَامُحُ", arti: "Toleransi", audio: "/sound/toleransi.mp3", icon: "🤝" },
];

// --- DATA KOSAKATA BAB 2 (Fi'il Madhi -> Masdar) ---
const KOSAKATA_BAB2_DATA = [
  { id: 11, madhi: "آمَنَ", masdar: "إِيْمَانٌ", arti: "Beriman", audio: "/sound/iman.mp3", icon: "✨" },
  { id: 12, madhi: "عَبَدَ", masdar: "عِبَادَةٌ", arti: "Beribadah", audio: "/sound/ibadah.mp3", icon: "🤲" },
  { id: 13, madhi: "دَعَا", masdar: "دُعَاءٌ", arti: "Berdo'a", audio: "/sound/doa.mp3", icon: "🧎" },
  { id: 14, madhi: "زَارَ", masdar: "زِيَارَةٌ", arti: "Mengunjungi", audio: "/sound/ziarah.mp3", icon: "🚶" },
  { id: 15, madhi: "اِحْتَرَمَ", masdar: "إِحْتِرَامٌ", arti: "Menghormati", audio: "/sound/ihtiram.mp3", icon: "🙇" },
  { id: 16, madhi: "قَدَّرَ", masdar: "تَقْدِيْرٌ", arti: "Menghargai", audio: "/sound/taqdir.mp3", icon: "🎖️" },
  { id: 17, madhi: "تَعَاوَنَ", masdar: "تَعَاوُنٌ", arti: "Bekerja sama", audio: "/sound/taawun.mp3", icon: "🧑‍🤝‍🧑" },
  { id: 18, madhi: "اِعْتَقَدَ", masdar: "إِعْتِقَادٌ", arti: "Meyakini", audio: "/sound/itiqad.mp3", icon: "💡" },
  { id: 19, madhi: "تَابَ", masdar: "تَوْبَةٌ", arti: "Bertaubat", audio: "/sound/taubah.mp3", icon: "🕊️" },
  { id: 20, madhi: "سَجَدَ", masdar: "سُجُوْدٌ", arti: "Bersujud", audio: "/sound/sujud.mp3", icon: "🙇‍♂️" },
  { id: 21, madhi: "إِجْتَمَعَ", masdar: "إِجْتِمَاعٌ", arti: "Berkumpul", audio: "/sound/ijtima.mp3", icon: "👥" },
  { id: 22, madhi: "اَطَاعَ", masdar: "طَاعَةٌ", arti: "Menaati", audio: "/sound/thaah.mp3", icon: "✅" },
  { id: 23, madhi: "تَسَامَحَ", masdar: "تَسَامُحٌ", arti: "Toleransi", audio: "/sound/tasamuh2.mp3", icon: "🤝" },
  { id: 24, madhi: "تَقَرَّبَ", masdar: "تَقَرُّبٌ", arti: "Mendekatkan diri", audio: "/sound/taqarrub.mp3", icon: "❤️" },
  { id: 25, madhi: "تَعَايَشَ", masdar: "التَّعَايُشُ", arti: "Hidup berdampingan", audio: "/sound/taayush.mp3", icon: "🌍" },

  { id: 26, madhi: "صَلَّى", masdar: "صَلَاةٌ", arti: "Sholat", audio: "/sound/sholat.mp3", icon: "🧎‍♂️" },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, type: "spring", stiffness: 100 }
  })
};

// --- KOMPONEN KARTU BAB 1 (DENGAN TOMBOL) ---
const KosakataCard = ({ item, index }) => {
  const [showArti, setShowArti] = useState(false);

  const playAudio = () => {
    if (item.audio) {
      const sound = new Audio(item.audio);
      sound.play().catch(error => console.log("Audio belum ditambahkan:", error));
    }
  };

  const toggleArti = (e) => {
    e.stopPropagation(); 
    setShowArti(!showArti);
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      onClick={playAudio} 
      className="glass-premium relative group rounded-[1.5rem] p-5 flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden min-h-[220px] border border-white/5 hover:border-[var(--color-gold-champagne)]/30 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-gold-champagne)]/0 to-[var(--color-gold-champagne)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Wadah Ikon (Otomatis naik saat tombol ditekan) */}
      <div className={`relative w-16 h-16 mb-4 flex items-center justify-center transition-transform duration-500 ${showArti ? '-translate-y-2' : ''}`}>
        <div className="absolute inset-0 bg-[var(--color-emerald-glow)] rounded-full blur-md opacity-30 group-hover:opacity-70 group-hover:bg-[var(--color-gold-champagne)] transition-all duration-500" />
        <div className="relative z-10 w-14 h-14 bg-white/5 border border-[var(--color-gold-champagne)]/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-inner group-hover:border-[var(--color-gold-champagne)] transition-colors duration-500">
          <motion.span 
            animate={{ y: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 3 + (index * 0.2), ease: "easeInOut" }}
            className="text-3xl filter saturate-50 opacity-80 group-hover:saturate-150 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 drop-shadow-md"
          >
            {item.icon}
          </motion.span>
        </div>
      </div>

      <h3 className={`text-xl md:text-2xl font-bold font-arab text-[var(--color-gold-champagne)] drop-shadow-md mb-2 transition-transform duration-500 ${showArti ? '-translate-y-3' : 'group-hover:-translate-y-2'}`}>
        {item.arab}
      </h3>

      {/* Teks Terjemahan (Muncul jika tombol ditekan) */}
      <div className={`absolute bottom-12 left-0 right-0 px-2 flex justify-center transition-all duration-300 ease-out pointer-events-none ${showArti ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <span className="w-full max-w-[90%] px-3 py-1.5 bg-[var(--color-obsidian)]/90 border border-[var(--color-gold-champagne)]/40 rounded-xl text-[11px] md:text-xs font-bold text-[var(--color-platinum)] uppercase tracking-wide backdrop-blur-md shadow-lg line-clamp-1">
          {item.arti}
        </span>
      </div>

      {/* Tombol Toggle Arti */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center z-20">
        <button
          onClick={toggleArti}
          className={`px-3 py-1 rounded-full border text-[9px] md:text-[10px] transition-all duration-300 backdrop-blur-sm active:scale-95 ${
            showArti 
            ? 'bg-[var(--color-gold-champagne)]/20 border-[var(--color-gold-champagne)]/50 text-[var(--color-gold-champagne)]' 
            : 'bg-[var(--color-obsidian)]/50 border-[var(--color-gold-champagne)]/30 text-[var(--color-platinum)]/80 hover:text-[var(--color-gold-champagne)] hover:bg-[var(--color-gold-champagne)]/10'
          }`}
        >
          {showArti ? "Sembunyikan Arti" : "Lihat Arti"}
        </button>
      </div>

      {/* Ikon Speaker */}
      <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/5 border border-[var(--color-gold-champagne)]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
        <svg className="w-3 h-3 text-[var(--color-gold-champagne)] group-active:scale-75 transition-transform" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.56.276 2.56-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
          <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
        </svg>
      </div>
    </motion.div>
  );
};

// --- KOMPONEN KARTU BAB 2 (DENGAN TOMBOL & IKON) ---
const KosakataBab2Card = ({ item, index }) => {
  const [showArti, setShowArti] = useState(false);

  const playAudio = () => {
    if (item.audio) {
      const sound = new Audio(item.audio);
      sound.play().catch(error => console.log("Audio belum ditambahkan:", error));
    }
  };

  const toggleArti = (e) => {
    e.stopPropagation(); 
    setShowArti(!showArti);
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      onClick={playAudio} 
      // min-h-[260px] untuk memberi ruang pada ikon, 2 teks arab, dan terjemahan
      className="glass-premium relative group rounded-[1.5rem] p-4 flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden min-h-[260px] border border-white/5 hover:border-[var(--color-gold-champagne)]/30 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-gold-champagne)]/0 to-[var(--color-gold-champagne)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Wadah Ikon untuk Bab 2 */}
      <div className={`relative w-12 h-12 md:w-14 md:h-14 mb-2 flex items-center justify-center transition-transform duration-500 ${showArti ? '-translate-y-3' : ''}`}>
        <div className="absolute inset-0 bg-[var(--color-emerald-glow)] rounded-full blur-md opacity-30 group-hover:opacity-70 group-hover:bg-[var(--color-gold-champagne)] transition-all duration-500" />
        <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-[var(--color-gold-champagne)]/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-inner group-hover:border-[var(--color-gold-champagne)] transition-colors duration-500">
          <motion.span 
            animate={{ y: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 3 + (index * 0.2), ease: "easeInOut" }}
            className="text-xl md:text-2xl filter saturate-50 opacity-80 group-hover:saturate-150 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 drop-shadow-md"
          >
            {item.icon}
          </motion.span>
        </div>
      </div>

      {/* Bagian Arab: Madhi & Masdar (Otomatis naik ke atas jika tombol arti ditekan) */}
      <div className={`flex flex-col items-center justify-center gap-1 mb-2 transition-transform duration-500 ${showArti ? '-translate-y-4' : 'group-hover:-translate-y-2'}`}>
        <span className="text-lg md:text-xl font-arab text-[var(--color-platinum)]/70 drop-shadow-sm">
          {item.madhi}
        </span>
        <span className="text-[10px] text-[var(--color-gold-champagne)]/60 opacity-80">
          ▼
        </span>
        <span className="text-xl md:text-2xl font-bold font-arab text-[var(--color-gold-champagne)] drop-shadow-md">
          {item.masdar}
        </span>
      </div>

      {/* Kotak Terjemahan (Muncul jika tombol ditekan) */}
      <div className={`absolute bottom-11 left-0 right-0 px-2 flex justify-center transition-all duration-300 ease-out pointer-events-none ${showArti ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <span className="w-full max-w-[90%] px-3 py-1.5 bg-[var(--color-obsidian)]/90 border border-[var(--color-gold-champagne)]/40 rounded-xl text-[11px] md:text-xs font-bold text-[var(--color-platinum)] tracking-wide backdrop-blur-md shadow-lg line-clamp-1">
          {item.arti} <span className="ml-1 opacity-70 font-normal text-[10px]">{item.icon}</span>
        </span>
      </div>

      {/* Tombol Toggle Arti */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center z-20">
        <button
          onClick={toggleArti}
          className={`px-3 py-1 rounded-full border text-[9px] md:text-[10px] transition-all duration-300 backdrop-blur-sm active:scale-95 ${
            showArti 
            ? 'bg-[var(--color-gold-champagne)]/20 border-[var(--color-gold-champagne)]/50 text-[var(--color-gold-champagne)]' 
            : 'bg-[var(--color-obsidian)]/50 border-[var(--color-gold-champagne)]/30 text-[var(--color-platinum)]/80 hover:text-[var(--color-gold-champagne)] hover:bg-[var(--color-gold-champagne)]/10'
          }`}
        >
          {showArti ? "Sembunyikan Arti" : "Lihat Arti"}
        </button>
      </div>

      {/* Ikon Speaker Kecil */}
      <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-white/5 border border-[var(--color-gold-champagne)]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
        <svg className="w-2.5 h-2.5 text-[var(--color-gold-champagne)]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.56.276 2.56-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
        </svg>
      </div>
    </motion.div>
  );
};

export default function Kosakata() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-4 md:px-6 relative z-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative">
        
        {/* --- HEADER BAB 1 --- */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-6 py-2 rounded-full border border-[var(--color-gold-champagne)]/30 bg-[var(--color-emerald-glow)]/20 backdrop-blur-sm mb-6 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-arab text-gold-gradient font-bold drop-shadow-lg">
              Mufradat Inti (المفردات الأساسية)
            </h2>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl font-arab text-[var(--color-platinum)] mb-4 drop-shadow-sm px-4"
            dir="rtl"
          >
            اقْرَأ الْمُفْرَدَات التَّالِيَة بِمُلَاحَظَةِ الصُّوَرِ
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xs md:text-sm lg:text-base text-[var(--color-platinum)]/70 font-light tracking-wide max-w-md mx-auto px-4"
          >
            Ketuk <strong className="text-[var(--color-gold-champagne)] font-medium">Lihat Arti</strong> untuk memunculkan terjemahan, dan ketuk kartunya untuk mendengarkan audionya.
          </motion.p>
        </div>

        {/* --- GRID KOSAKATA BAB 1 --- */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5"
        >
          {KOSAKATA_DATA.map((item, index) => (
            <KosakataCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>

        {/* ========================================= */}
        {/* === PEMISAH / DIVIDER & HEADER BAB II === */}
        {/* ========================================= */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col items-center mt-24 mb-12"
        >
            <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-[var(--color-gold-champagne)]/30 to-transparent mb-12" />

            <div className="inline-block px-5 py-1.5 rounded-md border border-[var(--color-gold-champagne)]/20 bg-[var(--color-obsidian)]/50 backdrop-blur-sm mb-4">
                <h2 className="text-sm md:text-base font-bold text-[var(--color-gold-champagne)] tracking-widest uppercase">
                  Mufradat Tambahan (المفردات الإضافية)
                </h2>
            </div>
            
            <h3 className="text-xl md:text-2xl lg:text-3xl font-arab text-[var(--color-platinum)] mb-3 drop-shadow-sm text-center" dir="rtl">
                مُفْرَدَاتُ تَحْوِيْلِ الْمَصْدَرِ بِوَصْفِ الْوَزْنِ
            </h3>
            
            <p className="text-xs md:text-sm text-[var(--color-platinum)]/60 text-center max-w-lg px-4">
                Kosakata perubahan <strong className="text-[var(--color-gold-champagne)] font-medium">Fi'il Madhi</strong> menjadi <strong className="text-[var(--color-gold-champagne)] font-medium">Masdar</strong>. Ketuk <strong className="text-[var(--color-gold-champagne)] font-medium">Lihat Arti</strong> untuk memunculkan terjemahan.
            </p>
        </motion.div>

        {/* --- GRID KOSAKATA BAB 2 --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5"
        >
          {KOSAKATA_BAB2_DATA.map((item, index) => (
            <KosakataBab2Card key={item.id} item={item} index={index} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}