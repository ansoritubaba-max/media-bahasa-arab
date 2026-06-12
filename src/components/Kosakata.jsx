import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// --- DATA KOSAKATA (Kembali menggunakan Emoji) ---
const KOSAKATA_DATA = [
  { id: 1, arab: "الإِسْلَامُ", arti: "Agama Islam", audio: "/sound/islam.mp3", icon: "🕋" },
  { id: 2, arab: "بِرُوْتِسْتَانْتِيَّة", arti: "Agama Protestan", audio: "/sound/protestan.mp3", icon: "✝️" },
  { id: 3, arab: "الْكَاثُوْلِيْكِيَّة", arti: "Agama Katolik", audio: "/sound/katolik.mp3", icon: "⛪" },
  { id: 4, arab: "هِنْدُوْسِيَّة", arti: "Agama Hindu", audio: "/sound/hindu.mp3", icon: "🕉️" },
  { id: 5, arab: "بُوْذِيَّة", arti: "Agama Buddha", audio: "/sound/budda.mp3", icon: "☸️" },
  { id: 6, arab: "كُوْنْفُوْشِيُوْسِيَّة", arti: "Agama Konghucu", audio: "/sound/khonghucu.mp3", icon: "⛩️" },
  { id: 7, arab: "مَسْجِدٌ", arti: "Masjid", audio: "/sound/masjid.mp3", icon: "🕌" },
  { id: 8, arab: "كَنِيْسَةٌ", arti: "Gereja", audio: "/sound/greja.mp3", icon: "💒" },
  { id: 9, arab: "مَعْبَدٌ", arti: "Kuil / Candi", audio: "/sound/candi.mp3", icon: "🛕" },
  { id: 10, arab: "التَّسَامُحُ", arti: "Toleransi", audio: "/sound/toleransi.mp3", icon: "🤝" },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, type: "spring", stiffness: 100 }
  })
};

const KosakataCard = ({ item, index }) => {
  const playAudio = () => {
    if (item.audio) {
      const sound = new Audio(item.audio);
      sound.play().catch(error => console.log("Audio belum ditambahkan:", error));
    }
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      onClick={playAudio} 
      className="glass-premium relative group rounded-[2rem] p-6 flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden min-h-[220px]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-gold-champagne)]/0 to-[var(--color-gold-champagne)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* --- WADAH IKON EMOJI BERNYAWA --- */}
      <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
        {/* Glow Background */}
        <div className="absolute inset-0 bg-[var(--color-emerald-glow)] rounded-full blur-md opacity-40 group-hover:opacity-80 group-hover:bg-[var(--color-gold-champagne)] transition-all duration-500" />
        
        {/* Cincin Kaca */}
        <div className="relative z-10 w-16 h-16 bg-white/5 border border-[var(--color-gold-champagne)]/30 backdrop-blur-md rounded-full flex items-center justify-center shadow-inner group-hover:border-[var(--color-gold-champagne)] transition-colors duration-500">
          
          {/* Animasi Mengambang (Floating) yang terus bergerak, namun membesar & full warna saat dihover */}
          <motion.span 
            animate={{ y: [-3, 3, -3] }}
            transition={{ repeat: Infinity, duration: 3 + (index * 0.2), ease: "easeInOut" }} // Durasi berbeda tiap kartu agar tidak kaku
            className="text-4xl filter saturate-50 opacity-80 group-hover:saturate-150 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
          >
            {item.icon}
          </motion.span>
          
        </div>
      </div>

      <h3 className="text-2xl md:text-3xl font-bold font-arab text-[var(--color-gold-champagne)] drop-shadow-md mb-2 transition-transform duration-500 group-hover:-translate-y-2">
        {item.arab}
      </h3>

      <div className="absolute bottom-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
        <span className="px-3 py-1 bg-[var(--color-obsidian)]/80 border border-[var(--color-gold-champagne)]/40 rounded-full text-[10px] md:text-xs font-bold text-[var(--color-platinum)] uppercase tracking-widest backdrop-blur-md shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
          {item.arti}
        </span>
      </div>

      {/* Ikon Speaker (Lebih representatif untuk fungsi audio) */}
      <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/5 border border-[var(--color-gold-champagne)]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
        <svg className="w-3.5 h-3.5 text-[var(--color-gold-champagne)] group-active:scale-75 transition-transform" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.56.276 2.56-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
          <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
        </svg>
      </div>
    </motion.div>
  );
};

export default function Kosakata() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-32 px-6 relative z-20 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-6 py-2 rounded-full border border-[var(--color-gold-champagne)]/30 bg-[var(--color-emerald-glow)]/30 backdrop-blur-sm mb-6 shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-arab text-gold-gradient font-bold drop-shadow-lg">
              الْقِرَاءَةُ
            </h2>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl font-arab text-[var(--color-platinum)] mb-4 drop-shadow-sm"
            dir="rtl"
          >
            اقْرَأ الْمُفْرَدَات التَّالِيَة بِمُلَاحَظَةِ الصُّوَرِ
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base text-[var(--color-platinum)]/60 font-light tracking-wide max-w-md mx-auto"
          >
            Arahkan kursor untuk melihat terjemahan, dan <strong className="text-[var(--color-gold-champagne)]">ketuk kartu</strong> untuk mendengarkan pelafalan audionya.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {KOSAKATA_DATA.map((item, index) => (
            <KosakataCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}