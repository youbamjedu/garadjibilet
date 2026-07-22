import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import imgTosyali from 'figma:asset/f56e8d804a668351810cd50ea54bc3a99726b1ea.png';

// ── السرد الاستراتيجي الملحمي (تم التحديث ليعكس الرؤية الوطنية المندمجة) ──
const strategicNodes = [
  {
    id: 'extraction',
    title: 'قلب الحمادة',
    location: 'غارا جبيلات - تندوف',
    desc: 'على مساحة 40 ألف هكتار، ينكسر صمت الصحراء بآليات الحفر العملاقة لتستخرج الخام ضمن استغلال سطحي مفتوح، مؤسسة لسيادة منجمية جديدة.',
    color: '#E1FF00',
  },
  {
    id: 'primary_treatment',
    title: 'قطب المعالجة الأولي',
    location: 'توميات - بشار',
    desc: 'على امتداد 3000 هكتار، يبرز المركب الصناعي الضخم بشراكة (جزائرية-صينية) لمعالجة الخام وتقليص نسبة الفوسفور، بتمويل يفوق 1 مليار دولار.',
    color: '#3CE89B',
  },
  {
    id: 'secondary_transformation',
    title: 'منصة التحويل المتقدم',
    location: 'الحرشاية - النعامة',
    desc: 'على مشارف الهضاب العليا، تمثل النعامة عقدة الارتكاز الاستراتيجية؛ حيث تستقبل الخام لتمريره عبر عمليات تحويلية دقيقة قبل توجيهه شمالاً.',
    color: '#0086e7',
  },
  {
    id: 'transport',
    title: 'الشريان السككي',
    location: 'المسار الغربي 950 كلم',
    desc: 'عبر مئات الكيلومترات من القضبان، تُنقل مخرجات التحويل في مسار ملحمي يطوي الجغرافيا، ويربط عمق الصحراء بمحركات الاقتصاد الساحلية.',
    color: '#FF8743',
  },
  {
    id: 'export',
    title: 'مفاعل الصلب الأخضر',
    location: 'توسيالي بطيوة - وهران',
    desc: 'المحطة النهائية؛ حيث يُصهر الخام ليتحول إلى "صلب أخضر" بمعايير دولية، استعداداً لاكتساح الأسواق الأوروبية والعالمية عبر موانئ وهران.',
    color: '#FFD041',
  },
];

// ── بيانات صحفية محدثة (أفريل 2026) ──
const tosyaliStats = [
  { value: '10', unit: 'م. طن', label: 'القدرة الإنتاجية المستهدفة', color: '#E1FF00' },
  { value: '2.5', unit: 'مليار$', label: 'استثمارات التوسعة (أفريل 2026)', color: '#3CE89B' },
  { value: '20', unit: 'Top', label: 'الهدف ضمن كبار المنتجين عالمياً', color: '#FF8743' },
  { value: 'أوروبا', unit: 'نحو', label: 'تصدير الصلب (بريطانيا، إيطاليا، إسبانيا)', color: '#0086e7' },
];

// إعدادات الحركة السينمائية البطيئة والهادئة
const cinematicTransition = { duration: 1.4, ease: [0.16, 1, 0.3, 1] };

export function IndustrialSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="industrial" ref={ref} className="relative bg-[#04070B] overflow-hidden py-32" style={{ position: 'relative' }}>
      {/* Cinematic subtle documentary background */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden opacity-10 pointer-events-none mix-blend-luminosity">
        <img src={imgTosyali} alt="" className="w-full h-full object-cover object-top grayscale" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04070B]/10 via-[#04070B]/80 to-[#04070B]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6" dir="rtl">
        {/* Editorial Header */}
        <motion.div
          className="text-right mb-24 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={cinematicTransition}
        >
          <div className="flex items-center gap-4 mb-6 justify-end">
            <div className="h-[1px] w-12 bg-white/20" />
            <p className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              مسار القوة الصناعية
            </p>
          </div>
          <h2
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight"
            style={{ fontFamily: "'Al Jazeera', sans-serif" }}
          >
            من تراب الصحراء... <br />
            <span className="text-[#FF8743]">إلى صلب الاقتصاد</span>
          </h2>
          <p className="text-white/60 text-lg leading-[2] font-light text-justify" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            لم تعد الخطة مجرد سكة حديدية لنقل الخام، بل أصبحت استراتيجية وطنية مندمجة؛ تبدأ بالاستخراج في تندوف، ثم المعالجة المتقدمة في كل من "توميات" ببشار و"الحرشاية" بالنعامة، لتنتهي بملحمة التحويل والتصدير في بطيوة بوهران، معيدةً بذلك تشكيل موازين القوة الاقتصادية للجزائر.
          </p>
        </motion.div>

        {/* Strategic Supply Chain Flow (Documentary Rhythm) */}
        <div className="relative mb-32">
          {/* Subtle Railway/Supply Line */}
          <div className="absolute top-[30px] right-8 left-8 h-[1px] bg-white/5 hidden lg:block">
            <motion.div 
              className="absolute top-0 right-0 h-full w-1/4 bg-gradient-to-l from-transparent via-[#FF8743]/40 to-transparent"
              animate={{ right: ['-30%', '130%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative">
            {strategicNodes.map((node, i) => (
              <motion.div
                key={node.id}
                className="relative flex flex-col text-right lg:text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, ...cinematicTransition }}
              >
                {/* Restrained Editorial Node Marker */}
                <div className="flex flex-row lg:flex-col items-center lg:items-center gap-4 lg:gap-0 mb-6 lg:mb-8">
                  <div className="relative flex items-center justify-center w-16 h-16 lg:w-full lg:h-auto lg:mb-6 shrink-0">
                    <div 
                      className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center bg-[#04070B] relative z-10 transition-colors duration-500 group-hover:border-white/50"
                    >
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: node.color }} />
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:items-center">
                    <h4
                      className="text-xl font-bold text-white mb-1"
                      style={{ fontFamily: "'Al Jazeera', sans-serif" }}
                    >
                      {node.title}
                    </h4>
                    <p
                      className="text-white/40 text-xs tracking-wider"
                      style={{ fontFamily: "'Tajawal', sans-serif" }}
                    >
                      {node.location}
                    </p>
                  </div>
                </div>

                <p
                  className="text-white/55 text-sm leading-[1.9] font-light px-2"
                  style={{ fontFamily: "'Tajawal', sans-serif" }}
                >
                  {node.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tosyali Strategic Dossier (Updated April 2026) */}
        <motion.div
          className="rounded-none border-t border-b border-white/10 bg-[#060A11] overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, ...cinematicTransition }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Right: Intelligence / Editorial Briefing (7 Cols) */}
            <div className="lg:col-span-7 p-10 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-1.5 bg-[#FF8743] animate-pulse" />
                <span
                  className="text-[#FF8743] text-xs font-bold tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'Tajawal', sans-serif" }}
                >
                  تحديث خاص: أفريل 2026
                </span>
              </div>
              
              <h3
                className="text-white text-3xl md:text-4xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "'Al Jazeera', sans-serif" }}
              >
                مفاعل السيادة الصناعية
              </h3>
              
              <p
                className="text-white/60 text-lg leading-[2] mb-14 font-light max-w-2xl text-justify"
                style={{ fontFamily: "'Tajawal', sans-serif" }}
              >
                في خطوة تعيد تشكيل موازين القوة، أعلن مجمع "توسيالي الجزائر" في أفريل 2026 عن استثمار إضافي ضخم بقيمة 2.5 مليار دولار. المجمع لا يمثل فقط المحطة النهائية لخامات غارا جبيلات، بل هو "مفاعل السيادة" الذي يعتمد على الهيدروجين لإنتاج "الصلب الأخضر"، مستهدفاً الارتقاء بالجزائر إلى قائمة أفضل 20 منتجاً عالمياً، عبر اكتساح أسواق بريطانيا، إسبانيا، وإيطاليا.
              </p>

              {/* Data Journalism Indicators */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                {tosyaliStats.map((stat) => (
                  <div key={stat.label} className="relative pl-6 border-r border-white/10 pr-6">
                    <div className="flex items-baseline gap-1.5 mb-2">
                      <span
                        className="text-4xl lg:text-5xl font-light tracking-tight text-white"
                        style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
                      >
                        {stat.value}
                      </span>
                      <span 
                        className="text-sm font-medium" 
                        style={{ color: stat.color, fontFamily: "'Tajawal', sans-serif" }}
                      >
                        {stat.unit}
                      </span>
                    </div>
                    <p
                      className="text-white/50 text-sm font-light leading-relaxed"
                      style={{ fontFamily: "'Tajawal', sans-serif" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Left: Documentary Image (5 Cols) */}
            <div className="lg:col-span-5 relative h-80 lg:h-auto border-t lg:border-t-0 lg:border-r border-white/10 hidden md:block">
              {/* === التعديل هنا === */}
              {/* تم إلغاء grayscale و opacity-60 لتظهر الصورة بألوانها الحقيقية والكاملة */}
              <img
                src={imgTosyali}
                alt="مجمع توسيالي للصلب – بطيوة، وهران"
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#060A11] via-transparent to-transparent lg:bg-gradient-to-r" />
              
              <div className="absolute bottom-8 right-8 left-8 flex justify-between items-end">
                <div className="text-white/30 text-xs font-light tracking-widest" style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}>
                   <br/>
                  
                </div>
                <div className="text-right">
                  <span
                    className="block text-[#FF8743] text-sm font-bold mb-1"
                    style={{ fontFamily: "'Al Jazeera', sans-serif" }}
                  >
                    وهران، الجزائر
                  </span>
                  <span
                    className="block text-white/40 text-xs"
                    style={{ fontFamily: "'Tajawal', sans-serif" }}
                  >
                    منطقة بطيوة الصناعية
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Subtle Scroll/Continuity Indicator */}
        <motion.div
          className="mt-32 w-full flex flex-col items-center justify-center relative opacity-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 2 }}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}