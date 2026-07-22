import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// ── EDITORIAL TYPOGRAPHY SYSTEM ──────────────────────────────────────────────
const FONT_AJ = "'Al Jazeera'";
const FONT_TJ = "'Tajawal'";
const FONT_IBM = "'IBM Plex Sans Arabic'";

// ── RESTRAINED DOCUMENTARY PALETTE ───────────────────────────────────────────
const C = {
  void:    '#040609',
  deep:    '#0A0D14',
  brass:   '#B59A72',
  steel:   '#4A6984',
  cream:   '#F4EFEA',
  w04:     'rgba(244,239,234,0.04)',
  w10:     'rgba(244,239,234,0.1)',
  w30:     'rgba(244,239,234,0.3)',
  w50:     'rgba(244,239,234,0.5)',
};

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  
  // Smooth cinematic scroll choreography
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Documentary pacing
  const docTransition = { duration: 1.6, ease: [0.16, 1, 0.3, 1] };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative w-full h-screen overflow-hidden flex items-center bg-[#040609]"
      dir="rtl"
    >
      {/* ── AUTHENTIC DOCUMENTARY IMAGE ── */}
      {/* Natural colors preserved. No heavy orange/teal grading. */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <img
          src="https://i.ibb.co/Cp2s6MzN/main-picture.png"
          alt="غارا جبيلات - المشهد الميداني"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Subtle editorial gradient ONLY for text legibility */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "linear-gradient(to left, rgba(4,6,9,0.9) 0%, rgba(4,6,9,0.5) 45%, transparent 100%)",
        }}
      />
      {/* Bottom atmospheric fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-[2] pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(4,6,9,0.8), transparent)",
        }}
      />

      {/* ── EDITORIAL CONTENT ── */}
      <div className="relative z-10 w-full h-full flex items-center justify-start px-6 sm:px-12 lg:px-24">
        <motion.div
          className="max-w-3xl text-right"
          style={{ y: textY, opacity }}
        >
          {/* Restrained Contextual Badge */}
          <motion.div
            className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 rounded-sm border"
            style={{
              background: C.w04,
              borderColor: C.w10,
              backdropFilter: "blur(4px)"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, ...docTransition }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: C.brass }} />
            <span
              className="text-[10px] font-bold tracking-[0.2em] uppercase"
              style={{ color: C.w50, fontFamily: FONT_IBM }}
            >
              Interactive Documentary · 2026
            </span>
          </motion.div>

          {/* Monumental Editorial Title */}
          <motion.h1
            className="mb-6 leading-[1.1] text-6xl sm:text-7xl lg:text-[7.5rem] font-black tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, ...docTransition }}
            style={{ color: C.cream, fontFamily: FONT_AJ }}
          >
            غارا جبيلات
          </motion.h1>

          {/* Reflective Subtitle */}
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-light mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, ...docTransition }}
            style={{ color: C.brass, fontFamily: FONT_AJ }}
          >
            استيقاظ الجغرافيا.
          </motion.h2>

          {/* Documentary Narrative Copy */}
          <motion.p
            className="text-base sm:text-lg lg:text-xl leading-[2.2] mb-12 font-light max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, ...docTransition }}
            style={{ color: C.w50, fontFamily: FONT_TJ }}
          >
            بعد عقود من الانتظار والصمت، تتحول أكبر احتياطيات الحديد في الصحراء الكبرى إلى شريان ينبض بالحياة، لترسم مساراً جديداً للسيادة الصناعية وتعيد تشكيل التوازن الاقتصادي الوطني.
          </motion.p>

          {/* Restrained Invitation Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <button
              onClick={() => document.getElementById("historical")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center gap-4 px-8 py-3.5 rounded-sm border transition-all duration-500"
              style={{
                borderColor: C.w30,
                color: C.cream,
                background: "transparent",
                fontFamily: FONT_TJ
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = C.w04;
                e.currentTarget.style.borderColor = C.w50;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = C.w30;
              }}
            >
              <span className="text-sm font-bold tracking-wide">ابدأ القراءة</span>
              <svg 
                className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-500" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                style={{ opacity: 0.7 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* ── CINEMATIC POETIC WHISPER ── */}
      {/* Reduced theatrical effects. Now feels like a quiet, reflective archival note. */}
      <motion.div
        className="absolute left-6 sm:left-12 bottom-12 sm:bottom-16 z-20 pointer-events-none hidden sm:block"
        style={{ opacity }} // استخدام متغير الشفافية الديناميكي الخاص بك
        initial={{ opacity: 0, y: 10 }} // إضافة حركة صعود خفيفة جداً للنعومة
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 2 }}
        dir="rtl"
      >
        {/* تحويل flex إلى flex-col لترتيبها عمودياً، مع إضافة الخط الأحمر على اليمين */}
        <div
          className="flex flex-col gap-1.5 text-sm sm:text-base font-light tracking-wide opacity-75 border-r-[3px] pr-4"
          style={{ 
            fontFamily: FONT_AJ, 
            borderColor: '#D21034' // اللون الأحمر للعلم
          }}
        >
          {/* الشطر الأول: اللون الأبيض (استخدمنا C.cream الخاص بك ليتناسق مع تصميمك) */}
          <span className="font-[Cairo] drop-shadow-md" style={{ color: C.cream }}>
            "جزائر يا مطلع المعجزات
          </span>
          
          {/* الشطر الثاني: اللون الأخضر للعلم الجزائري */}
          <span className="font-[Cairo] font-normal drop-shadow-md" style={{ color: '#00A650' }}>
            ويا حجة الله في الكائنات"
          </span>
        </div>
      </motion.div>

      {/* ── EDITORIAL SCROLL GUIDANCE ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        style={{ opacity }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1.5 }}
      >
        <span
          className="text-[9px] tracking-[0.2em] uppercase font-light"
          style={{ color: C.w30, fontFamily: FONT_IBM }}
        >
          Scroll to explore
        </span>
        <div className="w-px h-12 overflow-hidden relative" style={{ background: C.w10 }}>
          <motion.div
            className="w-full h-1/2"
            style={{ background: C.w50 }}
            animate={{ y: ["-100%", "200%"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}