import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import imgMapBg from 'figma:asset/8f331419a4d7cad7e410f164ff80d1d8e54afd86.png';
import imgGaraDjebilet from 'figma:asset/042cb8ee84f434049c29087951f5ecd3959de57c.png';
import imgTindouf from 'figma:asset/3ded27ceac37608f1a9508aa728ee63edceb9f62.png';
import imgBechar from 'figma:asset/cdc4f15e01a761c1fbe493b315d490f117df318b.png';
import imgMecheria from 'figma:asset/b3bf1674df486c6efd63ca903950a1e3eb06f57e.png';
import imgOran from 'figma:asset/bed55445cece1b3dd61b2901580d27bbd08d0bdc.png';

// نظام الخطوط التحريري
const FONT_AJ = "'Al Jazeera', sans-serif";
const FONT_TJ = "'Tajawal', sans-serif";
const FONT_IBM = "'IBM Plex Sans Arabic', sans-serif";

// إعدادات الحركة الوثائقية
const docTransition = { duration: 1.5, ease: [0.16, 1, 0.3, 1] };

const cities = [
  {
    id: 'gara',
    name: 'غارا جبيلات',
    nameEn: 'Gara Djebilet',
    role: 'نقطة الاستخراج الكبرى',
    desc: 'بعد سبعة عقود من الانتظار، انطلقت أولى قوافل الفولاذ. يتربع المنجم على مساحة تفوق 40 ألف هكتار، ليضخ آلاف الأطنان من الخام نحو الشمال عبر قطارات عملاقة.',
    benefitLabel: 'مساحة المنجم:',
    benefitValue: '40',
    benefitUnit: 'ألف هكتار',
    image: imgGaraDjebilet,
    svgX: 289, svgY: 665, mapX: '29%', mapY: '72%',
    color: '#E1FF00',
  },
  {
    id: 'tindouf',
    name: 'تيندوف',
    nameEn: 'Tindouf',
    role: 'القاعدة اللوجستية الأولى',
    desc: 'نقطة العبور الاستراتيجية الأولى للخام. يربطها بالمنجم مقطع سككي حيوي لضمان استمرارية التدفق، لتنطلق منها القوافل المحملة نحو مصانع المعالجة الشمالية.',
    benefitLabel: 'مسافة الربط بالمنجم:',
    benefitValue: '135',
    benefitUnit: 'كيلومتر',
    image: imgTindouf,
    svgX: 49, svgY: 581, mapX: '6%', mapY: '58%',
    color: '#3CE89B',
  },
  {
    id: 'umalassel',
    name: 'أم العسل',
    nameEn: 'Oum El Assel',
    role: 'شريان التحدي الصحراوي',
    desc: 'هنا تتجلى عبقرية الإنجاز؛ محور استراتيجي ضمن مقطع ضخم تكفلت به كبرى الشركات لترويض قسوة التضاريس وضمان التدفق السلس لخام الحديد عبر مئات الكيلومترات.',
    benefitLabel: 'طول المقطع الشمالي:',
    benefitValue: '575',
    benefitUnit: 'كيلومتر',
    image: imgTindouf, 
    svgX: 72, svgY: 498, mapX: '7%', mapY: '49%',
    color: '#FFD041',
  },
  {
    id: 'hameguer',
    name: 'حماقير',
    nameEn: 'Hameguer',
    role: 'عقدة ترويض التضاريس',
    desc: 'من أعقد المقاطع الهندسية؛ حيث تم استخدام آلاف الأطنان من المتفجرات لشق طريق الحديد وسط الصخور القاسية، بمعدل تفجيرات أسبوعية مكثفة لفتح المسار.',
    benefitLabel: 'متفجرات شق المسار:',
    benefitValue: '7515',
    benefitUnit: 'طناً',
    image: imgBechar, 
    svgX: 210, svgY: 382, mapX: '21%', mapY: '38%',
    color: '#FF8743',
  },
  {
    id: 'bechar',
    name: 'بشار',
    nameEn: 'Béchar',
    role: 'القطب الصناعي العملاق',
    desc: 'في منطقة "توميات"، يرتفع مركب صناعي ضخم بشراكة جزائرية-صينية لتثمين خام الحديد، وإنتاج قضبان السكك الحديدية، وتوفير محطات معالجة متقدمة.',
    benefitLabel: 'مساحة المركب:',
    benefitValue: '1000',
    benefitUnit: 'هكتار',
    image: imgBechar,
    svgX: 371, svgY: 308, mapX: '38%', mapY: '32%',
    color: '#0086e7',
  },
{
    id: 'mecheria',
    name: 'المشرية',
    nameEn: 'Mecheria',
    role: 'منصة العبور والتحويل الاستراتيجي',
    desc: 'على مشارف الهضاب العليا، تلعب ولاية النعامة عبر منطقة "الحرشاية" الصناعية بالمشرية دوراً مزدوجاً؛ فهي الجسر اللوجستي الحيوي الذي يربط أقطاب الجنوب بموانئ الشمال، ومنصة متقدمة للعمليات التحويلية تعيد رسم الخارطة الاقتصادية للمنطقة.',
    benefitLabel: 'التصنيف الاقتصادي:',
    benefitValue: 'قطب',
    benefitUnit: 'لوجستي وصناعي',
    image: imgMecheria,
    svgX: 508, svgY: 175, mapX: '51%', mapY: '18%',
    color: '#FF8743',
  },
  {
    id: 'oran',
    name: 'وهران',
    nameEn: 'Oran',
    role: 'بوابة التصدير العالمية',
    desc: 'نقطة الوصول الكبرى في مركب "توسيالي" ببطيوة وميناء وهران، حيث يُحوّل الخام إلى "صلب أخضر" بقدرات إنتاجية هائلة استعداداً لغزو الأسواق الدولية.',
    benefitLabel: 'إنتاج الحديد المباشر:',
    benefitValue: '2.43',
    benefitUnit: 'مليون طن',
    image: imgOran,
    svgX: 458, svgY: 21, mapX: '46%', mapY: '2%',
    color: '#FFD041',
  }
];
const SVG_PATH =
  'M 289 665 C 200 640 80 610 49 581 C 25 560 60 480 200 400 C 280 355 350 320 371 308 C 410 285 475 230 508 175 C 530 140 500 80 458 21';

export function RouteSection() {
  const [activeCity, setActiveCity] = useState<string | null>('gara'); // Default active for documentary flow
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const activeCityData = cities.find((c) => c.id === activeCity);

  return (
    <section id="route" ref={ref} className="relative min-h-screen overflow-hidden bg-[#04070B] py-32" style={{ position: 'relative' }}>
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img src={imgMapBg} alt="" className="w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04070B] via-[#04070B]/80 to-[#04070B]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6" dir="rtl">
        {/* Editorial Section Header */}
        <motion.div
          className="text-right mb-24 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={docTransition}
        >
          <div className="flex items-center gap-4 mb-6 justify-end">
            <div className="h-[1px] w-12 bg-white/20" />
            <p className="text-white/50 text-xs font-bold tracking-[0.2em] uppercase" style={{ fontFamily: FONT_TJ }}>الفصل الثالث: رحلة الجغرافيا</p>
          </div>
          <h2
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight"
            style={{ fontFamily: FONT_AJ }}
          >
            عبر مسافات الصمت...<br />
            <span className="text-[#A23E2E]">شريان وطني يولد.</span>
          </h2>
          <p className="text-white/60 text-lg leading-[2] font-light" style={{ fontFamily: FONT_TJ }}>
            هذا ليس مجرد خط سكة حديدية؛ إنه شريان اقتصادي يطوي مسافات الصحراء القاسية، رابطاً المادة الخام بموانئ التصدير، في مسار ملحمي يعيد كتابة الجغرافيا الصناعية للجزائر.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Cinematic SVG Map */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
              animate={isInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative w-full aspect-[3/4] max-w-lg mx-auto overflow-hidden rounded-xl border border-white/5 shadow-2xl">
                {/* Atmospheric Vignette */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-black/60 z-20" />
                
                {/* Map Base */}
                <div className="absolute inset-0 bg-[#060A11] z-0" />
                <div
                  className="absolute inset-0 z-0 opacity-10"
                  style={{
                    backgroundImage: "url('https://i.ibb.co/SDr1zGW5/Chat-GPT-Image-May-6-2026-04-59-00-PM.png')",
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    filter: 'grayscale(100%)',
                  }}
                />

                {/* SVG Railway Map */}
                <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 600 750" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <filter id="cityGlowDoc">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                    <linearGradient id="railGradientDoc" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#A23E2E" />
                      <stop offset="50%" stopColor="#FF8743" />
                      <stop offset="100%" stopColor="#0086e7" />
                    </linearGradient>
                  </defs>

                  {/* Railway path background (dim) */}
                  <path d={SVG_PATH} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Railway path animated progression */}
                  <motion.path
                    d={SVG_PATH}
                    fill="none"
                    stroke="url(#railGradientDoc)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 4, ease: 'easeInOut', delay: 0.6 }}
                  />

                  {/* Cinematic movement indicator (Sleek abstract payload) */}
                  <g filter="url(#cityGlowDoc)">
                    <animateMotion dur="16s" repeatCount="indefinite" rotate="auto" path={SVG_PATH} />
                    <rect x="-12" y="-2" width="24" height="4" rx="2" fill="#E1FF00" opacity="0.8" />
                    <circle cx="12" cy="0" r="2" fill="#ffffff" />
                  </g>

                  {/* City markers - Editorial Style */}
                  {cities.map((city, i) => (
                    <g key={city.id} onClick={() => setActiveCity(city.id)} className="cursor-pointer group">
                      
                      {/* Subdued rings for active city */}
                      {activeCity === city.id && (
                        <motion.circle
                          cx={city.svgX} cy={city.svgY} r="18"
                          fill="none" stroke={city.color} strokeWidth="1"
                          animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
                          transition={{ duration: 2.5, repeat: Infinity }}
                        />
                      )}

                      {/* Main Node */}
                      <motion.circle
                        cx={city.svgX} cy={city.svgY} r={activeCity === city.id ? "7" : "5"}
                        fill={activeCity === city.id ? city.color : '#060A11'}
                        stroke={activeCity === city.id ? '#ffffff' : city.color} strokeWidth="2"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 1 + i * 0.3, type: 'spring' }}
                      />

                      {/* Clean Map Labels */}
                      <motion.g
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.5 + i * 0.2 }}
                  >
                    <text
                      // تعديل إحداثيات X لإبعاد النص أفقياً
                      // إذا كانت الدائرة في يمين الخريطة (svgX > 300)، اجعل النص يبتعد أكثر نحو اليسار (-25)
                      // إذا كانت الدائرة في يسار الخريطة، اجعل النص يبتعد أكثر نحو اليمين (25)
                      x={city.svgX + (city.svgX > 800 ? -25 : 25)}
                      
                      // تعديل إحداثيات Y لرفع النص قليلاً وتوسيطه مع الدائرة
                      y={city.svgY + 40} 
                      
                      textAnchor={city.svgX > 300 ? "end" : "start"}
                      fill={activeCity === city.id ? "#ffffff" : "rgba(255,255,255,0.5)"}
                      fontSize={activeCity === city.id ? "14" : "12"}
                      fontFamily={FONT_TJ}
                      fontWeight={activeCity === city.id ? "700" : "500"}
                      className="transition-all duration-500"
                    >
                      {city.name}
                    </text>
                  </motion.g>
                    </g>
                  ))}
                </svg>
              </div>
              <div className="mt-8 flex flex-col items-center gap-4 text-center">
                
                {/* 1. العنوان */}
                <h4 
                  className="text-white text-xl font-bold" 
                  style={{ fontFamily: FONT_AJ }}
                > خط سكة حديدية: <span className="text-[#A23E2E]">تندوف - وهران</span></h4>

                {/* 2. زر التوضيح (اضغط هنا) */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  {/* نقطة صفراء صغيرة */}
                  <span className="w-2 h-2 rounded-full bg-[#E1FF00] animate-pulse"></span>
                  {/* النص */}
                  <p className="text-white/60 text-sm" style={{ fontFamily: FONT_TJ }}>
                    انقر على أي <span className="text-white font-bold">مدينة</span> لمعرفة دورها الاستراتيجي
                  </p>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Editorial Index & Dossier Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-10">
            
            {/* Active City Documentary Card */}
            <div className="min-h-[220px]">
              {activeCityData ? (
                <motion.div
                  key={activeCityData.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={docTransition}
                  className="bg-[#060A11] border-r-2 p-8 lg:p-10 relative overflow-hidden"
                  style={{ borderColor: activeCityData.color }}
                >
                  <div className="absolute top-0 left-0 w-32 h-32 opacity-5 pointer-events-none" style={{ background: `radial-gradient(circle at top left, ${activeCityData.color}, transparent)` }} />
                  
                  <div className="flex flex-col gap-6 relative z-10">
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeCityData.color }} />
                      <span className="text-white/50 text-xs font-bold tracking-widest uppercase" style={{ fontFamily: FONT_TJ }}>
                        {activeCityData.role}
                      </span>
                    </div>

                    <h3 className="text-white text-3xl lg:text-4xl font-bold" style={{ fontFamily: FONT_AJ }}>
                      {activeCityData.name}
                    </h3>
                    
                    <p className="text-white/60 text-base lg:text-lg leading-[2] font-light" style={{ fontFamily: FONT_TJ }}>
                      {activeCityData.desc}
                    </p>

                    <div className="mt-4 border-t border-white/5 pt-6 flex items-baseline gap-2">
                      <span className="text-white/40 text-xs tracking-wider" style={{ fontFamily: FONT_TJ }}>
                        {activeCityData.benefitLabel}
                      </span>
                      <span className="text-3xl font-light text-white ml-1" style={{ fontFamily: FONT_IBM }}>
                        {activeCityData.benefitValue}
                      </span>
                      <span className="text-white/60 text-sm" style={{ fontFamily: FONT_TJ }}>
                        {activeCityData.benefitUnit}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="h-full flex items-center justify-center p-8 border border-white/5 bg-[#060A11] text-center">
                  <p className="text-white/30 text-sm font-light" style={{ fontFamily: FONT_TJ }}>
                    الرجاء اختيار عقدة استراتيجية من الخريطة
                  </p>
                </div>
              )}
            </div>

            {/* Strategic Index (City List) */}
            <div className="flex flex-col gap-0 border-t border-white/5 pt-4">
              {cities.map((city, i) => (
                <motion.button
                  key={city.id}
                  onClick={() => setActiveCity(city.id)}
                  className="flex items-center justify-between py-5 border-b border-white/5 transition-all duration-500 group w-full text-right"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + i * 0.1, ...docTransition }}
                >
                  <div className="flex items-center gap-6">
                    <span 
                      className={`text-sm font-light transition-colors duration-500 ${activeCity === city.id ? 'text-white' : 'text-white/20'}`} 
                      style={{ fontFamily: FONT_IBM }}
                    >
                      0{i + 1}
                    </span>
                    <div>
                      <h4 
                        className={`text-lg font-bold transition-colors duration-500 ${activeCity === city.id ? 'text-white' : 'text-white/60 group-hover:text-white/80'}`} 
                        style={{ fontFamily: FONT_AJ }}
                      >
                        {city.name}
                      </h4>
                      <p className="text-xs text-white/30 tracking-widest mt-1" style={{ fontFamily: FONT_IBM }}>
                        {city.nameEn.toUpperCase()}
                      </p>
                    </div>
                  </div>
                  
                  {activeCity === city.id && (
                    <motion.div layoutId="activeIndicator" className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: city.color }} />
                  )}
                </motion.button>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}