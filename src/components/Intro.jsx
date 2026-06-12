import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Animasi Parallax & Scrubbing pada Kartu Kaca
    gsap.from(".glass-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "top 30%",
        scrub: 1.5,
      },
      y: 150,
      scale: 0.8,
      opacity: 0,
      rotationX: 10,
      transformPerspective: 1000,
      ease: "power2.out"
    });

    // Efek Stagger (Muncul berurutan) pada Teks dan Ikon
    gsap.from(".text-animate", {
      scrollTrigger: {
        trigger: ".glass-card",
        start: "top 70%",
        end: "top 40%",
        scrub: 1.5,
      },
      y: 40,
      opacity: 0,
      stagger: 0.2,
      ease: "power1.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 px-6 relative z-20" style={{ perspective: "1000px" }}>
      
      {/* Menggunakan class glass-premium bawaan index.css yang baru */}
      <div className="glass-card glass-premium max-w-4xl mx-auto p-10 md:p-16 rounded-[3rem] text-center relative overflow-hidden">
        
        {/* Ornamen Glow (Pencahayaan dalam kaca) */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--color-emerald-glow)] opacity-30 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[var(--color-gold-champagne)] opacity-10 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-animate text-3xl md:text-5xl font-semibold mb-12 text-gold-gradient tracking-wide">
            Petunjuk Penggunaan
          </h2>

          {/* Daftar Panduan Eksklusif */}
          <div className="flex flex-col gap-8 text-left max-w-2xl mx-auto">
            
            {/* Poin 1: Interaksi */}
            <div className="text-animate flex items-start gap-5 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-emerald-glow)]/30 border border-[var(--color-gold-champagne)]/30 flex items-center justify-center text-[var(--color-gold-champagne)] group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-platinum)] mb-2 group-hover:text-[var(--color-gold-light)] transition-colors">Eksplorasi Interaktif</h3>
                <p className="text-[var(--color-platinum)]/70 font-light text-base leading-relaxed">
                  Arahkan kursor (<span className="italic">hover</span>) atau ketuk (<span className="italic">tap</span>) pada kartu materi untuk menyingkap terjemahan rahasia dan struktur tata bahasa di dalamnya.
                </p>
              </div>
            </div>

            {/* Poin 2: Multimedia */}
            <div className="text-animate flex items-start gap-5 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-emerald-glow)]/30 border border-[var(--color-gold-champagne)]/30 flex items-center justify-center text-[var(--color-gold-champagne)] group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-platinum)] mb-2 group-hover:text-[var(--color-gold-light)] transition-colors">Simak Pelafalan</h3>
                <p className="text-[var(--color-platinum)]/70 font-light text-base leading-relaxed">
                  Gunakan tombol audio di sudut kartu dan pemutar video yang disediakan untuk mempraktikkan pelafalan kosakata bahasa Arab secara tepat.
                </p>
              </div>
            </div>

            {/* Poin 3: Latihan */}
            <div className="text-animate flex items-start gap-5 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-emerald-glow)]/30 border border-[var(--color-gold-champagne)]/30 flex items-center justify-center text-[var(--color-gold-champagne)] group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-platinum)] mb-2 group-hover:text-[var(--color-gold-light)] transition-colors">Evaluasi Mandiri</h3>
                <p className="text-[var(--color-platinum)]/70 font-light text-base leading-relaxed">
                  Akhiri sesi dengan fitur "Tadribat" (kuis Benar/Salah interaktif) di akhir materi untuk mengukur insting linguistik Anda secara <span className="italic">real-time</span>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}