import { Link } from 'react-router';
import { motion } from 'motion/react';

// ── استيراد الهيكل السردي والأقسام الوثائقية ──
import { EditorialOpening } from '../components/EditorialOpening';
import { HeroSection } from '../components/HeroSection';
import { RouteSection } from '../components/RouteSection';
import { HistoricalSection } from '../components/HistoricalSection';
import { VisionToImplementation } from '../components/VisionToImplementation';
import { ConstructionSection } from '../components/ConstructionSection';
import { EconomicSection } from '../components/EconomicSection';
import { IndustrialSection } from '../components/IndustrialSection';
import { ExportSection } from '../components/ExportSection';
import { ConclusionSection } from '../components/ConclusionSection';
import { VisualPause } from '../components/Editorial';

// ── نظام الخطوط التحريري الموحد ──
const FONT_AJ = "'Al Jazeera', sans-serif";
const FONT_TJ = "'Tajawal', sans-serif";
const FONT_IBM = "'IBM Plex Sans Arabic', sans-serif";

// ── مكون المفاصل الفكرية المحدث (Expert Quote Card) ──
interface QuoteProps {
  category: string;
  text: string;
  name: string;
  role: string;
  date: string;
  source: string;
  image: string;
}

function ExpertQuoteCard({ category, text, name, role, date, source, image }: QuoteProps) {
  return (
    <section className="relative py-28 px-6 bg-[#040609] border-t border-b border-white/5">
      <motion.div 
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        dir="rtl"
      >
        {/* الصورة الدائرية مع تأثير التوثيق */}
        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden shrink-0 border border-white/10 shadow-[0_0_40px_rgba(181,154,114,0.03)] p-1 group">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700 cursor-pointer" 
          />
        </div>

        {/* محتوى الاقتباس الموثق (Metadata & Text) */}
        <div className="flex flex-col text-center md:text-right flex-1 w-full">
          
          {/* الطبقة العلوية: التصنيف التحريري والتاريخ */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6">
            
            <div className="w-1 h-1 rounded-full bg-[#B59A72]/50 hidden sm:block" />
            <p className="text-[10px] tracking-[0.2em] text-[#B59A72] uppercase font-bold" style={{ fontFamily: FONT_IBM }}>
              {date}
            </p>
          </div>

          {/* النص الحرفي */}
          <p className="text-xl md:text-2xl lg:text-3xl leading-[1.8] text-white/90 mb-8 font-light italic" style={{ fontFamily: FONT_AJ }}>
            "{text}"
          </p>

          {/* الطبقة السفلية: القائل + جهة التوثيق (Source) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-r-2 border-[#B59A72] pr-4 mt-2">
            <div>
              <h4 className="text-white font-bold text-base tracking-wide" style={{ fontFamily: FONT_TJ }}>{name}</h4>
              <p className="text-white/60 text-sm mt-1" style={{ fontFamily: FONT_TJ }}>{role}</p>
            </div>
            
            {/* الشارة التوثيقية (Source Badge) */}
            <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-sm self-center md:self-auto">
              <span className="text-[9px] tracking-wider uppercase text-white/30" style={{ fontFamily: FONT_IBM }}>المصدر:</span>
              <span className="text-xs font-bold text-white/70" style={{ fontFamily: FONT_TJ }}>{source}</span>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

// ── مكون جسر العبور الفهرسي (Navigation Bridge) ──
function NavigationBridge() {
  return (
    <div className="relative py-24 bg-[#05080F] border-t border-white/5 text-center overflow-hidden" dir="rtl">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#B59A72]/3 rounded-full blur-[100px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#4A6984]/3 rounded-full blur-[100px] -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 mb-8">
          <div className="w-8 h-[1px] bg-white/20" />
          <span className="text-white/40 text-[10px] tracking-widest uppercase font-mono">End of Chapter</span>
          <div className="w-8 h-[1px] bg-white/20" />
        </div>

        <h2 className="text-3xl font-black text-white mb-10" style={{ fontFamily: FONT_AJ }}>
          استكشف أبعاداً <span className="text-white/50">أخرى للمقاربة</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Link to="/methodology" className="group relative p-10 rounded-sm bg-[#0A0D14] border border-white/5 hover:border-[#B59A72]/50 transition-all duration-500 flex flex-col items-center text-center overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-[#B59A72]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <span className="text-xl">🔍</span>
            </div>
            <h3 className="text-[#B59A72] text-xl font-bold mb-3" style={{ fontFamily: FONT_AJ }}>المنهجية والمصادر</h3>
            <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: FONT_TJ }}>
              اكتشف الأرشيف الوثائقي، المصادر الرسمية، والمقاربة التحريرية الاستقصائية.
            </p>
          </Link>

          <Link to="/about" className="group relative p-10 rounded-sm bg-[#0A0D14] border border-white/5 hover:border-[#4A6984]/50 transition-all duration-500 flex flex-col items-center text-center overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-[#4A6984]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <span className="text-xl">👤</span>
            </div>
            <h3 className="text-[#4A6984] text-xl font-bold mb-3" style={{ fontFamily: FONT_AJ }}>خلف المنصة</h3>
            <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: FONT_TJ }}>
              تعرف على هوية المصمم والمطور، وكيف تم توظيف المقاييس الأكاديمية لتجسيد هذا العمل.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── الهيكل السردي الرئيسي للمنصة (Main Narrative Architecture) ──
export function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-[#040609]">
      
      {/* ── Layer 01: EDITORIAL MANIFESTO LAYER ── */}
      <EditorialOpening />

      {/* Transitional Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ── Layer 02: CINEMATIC EXPERIENTIAL LAYER ── */}
      <HeroSection />
      
      {/* 💡 المفصل 1: الافتتاحية والموقف السيادي (EDITORIAL REFLECTION) */}
      <ExpertQuoteCard 
        category="EDITORIAL REFLECTION"
        text="هذا هو الاقتصاد الذي نريده، وهو مشروع يعطي نفساً آخر للاقتصاد الوطني."
        name="عبد المجيد تبون"
        role="رئيس الجمهورية الجزائرية"
        date="30 نوفمبر 2023"
        source="الإذاعة الجزائرية / وكالة الأنباء (APS)"
        image="https://i.ibb.co/d03s49vC/image.webp" 
      />

      {/* ── Layer 03: EMPIRICAL CASE STUDY DOCUMENTARY ── */}
      <RouteSection />
      <HistoricalSection />
      
      {/* 💡 المفصل 2: نقطة التحول التاريخية (HISTORICAL TURNING POINT) */}
      <ExpertQuoteCard 
        category="HISTORICAL TURNING POINT"
        text="الأمور تسير في الطريق الصحيح بعدما عرف المشروع بعض المشاكل، على غرار تكلفة النقل... تم تخطي مشكل نزع الفوسفور."
        name="محمد عرقاب"
        role="وزير الطاقة والمناجم"
        date="11 جانفي 2021"
        source="جريدة المساء"
        image="https://i.ibb.co/SwfXh1tP/image.webp" 
      />

      <VisionToImplementation />
      
      {/* 💡 المفصل 3: الجغرافيا البشرية والتهيئة (HUMAN GEOGRAPHY) */}
      <ExpertQuoteCard 
        category="HUMAN GEOGRAPHY"
        text="يجب أن يتم توفير كافة الخدمات والمرافق على غرار الكهرباء وشبكة المياه لقاعدة الحياة وللساكنة مستقبلا، في اطار مدينة منجمية، بأتم معنى الكلمة."
        name="عبد المجيد تبون"
        role="رئيس الجمهورية الجزائرية"
        date="30 نوفمبر 2023"
        source="جريدة المصدر"
        image=" https://i.ibb.co/0jQj25Pk/image-2.webp " 
      />

      <ConstructionSection />

      {/* ── Layer 04: ANALYTICAL & GEOPOLITICAL Evaluation ── */}
      <EconomicSection />

      {/* 💡 المفصل 4: التوازن الماكرو-اقتصادي (MACRO-ECONOMY) */}
      <ExpertQuoteCard 
        category="MACRO-ECONOMY"
        text="استغلال منجم غارا جبيلات بات حتمية استراتيجية لتلبية طلبات مصانع الصلب من المواد الأولية في المرحلة الأولى."
        name="محمد صخر حرامي"
        role="المدير العام لمجمع مناجم الجزائر (سوناريم)"
        date="2023"
        source="موقع سهم ميديا"
        image="https://cdn.elmoudjaz.dz/wp-content/uploads/2022/04/%D8%AD%D8%B1%D8%A7%D9%85%D9%8A.png" 
      />

      <IndustrialSection />

      {/* 💡 المفصل 5: السيادة الصناعية والتكامل (INDUSTRIAL SOVEREIGNTY) */}
      <ExpertQuoteCard 
        category="INDUSTRIAL SOVEREIGNTY"
        text="إنّ منجم “غارا جبيلات” يُعدُّ مشروعا ضخما واستراتيجيا لتنمية صناعة الحديد والصلب في الجزائر حيث سيضمن تموين مُركبي “بلارة” و “توسيالي” بالمادة الأولية التي ما تزال تستورد لحد الآن من الخارج."
        name="أحمد بن عباس"
        role="الرئيس المدير العام للمؤسسة الوطنية للحديد والصلب (فيرال)"
        date="2022"
        source="القناة الإذاعية الأولى"
        image="https://i.ibb.co/FbytGDtN/ben-4.jpg" 
      />

      <VisualPause
        caption="من باطن الأرض في الحمادة المفتوحة إلى موانئ المتوسط.. تكتمل دورة القيمة وتتسع آفاق التصدير."
        height="35svh"
      />

      <ExportSection />
      
      {/* 💡 المفصل 6: الانعكاس المجتمعي والخاتمة (SOCIO-ECONOMIC IMPACT) */}
      <ExpertQuoteCard 
        category="SOCIO-ECONOMIC IMPACT"
        text="المشروعين الكبيران، اللذان تم إنجازهما في وقت قياسي، قرارا حاسما واستراتيجيا للبلاد، وهو ما تجسد في انجاز خط ضخم للسكة الحديدية كشريان استراتيجي حقيقي يربط الجنوب الغربي ببقية مناطق الوطن."
        name="د. ياسين حشوف"
        role="أستاذ العلوم السياسية - جامعة طاهري محمد لبشار"
        date="تغطيات وثائقية"
        source="وكالة الأنباء الجزائرية (APS)"
        image=" https://i.ibb.co/SDjVNNBx/Capture-d-cran-2026-05-26-194957.png " 
      />

      {/* ── Layer 05: EDITORIAL CLOSURE LAYER ── */}
      <ConclusionSection />
      <NavigationBridge />
    </main>
  );
}