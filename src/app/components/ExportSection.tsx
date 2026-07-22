import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import imgOran from 'figma:asset/bed55445cece1b3dd61b2901580d27bbd08d0bdc.png';
import imgPort from 'figma:asset/19916f611c879bf220f999d9b3df5e9f7d69c5ea.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

// ── EDITORIAL TYPOGRAPHY SYSTEM ──────────────────────────────────────────────
const FONT_AJ = "'Al Jazeera', sans-serif";
const FONT_TJ = "'Tajawal', sans-serif";
const FONT_IBM = "'IBM Plex Sans Arabic', sans-serif";

// ── RESTRAINED DOCUMENTARY PALETTE ───────────────────────────────────────────
const C = {
  void:    '#040609',   // Deep maritime night
  deep:    '#0A0D14',   // Editorial navy-black
  steel:   '#181C25',   // Oxidized steel
  brass:   '#B59A72',   // Documentary brass
  cream:   '#F4EFEA',   // Parchment white
};

// تم التحديث صحفياً ليتوافق مع استراتيجية 2026
const exportDestinations = [
  { region: 'أوروبا (الصلب الأخضر)', pct: 50, markets: 'اكتساح أسواق بريطانيا وإسبانيا وإيطاليا بمعايير بيئية صارمة.' },
  { region: 'العمق الإفريقي', pct: 30, markets: 'تموين مشاريع البنية التحتية عبر منطقة التجارة الحرة (ZLECAF).' },
  { region: 'آسيا والأمريكيتين', pct: 20, markets: 'توسيع الحصة السوقية في الاقتصادات الناشئة والأسواق البعيدة.' },
];

const portFacts = [
  { label: 'البنية التحتية البحرية', value: 'أرصفة منجمية متخصصة (بطيوة/أرزيو)' },
  { label: 'الميزة التنافسية العالمية', value: 'توافق تام مع ضريبة الكربون الأوروبية (CBAM)' },
  { label: 'التموضع الجيوسياسي', value: 'بوابة إفريقيا على غرب المتوسط' },
  { label: 'الربط الهيكلي المندمج', value: 'نهاية مسار الشريان السككي (950 كلم)' },
];

// ── CINEMATIC TRANSITION ─────────────────────────────────────────────────────
const docTransition = { duration: 1.5, ease: [0.16, 1, 0.3, 1] };

export function ExportSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="export" ref={ref} className="relative bg-[#040609] overflow-hidden py-32" style={{ position: 'relative' }}>
      
      {/* ── AUTHENTIC MARITIME BACKGROUND ── */}
      {/* No artificial cinematic filters applied. Pure realism with a dark fade for readability. */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1761910502116-9c1c0fb3620b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBwb3J0JTIwY29udGFpbmVycyUyMGV4cG9ydHxlbnwxfHx8fDE3NzI2NzI4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="موانئ التصدير بوهران"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040609] via-[#040609]/80 to-[#040609]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6" dir="rtl">
        
        {/* ── DOCUMENTARY FINALE HEADER ── */}
        <motion.div
          className="text-right mb-24 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={docTransition}
        >
          <div className="flex items-center gap-4 mb-6 justify-end">
            <div className="h-[1px] w-12 bg-white/20" />
            <p className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase" style={{ fontFamily: FONT_TJ }}>
              الفصل الختامي: أفق المتوسط
            </p>
          </div>
          <h2
            className="text-white text-4xl sm:text-6xl font-black mb-8 leading-tight"
            style={{ fontFamily: FONT_AJ }}
          >
            نحو العالم.
          </h2>
          <p className="text-white/60 text-lg leading-[2.2] font-light text-justify" style={{ fontFamily: FONT_TJ }}>
            هنا تنتهي رحلة الجغرافيا، لتبدأ رحلة السيادة. من أرصفة وهران، تنطلق المرحلة الأخيرة من مسار الحديد الجزائري، رابطةً عمق الصحراء بالأسواق العابرة للمتوسط، في تحول استراتيجي يعيد الجزائر بقوة إلى خارطة التجارة الصناعية العالمية كمنتج ومصدر رئيسي للصلب الأخضر النظيف.
          </p>
        </motion.div>

        {/* ── PORT & ECONOMIC IMPACT (DOCUMENTARY GRID) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center mb-32 border-t border-white/5 pt-20">
          
          {/* Left: Authentic Port Photography */}
          <motion.div
            className="lg:col-span-7 relative"
            initial={{ opacity: 0, filter: 'blur(5px)' }}
            animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : {}}
            transition={{ ...docTransition, delay: 0.2 }}
          >
            <div className="relative border border-white/10 bg-[#0A0D14] aspect-[4/3] overflow-hidden">
              <img
                src={imgPort}
                alt="ميناء وهران: النافذة الاستراتيجية لتصدير الفولاذ الجزائري"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Restrained Archival Caption */}
              <div className="absolute bottom-6 right-8 left-8 flex justify-between items-end">
                <div className="text-white/30 text-xs tracking-widest" style={{ fontFamily: FONT_IBM }}>
                  PORT ZONE — ORAN, DZ
                </div>
                <div className="text-right">
                  <p className="text-white/90 font-bold text-sm mb-1" style={{ fontFamily: FONT_AJ }}>
                    المنصة البحرية للتصدير
                  </p>
                  <p className="text-white/50 text-xs" style={{ fontFamily: FONT_TJ }}>
                    واجهة الجزائر الاستراتيجية على حوض المتوسط
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Geopolitical & Economic Context */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center h-full"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ ...docTransition, delay: 0.4 }}
          >
            {/* Contextual Grid */}
            <div className="space-y-8 mb-12">
              {portFacts.map((fact, i) => (
                <div key={fact.label} className="border-b border-white/5 pb-4">
                  <h4 className="text-white/90 font-bold text-sm mb-2" style={{ fontFamily: FONT_TJ }}>
                    {fact.value}
                  </h4>
                  <p className="text-[#B59A72] text-xs uppercase tracking-wider" style={{ fontFamily: FONT_TJ }}>
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Strategic Economic Impact - Updated to Match Previous Sections */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-6">
              <div>
                <p className="text-white/40 text-xs tracking-widest uppercase mb-3" style={{ fontFamily: FONT_TJ }}>
                  وفورات الاستيراد السنوية
                </p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-white text-4xl lg:text-5xl font-light tracking-tight" style={{ fontFamily: FONT_IBM }}>
                    2.0
                  </span>
                  <span className="text-[#B59A72] text-sm font-medium" style={{ fontFamily: FONT_TJ }}>
                    مليار $
                  </span>
                </div>
              </div>
              
              <div>
                <p className="text-white/40 text-xs tracking-widest uppercase mb-3" style={{ fontFamily: FONT_TJ }}>
                  طاقة التصدير المستهدفة
                </p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-white text-4xl lg:text-5xl font-light tracking-tight" style={{ fontFamily: FONT_IBM }}>
                    10
                  </span>
                  <span className="text-[#B59A72] text-sm font-medium" style={{ fontFamily: FONT_TJ }}>
                    م. طن
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── GEOPOLITICAL REACH (EXPORT DESTINATIONS) ── */}
        <motion.div
          className="border-t border-white/5 pt-24 mb-32"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...docTransition, delay: 0.5 }}
        >
          <div className="mb-16 max-w-2xl">
            <h3 className="text-white text-3xl font-bold mb-4" style={{ fontFamily: FONT_AJ }}>
              الامتداد الجيوسياسي والتجاري
            </h3>
            <p className="text-white/50 text-base leading-[2] font-light" style={{ fontFamily: FONT_TJ }}>
              لا يقتصر المشروع على تلبية الاحتياجات الوطنية، بل يستهدف التموضع الاستراتيجي في الأسواق الدولية مستفيداً من معايير الإنتاج الأخضر، والقرب الجغرافي من خطوط الشحن العالمية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {exportDestinations.map((dest, i) => (
              <motion.div
                key={dest.region}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1, ...docTransition }}
              >
                <div className="flex justify-between items-baseline mb-4">
                  <h4 className="text-white text-lg font-bold" style={{ fontFamily: FONT_AJ }}>
                    {dest.region}
                  </h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[#B59A72] text-3xl font-light" style={{ fontFamily: FONT_IBM }}>
                      {dest.pct}
                    </span>
                    <span className="text-white/30 text-xs" style={{ fontFamily: FONT_IBM }}>%</span>
                  </div>
                </div>
                
                {/* Minimal Editorial Indicator Line */}
                <div className="h-[1px] w-full bg-white/10 mb-4">
                  <motion.div
                    className="h-full bg-[#B59A72]"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${dest.pct}%` } : { width: 0 }}
                    transition={{ duration: 2, delay: 0.8 + i * 0.1, ease: "easeOut" }}
                  />
                </div>
                
                <p className="text-white/50 text-sm leading-[1.8] font-light" style={{ fontFamily: FONT_TJ }}>
                  {dest.markets}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── CINEMATIC CLOSING GESTURE ── */}
        <motion.div
          className="mt-32 w-full flex flex-col items-center justify-center relative pb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.8 }}
        >
          {/* Subtle fading line instead of animated gadgets */}
          <div className="w-[1px] h-24 bg-gradient-to-b from-white/20 to-transparent mb-10" />
          
          <h2 className="text-white/80 text-3xl lg:text-4xl font-bold text-center leading-relaxed" style={{ fontFamily: FONT_AJ }}>
            هنا ينتهي صمت الصحراء.. <br/> 
            <span className="text-[#B59A72] font-light">لتبدأ سيادة الصناعة.</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}