import { useRef } from 'react';
import { Link } from 'react-router';
import { motion, useInView } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BrainCircuit, Globe, Activity, Power, Factory, MapPin } from 'lucide-react';

import imgGaraDjebilet from 'figma:asset/042cb8ee84f434049c29087951f5ecd3959de57c.png';
import imgOran from 'figma:asset/bed55445cece1b3dd61b2901580d27bbd08d0bdc.png';

// ── EDITORIAL TYPOGRAPHY SYSTEM ──────────────────────────────────────────────
const FONT_AJ = "'Al Jazeera', sans-serif";
const FONT_TJ = "'Tajawal', sans-serif";
const FONT_IBM = "'IBM Plex Sans Arabic', sans-serif";

// ── RESTRAINED DOCUMENTARY PALETTE ───────────────────────────────────────────
const C = {
  void:    '#040609',
  deep:    '#0A0D14',
  shell:   '#12161E',
  brass:   '#B59A72',
  steel:   '#4A6984',
  slate:   '#64748B',
  rust:    '#9A4C3A', // أضيف للترميز الأرضي/المنجمي
  cream:   '#F4EFEA',
  w04:     'rgba(244,239,234,0.04)',
  w10:     'rgba(244,239,234,0.1)',
  w30:     'rgba(244,239,234,0.3)',
  w50:     'rgba(244,239,234,0.5)',
};

const docTransition = { duration: 1.5, ease: [0.16, 1, 0.3, 1] };

export function ConclusionSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      ref={ref} 
      id="conclusion" 
      className="relative overflow-hidden py-32 border-t border-white/5" 
      style={{ background: C.void }}
    >
      {/* ── CINEMATIC ARCHIVAL BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1672619591094-f10ab1f1c6d1?q=80&w=1080"
          alt="صمت الصحراء الكبرى"
          className="w-full h-full object-cover opacity-15 grayscale mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040609] via-[#040609]/90 to-[#040609]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center" dir="rtl">
        
        {/* ── REFLECTIVE EDITORIAL HEADLINE ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="mb-32"
        >
          <div className="flex items-center justify-center gap-4 mb-8 opacity-60">
            <div className="h-px w-12 bg-white/20" />
            <p className="text-white text-[10px] font-bold tracking-[0.3em] uppercase" style={{ fontFamily: FONT_IBM }}>
              EPILOGUE
            </p>
            <div className="h-px w-12 bg-white/20" />
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight" style={{ color: C.cream, fontFamily: FONT_AJ }}>
            بعد عقود من الانتظار، <br className="hidden sm:block" />
            <span style={{ color: C.brass }}>بدأ التاريخ يتحرك.</span>
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-[2.2] font-light" style={{ color: C.w50, fontFamily: FONT_TJ }}>
            غارا جبيلات لم يعد مجرد احتياطي جيولوجي نائم في الأرشيف، بل أصبح اليوم شرياناً ينبض بالحياة، يطوي مسافات الصحراء ليؤسس لقاعدة صناعية سيادية تعيد تعريف الاقتصاد الوطني وتنهي حقبة الاعتماد المفرط على المحروقات.
          </p>
        </motion.div>

        {/* ── HISTORICAL PROJECTIONS (CALM & EDITORIAL) ── */}
        <div className="mb-20 text-center">
          
          <h3 className="text-2xl font-bold mb-16" style={{ color: C.cream, fontFamily: FONT_AJ }}>الرؤية الاستراتيجية المندمجة</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-32">
          {[
            { year: '2026', title: 'شريان الاستخراج', desc: 'بدء تشغيل الخط السككي وبلوغ طاقة إنتاج أولية (3 م.طن) تؤسس لكسر العزلة التاريخية.', color: C.rust, icon: Activity },
            { year: '2030', title: 'مفاعلات التحويل', desc: 'انتقال مراكز المعالجة في بشار والنعامة لطاقاتها القصوى وتوطين التكنولوجيا.', color: C.steel, icon: Factory },
            { year: '2040', title: 'السيادة العالمية', desc: 'بلوغ 50 مليون طن، واكتساح أسواق المتوسط بـ "الصلب الأخضر" النظيف.', color: C.brass, icon: Globe } // تم التعديل إلى 2040 وGlobe
          ].map((item, i) => (
            <motion.div
              key={item.year}
              className="p-8 border bg-[#06080C] relative group transition-all duration-700 hover:bg-[#0A0D14]"
              style={{ borderColor: C.w10 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.15, ...docTransition }}
            >
              <item.icon size={24} className="mb-6 mx-auto opacity-40 group-hover:opacity-80 transition-opacity duration-500" style={{ color: item.color }} />
              <div className="text-4xl font-light mb-4 font-mono tracking-tighter" style={{ color: item.color, fontFamily: FONT_IBM }}>{item.year}</div>
              <h4 className="text-white font-bold text-lg mb-3" style={{ fontFamily: FONT_AJ }}>{item.title}</h4>
              <p className="text-sm leading-[2] font-light" style={{ color: C.w50, fontFamily: FONT_TJ }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── EDITORIAL NOTE ON VISUAL JOURNALISM ── */}
        <motion.div
          className="relative rounded-sm p-10 sm:p-14 mb-32 overflow-hidden text-right max-w-4xl mx-auto shadow-2xl"
          style={{ background: C.shell, border: `1px solid ${C.w10}` }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, ...docTransition }}
        >
          <div className="absolute top-0 right-0 w-1.5 h-full" style={{ background: C.slate }} />
          
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
            <div className="w-16 h-16 rounded-sm bg-[#040609] border border-white/10 flex items-center justify-center shrink-0">
              <BrainCircuit className="w-8 h-8 animate-pulse" style={{ color: C.slate }} />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-white text-2xl font-bold" style={{ fontFamily: FONT_AJ }}>ملاحظة التحرير: ابتكار السرد الرقمي</h3>
                <span className="px-2.5 py-1 rounded-sm text-[10px] font-bold tracking-widest uppercase border border-white/10" style={{ background: `${C.slate}15`, color: C.slate, fontFamily: FONT_IBM }}>
                  Methodology
                </span>
              </div>
              <p className="text-sm sm:text-base leading-[2] font-light text-justify" style={{ color: C.w50, fontFamily: FONT_TJ }}>
                يمثل هذا العمل الوثائقي تجربة رائدة في <strong className="text-white font-medium">"الصحافة العابرة للوسائط" (Transmedia Journalism)</strong> وصحافة البيانات. حيث تتقاطع قدرات الذكاء الاصطناعي في هندسة وتحليل الأرقام الماكرو-اقتصادية، مع الرؤية التحريرية البشرية، لتقديم تجربة استقصائية تفاعلية تواكب التحولات الوطنية وتضع القارئ في قلب الحدث.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── EDITORIAL CLOSING BUTTON ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1.5 }}
          className="flex flex-col items-center gap-8"
        >
          <Link
            to="/methodology"
            className="group relative px-8 py-4 rounded-sm border border-white/20 text-white bg-[#0A0D14] hover:bg-white/10 transition-all duration-500 overflow-hidden"
          >
            {/* Hover flare effect */}
            <div className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out" />
            
            <div className="relative flex items-center gap-4 z-10">
              <Power className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" style={{ color: C.cream }} />
              <span className="text-sm font-bold uppercase tracking-widest" style={{ fontFamily: FONT_TJ }}>
                الولوج إلى المنهجية وخلف الكواليس
              </span>
            </div>
          </Link>
          
          <div className="flex items-center gap-4 mt-8 opacity-40">
            <div className="h-px w-12 bg-white/40" />
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: C.cream, fontFamily: FONT_IBM }}>
              End of Report · Gara Djebilet 2026
            </span>
            <div className="h-px w-12 bg-white/40" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}