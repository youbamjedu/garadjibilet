import { useState, useEffect, useRef } from 'react';
import { RouterProvider } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { router } from './routes';

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasInteracted = useRef(false);
  const fadeIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 500);
          return 100;
        }
        return p + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(onComplete, 800);
    }
  }, [isLoaded, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#02050A]"
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <div className="w-24 h-24 mb-8 mx-auto relative">
          <div className="absolute inset-0 border-t-2 border-[#E1FF00] rounded-full animate-spin" style={{ animationDuration: '2s' }} />
          <div className="absolute inset-2 border-r-2 border-[#3CE89B] rounded-full animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
          <div className="absolute inset-0 flex items-center justify-center text-[#E1FF00] font-mono text-sm font-bold">
            {progress}%
          </div>
        </div>

        <h1 className="text-white text-3xl font-black mb-3 tracking-wider" style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}>
          ملحمة <span className="text-[#E1FF00]">الصلب</span>
        </h1>
        <p className="text-white/40 text-sm font-mono tracking-widest uppercase">
          {isLoaded ? 'SYSTEM READY' : 'INITIALIZING DATA...'}
        </p>
      </motion.div>

      {/* شريط التحميل السفلي */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#3CE89B] to-[#E1FF00]"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.2 }}
        />
      </div>

      {isLoaded && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center justify-center overflow-hidden h-6">
          <motion.div
            className="text-2xl"
            animate={{ x: [-200, 200] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
          >
            🚂
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full overflow-x-hidden bg-[#05080F]" style={{ position: 'relative' }}>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.8, delay: 0.2 }}
            className="w-full flex flex-col"
            style={{ fontFamily: "'Noto Sans Arabic', 'Almarai', 'Inter', sans-serif" }}
          >
            <RouterProvider router={router} />
          </motion.div>
        )}
      </AnimatePresence>
      <SpeedInsights />
    </div>
  );
}