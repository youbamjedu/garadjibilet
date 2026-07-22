import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgHero from 'figma:asset/7810b8da130ad96f69198d56617bbf242bb453c1.png';
import img1 from 'figma:asset/7810b8da130ad96f69198d56617bbf242bb453c1.png';
import img2 from 'figma:asset/d7e6b6044081edf6ed6385b52b4007cbc9fbe211.png';
import img3 from 'figma:asset/f23b8947a94ce7641ce257074da974d982d4cbe0.png';
import img4 from 'figma:asset/988fc0900d150040198816e277c1df56fb77ec9f.png';

// نظام الخطوط التحريري
const FONT_AJ = "'Al Jazeera', sans-serif";
const FONT_TJ = "'Tajawal', sans-serif";
const FONT_IBM = "'IBM Plex Sans Arabic', sans-serif";

// حركة وثائقية هادئة
const docTransition = { duration: 1.4, ease: [0.16, 1, 0.3, 1] };

const milestones = [
  {
    date: 'نوفمبر 2023',
    year: '2023',
    title: 'انطلاق الشريان الحديدي',
    desc: 'إعطاء إشارة الانطلاق الرسمية لإنجاز خط السكة الحديدية (بشار - تندوف - غارا جبيلات) الممتد على 950 كلم، ووضع حجر الأساس لمصنع المعالجة الأولية بتندوف.',
    color: '#E1FF00',
  },
  {
    date: '24 أفريل 2025',
    year: '2025',
    title: 'تدشين أول مقطع للخط',
    desc: 'أشرف رئيس الجمهورية على تدشين مقطع خط السكة الحديدية الرابط بين بشار والعبادلة على مسافة 100 كيلومتر، كأول ثمرة ميدانية لهذا المشروع الضخم.',
    color: '#3CE89B',
  },
  {
    date: '1 فيفري 2026',
    year: '2026',
    title: 'نهاية العزلة التاريخية',
    desc: 'وفد وزاري يشرف على تدشين محطة السكة الحديدية بتندوف وإعطاء إشارة انطلاق أول رحلة لقطار باتجاه بشار، معلناً استكمال الشريان الغربي.',
    color: '#0086e7',
  },
  {
    date: '2 فيفري 2026',
    year: '2026',
    title: 'الافتتاح الرئاسي للخط',
    desc: 'الجزائر تدشن رسمياً خط السكك الحديدية العملاق. ووصفه رئيس الجمهورية بأنه "أحد أكبر المشاريع الاستراتيجية في تاريخ الجزائر المستقلة".',
    color: '#FFD041',
  },
];

const institutions = [
  {
    name: 'وزارة الطاقة والمناجم',
    role: 'الرؤية والسيادة الوطنية',
    color: '#E1FF00',
    desc: 'الجهة السيادية المسؤولة عن رسم السياسة المنجمية، وتأطير المشروع كأولوية قصوى لإنهاء التبعية للمحروقات وتأمين إمدادات الصلب الوطنية للجزائر.',
  },
  {
    name: 'سوناريم',
    nameEn: 'SONAREM',
    role: 'المظلة الاستخراجية الكبرى',
    color: '#3CE89B',
    desc: 'الشركة الوطنية للأبحاث والاستغلال المنجمي. تقود العمليات الكبرى، منها تنفيذ تفجيرات غير مسبوقة لاستخراج الخام، وتستهدف الوصول لإنتاج 50 مليون طن بآفاق 2040.',
  },
  {
    name: 'فيرال',
    nameEn: 'FERAAL',
    role: 'الاستغلال وتحدي التكنولوجيا',
    color: '#0086e7',
    desc: 'المؤسسة الوطنية للحديد والصلب (فرع سوناريم). تتولى الاستغلال الميداني وتطوير تقنيات معقدة بالتعاون مع مراكز بحثية لتقليص نسبة الفوسفور في الخام ومعالجته.',
  },
  {
    name: 'أنيسريف',
    nameEn: 'ANESRIF',
    role: 'المايسترو الهندسي للشريان',
    color: '#FF8743',
    desc: 'الوكالة الوطنية للدراسات ومتابعة إنجاز الاستثمارات في السكك الحديدية. تقود ملحمة شق 950 كلم من السكك وتشييد المحطات في واحدة من أقسى البيئات الصحراوية.',
  },
  {
    name: 'الشركاء الدوليون (CRCC)',
    nameEn: 'GLOBAL PARTNERS',
    role: 'قوة الإنجاز اللوجستية',
    color: '#FFD041',
    desc: 'ائتلافات عملاقة تقودها شركات مثل "CRCC" الصينية التي تتكفل وحدها بإنجاز 575 كلم من السكة الحديدية المنجمية (المقطع الثالث) وبناء أطول جسر سككي في إفريقيا.',
  },
];

const gallery = [
  {
    image: img1,
    caption: 'وضع حجر الأساس',
    desc: 'إشارة الانطلاق الرسمية لورشة التجسيد.',
  },
  {
    image: img2,
    caption: 'أشغال السكة الحديدية',
    desc: 'تعبيد مسار الشريان الاقتصادي عبر الصحراء.',
  },
  {
    image: img3,
    caption: 'الخط المنجمي',
    desc: 'البنية التحتية الجاهزة لربط الجنوب بالشمال.',
  },
  {
    image: img4,
    caption: 'أولى شحنات الخام',
    desc: 'الحديد في طريقه نحو مراكز التحويل.',
  },
];

export function VisionToImplementation() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="vision" ref={ref} className="relative bg-[#04070B] overflow-hidden py-32" style={{ position: 'relative' }}>
      
      {/* Subtle Documentary Atmosphere (Removed heavy colored glows) */}
      <div className="absolute inset-0 bg-[#04070B] z-0" />
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)', backgroundSize: '40px 40px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
        
        {/* ── CINEMATIC HEADER ── */}
        <motion.div
          className="text-right mb-24 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={docTransition}
        >
          <div className="flex items-center gap-4 mb-6 justify-end">
            <div className="h-[1px] w-12 bg-white/20" />
            <p className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase" style={{ fontFamily: FONT_TJ }}>الفصل الثاني: تجسيد الإرادة السياسية</p>
          </div>
          <h2 className="text-white text-5xl sm:text-6xl font-black mb-6 leading-tight" style={{ fontFamily: FONT_AJ }}>
            القرار <span className="text-[#A23E2E]">السيادي</span>
          </h2>
          <p className="text-white/60 text-lg leading-[2.2] font-light" style={{ fontFamily: FONT_TJ }}>
            كيف تحول حلم وطني مؤجل إلى ورشة مفتوحة تشق الصحراء؟ هذه قصة الإرادة السياسية التي نقلت غارا جبيلات من رفوف الأرشيف إلى قلب الميدان.
          </p>
        </motion.div>

        {/* ── DOCUMENTARY VIDEO BLOCK ── */}
        <motion.div
          className="mb-32 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...docTransition, delay: 0.2 }}
        >
          {/* Clean, authentic video container */}
          <div className="relative overflow-hidden border border-white/10 bg-black aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/aT6NqB7633Y"
              title="تدشين مشروع غارا جبيلات"
              frameBorder="0"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          <div className="mt-8 px-4 border-l-2 border-[#A23E2E] pl-6 text-right">
            <p className="text-white text-xl font-bold mb-3 leading-relaxed" style={{ fontFamily: FONT_AJ }}>
              "هذا المشروع خيار استراتيجي لا رجعة فيه لتحقيق السيادة الاقتصادية."
            </p>
            <p className="text-white/50 text-base leading-relaxed max-w-3xl font-light" style={{ fontFamily: FONT_TJ }}>
              رئيس الجمهورية عبد المجيد تبون أثناء إعطاء إشارة الانطلاق الرسمية لمشروع مصنع المعالجة الأولية لخام الحديد – تندوف، ديسمبر 2023.
            </p>
          </div>
        </motion.div>

        {/* ── HISTORICAL TURNING POINT (HERO IMAGE & NARRATIVE) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 border-t border-white/5 pt-20">
          
          {/* Authentic Documentary Image */}
          <motion.div
            className="relative order-1 lg:order-1"
            initial={{ opacity: 0, filter: 'blur(5px)' }}
            animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : {}}
            transition={{ ...docTransition, delay: 0.3 }}
          >
            <div className="relative border border-white/10 overflow-hidden bg-[#060A11]">
              {/* NOTE: Natural image tones preserved. No heavy cinematic color grading. */}
              <ImageWithFallback
                src={imgHero}
                alt="إطلاق مشروع غارا جبيلات"
                className="w-full object-cover aspect-[4/3] opacity-90"
              />
              {/* Minimal gradient strictly for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/40 text-xs tracking-widest mb-1" style={{ fontFamily: FONT_IBM }}>01 DEC 2023 — TINDOUF</p>
                <p className="text-white/90 font-bold text-sm" style={{ fontFamily: FONT_AJ }}>
                  الإطلاق الرسمي لمشروع السكة الحديدية المنجمية
                </p>
              </div>
            </div>
          </motion.div>

          {/* Editorial Narrative */}
          <motion.div
            className="order-2 lg:order-2 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ ...docTransition, delay: 0.5 }}
          >
            <h3 className="text-white text-3xl lg:text-4xl font-bold mb-8 leading-snug" style={{ fontFamily: FONT_AJ }}>
              ساعة الصفر.
            </h3>
            <div className="space-y-6">
              <p className="text-white/70 text-lg leading-[2.2] font-light" style={{ fontFamily: FONT_TJ }}>
                في الأول من ديسمبر 2023، تحولت عقود من الانتظار إلى ورشة مفتوحة في قلب الصحراء الجزائرية. لم يكن قرار الانطلاق مجرد تدشين تقليدي، بل كان إعلاناً سيادياً بنهاية حقبة التردد وبداية التنفيذ الحازم.
              </p>
              <p className="text-white/70 text-lg leading-[2.2] font-light" style={{ fontFamily: FONT_TJ }}>
                بتوجيهات صارمة، رُفعت وتيرة الإنجاز لتسابق الزمن، محولةً المخططات الهندسية المعقدة لخط سكة حديدية يمتد لـ 950 كيلومتراً إلى واقع ملموس، ليصبح المشروع رمزاً للقدرة الوطنية على الإنجاز.
              </p>
            </div>

            {/* Archival Metrics */}
            <div className="flex gap-12 mt-10 pt-8 border-t border-white/5">
              {[
                { v: '7', u: 'مليار دولار', l: 'غلاف الاستثمار الأولي' },
                { v: '30', u: 'شهراً', l: 'آجال الإنجاز الصارمة' },
              ].map((m) => (
                <div key={m.l} className="flex flex-col">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-white text-4xl font-light" style={{ fontFamily: FONT_IBM }}>{m.v}</span>
                    <span className="text-white/50 text-sm font-medium" style={{ fontFamily: FONT_TJ }}>{m.u}</span>
                  </div>
                  <span className="text-white/40 text-xs uppercase tracking-wider" style={{ fontFamily: FONT_TJ }}>{m.l}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── VISUAL DOCUMENTATION ARCHIVE ── */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...docTransition, delay: 0.6 }}
        >
          <div className="mb-12 border-b border-white/5 pb-6">
            <h3 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: FONT_AJ }}>
              أرشيف الإنجاز
            </h3>
            <p className="text-white/40 text-base font-light" style={{ fontFamily: FONT_TJ }}>
              توثيق بصري لمراحل التجسيد الميداني.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.1, ...docTransition }}
                className="group relative"
              >
                <div className="relative border border-white/10 overflow-hidden bg-[#060A11] mb-4 aspect-[4/3]">
                  {/* Authentic natural images without orange/teal filters */}
                  <ImageWithFallback
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                  />
                </div>
                <p className="text-white/90 text-sm font-bold mb-1" style={{ fontFamily: FONT_AJ }}>{item.caption}</p>
                <p className="text-white/40 text-xs leading-relaxed" style={{ fontFamily: FONT_TJ }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── CINEMATIC TIMELINE ── */}
        <motion.div
          className="mb-32 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...docTransition, delay: 0.4 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-white text-3xl font-bold mb-4" style={{ fontFamily: FONT_AJ }}>
              كرونولوجيا التجسيد
            </h3>
            <p className="text-white/50 text-base font-light" style={{ fontFamily: FONT_TJ }}>
              مسار التنفيذ الصارم من التدشين إلى التشغيل.
            </p>
          </div>

          <div className="relative border-r border-white/10 pr-8 space-y-16">
            {milestones.map((m, i) => (
              <TimelineItem key={`${m.year}-${i}`} item={m} index={i} />
            ))}
          </div>
        </motion.div>

        {/* ── STRATEGIC ACTORS (INSTITUTIONS) ── */}
        <motion.div
          className="pt-20 border-t border-white/5"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...docTransition, delay: 0.6 }}
        >
          <div className="mb-16 max-w-2xl">
            <h3 className="text-white text-3xl font-bold mb-4" style={{ fontFamily: FONT_AJ }}>
              شبكة الفاعلين الاستراتيجيين
            </h3>
            <p className="text-white/50 text-base leading-[2] font-light" style={{ fontFamily: FONT_TJ }}>
              تنسيق مؤسساتي عالي المستوى لتنفيذ أكبر ورشة منجمية ولوجستية في تاريخ البلاد، يجمع بين السيادة الوطنية والخبرات الدولية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {institutions.map((inst, i) => (
              <InstitutionCard key={inst.name} inst={inst} index={i} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// ── SUB-COMPONENTS ──

// ── SUB-COMPONENTS ──

function TimelineItem({ item, index }: { item: typeof milestones[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col lg:flex-row gap-6 lg:gap-12 group"
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Node Marker - تم ربط اللون بمصفوفة البيانات للتنوع البصري */}
      <div 
        className="absolute -right-[36px] w-2 h-2 rounded-full shadow-[0_0_10px_currentColor] group-hover:scale-150 transition-all duration-300" 
        style={{ backgroundColor: item.color, color: item.color }}
      />

      {/* Archival Date */}
      <div className="shrink-0 lg:w-40 pt-1">
        <span className="text-white/40 text-2xl lg:text-3xl font-light block mb-1" style={{ fontFamily: FONT_IBM }}>
          {item.year}
        </span>
        <span className="text-[#FF8743]/80 text-xs font-bold tracking-widest uppercase" style={{ fontFamily: FONT_TJ }}>
          {item.date}
        </span>
      </div>

      {/* Content */}
      <div className="max-w-xl pb-6">
        <h4 className="text-white text-xl font-bold mb-3 group-hover:text-[var(--hover-color)] transition-colors duration-300" 
            style={{ fontFamily: FONT_AJ, '--hover-color': item.color } as React.CSSProperties}>
          {item.title}
        </h4>
        <p className="text-white/60 text-base leading-[2.2] font-light text-justify" style={{ fontFamily: FONT_TJ }}>
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

function InstitutionCard({ inst, index }: { inst: typeof institutions[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      // إضافة الكلاس "group" للتحكم في العناصر الداخلية عند مرور الفأرة
      className="relative pt-6 pb-6 px-4 rounded-xl border border-white/5 bg-[#060A11]/30 transition-all duration-500 group overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.1, duration: 1 }}
      // تأثير الرفع والظلال الخفيفة بلون المؤسسة عند الـ Hover
      whileHover={{ 
        y: -5,
        backgroundColor: "rgba(10, 17, 26, 0.8)",
        borderColor: "rgba(255, 255, 255, 0.1)"
      }}
    >
      {/* ── شريط تفاعلي علوي يمتد عند التمرير (Interactive Top Line) ── */}
      <div 
        className="absolute top-0 right-0 h-[3px] w-0 transition-all duration-500 ease-out group-hover:w-full"
        style={{ 
          backgroundColor: inst.color, 
          boxShadow: `0 0 15px ${inst.color}` 
        }}
      />
      
      {/* ── خلفية إشعاعية باهتة جداً تظهر عند التمرير ── */}
      <div 
        className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none"
        style={{ background: `radial-gradient(circle at top right, ${inst.color}, transparent)` }}
      />

      <div className="flex justify-between items-start mb-5 relative z-10">
        <div>
          <h4 
            // تلون العنوان بلون المؤسسة عند الـ Hover
            className="text-white text-lg font-bold mb-2 transition-colors duration-300" 
            style={{ fontFamily: FONT_AJ }}
          >
            {inst.name}
          </h4>
          
          <div className="flex items-center gap-2">
            {/* النقطة الملونة الثابتة كمعرف للمؤسسة */}
            <span 
              className="w-1.5 h-1.5 rounded-full" 
              style={{ backgroundColor: inst.color, boxShadow: `0 0 8px ${inst.color}80` }} 
            />
            <p className="text-white/50 text-xs tracking-widest uppercase transition-colors group-hover:text-white/80" style={{ fontFamily: FONT_TJ }}>
              {inst.role}
            </p>
          </div>
        </div>

        {/* الاسم بالإنجليزية - تصميم وثائقي */}
        {inst.nameEn && (
          <span 
            className="text-white/20 text-[10px] tracking-widest font-light mt-1 transition-colors group-hover:text-white/40" 
            style={{ fontFamily: FONT_IBM }}
          >
            {inst.nameEn}
          </span>
        )}
      </div>
      
      <p className="text-white/60 text-sm leading-[2] font-light text-justify relative z-10" style={{ fontFamily: FONT_TJ }}>
        {inst.desc}
      </p>
    </motion.div>
  );
}