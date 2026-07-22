import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// ── EDITORIAL TYPOGRAPHY SYSTEM ──────────────────────────────────────────────
const FONT_AJ = "'Al Jazeera', sans-serif";
const FONT_TJ = "'Tajawal', sans-serif";
const FONT_IBM = "'IBM Plex Sans Arabic', sans-serif";

// ── RESTRAINED ECONOMIC PALETTE ──────────────────────────────────────────────
const C = {
  bg: '#040609',         // Deep editorial night
  surface: '#0A0D14',    // Data panel background
  border: 'rgba(244,239,234,0.08)',
  textMain: '#F4EFEA',   // Parchment white
  textMuted: 'rgba(244,239,234,0.6)',
  brass: '#B59A72',      // Documentary brass
  rust: '#9A4C3A',       // Oxidized iron
  steel: '#4A6984',      // Industrial steel blue
};

// ── DATA JOURNALISM HOOK (Handles Decimals) ──────────────────────────────────
function useCounter(target: number, duration: number = 2000, decimals: number = 0) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const start = () => {
    if (started) return;
    setStarted(true);
    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Number((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return { count, start };
}

// ── ECONOMIC DATA SETS (FACT-CHECKED 2026) ───────────────────────────────────

// مسار الإنتاج (متوافق مع آفاق 2040)
const productionData = [
  { year: '2026', value: 3 },
  { year: '2030', value: 20 },
  { year: '2035', value: 40 },
  { year: '2040', value: 50 },
];

// هيكلة الصادرات وليس الناتج المحلي الإجمالي (تصحيح صحفي هام جداً)
const exportsBeforeData = [
  { label: 'المحروقات (التبعية التاريخية)', value: 89, color: C.rust },
  { label: 'الصناعة والتعدين (صادرات ناشئة)', value: 7, color: C.brass },
  { label: 'قطاعات أخرى', value: 4, color: C.steel },
];

const exportsAfterData = [
  { label: 'المحروقات (توازن استراتيجي)', value: 60, color: C.rust },
  { label: 'التعدين والصلب (قاطرة التصدير الجديدة)', value: 30, color: C.brass },
  { label: 'صادرات مندمجة ومتنوعة', value: 10, color: C.steel },
];

const stats = [
  { id: '01', value: 3.5, suffix: ' مليار طن', label: 'الاحتياطي الجيولوجي المؤكد للمشروع', color: C.brass },
  { id: '02', value: 50, suffix: ' م. طن/سنة', label: 'القدرة الإنتاجية المستهدفة (آفاق 2040)', color: C.steel },
  { id: '03', value: 950, suffix: ' كم', label: 'طول الشريان اللوجستي الرابط بالساحل', color: C.textMain },
  { id: '04', value: 10, suffix: ' مليار$', label: 'إجمالي الاستثمارات المبرمجة للمنظومة', color: C.brass },
  { id: '05', value: 25, suffix: ' ألف+', label: 'فرصة عمل مباشرة وغير مباشرة مرتقبة', color: C.steel },
  { id: '06', value: 2, suffix: ' مليار$', label: 'وفورات استيراد المادة الأولية سنوياً', color: C.rust },
];

const regionalImpacts = [
  {
    title: 'إعادة إحياء الجنوب الغربي',
    desc: 'تتحول ولايتا تندوف وبشار من مناطق نائية إلى أقطاب صناعية استراتيجية، مع تأسيس منصات معالجة متقدمة تعيد رسم الخارطة الديمغرافية والاقتصادية للمنطقة.',
    id: 'GEO-01',
  },
  {
    title: 'السيادة النقدية والتجارية',
    desc: 'عبر تعويض واردات المادة الأولية بإنتاج محلي، يوفر المشروع فورياً ملايين الدولارات، ليؤسس قاعدة صلبة للانتقال نحو تصدير الفائض التنافسي للأسواق العالمية.',
    id: 'ECO-02',
  },
  {
    title: 'التموضع الجيوسياسي الجغرافي',
    desc: 'بأفق 2040، يعزز هذا التحول موقع الجزائر كفاعل محوري في صناعة الصلب في حوض المتوسط وإفريقيا، متجاوزة دورها التاريخي كمجرد مورد للطاقة.',
    id: 'STR-03',
  },
];

// ── EDITORIAL TOOLTIP ────────────────────────────────────────────────────────
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#040609] border border-white/10 px-4 py-3 shadow-2xl">
        <p className="text-white/40 text-[10px] tracking-widest mb-1 uppercase" style={{ fontFamily: FONT_IBM }}>آفاق {label}</p>
        <p className="text-white text-base font-light" style={{ fontFamily: FONT_IBM }}>
          <span style={{ color: C.brass }}>{payload[0].value}</span> مليون طن
        </p>
      </div>
    );
  }
  return null;
};

// ── STATISTIC CARD (DOCUMENTARY STYLE) ───────────────────────────────────────
function StatCard({ stat, delay }: { stat: typeof stats[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const decimals = stat.value % 1 !== 0 ? 1 : 0;
  const { count, start } = useCounter(stat.value, 2000, decimals);

  useEffect(() => {
    if (isInView) {
      const t = setTimeout(start, delay * 1000);
      return () => clearTimeout(t);
    }
  }, [isInView, start, delay]);

  return (
    <motion.div
      ref={ref}
      className="relative p-6 sm:p-8 bg-[#0A0D14] border-t border-r border-white/5"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      
      <div className="flex items-baseline gap-1.5 mb-3">
        <div className="text-3xl sm:text-4xl font-light tracking-tight" style={{ color: stat.color, fontFamily: FONT_IBM }}>
          {count.toLocaleString()}
        </div>
        <div className="text-sm font-medium" style={{ color: C.textMuted, fontFamily: FONT_TJ }}>
          {stat.suffix}
        </div>
      </div>
      <p className="text-sm leading-[1.8] font-light" style={{ color: C.textMuted, fontFamily: FONT_TJ }}>
        {stat.label}
      </p>
    </motion.div>
  );
}

// ── MAIN EXPORT ──────────────────────────────────────────────────────────────
export function EconomicSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="economic" ref={ref} className="relative overflow-hidden py-32" style={{ background: C.bg }}>
      
      {/* ── EDITORIAL BACKGROUND ── */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${C.textMain} 1px, transparent 1px), linear-gradient(90deg, ${C.textMain} 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#0A0D14]/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6" dir="rtl">
        
        {/* ── DOCUMENTARY HEADER ── */}
        <motion.div
          className="text-right mb-24 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-6 justify-end">
            <div className="h-[1px] w-12 bg-white/20" />
            <p className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase" style={{ fontFamily: FONT_TJ }}>
              الفصل الخامس: التوازن الجديد
            </p>
          </div>
          <h2
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight"
            style={{ fontFamily: FONT_AJ }}
          >
            ما بعد <span style={{ color: C.brass }}>المحروقات.</span>
          </h2>
          <p className="text-lg leading-[2.2] font-light" style={{ color: C.textMuted, fontFamily: FONT_TJ }}>
            لأول مرة منذ عقود، يظهر مشروع قادر على إعادة تشكيل التوازن الاقتصادي الجزائري خارج الهيمنة التاريخية للنفط والغاز. غارا جبيلات ليس مجرد منجم، بل هندسة جديدة للسيادة الصناعية وتأمين لمستقبل الأجيال القادمة.
          </p>
        </motion.div>

        {/* ── MACRO-ECONOMIC INDICATORS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/5 border border-white/5 mb-24">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={0.2 + i * 0.1} />
          ))}
        </div>

        {/* ── DATA JOURNALISM CHARTS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
          
          {/* Production Trajectory */}
          <motion.div
            className="p-8 lg:p-10 border border-white/5 bg-[#0A0D14]"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-10">
              <h3 className="text-white text-xl font-bold mb-2" style={{ fontFamily: FONT_AJ }}>
                مسار الإنتاج التصاعدي (ملايين الأطنان)
              </h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: C.textMuted, fontFamily: FONT_TJ }}>
                تطور استراتيجي مُبرمج لبلوغ الطاقة القصوى، يضع الجزائر ضمن أبرز القوى الإقليمية المنتجة للصلب بحلول 2040.
              </p>
            </div>
            
            <div className="relative w-full h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={productionData} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="2 4" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11, fontFamily: FONT_IBM }}
                    axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                    tickLine={false}
                    dy={10}
                  />
                  <YAxis
                    tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11, fontFamily: FONT_IBM }}
                    axisLine={false}
                    tickLine={false}
                    domain={[0, 60]}
                    ticks={[0, 15, 30, 45, 60]}
                  />
                  <Tooltip cursor={{ fill: 'rgba(255,255,255,0.02)' }} content={<CustomTooltip />} />
                  <Bar dataKey="value" fill={C.steel} radius={[2, 2, 0, 0]} maxBarSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Economic Diversification Structure */}
          <motion.div
            className="p-8 lg:p-10 border border-white/5 bg-[#0A0D14]"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-10">
              <h3 className="text-white text-xl font-bold mb-2" style={{ fontFamily: FONT_AJ }}>
                هيكلة الصادرات الوطنية: مسار التنويع
              </h3>
              <p className="font-light leading-relaxed text-[16px]" style={{ color: C.textMuted, fontFamily: FONT_TJ }}>
                مقارنة تحليلية تبرز التأثير العميق للمشروع في إعادة تشكيل سلة الصادرات وفك الارتباط الهيكلي بتقلبات سوق الطاقة.
              </p>
            </div>

            <div className="flex flex-col gap-10">
              {/* CURRENT */}
              <div>
                <p className="text-xs uppercase tracking-widest mb-6" style={{ color: C.textMuted, fontFamily: FONT_TJ }}>
                  الواقع الراهن (تاريخياً)
                </p>
                {exportsBeforeData.map((item) => (
                  <div key={`before-${item.label}`} className="mb-4">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-light text-[16px]" style={{ color: C.textMain, fontFamily: FONT_TJ }}>{item.label}</span>
                      <span className="font-light text-[16px]" style={{ color: item.color, fontFamily: FONT_IBM }}>{item.value}%</span>
                    </div>
                    <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full"
                        style={{ background: item.color }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${item.value}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* PROJECTED */}
              <div className="border-t border-white/5 pt-8">
                <p className="text-xs uppercase tracking-widest mb-6" style={{ color: C.brass, fontFamily: FONT_TJ }}>
                  مستهدف التوازن الجيواقتصادي (2035+)
                </p>
                {exportsAfterData.map((item) => (
                  <div key={`after-${item.label}`} className="mb-4">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-light text-[16px]" style={{ color: C.textMain, fontFamily: FONT_TJ }}>{item.label}</span>
                      <span className="font-light text-[16px]" style={{ color: item.color, fontFamily: FONT_IBM }}>{item.value}%</span>
                    </div>
                    <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full"
                        style={{ background: item.color }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${item.value}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── REGIONAL & GEOPOLITICAL IMPACT ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-16 border-t border-white/5"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {regionalImpacts.map((item) => (
            <div key={item.id} className="relative">
              
              <h4 className="font-bold text-lg text-white mb-4 leading-snug" style={{ fontFamily: FONT_AJ }}>
                {item.title}
              </h4>
              <p className="text-sm leading-[2.2] font-light" style={{ color: C.textMuted, fontFamily: FONT_TJ }}>
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}