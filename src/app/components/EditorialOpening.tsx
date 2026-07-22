import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ChevronDown, BookOpen, User, Layers } from 'lucide-react';

// ── نظام الخطوط التحريري ──
const FONT_AJ = "'Al Jazeera', sans-serif";
const FONT_TJ = "'Tajawal', sans-serif";
const FONT_IBM = "'IBM Plex Sans Arabic', sans-serif";

// ── ألوان الواجهة الرقمية الرصينة ──
const C = {
  void: '#040609',
  deep: '#0A0D14',
  steel: '#4A6984',
  brass: '#B59A72',
  cream: '#F4EFEA',
  digital: 'rgba(74, 105, 132, 0.04)',
  digitalBorder: 'rgba(74, 105, 132, 0.15)',
};

export function EditorialOpening() {
  const scrollToHero = () => {
    const hero = document.getElementById('hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92svh] flex flex-col justify-center bg-[#040609] overflow-hidden px-4 py-16" dir="rtl">
      
      {/* ── خلفية تكنولوجية هادئة (Minimal Data Grid) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ backgroundImage: `linear-gradient(${C.steel} 1px, transparent 1px), linear-gradient(90deg, ${C.steel} 1px, transparent 1px)`, backgroundSize: '50px 50px' }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040609] via-transparent to-[#040609]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col justify-between min-h-[80svh]">
        


        {/* المنتصف: الافتتاحية الصحفية (البيان التحريري) */}
        <div className="my-auto py-12">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1
  className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tight"
  style={{ fontFamily: FONT_AJ }}
>
  في عصر الذكاء الاصطناعي، <br />
  <span style={{ color: C.brass }}>
    كيف سيبدو مستقبل الصحافة الجزائرية؟
  </span>
</h1>
            <p
  className="text-base sm:text-lg lg:text-xl font-light leading-[2.2] max-w-3xl mx-auto text-white/70"
  style={{ fontFamily: FONT_TJ }}
>
  هذا العمل تجربة صحفية رقمية تفاعلية توظف السرد البصري، التصور البياني، وتقنيات الذكاء الاصطناعي لاستكشاف تحولات الإعلام الرقمي في الجزائر، مع الحفاظ على جوهر الممارسة الصحفية: التحقق، التحرير، والمسؤولية الإنسانية.
</p>
          </motion.div>

          {/* ميثاق الالتزام المهني (تفكيك العلاقة بين الصحفي والآلة) */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="p-6 rounded-sm border text-right" style={{ background: C.digital, borderColor: C.digitalBorder }}>
              
              <h3
  className="text-white font-bold text-base mb-2"
  style={{ fontFamily: FONT_AJ }}
>
  الأدوات الذكية داخل غرفة الأخبار
</h3>

<p
  className="text-xs leading-relaxed text-white/50"
  style={{ fontFamily: FONT_TJ }}
>
  استخدام تقنيات الذكاء الاصطناعي في تنظيم المعلومات، دعم تجربة المستخدم، وتسريع بناء البنية التفاعلية للمشروع.
</p>
            </div>

            <div className="p-6 rounded-sm border text-right" style={{ background: C.digital, borderColor: C.digitalBorder }}>
              
             <h3
  className="text-white font-bold text-base mb-2"
  style={{ fontFamily: FONT_AJ }}
>
  القرار الصحفي البشري
</h3>

<p
  className="text-xs leading-relaxed text-white/50"
  style={{ fontFamily: FONT_TJ }}
>
  التحقق من المعطيات، التحرير الصحفي، بناء السرد، ومقاطعة المصادر الرسمية بقيت عملية بشرية خاضعة للمسؤولية الأخلاقية والتحريرية.
</p>
            </div>
          </motion.div>
        </div>

        {/* الأسفل: أزرار التوجيه وسطر الهوية القاتل */}
        <motion.div 
          className="flex flex-col items-center gap-6 mt-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* زر التحويل الرئيسي */}
          <button 
            onClick={scrollToHero}
            className="group flex flex-col items-center gap-2 transition-transform hover:scale-102"
          >
            <span className="text-sm font-bold tracking-widest uppercase transition-colors pb-1 text-white group-hover:text-white/80" style={{ fontFamily: FONT_TJ }}>استكشف التجربة</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center animate-bounce text-white/60">
              <ChevronDown size={14} />
            </div>
          </button>

          {/* 🌟 إضافة سطر الهوية الفاخر أسفل الـ CTA مباشرة 🌟 */}
          <div className="mt-2 border-t border-white/5 pt-4 w-full max-w-md text-center">
            <p className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-light opacity-30 select-none text-white" style={{ fontFamily: FONT_IBM }}>
              Web Documentary — Data Storytelling — Interactive Journalism
            </p>
          </div>

          {/* روابط المنهجية والمطور */}
          <div className="flex items-center gap-6 mt-4 border-t border-white/5 pt-4 w-full justify-center opacity-50 hover:opacity-60 transition-opacity">
            <Link to="/methodology" className="text-[10px] tracking-wider uppercase font-medium flex items-center gap-1.5 text-white" style={{ fontFamily: FONT_IBM }}>
              <BookOpen size={12} /> المنهجية والمصادر
            </Link>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <Link to="/about" className="text-[10px] tracking-wider uppercase font-medium flex items-center gap-1.5 text-white" style={{ fontFamily: FONT_IBM }}>
              <User size={12} /> خلف المنصة
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}