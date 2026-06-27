import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// --- DATA TEKS BACAAN UTAMA ---
const QIRAAH_DATA = [
  {
    id: "p1",
    arab: "الأَدْيَانُ جَمْعُ كَلِمَةِ \"دِيْن\"، وَهُوَ مَجْمُوْعَةٌ مِنَ القِيَمِ وَالمُعْتَقَدَاتِ الَّتِي تَتَطَوَّرُ ضِمْنَ المَنْظُوْمَةِ الثَّقَافِيَّةِ لِلْمُجْتَمَعِ، وَالأَدْيَانُ لَهَا رُمُوْزٌ وَتَارِيْخٌ مُقَدَّسٌ. الدِّيْنُ هُوَ مَجْمُوْعَةٌ مِنَ القَوَاعِدِ التِي تُنَظِّمُ عَلَاقَاتِ الإِنْسَانِ بِرَبِّهِ، وَالإِنْسَانِ بِالإِنْسَانِ وَالإِنْسَانِ بِبِيْئَتِهِ. تُوْجَدُ فِي إِنْدُوْنِيْسِيَا سِتَّةُ أَدْيَانٍ، وَهِيَ: الإِسْلَامُ، وَالبُرُوْتِسْتَانْتِيَّة، وَالكَاثُوْلِيْكِيَّة، وَالهِنْدُوْسِيَّة، وَالبُوْذِيَّة، وَالكُوْنْفُوْشِيُوْسِيَّة. وَلِكُلِّ دِيْنٍ مِنْهَا مَعَابِدُهُ الخَاصَّةُ التِي يَتَعَبَّدُ فِيْهَا مُعْتَنِقُوْهُ.",
    terjemahan: "Agama adalah bentuk jamak dari kata 'Din', yaitu sekumpulan nilai dan kepercayaan yang berkembang dalam sistem budaya masyarakat, dan agama memiliki simbol serta sejarah suci. Agama adalah sekumpulan aturan yang mengatur hubungan manusia dengan Tuhannya, manusia dengan manusia, dan manusia dengan lingkungannya. Terdapat enam agama di Indonesia, yaitu: Islam, Protestan, Katolik, Hindu, Buddha, dan Konghucu. Dan setiap agama memiliki tempat ibadah khusus di mana para penganutnya beribadah."
  },
  {
    id: "p2",
    arab: "يُصَلِّي المُسْلِمُوْنَ فِي المَسَاجِدِ، وَأَشْهَرُ المَسَاجِدِ فِي إِنْدُوْنِيْسِيَا هُوَ مَسْجِدُ الاِسْتِقْلَالِ فِي جَاكَرْتَا. وَيَتَعَبَّدُ المَسِيْحِيُّوْنَ البُرُوْتِسْتَانْت وَالكَاثُوْلِيْك فِي الكَنِيْسَةِ، وَالكَنِيْسَةُ المَشْهُوْرَةُ فِي إِنْدُوْنِيْسِيَا هِيَ كَنِيْسَةُ كَاتِيْدْرَال. يَتَعَبَّدُ الهِنْدُوْسِيُّوْنَ وَالبُوْذِيُّوْنَ وَالكُوْنْفُوْشِيُوْسِيُّوْنَ فِي المَعْبَدِ، المَعْبَدُ لِلْهِنْدُوْسِيَّةِ يُسَمَّى بِـ \"فُوْرَا\"، وَأَشْهَرُهَا فُوْرَا بَسَاكِيْح فِي جَزِيْرَةِ بَالِي، وَالمَعْبَدُ لِلْبُوْذِيَّةِ يُسَمَّى بِـ \"فِيْهَارَا\" مِثْلُ فِيْهَارَا هُونج تِيْك حِيَان فِي سُوْرَابَايَا، وَأَمَّا المَعْبَدُ لِلْكُوْنْفُوْشِيُوْسِيَّةِ فَيُسَمَّى بِالمَعْبَدِ الكُوْنْفُوْشِي وَأَشْهَرُه فِي إِنْدُوْنِيْسِيَا هُوَ مَعْبَدُ سَام بَو كُونج فِي سَمَارَانْج.",
    terjemahan: "Umat Islam salat di masjid, dan masjid paling terkenal di Indonesia adalah Masjid Istiqlal di Jakarta. Umat Kristen Protestan dan Katolik beribadah di gereja, dan gereja yang terkenal di Indonesia adalah Gereja Katedral. Umat Hindu, Buddha, dan Konghucu beribadah di kuil/candi. Tempat ibadah Hindu disebut 'Pura', yang paling terkenal adalah Pura Besakih di Pulau Bali. Tempat ibadah Buddha disebut 'Vihara' seperti Vihara Hong Tiek Hian di Surabaya, adapun tempat ibadah Konghucu disebut Kelenteng dan yang terkenal di Indonesia adalah Sam Poo Kong di Semarang."
  }
];

// --- DATA STRUKTUR TEKS DESKRIPTIF (Dari gambar baru) ---
const CONTOH_DESKRIPTIF = [
  {
    tipe: "الوصف العام",
    judul: "Deskripsi Umum (Al-Washf Al-'Aam)",
    arab: "الإِسْلَامُ دِيْنٌ رَسْمِيٌّ فِي إِنْدُوْنِيْسِيَا، حَيْثُ إِنَّ عَدَدَ الْمُسْلِمِيْنَ فِي إِنْدُوْنِيْسِيَا أَكْثَرُ مِنْ ثَمَانِيْنَ فِي الْمِائَةِ. الإِسْلَامُ هُوَ الدِّيْنُ الْخَالِصُ الَّذِي أَنْزَلَهُ اللهُ عَلَى النَّبِيِّ الْكَرِيْمِ مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ. يَشْتَمِلُ الإِسْلَامُ عَلَى خَمْسَةِ أَرْكَانٍ، وَهِيَ: الشَّهَادَتَانِ، وَالصَّلَاةُ، وَالزَّكَاةُ، وَصَوْمُ رَمَضَانَ، وَالْحَجُّ.",
    penjelasan: "Berisi definisi, identifikasi, atau klasifikasi umum tentang objek (Agama Islam)."
  },
  {
    tipe: "الوصف الخاص",
    judul: "Deskripsi Khusus (Al-Washf Al-Khash)",
    arab: "وَالْبَيَانُ لِكُلِّ رُكْنٍ كَمَا يَلِي: أَوَّلًا الشَّهَادَتَانِ، مَنْ يَنْطِقُ الشَّهَادَتَيْنِ \"أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ وَأَنَّ مُحَمَّدًا رَسُوْلُ اللهِ\" فَهُوَ مُسْلِمٌ. ثُمَّ يُقِيْمُ الصَّلَوَاتِ الْخَمْسِ، مِنْهَا الصُّبْحُ وَالظُّهْرُ وَالْعَصْرُ وَالْمَغْرِبُ وَالْعِشَاءُ. وَيُؤْتِي الْمُسْلِمُ الزَّكَاةَ مِنَ الْمَالِ الْبَالِغِ لِلنِّصَابِ بِشُرُوْطٍ مُعَيَّنَةٍ، وَيَصُوْمُ الْمُسْلِمُ رَمَضَانَ الَّذِي قَدْ فَرَضَ اللهُ عَلَيْهِ، فَهُوَ يَصُوْمُ مِنْ طُلُوْعِ الْفَجْرِ إِلَى غُرُوْبِ الشَّمْسِ، وَيَحُجُّ الْمُسْلِمُ إِلَى بَيْتِ اللهِ الْحَرَامِ، الْحَجُّ وَاجِبٌ عَلَى الْقَادِرِ عَلَيْهِ، أَوْ كَمَا جَاءَ فِي الْحَدِيْثِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيْلًا.",
    penjelasan: "Berisi rincian spesifik dari klasifikasi sebelumnya (merincikan kelima rukun Islam)."
  }
];

// --- DATA LATIHAN BENAR/SALAH ---
const LATIHAN_DATA = [
  { id: 1, soal: "تُوْجَدُ فِي إِنْدُوْنِيْسِيَا خَمْسَةُ أَدْيَانٍ رَسْمِيَّةٍ", isBenar: false, koreksi: "Terdapat 6 agama resmi, bukan 5." },
  { id: 2, soal: "الدِّيْنُ يُنَظِّمُ عَلَاقَةَ الإِنْسَانِ بِرَبِّهِ", isBenar: true, koreksi: "" },
  { id: 3, soal: "يَتَسَامَح مُعْتَنِقُوا الأَدْيَانِ فِي إِنْدُوْنِيْسِيَا", isBenar: true, koreksi: "" },
  { id: 4, soal: "يَتَعَبَّدُ مُعْتَنِقُوا الأَدْيَانِ فِي المَسْجِدِ", isBenar: false, koreksi: "Hanya umat Islam yang beribadah di Masjid." },
  { id: 5, soal: "تَقَعُ فُوْرَا بَسَاكِيْح فِي جَاكَرْتَا", isBenar: false, koreksi: "Pura Besakih terletak di Pulau Bali, bukan Jakarta." }
];

// --- 1. KOMPONEN KARTU PARAGRAF QIRA'AH ---
const ParagrafCard = ({ data, index }) => {
  const [showTranslate, setShowTranslate] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="glass-premium p-8 md:p-12 rounded-[2.5rem] mb-8 relative group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold-champagne)] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none" />
      <p className="font-arab text-3xl md:text-4xl lg:text-[40px] leading-[2.2] md:leading-[2.5] text-gold-gradient text-right mb-8 drop-shadow-sm" dir="rtl">
        {data.arab}
      </p>
      <div className="flex justify-start border-t border-white/10 pt-6">
        <button 
          onClick={() => setShowTranslate(!showTranslate)}
          className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-[var(--color-gold-champagne)]/30 text-[var(--color-gold-champagne)] hover:bg-[var(--color-gold-champagne)] hover:text-[var(--color-obsidian)] transition-all duration-300 font-bold text-sm tracking-widest uppercase"
        >
          <svg className={`w-4 h-4 transition-transform duration-300 ${showTranslate ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          {showTranslate ? 'Tutup Terjemahan' : 'Lihat Terjemahan'}
        </button>
      </div>
      <AnimatePresence>
        {showTranslate && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-6 p-6 rounded-2xl bg-black/20 border border-[var(--color-gold-champagne)]/10 text-[var(--color-platinum)] font-light text-base md:text-lg leading-relaxed italic">
              "{data.terjemahan}"
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- 2. KOMPONEN LATIHAN INTERAKTIF ---
const LatihanItem = ({ data, index }) => {
  const [jawabanUser, setJawabanUser] = useState(null);

  const handleJawab = (pilihBenar) => setJawabanUser(pilihBenar);

  const isCorrect = jawabanUser === data.isBenar;
  const isAnswered = jawabanUser !== null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 ${isAnswered ? (isCorrect ? 'bg-[var(--color-emerald-glow)]/20 border-green-500/50' : 'bg-red-900/20 border-red-500/50') : 'bg-white/5 border-white/10 hover:border-[var(--color-gold-champagne)]/30'}`}
    >
      <div className="flex flex-col md:flex-row-reverse md:items-center justify-between gap-6">
        <p className="font-arab text-2xl md:text-3xl text-[var(--color-gold-champagne)] text-right flex-grow" dir="rtl">
          <span className="text-[var(--color-platinum)]/40 text-lg ml-3">.{index + 1}</span>
          {data.soal}
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={() => handleJawab(true)}
            disabled={isAnswered}
            className={`px-6 py-2 rounded-full font-arab text-xl font-bold transition-all ${isAnswered ? (jawabanUser === true ? 'bg-green-600 text-white' : 'bg-white/5 text-white/20') : 'bg-white/10 text-[var(--color-platinum)] hover:bg-[var(--color-gold-champagne)] hover:text-[var(--color-obsidian)]'}`}
          >
            صَحِيْح
          </button>
          <button
            onClick={() => handleJawab(false)}
            disabled={isAnswered}
            className={`px-6 py-2 rounded-full font-arab text-xl font-bold transition-all ${isAnswered ? (jawabanUser === false ? 'bg-red-600 text-white' : 'bg-white/5 text-white/20') : 'bg-white/10 text-[var(--color-platinum)] hover:bg-[var(--color-gold-champagne)] hover:text-[var(--color-obsidian)]'}`}
          >
            خَطَأ
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isAnswered && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="overflow-hidden">
            <div className={`mt-6 pt-4 border-t border-white/10 flex items-start gap-3 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
              <span className="text-xl">{isCorrect ? '✅' : '❌'}</span>
              <div>
                <p className="font-bold">{isCorrect ? 'Tepat Sekali!' : 'Jawaban Kurang Tepat.'}</p>
                {!data.isBenar && <p className="text-[var(--color-platinum)]/70 text-sm mt-1">{data.koreksi}</p>}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
// --- KOMPONEN UTAMA MATERI ---
export default function Materi() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 relative z-20 overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        
        {/* =========================================
            BAGIAN 1: TEKS BACAAN (QIRA'AH)
        ========================================== */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-arab text-gold-gradient font-bold mb-4 drop-shadow-lg"
            dir="rtl"
          >
            الأَدْيَانُ فِي إِنْدُوْنِيْسِيَا
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold-champagne)] to-transparent mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[var(--color-platinum)]/60 tracking-widest uppercase text-sm font-bold"
          >
            Materi Bacaan Inti (Al-Qira'ah)
          </motion.p>
        </div>

        <div className="mb-24">
          {QIRAAH_DATA.map((data, index) => (
            <ParagrafCard key={data.id} data={data} index={index} />
          ))}
        </div>

        {/* =========================================
            BAGIAN 2: GAMBAR KONTEKSTUAL (TOLERANSI)
        ========================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full h-[300px] md:h-[450px] rounded-[3rem] overflow-hidden mb-24 shadow-2xl group border border-white/10"
        >
          {/* Pastikan gambar-toleransi.jpg ada di folder public */}
          <img 
            src="/toleransi.png" 
            alt="Toleransi Beragama di Indonesia" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-60 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)] via-[var(--color-obsidian)]/50 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10">
            <h3 className="text-3xl md:text-5xl font-arab text-[var(--color-gold-champagne)] font-bold mb-2 drop-shadow-lg">
              التَّسَامُحُ الدِّيْنِيُّ
            </h3>
            <p className="text-[var(--color-platinum)] font-light tracking-wide text-sm md:text-lg max-w-2xl">
              "Toleransi beragama adalah pilar utama keharmonisan di Indonesia. Perbedaan tempat ibadah dan tata cara berdoa bukanlah penghalang untuk hidup rukun dan berdampingan."
            </p>
          </div>
        </motion.div>

{/* =========================================
    BAGIAN 3: ANALISIS TEKS DESKRIPTIF (NASH WASHFI) + VIDEO SYNC
========================================== */}
{/* <div className="mb-24">

  <div className="text-center mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold text-gold-gradient mb-4 uppercase tracking-widest"
    >
      PERHATIKAN UNSUR UNSUR TEKS DESKRIPTIF BERIKUT
    </motion.h2>
    <h3 className="text-4xl font-arab text-[var(--color-gold-champagne)] font-bold mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
      النَّصُّ الوَصْفِيُّ
    </h3>
    <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold-champagne)] to-transparent mx-auto" />
  </div>


  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">

    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="lg:col-span-5 rounded-[2.5rem] glass-premium overflow-hidden relative min-h-[300px] lg:min-h-full flex flex-col justify-between p-6 group border border-white/10"
    >

      <div className="absolute -top-12 -left-12 w-48 h-48 bg-[var(--color-emerald-glow)] opacity-40 blur-3xl rounded-full pointer-events-none group-hover:opacity-70 transition-opacity" />
      
      
      <div className="absolute inset-4 rounded-[1.8rem] overflow-hidden bg-black/40 border border-white/5 shadow-inner">
        <video 
          src="/video-analisis.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-in-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)] via-transparent to-black/20 pointer-events-none" />
      </div>


      <div className="relative z-10 self-start px-4 py-1.5 rounded-full bg-[var(--color-obsidian)]/80 backdrop-blur-md border border-[var(--color-gold-champagne)]/30 text-[var(--color-gold-champagne)] text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        Live Visual Media
      </div>

      <div className="relative z-10 mt-auto pt-40">
        <p className="text-xs text-[var(--color-platinum)]/40 uppercase tracking-widest font-bold mb-1">Visualisasi Konteks</p>
        <p className="text-sm text-[var(--color-platinum)]/80 font-light leading-relaxed">
          Simak paparan visual di atas untuk mempermudah pemetaan komponen struktural <span className="text-[var(--color-gold-champagne)] font-medium">Nash Washfi</span> secara intuitif.
        </p>
      </div>
    </motion.div>


    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="lg:col-span-7 flex flex-col justify-between gap-6"
    >
      <div className="glass-premium p-8 rounded-[2.5rem] flex-1 border-l-4 border-l-[var(--color-gold-champagne)] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-gold-champagne)] opacity-5 blur-3xl rounded-full" />
        
        <h4 className="text-[var(--color-gold-champagne)] font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
          <span className="w-6 h-[1px] bg-[var(--color-gold-champagne)]" /> Definisi Utama
        </h4>
        <p className="text-[var(--color-platinum)]/90 text-base md:text-lg font-light leading-loose mb-8">
          <strong className="text-[var(--color-gold-light)] font-bold border-b border-[var(--color-gold-champagne)]/20 pb-0.5 mr-1">Teks Deskriptif (النص الوصفي)</strong> adalah bentuk tulisan objektif yang memproyeksikan citra fisik suatu objek, manusia, maupun tempat secara presisi, mentransfer pengalaman sensorik langsung kepada pembaca tanpa rekayasa imajinatif.
        </p>

        <h4 className="text-[var(--color-gold-champagne)] font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
          <span className="w-6 h-[1px] bg-[var(--color-gold-champagne)]" /> Orientasi Fungsi Sosial
        </h4>
        <p className="text-[var(--color-platinum)]/80 text-base font-light leading-relaxed">
          Berfungsi sebagai instrumen transmisi informasi spesifik, menyajikan struktur anatomi internal dan eksternal objek secara detil demi membangun pemahaman konseptual yang kokoh pada benak pembaca.
        </p>
      </div>

      <div className="glass-premium p-6 rounded-[2rem] bg-black/10 border border-white/5 flex flex-col md:flex-row items-center gap-4 relative overflow-hidden">
        <div className="flex-shrink-0 bg-[var(--color-emerald-glow)]/40 border border-[var(--color-gold-champagne)]/30 px-6 py-4 rounded-2xl text-[var(--color-gold-champagne)] font-arab text-xl font-bold text-center w-full md:w-auto min-w-[150px] shadow-inner relative z-10">
          النَّصُّ الوَصْفِيُّ
          <div className="hidden md:block absolute top-1/2 -right-4 w-4 h-[1px] bg-[var(--color-gold-champagne)]/50 -translate-y-1/2" />
        </div>
        
        <div className="flex gap-4 w-full relative z-10">
          <div className="flex-1 text-center bg-white/5 hover:bg-white/10 rounded-xl p-4 border border-white/10 transition-colors group">
            <h5 className="font-arab text-xl text-[var(--color-gold-light)] font-bold mb-1 group-hover:scale-105 transition-transform">الوصف العام</h5>
            <div className="w-8 h-[2px] bg-[var(--color-gold-champagne)]/30 mx-auto my-1" />
            <p className="text-[9px] font-bold tracking-wider text-white/40 uppercase">Deskripsi Umum</p>
          </div>
          <div className="flex-1 text-center bg-white/5 hover:bg-white/10 rounded-xl p-4 border border-white/10 transition-colors group">
            <h5 className="font-arab text-xl text-[var(--color-gold-light)] font-bold mb-1 group-hover:scale-105 transition-transform">الوصف الخاص</h5>
            <div className="w-8 h-[2px] bg-[var(--color-gold-champagne)]/30 mx-auto my-1" />
            <p className="text-[9px] font-bold tracking-wider text-white/40 uppercase">Deskripsi Khusus</p>
          </div>
        </div>
      </div>
    </motion.div>
  </div>


  <div className="text-center mb-10 relative z-10">
    <h3 className="font-bold text-[var(--color-platinum)]/40 uppercase tracking-[0.2em] text-xs">
      Pembedahan Anatomi Struktur Teks Deskriptif
    </h3>
    <div className="w-12 h-[1px] bg-white/10 mx-auto mt-3" />
  </div>


  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
    {CONTOH_DESKRIPTIF.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="glass-premium p-8 md:p-10 rounded-[2.5rem] flex flex-col h-full relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)] transition-all duration-500"
      >

        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-emerald-glow)]/0 to-[var(--color-emerald-glow)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
          <span className="text-[var(--color-gold-light)] font-arab text-3xl font-bold drop-shadow-sm">
            {item.tipe}
          </span>
          <span className="bg-gradient-to-r from-white/5 to-white/10 px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest font-black text-[var(--color-platinum)]/60 border border-white/5">
            {item.judul}
          </span>
        </div>


        <p className="font-arab text-2xl md:text-3xl leading-[2.1] md:leading-[2.3] text-[var(--color-gold-champagne)] text-right mb-8 flex-grow tracking-wide" dir="rtl">
          {item.arab}
        </p>

        <div className="bg-black/30 rounded-2xl p-5 border border-white/5 group-hover:border-[var(--color-gold-champagne)]/20 transition-colors duration-500">
          <strong className="text-[var(--color-gold-light)] block mb-1.5 text-xs font-black uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-champagne)]" /> Aturan Karakteristik
          </strong>
          <p className="text-sm font-light text-[var(--color-platinum)]/70 leading-relaxed italic">
            "{item.penjelasan}"
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</div> */}


        {/* =========================================
            BAGIAN 4: LATIHAN INTERAKTIF (TADRIBAT)
        ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="glass-premium p-8 md:p-12 rounded-[3rem]"
        >
          <div className="text-center mb-12 border-b border-white/10 pb-8">
            <h3 className="text-3xl md:text-4xl font-arab text-[var(--color-gold-champagne)] font-bold mb-4">
              التَّدْرِيْبَاتُ
            </h3>
            <p className="text-[var(--color-platinum)] text-lg font-arab" dir="rtl">
              اقْرَأ الجُمَل التَّالِيَة، ثُمَّ ضَع (صَحِيْح) إِذَا كَانَت الجُمْلَة صَحِيْحَة، أَوْ (خَطَأ) إِذَا كَانَت خَطَأ.
            </p>
            <p className="text-[var(--color-platinum)]/50 text-sm mt-3 font-light">
              Uji pemahaman Anda! Tekan "Benar" atau "Salah" pada pernyataan di bawah ini.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {LATIHAN_DATA.map((latihan, index) => (
              <LatihanItem key={latihan.id} data={latihan} index={index} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}