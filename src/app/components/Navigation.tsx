import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X, TerminalSquare, Compass, Bookmark } from "lucide-react";

// ── EDITORIAL TYPOGRAPHY SYSTEM ──────────────────────────────────────────────
const FONT_AJ = "'Al Jazeera', sans-serif";
const FONT_TJ = "'Tajawal', sans-serif";
const FONT_IBM = "'IBM Plex Sans Arabic', sans-serif";

// ── RESTRAINED DOCUMENTARY PALETTE ───────────────────────────────────────────
const C = {
  void:    '#040609',   // Deep documentary night
  deep:    '#0A0D14',   // Editorial charcoal
  brass:   '#B59A72',   // Documentary brass
  steel:   '#4A6984',   // Industrial steel Blue
  cream:   '#F4EFEA',   // Parchment white
  w04:     'rgba(244,239,234,0.04)',
  w10:     'rgba(244,239,234,0.1)',
  w30:     'rgba(244,239,234,0.3)',
  w50:     'rgba(244,239,234,0.5)',
};

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const { pathname } = useLocation();

  const isHomePage = pathname === "/";

  // تحويل نسبة التمرير إلى رقم مئوي دقيق للمؤشر التحريري
  const [readingPercent, setReadingPercent] = useState(0);
  
  useEffect(() => {
    const unsubscribeScrollY = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
    const unsubscribeProgress = scrollYProgress.onChange((latest) => {
      setReadingPercent(Math.round(latest * 100));
    });

    return () => {
      unsubscribeScrollY();
      unsubscribeProgress();
    };
  }, [scrollY, scrollYProgress]);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── DESKTOP & MOBILE HEADER ── */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled ? "bg-[#040609]/95 backdrop-blur-md border-white/5 py-4" : "bg-transparent border-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* ── 1. الهوية العلوية التحريرية المحدثة ── */}
          <Link to="/" className="flex flex-col z-50 relative group" onClick={() => setMenuOpen(false)}>
            <h1 className="text-xl md:text-2xl font-black tracking-tight flex items-center gap-2" style={{ color: C.cream, fontFamily: FONT_AJ }}>
              غارا جبيلات <span style={{ color: C.brass }}>2026</span>
            </h1>
            <div className="flex items-center gap-1.5 opacity-40 group-hover:opacity-80 transition-opacity">
              <TerminalSquare size={9} style={{ color: C.brass }} />
              <span className="text-[8px] tracking-[0.25em] uppercase font-bold" style={{ color: C.cream, fontFamily: FONT_IBM }}>
                Interactive Journalism Experience
              </span>
            </div>
          </Link>

          {/* ── 2. مؤشر READING PROGRESS ذو الطابع التحريري العالمي (NYT/FT Vibe) ── */}
          {isHomePage && isScrolled && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:flex items-center gap-3 border-r border-white/10 pr-4"
              dir="rtl"
            >
              <span className="text-[9px] tracking-[0.3em] uppercase font-light opacity-40" style={{ color: C.cream, fontFamily: FONT_IBM }}>
                Reading Progress
              </span>
              <span className="text-xs font-mono font-bold" style={{ color: C.brass }}>
                {readingPercent}%
              </span>
            </motion.div>
          )}

          {/* ── 3. الروابط الأفقية لسطح المكتب (الأقسام الرئيسية الثابتة) ── */}
          <div className="hidden md:flex items-center gap-8" dir="rtl">
            <Link
              to="/"
              className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-[#B59A72] ${
                pathname === "/" ? "text-[#B59A72]" : "text-white/60"
              }`}
              style={{ fontFamily: FONT_TJ }}
            >
              التجربة التفاعلية
            </Link>
            <Link
              to="/methodology"
              className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-[#B59A72] ${
                pathname === "/methodology" ? "text-[#B59A72]" : "text-white/60"
              }`}
              style={{ fontFamily: FONT_TJ }}
            >
              المنهجية والمصادر
            </Link>
            <Link
              to="/about"
              className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-[#B59A72] ${
                pathname === "/about" ? "text-[#B59A72]" : "text-white/60"
              }`}
              style={{ fontFamily: FONT_TJ }}
            >
              خلف المنصة
            </Link>
          </div>

          {/* زر فتح القائمة المتشعبة */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 p-2 text-white hover:text-[#B59A72] transition-colors flex items-center gap-2 group"
          >
            <span className="text-[10px] tracking-widest font-mono uppercase opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline" style={{ color: C.brass }}>
              {menuOpen ? "Close Index" : "Explore Index"}
            </span>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* ── 4. القائمة الكاملة المتشعبة والمقسمة إلى طبقتين (Fullscreen Narrative Branching) ── */}
      {menuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-[#040609]/98 backdrop-blur-xl flex flex-col justify-center items-center px-6"
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          dir="rtl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 max-w-5xl w-full mx-auto border-t border-b border-white/5 py-12 md:py-20">
            
            {/* ── الطبقة الأولى: السياق التحريري (Editorial Context Layer) ── */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                <Compass size={14} style={{ color: C.brass }} />
                <h3 className="text-[10px] tracking-[0.25em] uppercase font-bold" style={{ color: C.brass, fontFamily: FONT_IBM }}>
                  Editorial Context
                </h3>
              </div>
              
              <div className="flex flex-col gap-5">
                <Link
                  to="/"
                  onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className={`text-xl md:text-2xl font-black transition-colors ${pathname === "/" ? "text-[#B59A72]" : "text-white hover:text-[#B59A72]"}`}
                  style={{ fontFamily: FONT_AJ }}
                >
                  الرؤية والافتتاحية
                </Link>
                <Link
                  to="/methodology"
                  onClick={() => setMenuOpen(false)}
                  className={`text-xl md:text-2xl font-black transition-colors ${pathname === "/methodology" ? "text-[#B59A72]" : "text-white hover:text-[#B59A72]"}`}
                  style={{ fontFamily: FONT_AJ }}
                >
                  المنهجية والمصادر
                </Link>
                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className={`text-2xl md:text-3xl font-black transition-colors ${pathname === "/about" ? "text-[#B59A72]" : "text-white hover:text-[#B59A72]"}`}
                  style={{ fontFamily: FONT_AJ }}
                >
                  خلف المشروع
                </Link>
              </div>
            </div>

            {/* ── الطبقة الثانية: التجربة التوثيقية (Documentary Experience Layer) ── */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                <Bookmark size={14} style={{ color: C.steel }} />
                <h3 className="text-[10px] tracking-[0.25em] uppercase font-bold" style={{ color: C.steel, fontFamily: FONT_IBM }}>
                  Documentary Experience
                </h3>
              </div>

              {isHomePage ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {[
                    { id: "hero", label: "بداية التجربة" },
                    { id: "historical", label: "جذور المشروع" },
                    { id: "route", label: "مسار الجغرافيا" },
                    { id: "construction", label: "التحول الميداني" },
                    { id: "economic", label: "التوازن الاقتصادي" },
                    { id: "industrial", label: "منصات التحويل" },
                    { id: "export", label: "التصدير والآفاق" },
                  ].map((link, index) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="text-right text-base font-light transition-colors hover:text-white flex items-center gap-3 group/item"
                      style={{ color: C.w50, fontFamily: FONT_TJ }}
                    >
                      <span className="text-[10px] font-mono font-bold opacity-40 group-hover/item:opacity-100 transition-opacity" style={{ color: C.brass }}>
                        0{index + 1}
                      </span>
                      <span className="border-b border-transparent group-hover/item:border-white/20 pb-0.5 transition-all">
                        {link.label}
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col justify-center h-full">
                  <p className="text-xs leading-relaxed" style={{ color: C.w30, fontFamily: FONT_TJ }}>
                    يرجى العودة إلى صفحة "التجربة التفاعلية" للوصول المباشر إلى فصول التقرير التوثيقي لغارا جبيلات.
                  </p>
                  <Link 
                    to="/" 
                    onClick={() => setMenuOpen(false)}
                    className="text-xs font-bold mt-4 uppercase tracking-wider inline-flex items-center gap-1" 
                    style={{ color: C.brass, fontFamily: FONT_IBM }}
                  >
                    ← الانتقال الآن
                  </Link>
                </div>
              )}
            </div>

          </div>

          {/* التذييل الصغير الموصوف أسفل الفهرس المفتوح */}
          <div className="mt-12 text-center opacity-25 select-none">
            <p className="text-[9px] tracking-[0.3em] uppercase font-light text-white" style={{ fontFamily: FONT_IBM }}>
              Web Documentary — Data Storytelling — Ooredoo Rising Star 2026
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
}