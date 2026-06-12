import { motion } from 'framer-motion';

// Menerima props dari App.jsx
export default function BottomNav({ activePage, setActivePage }) {
  const navItems = [
    { 
      name: 'Utama', 
      id: 'home',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    },
    { 
      name: 'CP DAN ATP', 
      id: 'kompetensi',
      icon: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7l6-3 5.447 2.724A1 1 0 0121 7.618v10.764a1 1 0 01-1.447.894L15 17l-6 3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7v13M15 4v13" />
        </>
      )
    },
    { 
      name: 'Kosakata', 
      id: 'kosakata',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    },
    { 
      name: 'Materi', 
      id: 'materi',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    },
    { 
      name: 'Video', 
      id: 'video',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    { 
      name: 'Kuis', 
      id: 'kuis',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    }
  ];

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1, type: "spring", bounce: 0.4 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-lg md:max-w-2xl"
    >
      <div className="glass-premium rounded-full flex justify-between items-center px-4 md:px-8 py-4">
        {navItems.map((item) => {
          // Cek apakah item ini adalah halaman yang sedang dibuka
          const isActive = activePage === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.95 }}
              // Warna berubah jadi Emas menyala jika aktif, abu-abu redup jika tidak
              className={`flex flex-col items-center justify-center transition-all duration-300 group flex-1 ${isActive ? 'text-[var(--color-gold-champagne)]' : 'text-[var(--color-platinum)]/50 hover:text-[var(--color-gold-light)]'}`}
            >
              <svg 
                className={`w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-1.5 transition-all duration-300 ${isActive ? 'drop-shadow-[0_0_15px_rgba(212,175,55,1)] scale-110' : 'group-hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.8)]'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {item.icon}
              </svg>
              <span className={`text-[8px] md:text-[9px] font-bold tracking-widest uppercase transition-colors ${isActive ? 'text-[var(--color-gold-champagne)]' : 'group-hover:text-[var(--color-gold-champagne)]'}`}>
                {item.name}
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}