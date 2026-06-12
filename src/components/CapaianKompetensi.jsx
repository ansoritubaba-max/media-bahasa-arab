import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// --- DATA CP & TP (Berdasarkan Gambar) ---
const SILABUS_DATA = [
  {
    id: "CP",
    judul: "Capaian Pembelajaran (Fase F)",
    deskripsi: "Pada akhir fase F, peserta didik memiliki kemampuan memahami secara tersurat dan tersirat berbagai teks visual atau teks multimodal dalam cerita pendek/artikel/esai/laporan/buku tentang wisata, kesehatan, haji dan umroh, agama-agama di Indonesia, teknologi informasi dan komunikasi, tokoh-tokoh Islam, kuliah di universitas dengan menggunakan struktur gramatikal:",
    tataBahasaArab: "التصريف اللغوي للفعل الماضي، التصريف اللغوي للفعل المضارع، التصريف اللغوي لفعل الأمر، النعت، الإضافة، اسم التفضيل، الفعل المبني للمعلوم والفعل المبني للمجهول، الفعل المضارع المرفوع والمنصوب والمجزوم",
    indikatorJudul: "TUJUAN PEMBELAJARAN (TP)",
    indikator: [
      { id: "TP.1", teks: "Peserta didik mampu mengidentifikasi kosakata terkait topik الأديان في إندونيسيا" },
      { id: "TP.2", teks: "Peserta didik mampu menganalisis informasi rinci dari teks deskriptif (qira'ah) tentang agama-agama di Indonesia." },
      { id: "TP.3", teks: "Peserta didik mampu menumbuhkan rasa cinta tanah air melalui pemahaman tentang keragaman agama di Indonesia." },
      { id: "TP.4", teks: "Peserta didik mampu menganalisis isi dan struktur النص الوصفي tentang agama-agama di Indonesia secara tepat." }
    ]
  }
];

// --- KOMPONEN AKORDION ---
const KompetensiCard = ({ data, index }) => {
  const [isOpen, setIsOpen] = useState(true); // Buka secara default karena hanya ada 1 data utama

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative z-10 mb-6"
    >
      {/* Header CP (Bisa diklik) */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`glass-premium p-6 md:p-8 rounded-3xl cursor-pointer transition-all duration-500 flex flex-col md:flex-row md:items-start justify-between gap-6 group ${isOpen ? 'border-[var(--color-gold-champagne)]/40 shadow-[0_10px_30px_rgba(212,175,55,0.1)]' : 'hover:bg-white/5'}`}
      >
        <div className="flex items-start gap-6 w-full">
          <div className={`flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full border transition-colors duration-500 ${isOpen ? 'bg-[var(--color-gold-champagne)] border-[var(--color-gold-champagne)]' : 'bg-white/5 border-white/20 group-hover:border-[var(--color-gold-champagne)]/50'}`}>
            <span className={`font-bold text-lg tracking-widest ${isOpen ? 'text-[var(--color-obsidian)]' : 'text-[var(--color-gold-champagne)]'}`}>
              {data.id}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-[var(--color-platinum)] mb-3 group-hover:text-[var(--color-gold-light)] transition-colors">
              {data.judul}
            </h3>
            <p className="text-sm md:text-base text-[var(--color-platinum)]/70 font-light leading-relaxed max-w-3xl text-justify">
              {data.deskripsi}
            </p>
            
            {/* Box Khusus Tata Bahasa Arab */}
            {data.tataBahasaArab && (
              <div className="mt-4 p-4 rounded-xl bg-[var(--color-obsidian)]/50 border border-[var(--color-emerald-glow)]/30">
                <p className="text-right text-lg md:text-xl font-arab text-[var(--color-gold-champagne)] leading-loose" dir="rtl">
                  {data.tataBahasaArab}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Ikon Toggle */}
        <div className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full bg-white/5 items-center justify-center border border-white/10 mt-2">
          <motion.svg animate={{ rotate: isOpen ? 180 : 0 }} className="w-5 h-5 text-[var(--color-gold-champagne)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </div>
      </div>

      {/* Konten Tujuan Pembelajaran (Expandable) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-8 pb-4 px-4 md:px-12 ml-4 md:ml-10 border-l-2 border-[var(--color-gold-champagne)]/30">
              <h4 className="text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--color-gold-champagne)] mb-6 font-bold flex items-center gap-3">
                <div className="h-[1px] w-8 bg-[var(--color-gold-champagne)]"></div>
                {data.indikatorJudul}
              </h4>
              <ul className="space-y-6">
                {data.indikator.map((ipk) => (
                  <li key={ipk.id} className="flex items-start gap-5 text-[var(--color-platinum)]/90 text-sm md:text-base font-light bg-white/[0.02] p-4 rounded-2xl border border-white/5 hover:border-[var(--color-gold-champagne)]/20 transition-colors">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-obsidian)] border border-[var(--color-gold-champagne)]/40 flex items-center justify-center text-[10px] font-bold text-[var(--color-gold-champagne)] shadow-[0_0_10px_rgba(212,175,55,0.1)]">
                      {ipk.id.split('.').pop()}
                    </span>
                    <span className="leading-relaxed pt-1">
                      {/* Highlight teks arab di dalam teks indikator */}
                      {ipk.teks.split(/(الأديان في إندونيسيا|النص الوصفي)/g).map((part, i) => 
                        part === "الأديان في إندونيسيا" || part === "النص الوصفي" ? (
                          <span key={i} className="font-arab text-[var(--color-gold-champagne)] text-lg px-1">{part}</span>
                        ) : (
                          part
                        )
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function CapaianKompetensi() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-32 px-6 relative z-20 overflow-hidden">
      
      {/* Efek Latar Glow (Ambient) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-emerald-glow)] opacity-10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        
        {/* --- HEADER SECTION --- */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: "100px" } : { opacity: 0, width: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-[2px] bg-gradient-to-r from-[var(--color-gold-champagne)] to-transparent mb-6"
          />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gold-gradient tracking-wide mb-6 uppercase"
          >
            Capaian & Tujuan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-[var(--color-platinum)]/60 font-light max-w-2xl leading-loose tracking-wide"
          >
            Detail Capaian Pembelajaran (CP) dan Tujuan Pembelajaran (TP) untuk pemahaman teks, gramatikal, dan keragaman agama di Indonesia.
          </motion.p>
        </div>

        {/* --- ROADMAP ACCORDION LIST --- */}
        <div className="relative">
          {SILABUS_DATA.map((data, index) => (
            <KompetensiCard key={data.id} data={data} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}