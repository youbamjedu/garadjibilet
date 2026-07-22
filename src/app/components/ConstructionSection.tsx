import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';

// ── IMAGE SLOTS ──
// صور وثائقية حقيقية تُعرض بألوانها الطبيعية دون فلاتر مصطنعة
import IMG_TEBBOUNE from '../../imports/678.jpg';
import IMG_RAILWAY  from '../../imports/5.png';
import IMG_TRAIN    from '../../imports/5.png';
import IMG_BRIDGE   from '../../imports/6.png';
import IMG_WORKERS  from '../../imports/7.png';

// ── EDITORIAL TYPOGRAPHY SYSTEM ──────────────────────────────────────────────
const FONT_AJ = "'Al Jazeera', sans-serif";
const FONT_TJ = "'Tajawal', sans-serif";
const FONT_IBM = "'IBM Plex Sans Arabic', sans-serif";

// ── RESTRAINED DOCUMENTARY PALETTE ───────────────────────────────────────────
const C = {
  void:    '#050608',   // Absolute charcoal black
  deep:    '#0A0C10',   // Deep editorial gray
  steel:   '#181C25',   // Oxidized steel
  iron:    '#2A2F3A',   // Raw iron
  brass:   '#B59A72',   // Soft documentary brass (replaces neon gold)
  rust:    '#9A4C3A',   // Oxidized industrial rust (replaces bright amber)
  sand:    '#D4C4B7',   // Muted Sahara sand
  cream:   '#F4EFEA',   // Parchment white
  white50: 'rgba(244,239,234,0.5)',
  white20: 'rgba(244,239,234,0.2)',
  white08: 'rgba(244,239,234,0.08)',
  white03: 'rgba(244,239,234,0.03)',
};

// ── HELPER COMPONENTS ────────────────────────────────────────────────────────

/** Subtle editorial grid for background texture */
function EditorialGrid({ opacity = 0.03 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity,
        backgroundImage: `linear-gradient(${C.white20} 1px, transparent 1px), linear-gradient(90deg, ${C.white20} 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }}
    />
  );
}

/** Restrained atmospheric light (No heavy bloom) */
function AmbientLight({ x, y, color, size = 500, blur = 160 }: { x: string; y: string; color: string; size?: number; blur?: number }) {
  return (
    <div
      className="absolute pointer-events-none rounded-full"
      style={{
        left: x, top: y,
        width: size, height: size,
        background: color,
        filter: `blur(${blur}px)`,
        transform: 'translate(-50%,-50%)',
        opacity: 0.4,
      }}
    />
  );
}

/** Authentic Documentary Image Frame */
function DocFrame({
  src, alt, label, tall = false, className = '',
}: { src: string; alt: string; label: string; tall?: boolean; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden group ${tall ? 'aspect-[3/4]' : 'aspect-video'} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      style={{ border: `1px solid ${C.white08}`, backgroundColor: C.steel }}
    >
      {src ? (
        // Natural image presentation. No heavy filters.
        <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-xs tracking-widest uppercase" style={{ color: C.white20, fontFamily: FONT_IBM }}>No Signal</p>
        </div>
      )}
      {/* Subtle gradient ONLY at the bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
      
      {/* Editorial Label */}
      <div className="absolute bottom-4 right-4 flex flex-col items-end text-right">
        <span className="text-[10px] tracking-widest uppercase mb-1" style={{ color: C.brass, fontFamily: FONT_IBM }}>{label}</span>
        <span className="text-sm font-bold" style={{ color: C.cream, fontFamily: FONT_AJ }}>{alt}</span>
      </div>
    </motion.div>
  );
}

/** Precision Data Counter */
function LiveCounter({ value, suffix = '', prefix = '', decimals = 0, color = C.cream }: {
  value: number; suffix?: string; prefix?: string; decimals?: number; color?: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (!isInView) return;
    const start = Date.now();
    const dur = 2000;
    const raf = () => {
      const p = Math.min((Date.now() - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 4);
      setDisplay(parseFloat((e * value).toFixed(decimals)));
      if (p < 1) requestAnimationFrame(raf);
    };
    const t = setTimeout(() => requestAnimationFrame(raf), 200);
    return () => clearTimeout(t);
  }, [isInView, value, decimals]);
  return (
    <span ref={ref} style={{ color, fontFamily: FONT_IBM }}>
      {prefix}{decimals > 0 ? display.toFixed(decimals) : display.toLocaleString()}{suffix}
    </span>
  );
}

// ── CHAPTER 1: DOCUMENTARY PROLOGUE ──────────────────────────────────────────

function HeroChapter() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY      = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const titleY   = useTransform(scrollYProgress, [0, 0.5], ['0%', '-10%']);
  const opacity  = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div ref={ref} className="relative overflow-hidden" style={{ height: '100svh', minHeight: 640, background: C.void }}>
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        {IMG_RAILWAY ? (
          <img src={IMG_RAILWAY} alt="Railway Construction" className="w-full h-full object-cover opacity-60" />
        ) : (
          <div className="w-full h-full bg-[#111] flex items-center justify-center text-white/10">ARCHIVAL FOOTAGE MISSING</div>
        )}
      </motion.div>

      {/* Atmospheric darkening for typography */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/40 to-transparent" />

      <motion.div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center" style={{ opacity, y: titleY }}>
        {mounted && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-8" style={{ background: C.white20 }} />
              <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: C.brass, fontFamily: FONT_TJ }}>
                الفصل الرابع · الورشة الكبرى
              </span>
              <div className="h-px w-8" style={{ background: C.white20 }} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
              className="leading-tight mb-6"
              style={{ fontFamily: FONT_AJ, fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', color: C.cream }}
              dir="rtl"
            >
              تشييد الشريان 
              <br />
              <span style={{ color: C.brass }}>في قلب الحمادة</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="max-w-2xl text-base sm:text-lg leading-[2.2]"
              style={{ color: `${C.cream}80`, fontFamily: FONT_TJ }}
              dir="rtl"
            >
              عقود من التأجيل تنتهي اليوم. شريان حديدي يطوي مسافات الصحراء القاسية، ويربط المادة الخام بموانئ التصدير، ليؤسس لقاعدة صناعية وطنية جديدة.
            </motion.p>

            {/* Restrained Editorial Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1 }}
              className="flex items-center gap-10 sm:gap-16 mt-12 flex-wrap justify-center border-t border-white/10 pt-8"
            >
              {[
                { val: '3.5', unit: 'مليار طن', label: 'الاحتياطي الجيولوجي' },
                { val: '950', unit: 'كم', label: 'امتداد السكة الحديدية' },
                { val: '2026', unit: '', label: 'سنة الاستغلال الفعلي' },
              ].map((s, i) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-light mb-1" style={{ color: C.cream, fontFamily: FONT_IBM }}>
                    {s.val} <span className="text-sm font-medium text-white/50" style={{ fontFamily: FONT_TJ }}>{s.unit}</span>
                  </div>
                  <div className="text-[10px] tracking-wider uppercase" style={{ color: C.brass, fontFamily: FONT_TJ }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
}

// ── CHAPTER 2: THE DISCOVERY 1952 ────────────────────────────────────────────

function DiscoveryChapter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="relative py-32 overflow-hidden" style={{ background: C.void }}>
      <EditorialGrid opacity={0.02} />

      <div className="relative z-10 max-w-6xl mx-auto px-6" dir="rtl">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: C.brass, fontFamily: FONT_IBM }}>01 / الأرشيف الجيولوجي</span>
          <div className="h-px flex-1 max-w-[100px]" style={{ background: C.white08 }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="mb-6">
              <span className="text-6xl sm:text-8xl font-light leading-none" style={{ color: C.white08, fontFamily: FONT_IBM }}>
                1952
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-relaxed" style={{ color: C.cream, fontFamily: FONT_AJ }}>
              احتياطي معزول <br />
              في قلب الجغرافيا
            </h2>
            <div className="space-y-6">
              <p className="text-base sm:text-lg leading-[2.2]" style={{ color: `${C.cream}80`, fontFamily: FONT_TJ }}>
                في عام 1952، كشفت المسوحات الجيولوجية عن امتداد هائل لخام الحديد في منطقة تندوف. جبال من المادة الخام تمتد على مسافة 131 كيلومتراً، تخفي تحتها مليارات الأطنان. غير أن هذا الاكتشاف اصطدم بواقع تكنولوجي وجغرافي معقد.
              </p>
              <p className="text-base sm:text-lg leading-[2.2]" style={{ color: `${C.cream}80`, fontFamily: FONT_TJ }}>
                نسبة الفوسفور المرتفعة في الخام شكلت عقبة تقنية أمام عمليات الصهر التقليدية، وعزلة الموقع عن الموانئ الشمالية جعلت من استغلاله تحدياً اقتصادياً، ليبقى المشروع رهين الدراسات لعقود طويلة.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            {/* Journalistic Data Box */}
            <div className="p-8" style={{ border: `1px solid ${C.white08}`, background: C.deep }}>
              <div className="mb-8 border-b border-white/5 pb-4">
                <span className="text-xs tracking-widest uppercase" style={{ color: C.brass, fontFamily: FONT_TJ }}>بيانات المسح الأولي</span>
              </div>
              <div className="space-y-6">
                {[
                  { k: 'الاحتياطي الجيولوجي المؤكد', v: '3.5', u: 'مليار طن' },
                  { k: 'نسبة تركيز الحديد', v: '57%', u: 'كحد أقصى' },
                  { k: 'المساحة الإجمالية للمنجم', v: '40', u: 'ألف هكتار' },
                  { k: 'طاقة الاستخراج الأولية', v: '3', u: 'ملايين طن/سنوياً' },
                ].map((row, i) => (
                  <div key={row.k} className="flex flex-col gap-1">
                    <span className="text-sm" style={{ color: `${C.cream}50`, fontFamily: FONT_TJ }}>{row.k}</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-light" style={{ color: C.cream, fontFamily: FONT_IBM }}>{row.v}</span>
                      <span className="text-xs" style={{ color: C.brass, fontFamily: FONT_TJ }}>{row.u}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ── CHAPTER 3: THE DECISION 2022 ─────────────────────────────────────────────

function DecisionChapter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="relative py-32 overflow-hidden" style={{ background: C.deep }}>
      <div className="relative z-10 max-w-6xl mx-auto px-6" dir="rtl">
        <motion.div className="flex items-center gap-4 mb-20" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}>
          <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: C.brass, fontFamily: FONT_IBM }}>02 / الإرادة السياسية</span>
          <div className="h-px flex-1 max-w-[100px]" style={{ background: C.white08 }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-6">
            <DocFrame src={IMG_TEBBOUNE} alt="المتابعة الرئاسية الميدانية للمشروع" label="ديسمبر 2023 · تندوف" tall />
          </div>

          <motion.div
            className="lg:col-span-6 flex flex-col justify-center h-full"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-8 leading-tight" style={{ color: C.cream, fontFamily: FONT_AJ }}>
              القرار السياسي: <br /> من الأرشيف إلى الميدان
            </h2>
            
            {/* Editorial Blockquote */}
            <div className="pl-6 border-r-2 mb-10" style={{ borderColor: C.rust }}>
              <p className="text-xl leading-[1.8]" style={{ color: C.cream, fontFamily: FONT_AJ }}>
                "زمن المشاريع التي تبقى حبيسة الأدراج قد ولى. غارا جبيلات هو عماد صناعتنا الثقيلة وقاطرة الجزائر نحو اقتصاد متنوع."
              </p>
              <p className="mt-4 text-xs font-bold" style={{ color: C.brass, fontFamily: FONT_TJ }}>
                — عبد المجيد تبون، رئيس الجمهورية
              </p>
            </div>

            <p className="text-base sm:text-lg leading-[2.2] mb-10" style={{ color: `${C.cream}80`, fontFamily: FONT_TJ }}>
              في عام 2022، ومواكبة للتحولات الجيوسياسية والاقتصادية، اتخذت الدولة قراراً سيادياً بإعادة إحياء المشروع. لم يعد الاستغلال خياراً مؤجلاً، بل حاجة استراتيجية ملحة لتوفير المادة الأولية للحديد والصلب، وتقليص فاتورة الاستيراد، والانتقال نحو التصدير.
            </p>

            <div className="space-y-6 pt-8 border-t border-white/5">
              {[
                { title: 'السيادة الصناعية', desc: 'تأمين المادة الأولية للمركبات الوطنية وتوفير العملة الصعبة.' },
                { title: 'الشراكة الاستراتيجية', desc: 'الاعتماد على خبرات دولية متقدمة لحل معضلة المعالجة التكنولوجية للفوسفور.' },
              ].map((p) => (
                <div key={p.title}>
                  <h4 className="font-bold text-sm mb-2" style={{ color: C.brass, fontFamily: FONT_TJ }}>{p.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: `${C.cream}60`, fontFamily: FONT_TJ }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ── CHAPTER 4: THE CONSTRUCTION ──────────────────────────────────────────────

function ConstructionChapter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="relative py-32 overflow-hidden" style={{ background: C.void }}>
      <div className="relative z-10 max-w-6xl mx-auto px-6" dir="rtl">
        <motion.div className="flex items-center gap-4 mb-16" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}>
          <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: C.brass, fontFamily: FONT_IBM }}>03 / البنية التحتية</span>
          <div className="h-px flex-1 max-w-[100px]" style={{ background: C.white08 }} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }} className="mb-16 max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight" style={{ color: C.cream, fontFamily: FONT_AJ }}>
            تطويع الجغرافيا القاسية
          </h2>
          <p className="text-lg leading-[2.2]" style={{ color: `${C.cream}70`, fontFamily: FONT_TJ }}>
            لا يقتصر الإنجاز على استخراج الخام، بل يتمثل التحدي الأكبر في نقله. ورشة عملاقة لمد 950 كيلومتراً من السكك الحديدية عبر الصحراء، تتطلب حلولاً هندسية استثنائية لمواجهة الطبيعة.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-8">
            <DocFrame src={IMG_BRIDGE} alt="جسر وادي الداورة — منشأة هندسية محورية" label="أطول جسر سككي قيد الإنجاز" />
          </div>
          <div className="md:col-span-4 bg-[#0A0C10] p-8 border border-white/5 flex flex-col justify-center">
            <span className="text-sm font-bold mb-6 block" style={{ color: C.brass, fontFamily: FONT_TJ }}>جسر وادي الداورة</span>
            <div className="space-y-4">
              {[
                { label: 'الطول الإجمالي المخطط', val: '4.1', unit: 'كم' },
                { label: 'الأعمدة الخرسانية', val: '+116', unit: 'عموداً' },
                { label: 'قدرة التحمل', val: 'عالية', unit: 'للقطارات الثقيلة' },
              ].map((r) => (
                <div key={r.label} className="flex flex-col border-b border-white/5 pb-3">
                  <span className="text-xs mb-1" style={{ color: `${C.cream}50`, fontFamily: FONT_TJ }}>{r.label}</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-light text-2xl" style={{ color: C.cream, fontFamily: FONT_IBM }}>{r.val}</span>
                    <span className="text-xs" style={{ color: C.brass, fontFamily: FONT_TJ }}>{r.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 1 }}
        >
          {[
            { title: 'التباين الحراري', desc: 'استخدام تقنيات التلحيم المستمر ومعادن متطورة لتحمل تباين حراري يتجاوز 40 درجة مئوية بين الليل والنهار لحماية القضبان من التمدد.' },
            { title: 'زحف الرمال', desc: 'تصميم هندسي يراعي مسارات الرياح، مع إقامة مصدات نباتية وميكانيكية لحماية السكة من الطمر المباشر في المناطق الرملية المفتوحة.' },
          ].map((ch) => (
            <div key={ch.title} className="p-6 bg-[#0A0C10] border border-white/5">
              <h4 className="font-bold text-base mb-3" style={{ color: C.brass, fontFamily: FONT_TJ }}>{ch.title}</h4>
              <p className="text-sm leading-[2.2]" style={{ color: `${C.cream}70`, fontFamily: FONT_TJ }}>{ch.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// ── CHAPTER 5: HUMAN EPIC ────────────────────────────────────────────────────

function HumanChapter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="relative py-32 overflow-hidden" style={{ background: C.deep }}>
      <div className="relative z-10 max-w-6xl mx-auto px-6" dir="rtl">
        <motion.div className="flex items-center gap-4 mb-16" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}>
          <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: C.brass, fontFamily: FONT_IBM }}>04 / اليوميات الميدانية</span>
          <div className="h-px flex-1 max-w-[100px]" style={{ background: C.white08 }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-6">
            <DocFrame src={IMG_WORKERS} alt="العمل المستمر في مواقع الإنجاز" label="قاعدة الحياة الميدانية" tall />
          </div>

          <motion.div
            className="lg:col-span-6 flex flex-col justify-center h-full"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight" style={{ color: C.cream, fontFamily: FONT_AJ }}>
              البعد الإنساني للورشة
            </h2>
            <p className="text-base sm:text-lg leading-[2.2] mb-10" style={{ color: `${C.cream}80`, fontFamily: FONT_TJ }}>
              خلف المعدات الضخمة والأرقام الاقتصادية، يقف العنصر البشري كعامل حاسم. المهندسون والعمال يواجهون ظروفاً مناخية استثنائية وعزلة جغرافية لضمان تسليم المشروع ضمن الآجال المحددة.
            </p>

            <div className="space-y-8">
              <div className="pl-4 border-r border-white/20">
                <p className="text-sm leading-relaxed mb-3" style={{ color: `${C.cream}70`, fontFamily: FONT_TJ }}>
                  "العمل هنا ليس مجرد وظيفة، بل هو التزام وطني. قسوة المناخ تتراجع أمام الإيمان بقيمة ما نبنيه لمستقبل البلاد."
                </p>
                <span className="text-[10px] uppercase tracking-wider" style={{ color: C.brass, fontFamily: FONT_TJ }}>— شهادة مهندس من موقع الإنجاز</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-white/5">
              {[
                { val: '10,000+', label: 'منصب شغل مباشر وغير مباشر' },
                { val: '24/7', label: 'وتيرة العمل الميداني المستمر' },
              ].map((f) => (
                <div key={f.label}>
                  <div className="text-2xl font-light mb-1" style={{ color: C.cream, fontFamily: FONT_IBM }}>{f.val}</div>
                  <p className="text-xs" style={{ color: `${C.cream}50`, fontFamily: FONT_TJ }}>{f.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ── CHAPTER 6: TIMELINE ──────────────────────────────────────────────────────

const TIMELINE = [
  { year: '1952', title: 'التوثيق الأولي', desc: 'اكتشاف الاحتياطيات الهائلة وتوثيق الجدوى الجيولوجية للمنجم.' },
  { year: '2022', title: 'القرار الاستراتيجي', desc: 'رئاسة الجمهورية تعلن فك التجميد والانطلاق الفعلي للمشروع.' },
  { year: '2023', title: 'إشارة الانطلاق', desc: 'نوفمبر: انطلاق أشغال السكة الحديدية الكبرى والشروع في بناء قواعد الحياة.' },
  { year: '2025', title: 'ثمار الإنجاز', desc: 'أفريل: تدشين المقطع الأول للسكة (بشار - العبادلة) على مسافة 100 كلم.' },
  { year: '2026', title: 'الاستغلال المبدئي', desc: 'فيفري: التدشين الرسمي للشريان كاملاً. ماي: انطلاق المعالجة الأولية بوحدة غارا جبيلات.' },
];

function TimelineChapter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="relative py-32 overflow-hidden" style={{ background: C.void }}>
      <div className="relative z-10 max-w-4xl mx-auto px-6" dir="rtl">
        <motion.div className="flex items-center gap-4 mb-16" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}>
          <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: C.brass, fontFamily: FONT_IBM }}>05 / الكرونولوجيا</span>
          <div className="h-px flex-1 max-w-[100px]" style={{ background: C.white08 }} />
        </motion.div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-16" style={{ color: C.cream, fontFamily: FONT_AJ }}>
          التسلسل الزمني للإنجاز
        </h2>

        <div className="border-r border-white/10 pr-8 space-y-12">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute top-2 -right-[36px] w-2 h-2 bg-[#F4EFEA] rounded-full" />
              <div className="flex flex-col sm:flex-row sm:gap-12">
                <div className="sm:w-24 mb-2 sm:mb-0">
                  <span className="text-xl font-light" style={{ color: C.brass, fontFamily: FONT_IBM }}>{item.year}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2" style={{ color: C.cream, fontFamily: FONT_TJ }}>{item.title}</h4>
                  <p className="text-sm leading-[2]" style={{ color: `${C.cream}60`, fontFamily: FONT_TJ }}>{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── CHAPTER 7: FUTURE VISION ─────────────────────────────────────────────────

function FutureChapter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="relative py-32 overflow-hidden" style={{ background: C.deep }}>
      <EditorialGrid opacity={0.03} />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6" dir="rtl">
        <motion.div className="flex items-center gap-4 mb-16" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}>
          <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: C.brass, fontFamily: FONT_IBM }}>06 / الاستشراف</span>
          <div className="h-px flex-1 max-w-[100px]" style={{ background: C.white08 }} />
        </motion.div>

        <h2 className="text-3xl sm:text-5xl font-bold mb-10 leading-tight" style={{ color: C.cream, fontFamily: FONT_AJ }}>
          الآفاق الصناعية 2040
        </h2>
        
        <p className="text-lg leading-[2.2] max-w-2xl mb-16" style={{ color: `${C.cream}70`, fontFamily: FONT_TJ }}>
          المشروع صُمم وفق رؤية مرحلية متصاعدة، تستهدف تحقيق الاكتفاء الذاتي الوطني في مرحلة أولى، لتنتقل لاحقاً إلى تموقع الجزائر كمُصدر رئيسي للحديد والصلب في الأسواق العالمية.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { year: '2026', title: 'مرحلة الانطلاق', desc: 'إنتاج أولي يبلغ 4 ملايين طن لتموين السوق الوطنية.', target: 4 },
            { year: '2030', title: 'التحويل المتقدم', desc: 'دخول مصانع المعالجة حيز الخدمة وإنتاج كريات الحديد.', target: 20 },
            { year: '2040', title: 'السيادة التصديرية', desc: 'الوصول للقدرة القصوى والتصدير للأسواق الدولية.', target: 50 },
          ].map((ph, i) => (
            <motion.div
              key={ph.year}
              className="p-8 border border-white/5 bg-[#050608]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 1 }}
            >
              <span className="text-2xl font-light block mb-4" style={{ color: C.brass, fontFamily: FONT_IBM }}>{ph.year}</span>
              <h4 className="font-bold text-lg mb-3" style={{ color: C.cream, fontFamily: FONT_TJ }}>{ph.title}</h4>
              <p className="text-sm leading-[2] mb-8" style={{ color: `${C.cream}50`, fontFamily: FONT_TJ }}>{ph.desc}</p>
              
              <div className="mt-auto">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-light" style={{ color: C.cream, fontFamily: FONT_IBM }}>{ph.target}</span>
                  <span className="text-xs" style={{ color: `${C.cream}50`, fontFamily: FONT_TJ }}>م. طن</span>
                </div>
                <div className="h-1 w-full bg-white/5">
                  <motion.div 
                    className="h-full" style={{ backgroundColor: C.brass }} 
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${(ph.target / 50) * 100}%` } : {}}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── CLOSING EDITORIAL ────────────────────────────────────────────────────────

function ClosingCinematic() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="relative overflow-hidden py-32 px-6 text-center border-t border-white/5" style={{ background: C.void }}>
      <div className="relative z-10 max-w-3xl mx-auto" dir="rtl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold leading-relaxed mb-8"
          style={{ color: C.cream, fontFamily: FONT_AJ }}
        >
          رؤية الأمس.. تتجسد اليوم.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="text-base sm:text-lg leading-[2.2] mb-16"
          style={{ color: `${C.cream}60`, fontFamily: FONT_TJ }}
        >
          هذه مجرد البداية. الجزائر تدخل مساراً صناعياً جديداً يعيد تشكيل توازنها الاقتصادي، ويضعها كفاعل رئيسي في أسواق التعدين العالمية.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4 opacity-50"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="h-px w-16" style={{ background: C.white20 }} />
          <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: C.cream, fontFamily: FONT_IBM }}>
            نهاية التقرير
          </span>
          <div className="h-px w-16" style={{ background: C.white20 }} />
        </motion.div>
      </div>
    </div>
  );
}

// ── MAIN EXPORT ───────────────────────────────────────────────────────────────

export function ConstructionSection() {
  return (
    <section
      id="construction"
      className="relative overflow-hidden"
      style={{ background: C.void }}
    >
      <HeroChapter />
      <DiscoveryChapter />
      <DecisionChapter />
      <ConstructionChapter />
      <HumanChapter />
      <TimelineChapter />
      <FutureChapter />
      <ClosingCinematic />
    </section>
  );
}