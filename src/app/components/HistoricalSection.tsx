import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import imgBoumediene from 'figma:asset/ef3e121855ee9ec8a44ba4bfe53d17302e46ec9f.png';
import imgMine from 'figma:asset/8820b9f73457d0ad8a7fcf11eb0f11bfe6d03e19.png';
import imgBlurBg from 'figma:asset/d543810d966579c71b881f447165084ae06331cb.png';

// السرد الوثائقي للمسار الزمني (تحديث صحفي وتاريخي)
const documentaryTimeline = [
  {
    year: '1952',
    title: 'اكتشاف في العزلة',
    desc: 'تم توثيق الاكتشاف الجيولوجي الأول للاحتياطي الحديدي الهائل في غارا جبيلات، ليظل لعقود مشروعاً مؤجلاً في السجلات، بانتظار إرادة وطنية تحرره من عزلته الصحراوية القاسية.',
  },
  {
    year: '1972',
    title: 'تأميم وتخطيط سيادي',
    desc: 'عقب قرار التأميم، أدركت القيادة بقيادة هواري بومدين أن الاستقلال الحقيقي يمر عبر بوابة الصناعة الثقيلة، حيث أُطلقت أولى الدراسات الاستراتيجية لتقييم استغلال المنجم كرافعة اقتصادية.',
  },
  {
    year: '1975-2022',
    title: 'عقود الجمود والحفظ',
    desc: 'معضلة الفوسفور العالي في الخام، غياب مسارات لوجستية، وتقلبات أسواق الصلب العالمية؛ عوامل تضافرت لتُجمّد المشروع، مبقية الكنز الحديدي في حالة "سبات جيولوجي" لقرابة نصف قرن.',
  },
];

// العقبات الهيكلية والجيوسياسية
const structuralObstacles = [
  { 
    id: '01', 
    title: 'المعضلة التكنولوجية (الفوسفور)', 
    desc: 'احتواء خام غارا جبيلات على نسبة عالية من الفوسفور (0.8%) شكّل حاجزاً تقنياً مستعصياً، حيث لم تكن هناك تقنيات فصل متطورة ومجدية اقتصادياً لمعالجته عالمياً في تلك الحقبة.' 
  },
  { 
    id: '02', 
    title: 'العزلة الجغرافية واللوجستية', 
    desc: 'مسافات شاسعة وتضاريس قاسية تفصل المنجم عن مراكز التحويل بالشمال وموانئ التصدير. مشروع بهذا الحجم كان يتطلب بنية تحتية للسكك الحديدية تجاوزت القدرات المالية للدولة حينها.' 
  },
  { 
    id: '03', 
    title: 'الثقل الاستثماري', 
    desc: 'تطلب المشروع قدرات تمويلية هائلة لتأسيس مدن منجمية، محطات طاقة، وشرايين نقل، وهو ما لم يتقاطع مع الأولويات التنموية الملحة للدولة في فجر استقلالها.' 
  },
  { 
    id: '04', 
    title: 'طغيان الاقتصاد الريعي', 
    desc: 'الركون الطويل لعائدات النفط والغاز قلّص تدريجياً من الإلحاح السياسي والاقتصادي لتنويع مصادر الدخل، مما أدى إلى إرجاء حلم بناء قاعدة للصناعات التعدينية الثقيلة مراراً.' 
  },
];

// إعدادات الحركة السينمائية البطيئة (وثائقي)
const docTransition = { duration: 1.4, ease: [0.16, 1, 0.3, 1] };

export function HistoricalSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const obstaclesRef = useRef<HTMLDivElement>(null);
  const obstaclesInView = useInView(obstaclesRef, { once: true, margin: '-100px' });

  return (
    <section id="history" ref={ref} className="relative overflow-hidden bg-[#04070B] py-32" style={{ position: 'relative' }}>
      {/* ── DOCUMENTARY BACKGROUND ── */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity pointer-events-none">
        <img src={imgMine} alt="" className="w-full h-full object-cover grayscale opacity-40" aria-hidden="true" />
        <img
          src={imgBlurBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30 blur-md"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04070B] via-[#04070B]/80 to-[#04070B]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6" dir="rtl">

        {/* ── CINEMATIC PROLOGUE HEADER ── */}
        <motion.div
          className="max-w-4xl mb-32"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={docTransition}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-white/20" />
            <p className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "'Tajawal', sans-serif" }}>الفصل الأول: الذاكرة الصناعية</p>
          </div>
          <h2
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-tight mb-8"
            style={{ fontFamily: "'Al Jazeera', sans-serif" }}
          >غارا جبيلات...<br /><span className="text-[#A23E2E] font-light">الحلم المؤجل.</span></h2>
        </motion.div>

        {/* ── ARCHIVAL VIDEO & VISION SEQUENCE ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          
          {/* Narrative (Right - 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...docTransition, delay: 0.2 }}
            className="lg:col-span-5 text-right flex flex-col justify-center"
          >
            <h3 className="text-white text-2xl lg:text-3xl font-bold mb-6 leading-relaxed text-justify" style={{ fontFamily: "'Al Jazeera', sans-serif" }}>
              "الصناعة الثقيلة هي أساس <br/>الاستقلال الاقتصادي الحقيقي."
            </h3>
            <p className="text-white/60 text-lg leading-[2.2] font-light text-justify" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              هكذا تبلورت الرؤية الأولى. لم تنظر الدولة الجزائرية إلى غارا جبيلات كمجرد منجم للحديد، بل كرافعة سيادية يمكن أن تحرر البلاد من التبعية. كان مشروعاً ضخماً، سابقاً لأوانه التكنولوجي، ولكنه حمل في طياته الجينات الأولى لطموح الأمة الصناعي.
            </p>
          </motion.div>

          {/* Video (Left - 7 cols) - Clean, no heavy glows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ ...docTransition, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden border border-white/10 bg-black aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/6Xbxby1RwfA"
                title="حلم بومدين – الصناعة الثقيلة"
                frameBorder="0"
                allowFullScreen
                className="absolute inset-0 w-full h-full grayscale-[20%]"
              />
            </div>
            <p className="text-white/30 text-xs mt-3 tracking-widest uppercase" style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}>
              ARCHIVE: ALGERIA, 1970s - INDUSTRIAL VISION
            </p>
          </motion.div>

        </div>

        {/* ── BOUMEDIENE MEMORY SEQUENCE ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32 border-t border-white/5 pt-20">
          
          {/* Boumediene Portrait (Restrained, Archival) */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : {}}
            transition={{ ...docTransition, delay: 0.3 }}
            className="lg:col-span-4 flex flex-col items-center lg:items-start relative"
          >
            {/* زخرفة خفيفة للخلفية */}
            <div className="absolute top-[-20px] -right-[10px] w-16 h-16 border-t-2 border-r-2 border-[#FFD041]/20"></div>
            
            <div className="w-64 h-80 relative mb-6">
              <img
                src={imgBoumediene}
                alt="الرئيس الراحل هواري بومدين"
                className="w-full h-full object-cover grayscale opacity-80 mix-blend-lighten"
              />
              {/* Subtle archival framing */}
              <div className="absolute inset-0 border border-white/20" />
            </div>
            <div className="text-right w-full pr-2">
              <p className="text-white text-xl font-bold" style={{ fontFamily: "'Al Jazeera', sans-serif" }}>هواري بومدين</p>
              <p className="text-[#FFD041]/70 text-sm tracking-widest font-mono mt-1" style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}>1965 – 1978</p>
            </div>
          </motion.div>

          {/* Historical Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...docTransition, delay: 0.5 }}
            className="lg:col-span-8 flex flex-col gap-6"
          >
            <p className="text-white text-xl leading-[2.2] font-light" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              غداة الاستقلال، أدرك الرئيس الراحل هواري بومدين الأهمية الاستراتيجية البالغة لغارا جبيلات. كان يحمل تصوراً يرى في هذا العملاق الصحراوي قلباً نابضاً لثورة صناعية تضع البلاد بقوة في مصاف الدول المنتجة.
            </p>
            <p className="text-white/60 text-lg leading-[2.2] font-light" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              لم تكن الرؤية تقتصر على مجرد تصدير المواد الخام، بل امتدت لتأسيس سيادة حقيقية؛ تحرير الاقتصاد من هيمنة المحروقات، وبناء قاعدة للصناعات التعدينية الثقيلة. غير أن إرادة الرجال اصطدمت حينها بقسوة الجغرافيا وتواضع التكنولوجيا المتاحة.
            </p>

            {/* Archival Metrics */}
            <div className="flex flex-wrap gap-12 mt-8 pt-8 border-t border-white/5">
              {[
                { value: '1952', label: 'سنة التوثيق الأولي' },
                { value: '3.5', unit: 'مليار طن', label: 'الاحتياطي الجيولوجي' },
                { value: '57', unit: '% كحد أقصى', label: 'نسبة تركيز الحديد' },
              ].map((fact) => (
                <div key={fact.label} className="flex flex-col">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-[#FFD041] text-3xl font-light" style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}>
                      {fact.value}
                    </span>
                    {fact.unit && (
                      <span className="text-white/50 text-sm" style={{ fontFamily: "'Tajawal', sans-serif" }}>{fact.unit}</span>
                    )}
                  </div>
                  <span className="text-white/40 text-xs tracking-wider uppercase font-bold" style={{ fontFamily: "'Tajawal', sans-serif" }}>
                    {fact.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── DOCUMENTARY QUOTE PAUSE ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 2, delay: 0.8 }}
          className="relative max-w-4xl mx-auto py-24 mb-32 flex flex-col items-center text-center"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-white/20 mb-12" />
          <p
            className="text-white text-2xl lg:text-4xl leading-[1.8] font-bold mb-8"
            style={{ fontFamily: "'Al Jazeera', sans-serif" }}
          >"غارا جبيلات ليست مجرد منجم؛ <br/><span className="text-white/60 font-light">إنها مشروع الجزائر المستقلة، واستقلالها الاقتصادي الحقيقي.</span>"</p>
          <div className="w-[1px] h-16 bg-gradient-to-t from-transparent to-white/20 mt-4" />
        </motion.div>

        {/* ── CHRONOLOGY OF A DELAYED DREAM ── */}
        <div className="mb-32">
          <div className="mb-16">
             <h3 className="text-white text-3xl font-bold mb-2" style={{ fontFamily: "'Al Jazeera', sans-serif" }}>كرونولوجيا الحلم المؤجل</h3>
             <p className="text-white/40 text-sm" style={{ fontFamily: "'Tajawal', sans-serif" }}>أبرز المحطات الزمنية في الذاكرة التاريخية للمنجم</p>
          </div>

          <div className="relative border-r-2 border-white/10 pr-8 lg:pr-12 space-y-16">
            {documentaryTimeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ ...docTransition, delay: 0.4 + i * 0.2 }}
                className="relative group"
              >
                {/* Timeline Node - تفاعل خفيف */}
                <div className="absolute -right-[38px] lg:-right-[54px] top-2 w-3 h-3 rounded-full bg-[#FFD041] shadow-[0_0_10px_rgba(255,208,65,0.4)] group-hover:scale-125 transition-transform" />
                
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-16">
                  <div className="shrink-0 lg:w-40">
                    <span 
                      className="text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20 text-3xl font-bold" 
                      style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <div className="max-w-2xl">
                    <h4 className="text-[#FFD041] text-xl font-bold mb-3" style={{ fontFamily: "'Al Jazeera', sans-serif" }}>
                      {item.title}
                    </h4>
                    <p className="text-white/70 text-base leading-[2]" style={{ fontFamily: "'Tajawal', sans-serif" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── THE WEIGHT OF OBSTACLES ── */}
        <div ref={obstaclesRef} className="border-t border-white/5 pt-32 mb-16"> 
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={obstaclesInView ? { opacity: 1, y: 0 } : {}} 
            transition={docTransition} 
            className="mb-16 max-w-2xl" 
          > 
            <h3 className="text-[#A23E2E] text-3xl font-bold mb-6" style={{ fontFamily: "'Al Jazeera', sans-serif" }}> 
              لماذا تأجل التاريخ؟
            </h3> 
            <p className="text-white/60 text-lg leading-[2] font-light" style={{ fontFamily: "'Tajawal', sans-serif" }}> 
              لم يكن تجميد غارا جبيلات وليد صدفة أو إهمال، بل محصلة معقدة لعقبات هيكلية، وتكنولوجية، واقتصادية وقفت سداً منيعاً أمام استغلال هذا المورد الاستراتيجي.
            </p> 
          </motion.div> 

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"> 
            {structuralObstacles.map((item, i) => ( 
              <motion.div 
                key={i} 
                className="flex gap-6 group" 
                initial={{ opacity: 0, y: 20 }} 
                animate={obstaclesInView ? { opacity: 1, y: 0 } : {}} 
                transition={{ ...docTransition, delay: 0.2 + i * 0.15 }} 
              > 
                <div 
                  // تم تغيير لون الأرقام للأحمر ليعبر عن الخطر/العقبة
                  className="text-[#A23E2E]/40 text-4xl shrink-0 font-bold transition-colors group-hover:text-[#A23E2E]" 
                  style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
                >
                  {item.id}
                </div> 
                <div>
                  <h4 className="text-white font-bold mb-3 text-xl" style={{ fontFamily: "'Al Jazeera', sans-serif" }}>{item.title}</h4> 
                  <p className="text-white/50 leading-[2.2] font-light text-justify text-[20px] text-[#ffffff]" style={{ fontFamily: "'Tajawal', sans-serif" }}>{item.desc}</p> 
                </div>
              </motion.div> 
            ))} 
          </div> 
        </div>

      </div>
    </section>
  );
}