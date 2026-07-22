import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { PenTool, Target, Crosshair, Cpu, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

// ── EDITORIAL TYPOGRAPHY & PALETTE ─────────────────────────────────────────
const FONT_AJ = "'Al Jazeera', sans-serif";
const FONT_TJ = "'Tajawal', sans-serif";
const FONT_IBM = "'IBM Plex Sans Arabic', sans-serif";

const C = {
  void: '#040609', deep: '#0A0D14', shell: '#12161E',
  brass: '#B59A72', steel: '#4A6984', cream: '#F4EFEA',
};

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="relative min-h-[100svh] bg-[#040609] pt-32 pb-24 px-6 overflow-hidden" dir="rtl">
      
      {/* ── HEADER: The Director's Room ── */}
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase font-light text-[#4A6984] mb-4" style={{ fontFamily: FONT_IBM }}>
          Inside the Newsroom
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8" style={{ fontFamily: FONT_AJ }}>
          داخل غرفة <span style={{ color: C.steel }}>التحرير</span>
        </h1>
      </div>

      <div className="max-w-4xl mx-auto" ref={ref}>
        
        {/* ── 1. EDITORIAL INTENT (Director's Note) ── */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="inline-block relative">
            <span className="absolute -top-6 -right-8 text-6xl text-white/10" style={{ fontFamily: FONT_AJ }}>"</span>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90 font-light italic px-8" style={{ fontFamily: FONT_AJ }}>لا يهدف هذا العمل إلى تقديم استعراض تقني لقدرات الذكاء الاصطناعي، بل إلى استكشاف كيف يمكن للصحافة الرقمية الجزائرية أن تعيد بناء علاقتها بالسرد، بالبيانات، والتفاعل في في عصر التحول الرقمي.</p>
            <span className="absolute -bottom-10 -left-6 text-6xl text-white/10" style={{ fontFamily: FONT_AJ }}>"</span>
          </div>
        </motion.div>

        {/* ── 2. THE JOURNALIST IDENTITY (Academic Authority) ── */}
        <motion.div 
          className="p-10 md:p-14 bg-[#0A0D14] border border-white/5 rounded-sm flex flex-col items-center text-center mb-20 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Ooredoo Accent Line for Competition Relevance */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ED1C24]/25 to-transparent" />
          
          <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center bg-[#040609] mb-6 shadow-[0_0_30px_rgba(74,105,132,0.1)]">
            <PenTool size={28} style={{ color: C.steel }} />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: FONT_AJ }}>يوب محمد أمجد</h2>
          <p className="text-sm font-bold tracking-widest uppercase mb-6 text-[#B59A72]" style={{ fontFamily: FONT_TJ }}>
            باحث في الصحافة الرقمية والسرد التفاعلي
          </p>
          <p className="text-sm leading-relaxed text-white/60 max-w-2xl font-light" style={{ fontFamily: FONT_TJ }}>طالب ماستر متخصص في <strong className="text-white">التصميم المعلوماتي والصحافة العابرة للوسائط (Transmedia)</strong> بكلية العلوم الإنسانية والاجتماعية - جامعة قاصدي مرباح ورقلة. يمثل هذا العمل رؤية          تحريرية وتطبيقية لصحفي رقمي يستخدم التكنولوجيا لصناعة القصة، وليس مبرمجاً يصمم موقعاً.</p>
        </motion.div>

        {/* ── 3. METHODOLOGICAL PILLARS (The Foundation) ── */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {[
            { icon: Target, title: 'السرد التفاعلي', desc: 'تحويل النص الخطي إلى تجربة تمرير استقصائية.' },
            { icon: Crosshair, title: 'التحقق المتقاطع', desc: 'مقاطعة المصادر الرسمية ومنع التوليد الآلي للمعلومة.' },
            { icon: Cpu, title: 'مساعد تقني (AI)', desc: 'توظيف الآلة حاسوبياً لخدمة المعمارية وتجربة المستخدم.' },
          ].map((pillar, i) => (
             <div key={i} className="flex flex-col items-center text-center p-6 border border-white/5 rounded-sm bg-[#040609]">
               <pillar.icon size={20} className="mb-4" style={{ color: C.steel }} />
               <h4 className="text-sm font-bold text-white mb-2" style={{ fontFamily: FONT_AJ }}>{pillar.title}</h4>
               <p className="text-xs leading-relaxed text-white/50" style={{ fontFamily: FONT_TJ }}>{pillar.desc}</p>
               
             </div>
          ))}
        </motion.div>

        {/* ── 4. NARRATIVE LOOP (Link back to Sources) ── */}
        <motion.div 
          className="flex justify-center border-t border-white/10 pt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link to="/methodology" className="group flex flex-col items-center gap-3">
            <span className="text-[10px] tracking-[0.3em] uppercase font-light text-white/40" style={{ fontFamily: FONT_IBM }}>
              Previous Chapter
            </span>
            <div className="flex items-center gap-3 text-white transition-colors group-hover:text-[#4A6984]">
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              <span className="text-sm font-bold uppercase tracking-widest" style={{ fontFamily: FONT_TJ }}>
                اكتشف المنهجية والمصادر
              </span>
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}