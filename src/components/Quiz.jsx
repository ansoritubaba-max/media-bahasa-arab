import { motion } from 'framer-motion';

// --- KONSTANTA URL ---
const QUIZ_URL = "https://forms.gle/manKAANAojqWgYgJA";

// --- VARIANTS ANIMASI ---
const buttonVariants = {
  initial: { backgroundPosition: "0% 50%" },
  hover: { 
    backgroundPosition: "100% 50%", 
    scale: 1.05,
    boxShadow: "0px 10px 40px rgba(212,175,55,0.4)"
  },
  tap: { scale: 0.95 }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function Quiz() {
  const petunjukPengisian = [
    "Bacalah setiap soal dengan cermat dan teliti.",
    "Pilihlah satu jawaban yang paling tepat pada soal pilihan ganda.",
    <span>Isilah bagian yang kosong pada soal melengkapi kalimat rumpang dengan memilih jawaban yang sesuai berdasarkan teks <strong className="font-arab text-[var(--color-gold-champagne)] text-lg leading-none tracking-wide px-1">"الأديان في إندونيسيا"</strong>.</span>,
    "Kerjakan seluruh soal secara mandiri tanpa bantuan orang lain.",
    "Periksa kembali jawaban Anda sebelum mengirimkan formulir.",
    "Klik tombol Kirim (Submit) setelah semua soal selesai dikerjakan."
  ];

  return (
    <section className="py-24 md:py-32 px-4 md:px-6 relative z-20 flex items-center justify-center min-h-[80vh] overflow-hidden">
      
      {/* --- EFEK BACKGROUND: RADAR / FOCUS RINGS --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full border border-[var(--color-gold-champagne)]/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] rounded-full border border-[var(--color-emerald-glow)]/30 border-dashed animate-[spin_60s_linear_infinite] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[var(--color-emerald-glow)] opacity-10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="relative max-w-4xl w-full">
        
        {/* --- KARTU KUIS UTAMA --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-premium p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] text-center relative group shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10"
        >
          {/* Garis Cahaya Atas Kartu */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold-champagne)] to-transparent opacity-80" />
          
          {/* Ikon Mahkota / Evaluasi */}
          <motion.div 
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 rounded-full bg-black/40 border border-[var(--color-gold-champagne)]/30 shadow-[inset_0_0_20px_rgba(212,175,55,0.2)] flex items-center justify-center cursor-pointer"
          >
            <svg className="w-8 h-8 text-[var(--color-gold-champagne)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </motion.div>

          {/* Subtitle Badge */}
          <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-gold-champagne)]/30 bg-[var(--color-gold-champagne)]/10 backdrop-blur-sm mb-4">
            <span className="text-[var(--color-platinum)] text-[10px] md:text-xs font-bold tracking-widest uppercase">
              Kelas XI Madrasah Aliyah
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gold-gradient mb-10 tracking-wider">
            POSTTEST BAHASA ARAB
          </h2>
          
          {/* --- KOTAK PETUNJUK PENGISIAN --- */}
          <div className="bg-black/30 backdrop-blur-md border border-white/5 rounded-2xl md:rounded-3xl p-6 md:p-8 mb-10 text-left relative overflow-hidden">
            {/* Dekorasi Cahaya Sudut Kotak */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--color-gold-champagne)]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <span className="text-2xl">📖</span>
              <h3 className="text-lg md:text-xl font-semibold text-[var(--color-gold-champagne)] tracking-wide">
                Petunjuk Pengisian
              </h3>
            </div>

            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 md:space-y-5"
            >
              {petunjukPengisian.map((text, index) => (
                <motion.li key={index} variants={itemVariants} className="flex items-start gap-4 group">
                  {/* Custom Bullet Point */}
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-[var(--color-gold-champagne)]/10 border border-[var(--color-gold-champagne)]/40 flex items-center justify-center group-hover:bg-[var(--color-gold-champagne)]/30 transition-colors duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-champagne)] group-hover:scale-150 transition-transform duration-300" />
                  </div>
                  <p className="text-sm md:text-base text-[var(--color-platinum)]/80 leading-relaxed font-light">
                    {text}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Pesan Penyemangat */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mb-8 flex flex-col items-center justify-center gap-2"
          >
            <p className="text-sm md:text-base font-medium text-[var(--color-platinum)] tracking-widest uppercase">
              Selamat Mengerjakan
            </p>
            <p className="text-xs md:text-sm text-[var(--color-gold-champagne)]/80 font-light tracking-widest uppercase">
              Jangan lupa berdo'a ! 😊
            </p>
          </motion.div>
          
          {/* Tombol dengan Animasi Liquid Background */}
          <motion.a
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            href={QUIZ_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center px-12 md:px-16 py-5 md:py-6 text-sm md:text-base font-bold text-[var(--color-obsidian)] uppercase tracking-[0.25em] bg-gradient-to-r from-[var(--color-gold-champagne)] via-[#FFF4D2] to-[var(--color-gold-champagne)] bg-[length:200%_auto] rounded-full border-[0.5px] border-white/40 z-10 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          >
            Mulai Ujian
            <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
}