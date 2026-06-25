import { motion } from 'framer-motion';

// --- VARIANTS UNTUK ANIMASI ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const photoFrameAnim = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { duration: 1, type: "spring", bounce: 0.4 } 
  }
};

export default function Biografi({ setActivePage }) {
  return (
    <section className="relative min-h-screen pt-28 pb-20 px-4 md:px-8 flex items-center justify-center overflow-x-hidden z-20">
      
      {/* --- EFEK CAHAYA AMBIENT Latar Belakang --- */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#BF953F]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#0a2e11]/40 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* --- TOMBOL KEMBALI --- */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setActivePage('home')}
          className="mb-8 md:mb-10 group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#BF953F]/50 backdrop-blur-md transition-all duration-300 w-max"
        >
          <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center group-hover:-translate-x-1 transition-transform">
            <svg className="w-4 h-4 text-[#FCF6BA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-300 group-hover:text-white uppercase tracking-wider">Kembali</span>
        </motion.button>

        {/* --- KARTU BIOGRAFI UTAMA (GLASSMORPHISM) --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden"
        >
          {/* Garis Aksen Emas Atas */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#FCF6BA] to-transparent opacity-50" />

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
            
            {/* --- BAGIAN KIRI: BINGKAI FOTO MAHAL --- */}
            <motion.div variants={photoFrameAnim} className="relative shrink-0 mt-4 lg:mt-0 w-full max-w-[280px] md:max-w-[320px]">
              {/* Efek Cincin Cahaya Melayang */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#BF953F] to-[#1B5E20] rounded-[2rem] blur-xl opacity-40 animate-pulse" />
              
              {/* Bingkai Kaca Fisik */}
              <div className="relative w-full aspect-[4/5] rounded-[2rem] p-[2px] bg-gradient-to-br from-[#FCF6BA] via-[#BF953F]/30 to-[#0a2e11]">
                <div className="w-full h-full bg-black/80 rounded-[calc(2rem-2px)] overflow-hidden relative group">
                  
                  {/* Foto Profil (Ganti src dengan link foto Anda) */}
                  <img 
                    src="/myimg.jpeg" 
                    alt="Vina Roisatul Muna" 
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    onError={(e) => {
                      // Fallback Inisial Jika Foto Belum Ada
                      e.target.src = "https://ui-avatars.com/api/?name=Vina+Roisatul+Muna&background=BF953F&color=fff&size=512";
                    }}
                  />

                  {/* Overlay Gradasi agar menyatu */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  
                  {/* Badge Status */}
                  <div className="absolute bottom-5 left-4 right-4 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] text-[#FCF6BA] uppercase tracking-[0.2em] font-semibold">
                      Pengembang Materi
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* --- BAGIAN KANAN: DATA KONTEN BIOGRAFI --- */}
            <div className="flex flex-col flex-1 w-full text-left">
              
              {/* Header Nama */}
              <motion.div variants={fadeUp} className="mb-8">
                <h3 className="text-[#BF953F] text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-3 text-center lg:text-left">
                  Biografi Pembuat
                </h3>
                <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-2 text-center lg:text-left">
                  Vina Roisatul Muna
                </h2>
                <div className="text-center lg:text-left">
                  <p className="text-base md:text-lg text-[#FCF6BA]/80 font-light mt-2 border-b border-white/10 pb-4 inline-block w-full lg:w-auto">
                    Mahasiswi Program Magister (S2) Pendidikan Bahasa Arab
                  </p>
                </div>
              </motion.div>

              {/* Grid 1: Data Diri & Kontak Berbasis Kartu Kaca */}
              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                
                {/* Kartu Profil Dasar */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors flex flex-col justify-center">
                  <h4 className="text-[#BF953F] text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    Data Pribadi
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-white"><span className="text-gray-400">Lahir:</span> Kediri, 22 Mei 2002</p>
                    <p className="text-gray-400 text-xs leading-relaxed mt-1">
                      Dusun Kradenan, Desa Manyaran,<br/>Kec. Banyakan, Kab. Kediri
                    </p>
                  </div>
                </div>

                {/* Kartu Kontak & Sosial Media */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors flex flex-col justify-center">
                  <h4 className="text-[#BF953F] text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    Informasi Kontak
                  </h4>
                  <div className="space-y-2 text-sm text-white">
                    <p className="flex items-center gap-2">
                      <span className="text-gray-400 w-12">Email:</span> vinnarm2205.02@gmail.com
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-gray-400 w-12">Telp:</span> 085607616322
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-gray-400 w-12">Media:</span> ig @vinnaroisa_fuady
                    </p>
                  </div>
                </div>

              </motion.div>

              {/* Garis Vertikal (Timeline) Riwayat Pendidikan */}
              <motion.div variants={fadeUp} className="p-6 rounded-2xl bg-black/20 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#BF953F]/5 rounded-full blur-[40px]" />
                
                <h4 className="text-[#BF953F] text-sm font-semibold uppercase tracking-widest mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.5v-6.5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l-6.16-3.422a12.083 12.083 0 00-.665 6.479A11.952 11.952 0 0112 20.5v-6.5z" /></svg>
                  Riwayat Pendidikan
                </h4>
                
                <div className="space-y-5 border-l-2 border-white/10 pl-4 ml-2 relative z-10">
                  
                  {/* Tingkat S2 - Saat Ini (Highlight) */}
                  <div className="relative">
                    <span className="absolute -left-[23px] top-1 w-3 h-3 rounded-full bg-gradient-to-br from-[#FCF6BA] to-[#BF953F] shadow-[0_0_12px_rgba(191,149,63,0.6)]" />
                    <h5 className="text-white text-sm md:text-base font-medium">S2 PBA UIN Syekh Wasil Kediri</h5>
                    <span className="text-xs text-[#FCF6BA]/80 mt-0.5 block">2024 - 2026 (Saat ini)</span>
                  </div>

                  {/* Tingkat S1 */}
                  <div className="relative">
                    <span className="absolute -left-[22.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/20" />
                    <h5 className="text-white/80 text-sm md:text-base font-medium">S1 PBA UIN Syekh Wasil Kediri</h5>
                    <span className="text-xs text-gray-400 mt-0.5 block">2020 - 2024</span>
                  </div>

                  {/* Tingkat MA */}
                  <div className="relative">
                    <span className="absolute -left-[22.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/20" />
                    <h5 className="text-white/80 text-sm md:text-base font-medium">MAN 1 Kota Kediri</h5>
                    <span className="text-xs text-gray-400 mt-0.5 block">2017 - 2020</span>
                  </div>

                  {/* Tingkat MTs */}
                  <div className="relative">
                    <span className="absolute -left-[22.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/20" />
                    <h5 className="text-white/80 text-sm md:text-base font-medium">MTs Miftahul Afkar Selotopeng</h5>
                    <span className="text-xs text-gray-400 mt-0.5 block">2014 - 2017</span>
                  </div>

                  {/* Tingkat MI */}
                  <div className="relative">
                    <span className="absolute -left-[22.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/20" />
                    <h5 className="text-white/80 text-sm md:text-base font-medium">MI Miftahul Afkar Selotopeng</h5>
                    <span className="text-xs text-gray-400 mt-0.5 block">2008 - 2014</span>
                  </div>

                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}