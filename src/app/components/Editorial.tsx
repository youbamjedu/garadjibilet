import { useRef, ReactNode } from 'react';
import { motion, useScroll, useSpring, useInView, useTransform } from 'motion/react';

/* ────────────────────────────────────────────────────────────
   EDITORIAL PRIMITIVES
   نظام تصميم صحفي وثائقي متكامل، يوحد الخطوط والألوان
   لخلق تجربة قراءة تفاعلية (Scrollytelling) رصينة.
   ──────────────────────────────────────────────────────────── */

// ── EDITORIAL TYPOGRAPHY SYSTEM ──
const FONT_AJ = "'Al Jazeera', sans-serif";
const FONT_TJ = "'Tajawal', sans-serif";
const FONT_IBM = "'IBM Plex Sans Arabic', sans-serif";

// ── RESTRAINED DOCUMENTARY PALETTE ──
const C = {
  void:    '#040609',   // Deep documentary night
  deep:    '#0A0D14',   // Editorial charcoal
  brass:   '#B59A72',   // Documentary brass (replaces old ED_GOLD)
  rust:    '#9A4C3A',   // Oxidized iron (replaces old ED_RUST)
  cream:   '#F4EFEA',   // Parchment white
  muted:   'rgba(244, 239, 234, 0.62)',
};

/* ── ScrollProgress ─────────────────────────────────────────
   شريط التقدم العلوي: يعطي القارئ إشارة هادئة لموقعه في المقال. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[100] h-[2px] origin-right pointer-events-none"
      style={{
        scaleX: x,
        background: `linear-gradient(to left, ${C.brass}, ${C.rust})`,
      }}
    />
  );
}

/* ── DropCap ────────────────────────────────────────────────
   الحرف الاستهلالي الكبير لبداية الفصول (بأسلوب المجلات الكبرى). */
export function DropCap({ children, color = C.brass }: { children: ReactNode; color?: string }) {
  return (
    <span
      className="float-right ms-3 mb-1 font-bold leading-none select-none"
      style={{
        color,
        fontSize: 'clamp(3.5rem, 6vw, 5rem)',
        lineHeight: '0.85',
        marginTop: '0.18em',
        fontFamily: FONT_AJ
      }}
    >
      {children}
    </span>
  );
}

/* ── PullQuote ──────────────────────────────────────────────
   اقتباس عريض لكسر الإيقاع وإعطاء مساحة للتنفس البصري. */
export function PullQuote({
  children,
  attribution,
  align = 'center',
  accent = C.brass,
}: {
  children: ReactNode;
  attribution?: string;
  align?: 'center' | 'right' | 'left';
  accent?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });
  const alignClass = align === 'center' ? 'text-center mx-auto' : align === 'right' ? 'text-right ms-auto' : 'text-left me-auto';
  
  return (
    <motion.figure
      ref={ref}
      dir="rtl"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative max-w-4xl my-20 px-6 ${alignClass}`}
    >
      <div
        aria-hidden
        className="mx-auto mb-8 h-px w-16"
        style={{ background: accent, opacity: 0.6 }}
      />
      <blockquote
        className="font-light leading-[1.8] italic"
        style={{
          fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
          color: C.cream,
          fontFamily: FONT_AJ,
        }}
      >
        "{children}"
      </blockquote>
      {attribution && (
        <figcaption
          className="mt-8 text-sm tracking-wider font-bold"
          style={{ color: accent, opacity: 0.85, fontFamily: FONT_TJ }}
        >
          — {attribution}
        </figcaption>
      )}
    </motion.figure>
  );
}

/* ── VisualPause ────────────────────────────────────────────
   الفاصل البصري السينمائي (الجسر التنفسي بين الأقسام). */
export function VisualPause({
  caption,
  height = '40svh',
  background = `linear-gradient(180deg, ${C.void} 0%, ${C.deep} 50%, ${C.void} 100%)`,
}: {
  caption?: string;
  height?: string;
  background?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-30%' });
  
  return (
    <div
      ref={ref}
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ height, background }}
    >
      <motion.div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 h-full w-px"
        style={{ background: `linear-gradient(to bottom, transparent, ${C.brass}40, transparent)` }}
        initial={{ opacity: 0, scaleY: 0.4 }}
        animate={inView ? { opacity: 1, scaleY: 1 } : {}}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />
      {caption && (
        <motion.p
          dir="rtl"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="relative px-6 text-center max-w-lg"
          style={{
            color: C.muted,
            fontSize: '1rem',
            lineHeight: 2,
            fontFamily: FONT_TJ
          }}
        >
          {caption}
        </motion.p>
      )}
    </div>
  );
}

/* ── Caption ────────────────────────────────────────────────
   وصف تعريفي بأسلوب وثائقي يرافق الصور الثابتة. */
export function Caption({ children, source }: { children: ReactNode; source?: string; }) {
  return (
    <figcaption dir="rtl" className="mt-4 text-sm leading-relaxed" style={{ color: C.muted, fontFamily: FONT_TJ }}>
      <span>{children}</span>
      {source && (
        <span
          className="block mt-2 text-[10px] tracking-widest uppercase font-bold"
          style={{ color: C.brass, fontFamily: FONT_IBM }}
        >
          {source}
        </span>
      )}
    </figcaption>
  );
}

/* ── EditorialStat ──────────────────────────────────────────
   إحصائية بارزة مدعمة بسياق صحفي، تستبدل بطاقات البيانات التقليدية. */
export function EditorialStat({
  value,
  unit,
  headline,
  context,
  color = C.brass,
}: {
  value: string;
  unit?: string;
  headline: string;
  context: string;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });
  
  return (
    <motion.div
      ref={ref}
      dir="rtl"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-10 border-t border-white/5"
    >
      <div className="md:col-span-5">
        <div
          className="font-light leading-none"
          style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', color, fontFamily: FONT_IBM }}
        >
          {value}
          {unit && (
            <span className="ms-3 align-baseline text-sm font-medium" style={{ color: C.muted, fontFamily: FONT_TJ }}>
              {unit}
            </span>
          )}
        </div>
      </div>
      <div className="md:col-span-7 flex flex-col justify-center">
        <h3 className="font-bold mb-3 text-xl" style={{ color: C.cream, fontFamily: FONT_AJ }}>
          {headline}
        </h3>
        <p className="leading-[2] text-base font-light" style={{ color: C.muted, fontFamily: FONT_TJ }}>
          {context}
        </p>
      </div>
    </motion.div>
  );
}

/* ── ChapterMarker ──────────────────────────────────────────
   مؤشر استهلالي للفصول، يعطي طابعاً تراتبياً وهادئاً. */
export function ChapterMarker({
  number,
  label,
  accent = C.brass,
}: {
  number: string;
  label: string;
  accent?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  
  return (
    <motion.div
      ref={ref}
      dir="rtl"
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-5 mb-12"
    >
      <span className="text-[11px] tracking-widest font-bold uppercase" style={{ color: accent, fontFamily: FONT_TJ }}>
        فصل {number}
      </span>
      <div className="h-px flex-1 max-w-[120px]" style={{ background: `${accent}55` }} />
      <span className="text-[12px] tracking-widest font-light uppercase" style={{ color: C.muted, fontFamily: FONT_IBM }}>
        {label}
      </span>
    </motion.div>
  );
}

/* ── StickyParallax ─────────────────────────────────────────
   غلاف تمرير ثابت يسمح للنصوص بالمرور فوق صورة خلفية تتحرك ببطء (Parallax). */
export function StickyParallax({
  image,
  alt = '',
  children,
  overlayOpacity = 0.65,
}: {
  image: string;
  alt?: string;
  children: ReactNode;
  overlayOpacity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  
  return (
    <section ref={ref} className="relative">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <motion.img
          src={image}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-50"
          style={{ y, scale: 1.08 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(180deg, rgba(4,6,9,${overlayOpacity}) 0%, rgba(4,6,9,${Math.min(overlayOpacity + 0.3, 1)}) 100%)` }}
        />
      </div>
      <div className="relative -mt-[100svh] z-10">{children}</div>
    </section>
  );
}