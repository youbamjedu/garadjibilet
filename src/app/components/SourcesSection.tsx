import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  ShieldCheck, 
  Search, 
  GitMerge, 
  BrainCircuit, 
  CheckCircle2, 
  Newspaper,
  Database,
  ArrowLeft,
  Landmark,
  FileText,
  Pickaxe,
  Factory,
  Route,
  Radio,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router';

// ── EDITORIAL TYPOGRAPHY & PALETTE ─────────────────────────────────────────
const FONT_AJ = "'Al Jazeera', sans-serif";
const FONT_TJ = "'Tajawal', sans-serif";
const FONT_IBM = "'IBM Plex Sans Arabic', sans-serif";

const C = {
  void: '#040609', deep: '#0A0D14', shell: '#12161E',
  brass: '#B59A72', steel: '#4A6984', cream: '#F4EFEA',
};

// ── NEWSROOM WORKFLOW ──
const workflowSteps = [
  { title: "Research", desc: "التنقيب في الأرشيف الرسمي", icon: Search },
  { title: "Verification", desc: "التقاطع والتحقق الميداني", icon: CheckCircle2 },
  { title: "Architecture", desc: "هندسة السرد والتفاعل", icon: GitMerge },
  { title: "AI Assist", desc: "تنظيم البيانات والأكواد", icon: BrainCircuit },
  { title: "Review", desc: "المراجعة التحريرية والأخلاقية", icon: ShieldCheck },
];

// ── VERIFIED SOURCES ARRAYS ──
const officialSources = [
  { title: 'رئاسة الجمهورية الجزائرية', desc: 'المراسيم والتصريحات الرسمية لرئيس الجمهورية حول المشروع المنجمي.', icon: Landmark },
  { title: 'وزارة الطاقة والمناجم', desc: 'التقارير الرسمية المؤطرة للمشروع والسياسات المنجمية الوطنية.', icon: FileText },
  { title: 'مجمع سوناريم (SONAREM)', desc: 'البيانات الجيولوجية والتقنية الصادرة عن المجمع المنجمي العمومي.', icon: Pickaxe },
  { title: 'مجمع توسيالي الجزائر (Tosyali)', desc: 'البيانات المالية الخاصة بالاستثمارات، التحويل الصناعي، والصلب الأخضر.', icon: Factory },
  { title: 'الوكالة الوطنية (ANESRIF)', desc: 'مخططات الإنجاز والدراسات المتعلقة بشبكة السكة الحديدية الغربية.', icon: Route }
];

const mediaSources = [
  { title: 'وكالة الأنباء الجزائرية (APS)', desc: 'التغطية الإخبارية والمتابعة الميدانية الدورية لمراحل الإنجاز والتدشين.', icon: Newspaper },
  { title: 'الإذاعة والتلفزيون الجزائري', desc: 'البرامج الاقتصادية، الوثائقيات، والتصريحات المسجلة للفاعلين في المشروع.', icon: Radio },
  { title: 'الصحافة الاقتصادية المتخصصة', desc: 'المقالات التحليلية ومقاطعة الأرقام الماكرو-اقتصادية من المنابر الموثوقة.', icon: TrendingUp }
];

export function SourcesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="relative min-h-[100svh] bg-[#040609] pt-32 pb-24 px-6 overflow-hidden" dir="rtl">
      
      {/* ── HEADER: Editorial Manifesto ── */}
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase font-light text-[#B59A72] mb-4" style={{ fontFamily: FONT_IBM }}>
          Methodology & Verification
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8" style={{ fontFamily: FONT_AJ }}>
          منهجية السرد <span style={{ color: C.brass }}>والتحقق</span>
        </h1>
        <p className="text-base sm:text-lg leading-[2.2] text-white/60 font-light max-w-3xl mx-auto" style={{ fontFamily: FONT_TJ }}>
          كيف يُبنى التحقيق الرقمي في عصر الخوارزميات؟ هذا القسم لا يعرض مجرد روابط، بل يوثق "غرفة الأخبار الافتراضية" التي قاطعت البيانات، دمجت التكنولوجيا، وحمت قدسية السرد البشري.
        </p>
      </div>

      <div className="max-w-5xl mx-auto" ref={ref}>
        
        {/* ── 1. EDITORIAL ETHICS BLOCK (The Golden Rule) ── */}
        <motion.div 
          className="p-8 md:p-12 mb-20 rounded-sm border relative overflow-hidden shadow-2xl"
          style={{ background: C.shell, borderColor: 'rgba(181, 154, 114, 0.15)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-0 right-0 w-1.5 h-full" style={{ background: C.brass }} />
          <ShieldCheck className="w-10 h-10 mb-6" style={{ color: C.brass }} />
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4" style={{ fontFamily: FONT_AJ }}>الميثاق الأخلاقي والتحريري</h3>
          <p className="text-sm sm:text-base leading-[2.2] text-white/80 font-light text-justify sm:text-right" style={{ fontFamily: FONT_TJ }}>رغم توظيف أدوات الذكاء الاصطناعي في دعم الهيكلة البصرية، وتنظيم المعطيات وتسريع بناء التجربة التفاعلية، <strong>ظل التحقق من المعلومات، التحرير الصحفي، وبناء السرد الزمني والمكاني عملية بشرية </strong>خاضعة للمراجعة التحريرية و الأخلاقية. لم تُختلق أي معلومة، ولم يُولد أي اقتباس.</p>
        </motion.div>

        {/* ── 2. NEWSROOM WORKFLOW TIMELINE ── */}
        <div className="mb-24">
          <h4 className="text-[10px] sm:text-xs tracking-widest uppercase font-bold text-white/40 mb-10 text-center" style={{ fontFamily: FONT_IBM }}>
            // مسار الإنتاج الصحفي الرقمي
          </h4>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0" />
            {workflowSteps.map((step, i) => (
              <motion.div 
                key={i} 
                className="relative z-10 flex flex-col items-center gap-3 bg-[#040609] px-4 py-2"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + (i * 0.1) }}
              >
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-[#0A0D14]">
                  <step.icon size={16} style={{ color: i === 4 ? C.brass : C.steel }} />
                </div>
                <div className="text-center">
                  <span className="block text-[10px] tracking-widest font-bold uppercase" style={{ color: C.cream, fontFamily: FONT_IBM }}>{step.title}</span>
                  <span className="block text-xs mt-1 text-white/40" style={{ fontFamily: FONT_TJ }}>{step.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── 3. VERIFIED SOURCES CLASSIFICATION ── */}
        <div className="mb-20">
          
          {/* Institutional Sources */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
              <Database size={18} style={{ color: C.brass }} />
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: FONT_AJ }}>مصادر مؤسساتية ورسمية</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {officialSources.map((source, idx) => (
                <div key={idx} className="p-6 bg-[#0A0D14] border border-white/5 rounded-sm hover:border-white/10 transition-colors flex gap-4 items-start">
                  <source.icon size={20} className="shrink-0 mt-1" style={{ color: C.brass }} />
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2" style={{ fontFamily: FONT_AJ }}>{source.title}</h4>
                    <p className="text-xs leading-relaxed text-white/50" style={{ fontFamily: FONT_TJ }}>{source.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Media & Reporting Sources */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
              <Newspaper size={18} style={{ color: C.steel }} />
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: FONT_AJ }}>تغطيات ومراجع إعلامية</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mediaSources.map((source, idx) => (
                <div key={idx} className="p-6 bg-[#0A0D14] border border-white/5 rounded-sm hover:border-white/10 transition-colors flex gap-4 items-start">
                  <source.icon size={20} className="shrink-0 mt-1" style={{ color: C.steel }} />
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2" style={{ fontFamily: FONT_AJ }}>{source.title}</h4>
                    <p className="text-xs leading-relaxed text-white/50" style={{ fontFamily: FONT_TJ }}>{source.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ── 4. NARRATIVE LOOP (Link to Team) ── */}
        <motion.div 
          className="flex justify-center border-t border-white/10 pt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Link to="/about" className="group flex flex-col items-center gap-3">
            <span className="text-[10px] tracking-[0.3em] uppercase font-light text-white/40" style={{ fontFamily: FONT_IBM }}>
              Next Chapter
            </span>
            <div className="flex items-center gap-3 text-white transition-colors group-hover:text-[#B59A72]">
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              <span className="text-sm sm:text-base font-bold uppercase tracking-widest" style={{ fontFamily: FONT_TJ }}>
                داخل غرفة التحرير (خلف التجربة)
              </span>
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}