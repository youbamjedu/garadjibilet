import { motion } from 'motion/react';
import { PenTool, Landmark, Cpu, ArrowUp, Compass, Bookmark } from 'lucide-react';

// ── EDITORIAL TYPOGRAPHY SYSTEM ──────────────────────────────────────────────
const FONT_AJ = "'Al Jazeera', sans-serif";
const FONT_TJ = "'Tajawal', sans-serif";
const FONT_IBM = "'IBM Plex Sans Arabic', sans-serif";

// ── RESTRAINED DOCUMENTARY PALETTE ───────────────────────────────────────────
const C = {
  void:    '#040609',   // Deep documentary night
  deep:    '#0A0D14',   // Editorial charcoal
  brass:   '#B59A72',   // Documentary brass
  steel:   '#4A6984',   // Industrial steel blue
  cream:   '#F4EFEA',   // Parchment white
  w04:     'rgba(244,239,234,0.04)',
  w10:     'rgba(244,239,234,0.1)',
  w30:     'rgba(244,239,234,0.3)',
  w50:     'rgba(244,239,234,0.5)',
};

export function Footer() {
  const scrollToTop = () => {
    const hero = document.getElementById('hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLinkClick = (id: string) => {
    if (id.startsWith('#')) {
      const element = document.getElementById(id.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = id;
    }
  };

  return (
    <footer className="relative py-24 border-t border-white/5 overflow-hidden" style={{ background: C.void }} dir="rtl">
      {/* Cinematic Atmospheric Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#B59A72]/3 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center">
        
        {/* ── 1. SIGN-OFF SIGNAL (Documentary Closure) ── */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12 text-center"
        >
          <p className="text-[10px] tracking-[0.35em] uppercase font-light text-white" style={{ fontFamily: FONT_IBM }}>
            End of the Interactive Report
          </p>
        </motion.div>

        {/* ── 2. EDITORIAL CLOSING QUOTE (البيان الختامي الفلسفي) ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-light italic leading-relaxed text-white/90" style={{ fontFamily: FONT_AJ }}>
            "
  في النهاية، لا يختبر هذا المشروع قدرات الذكاء الاصطناعي،
  بل يختبر كيف يمكن للصحافة الجزائرية أن تعيد ابتكار لغتها الرقمية دون أن تفقد جوهرها الإنساني."
          </p>
          <div className="h-px w-12 bg-[#B59A72]/40 mx-auto mt-8" />
        </motion.div>

        {/* ── 3. METADATA DESCRIPTION & COMPETITION BANNER (الطبقة التعريفية والمسابقاتية) ── */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center flex flex-col items-center gap-3 mb-20 max-w-2xl border-b border-white/5 pb-12 w-full"
        >
          <p className="text-xs tracking-wide font-light opacity-80" style={{ color: C.cream, fontFamily: FONT_IBM }}>
            Interactive Web Documentary exploring AI, storytelling and the future of digital journalism in Algeria.
          </p>
          <div className="flex items-center gap-2 mt-1 text-[10px] tracking-[0.2em] font-bold text-[#B59A72]" style={{ fontFamily: FONT_IBM }}>
            <Cpu size={12} />
            <span>OOREDOO RISING STAR 2026 — DIGITAL REPORT CATEGORY</span>
          </div>
        </motion.div>

        {/* ── 4. MULTI-LAYERED NARRATIVE NAVIGATION (الشبكة التشعبية المقسمة) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 w-full max-w-4xl border-b border-white/5 pb-20 mb-16">
          
          {/* Documentary Experience Column */}
          <div className="flex flex-col gap-5 text-right">
            <div className="flex items-center gap-2 border-b border-white/5 pb-2 opacity-40">
              <Bookmark size={12} style={{ color: C.steel }} />
              <h4 className="text-[10px] tracking-[0.2em] uppercase font-bold text-white" style={{ fontFamily: FONT_IBM }}>
                Documentary Experience
              </h4>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: '#hero', label: 'بداية السرد' },
                { id: '#route', label: 'مسار الجغرافيا' },
                { id: '#construction', label: 'التحول الميداني' },
                { id: '#economic', label: 'التوازن الاقتصادي' },
                { id: '#industrial', label: 'السيادة الصناعية' },
                { id: '#export', label: 'التصدير والآفاق' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="text-right text-xs opacity-50 hover:opacity-100 transition-opacity duration-300 text-white/80"
                  style={{ fontFamily: FONT_TJ }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Editorial Context Column */}
          <div className="flex flex-col gap-5 text-right">
            <div className="flex items-center gap-2 border-b border-white/5 pb-2 opacity-40">
              <Compass size={12} style={{ color: C.brass }} />
              <h4 className="text-[10px] tracking-[0.2em] uppercase font-bold text-white" style={{ fontFamily: FONT_IBM }}>
                Editorial Context
              </h4>
            </div>
            <div className="flex flex-col gap-3.5">
              <button
                onClick={() => handleLinkClick('/methodology')}
                className="text-right text-xs opacity-50 hover:opacity-100 transition-opacity duration-300 text-white/80"
                style={{ fontFamily: FONT_TJ }}
              >
                المنهجية والمصادر
              </button>
              <button
                onClick={() => handleLinkClick('/about')}
                className="text-right text-xs opacity-50 hover:opacity-100 transition-opacity duration-300 text-white/80"
                style={{ fontFamily: FONT_TJ }}
              >
                خلف المنصة
              </button>
            </div>
          </div>

        </div>

        {/* ── 5. BACK TO START (العودة السردية إلى البداية) ── */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
        >
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs uppercase tracking-widest transition-colors duration-300 text-white hover:text-[#B59A72]"
            style={{ fontFamily: FONT_TJ }}
          >
            <span>العودة إلى بداية التجربة</span>
            <ArrowUp size={12} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>

        {/* ── 6. BOTTOM ACADEMIC SIGNATURE (الإقرار الأكاديمي الصامت) ── */}
        <div className="w-full text-center flex flex-col gap-4 items-center">
          <p className="text-[11px] font-light flex items-center justify-center gap-2 flex-wrap opacity-40" style={{ color: C.cream, fontFamily: FONT_TJ }}>
            <span>© 2026 جميع الحقوق محفوظة.</span>
            <span className="opacity-30">|</span>
            <span className="flex items-center gap-1">
              <PenTool size={11} style={{ color: C.brass }} />
              رؤية وإعداد: <strong className="text-white font-bold">يوب محمد أمجد</strong>
            </span>
          </p>
          
          <p className="text-[10px] leading-relaxed opacity-30 flex items-center justify-center gap-2 max-w-3xl" style={{ color: C.cream, fontFamily: FONT_TJ }}>
            <Landmark size={11} />
            <span>Human-directed digital journalism experience — ماستر التصميم المعلوماتي والصحافة العابرة للوسائط — جامعة قاصدي مرباح ورقلة</span>
          </p>
        </div>

      </div>
    </footer>
  );
}