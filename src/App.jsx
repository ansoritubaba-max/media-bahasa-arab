import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import BackgroundAnimated from './components/BackgroundAnimated';
import Hero from './components/Hero';
import Intro from './components/Intro';
import CapaianKompetensi from './components/CapaianKompetensi';
import Kosakata from './components/Kosakata';
import Materi from './components/Materi';
import VideoSection from './components/VideoSection';
import Quiz from './components/Quiz';
import BottomNav from './components/BottomNav';

function App() {
  // State untuk menyimpan halaman yang sedang aktif. Default: 'home'
  const [activePage, setActivePage] = useState('home');

  // Fungsi untuk me-render komponen berdasarkan state activePage
  const renderPage = () => {
    switch (activePage) {
      case 'home': return <Hero setActivePage={setActivePage} />; // Kita lempar fungsi ini ke Hero
      case 'intro': return <Intro />;
      case 'kompetensi': return <CapaianKompetensi />;
      case 'kosakata': return <Kosakata />;
      case 'materi': return <Materi />;
      case 'video': return <VideoSection />;
      case 'kuis': return <Quiz />;
      default: return <Hero setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="font-sans overflow-x-hidden text-[var(--color-platinum)] selection:bg-[var(--color-gold-champagne)] selection:text-[var(--color-obsidian)] min-h-screen relative pb-28">
      
      <BackgroundAnimated />
      
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-center">
        {/* AnimatePresence mengontrol animasi saat komponen masuk & keluar */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage} // Key ini penting agar React tahu kapan harus memicu animasi
            initial={{ opacity: 0, scale: 0.98, filter: "blur(5px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.02, filter: "blur(5px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lempar state ke BottomNav agar navigasi tahu tombol mana yang sedang aktif */}
      <BottomNav activePage={activePage} setActivePage={setActivePage} />
      
    </div>
  )
}

export default App;