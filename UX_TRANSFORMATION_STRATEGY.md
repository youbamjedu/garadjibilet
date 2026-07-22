# 🎬 GARA DJEBILET — UX TRANSFORMATION STRATEGY
**من موقع ويب إلى تجربة سردية سينمائية تفاعلية**

---

## 📊 CURRENT STATE ANALYSIS

### Existing Section Flow (12 sections)
```
1. HeroSection
2. RouteSection (map)
3. HistoricalSection (1950s-2023 timeline + obstacles)
4. SovereignDecisionSection (2023-2026 milestones + institutions)
5. VisionToImplementation (duplicate milestones 2023-2026 + gallery)
6. ConstructionSection (obstacles + phases)
7. EconomicSection
8. IndustrialSection
9. ExportSection
10. ConclusionSection
11. TeamSection
12. SourcesSection
```

### ⚠️ IDENTIFIED REDUNDANCIES

#### Critical Duplications:
1. **Timeline Fragmentation**
   - `HistoricalSection`: Timeline 1950s → 2023
   - `SovereignDecisionSection`: Milestones 2023 → 2026
   - `VisionToImplementation`: Duplicate milestones 2023 → 2026
   - **Action**: Merge into single unified timeline

2. **Obstacles Repetition**
   - `HistoricalSection`: 4 delay obstacles
   - `ConstructionSection`: 6 obstacles (overlapping content)
   - **Action**: Consolidate into one narrative beat

3. **Decision/Launch Narrative**
   - Both `SovereignDecisionSection` and `VisionToImplementation` tell the same "presidential decision → implementation" story
   - **Action**: Merge into single powerful section

---

## 🎯 NEW NARRATIVE ARCHITECTURE

### Proposed 8-Section Journey (Reduced from 12)

```
┌─────────────────────────────────────────────────────────┐
│ CHAPTER 1: THE HOOK                                     │
├─────────────────────────────────────────────────────────┤
│ 1. HERO                                                 │
│    Visual impact + project magnitude                    │
│    Scroll cue to begin journey                          │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│ CHAPTER 2: THE CONTEXT (Past → Present)                │
├─────────────────────────────────────────────────────────┤
│ 2. HISTORICAL VISION & OBSTACLES [MERGED]               │
│    - Discovery (1950s)                                  │
│    - Boumediene's vision (1965)                         │
│    - Why it failed: 50 years of delay                   │
│    - Obstacles visualization (scroll-triggered)         │
│    [Merges: HistoricalSection + ConstructionSection]    │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│ CHAPTER 3: THE DECISION (Turning Point)                │
├─────────────────────────────────────────────────────────┤
│ 3. SOVEREIGN DECISION → EXECUTION [MERGED]              │
│    - 2020: Presidential commitment                      │
│    - 2023: Foundation stone                             │
│    - 2025-2026: Execution milestones                    │
│    - Unified timeline (scroll-based animation)          │
│    - Key institutions carousel                          │
│    [Merges: SovereignDecision + VisionToImplementation] │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│ CHAPTER 4: THE JOURNEY (Geographic Experience)         │
├─────────────────────────────────────────────────────────┤
│ 4. INTERACTIVE ROUTE                                    │
│    - Scroll-driven map animation                        │
│    - 950km path draws as you scroll                     │
│    - Station reveals: Gara Djebilet → Tindouf →         │
│      Bechar → Mecheria → Oran                           │
│    [Keep: RouteSection — enhance with scroll control]   │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│ CHAPTER 5: THE TRANSFORMATION (Industrial Chain)       │
├─────────────────────────────────────────────────────────┤
│ 5. INDUSTRIAL TRANSFORMATION                            │
│    - Iron extraction → processing → steel               │
│    - Animated flow diagram                              │
│    - 50M tons capacity visualization                    │
│    [Keep: IndustrialSection]                            │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│ CHAPTER 6: THE IMPACT (Economic Future)                │
├─────────────────────────────────────────────────────────┤
│ 6. ECONOMIC IMPACT + EXPORT                             │
│    - GDP contribution                                   │
│    - Job creation (count-up animation)                  │
│    - Export markets visualization                       │
│    - Revenue projections (animated charts)              │
│    [Merges: EconomicSection + ExportSection]            │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│ CHAPTER 7: THE VISION (Closure)                        │
├─────────────────────────────────────────────────────────┤
│ 7. CONCLUSION                                           │
│    - From desert to steel                               │
│    - Algeria's industrial transformation                │
│    - Final emotional beat                               │
│    [Keep: ConclusionSection]                            │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│ META SECTIONS                                           │
├─────────────────────────────────────────────────────────┤
│ 8. TEAM (Solo creator presentation)                     │
│ 9. SOURCES (Academic context)                           │
│ 10. FOOTER                                              │
└─────────────────────────────────────────────────────────┘
```

---

## 🎬 SCROLL-DRIVEN INTERACTION SYSTEM

### Global Scroll Architecture

```typescript
// Global scroll progress: 0-100%
const { scrollYProgress } = useScroll();

// Chapter boundaries (scroll percentage)
const chapters = {
  hero: { start: 0, end: 10 },
  history: { start: 10, end: 25 },
  decision: { start: 25, end: 40 },
  route: { start: 40, end: 60 },      // Interactive map
  industrial: { start: 60, end: 75 },
  impact: { start: 75, end: 90 },
  conclusion: { start: 90, end: 100 }
};
```

### Scroll-Linked Animations

#### 1. **Hero Section**
```typescript
// Parallax layers
const heroImageY = useTransform(scrollYProgress, [0, 0.15], ['0%', '30%']);
const heroTextY = useTransform(scrollYProgress, [0, 0.15], ['0%', '50%']);
const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

// Scroll indicator pulse
<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{ repeat: Infinity, duration: 1.5 }}
>
  ⬇ scroll to explore
</motion.div>
```

#### 2. **Historical Timeline (Scroll-Based)**
```typescript
// Timeline reveals on scroll
const timelineProgress = useTransform(
  scrollYProgress,
  [0.10, 0.25],  // History chapter range
  [0, 1]
);

// Each timeline point appears progressively
timeline.map((item, i) => {
  const itemProgress = useTransform(
    timelineProgress,
    [i/5, (i+1)/5],
    [0, 1]
  );
  
  return (
    <motion.div
      style={{ 
        opacity: itemProgress,
        scale: useTransform(itemProgress, [0, 1], [0.8, 1])
      }}
    />
  );
});
```

#### 3. **Route Section (Core Scrollytelling)**
```typescript
// Map route draws as user scrolls
const routeProgress = useTransform(
  scrollYProgress,
  [0.40, 0.60],  // Route chapter range
  [0, 100]       // 0% → 100% of path
);

// SVG path animation
<motion.path
  d={routePath}
  pathLength={routeProgress}
  stroke="#E1FF00"
  strokeWidth={3}
/>

// Stations appear sequentially
const stations = [
  { name: 'غارا جبيلات', progress: 0 },
  { name: 'تيندوف', progress: 25 },
  { name: 'بشار', progress: 50 },
  { name: 'المشرية', progress: 75 },
  { name: 'وهران', progress: 100 }
];

stations.map(station => (
  <motion.div
    animate={{
      opacity: routeProgress >= station.progress ? 1 : 0,
      scale: routeProgress >= station.progress ? 1 : 0.5
    }}
  />
));
```

#### 4. **Data Visualization (Count-up + Chart Growth)**
```typescript
// Number count-up effect
const statsInView = useInView(ref, { once: true, margin: '-100px' });

useEffect(() => {
  if (statsInView) {
    animate(counter, targetValue, {
      duration: 2,
      onUpdate: (v) => setDisplayValue(Math.round(v))
    });
  }
}, [statsInView]);

// Bar chart growth
<motion.div
  initial={{ height: 0 }}
  whileInView={{ height: `${percentage}%` }}
  viewport={{ once: true, margin: '-80px' }}
  transition={{ duration: 1.2, ease: 'easeOut', delay }}
/>

// Line chart path drawing
<motion.path
  d={chartPath}
  initial={{ pathLength: 0 }}
  whileInView={{ pathLength: 1 }}
  transition={{ duration: 2, ease: 'easeInOut' }}
/>
```

---

## 🔄 SECTION TRANSITION SYSTEM

### Transition Types

#### A. **Fade + Translate (Default)**
```typescript
// Section enters from below
<motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-120px' }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
/>
```

#### B. **Sticky Sections (Timeline/Route)**
```css
.sticky-section {
  position: sticky;
  top: 0;
  height: 100vh;
}

.scroll-spacer {
  height: 300vh; /* Creates scroll space for animations */
}
```

#### C. **Mask Reveal (For Images/Maps)**
```typescript
<motion.div
  initial={{ clipPath: 'inset(0 100% 0 0)' }}
  whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
  transition={{ duration: 1.4, ease: 'easeInOut' }}
>
  <img src={map} />
</motion.div>
```

#### D. **Crossfade Between Chapters**
```typescript
const opacity1 = useTransform(scrollYProgress, [0.24, 0.26], [1, 0]);
const opacity2 = useTransform(scrollYProgress, [0.24, 0.26], [0, 1]);

<motion.div style={{ opacity: opacity1 }}>
  {/* Chapter 1 content */}
</motion.div>
<motion.div style={{ opacity: opacity2 }}>
  {/* Chapter 2 content */}
</motion.div>
```

---

## 📐 MICRO-INTERACTIONS CATALOG

### 1. **Hover Effects**
```typescript
// Card hover
<motion.div
  whileHover={{
    scale: 1.03,
    y: -6,
    boxShadow: '0 20px 60px rgba(225,255,0,0.25)',
    borderColor: '#E1FF00'
  }}
  transition={{ duration: 0.3, ease: 'easeOut' }}
/>

// Button ripple
<motion.button
  whileTap={{ scale: 0.95 }}
  whileHover={{
    boxShadow: '0 0 30px rgba(225,255,0,0.5)',
    backgroundColor: '#E1FF00'
  }}
/>
```

### 2. **Map Node Interaction**
```typescript
// Station node on route map
<motion.circle
  whileHover={{
    scale: 1.5,
    stroke: '#E1FF00',
    strokeWidth: 4,
    filter: 'drop-shadow(0 0 20px #E1FF00)'
  }}
  onClick={() => setActiveStation(id)}
/>

// Tooltip reveal
<AnimatePresence>
  {activeStation && (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      {stationInfo}
    </motion.div>
  )}
</AnimatePresence>
```

### 3. **Data Point Reveals**
```typescript
// Staggered stat cards
const statCards = stats.map((stat, i) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ 
      delay: i * 0.15,
      duration: 0.6,
      type: 'spring',
      stiffness: 100
    }}
  />
));
```

---

## 🧭 NAVIGATION INTELLIGENCE

### Scroll Spy System
```typescript
// Track active section
const [activeSection, setActiveSection] = useState('hero');

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    { threshold: 0.5, rootMargin: '-80px 0px' }
  );

  sections.forEach(section => observer.observe(section));
  return () => observer.disconnect();
}, []);
```

### Progress Indicator
```typescript
// Global progress bar (top of page)
<motion.div
  style={{
    scaleX: scrollYProgress,
    transformOrigin: '0%',
    height: '3px',
    background: 'linear-gradient(90deg, #E1FF00, #3CE89B)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100
  }}
/>

// Chapter indicator (side navigation)
<div className="fixed right-8 top-1/2 -translate-y-1/2">
  {chapters.map(chapter => (
    <motion.div
      animate={{
        scale: activeSection === chapter.id ? 1.5 : 1,
        backgroundColor: activeSection === chapter.id 
          ? '#E1FF00' 
          : 'rgba(255,255,255,0.2)'
      }}
    />
  ))}
</div>
```

---

## 🎨 VISUAL REFINEMENT GUIDELINES

### Typography Hierarchy
```css
/* Current issue: too similar sizes */
/* Proposed enhancement: */

.section-title {
  font-size: clamp(2.5rem, 6vw, 4rem);    /* 40-64px */
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: clamp(1.125rem, 2vw, 1.5rem); /* 18-24px */
  font-weight: 500;
  opacity: 0.7;
  line-height: 1.5;
}

.body-text {
  font-size: clamp(0.875rem, 1.5vw, 1.125rem); /* 14-18px */
  line-height: 1.75;
  opacity: 0.65;
}
```

### Spacing System
```css
/* Reduce visual clutter with consistent rhythm */
--space-section: clamp(6rem, 12vh, 10rem);   /* Between sections */
--space-block: clamp(3rem, 6vh, 5rem);       /* Between blocks */
--space-element: clamp(1.5rem, 3vh, 2.5rem); /* Between elements */
```

### Glass Effects Optimization
```css
/* Current: too many blur layers slow performance */
/* Proposed: selective application */

.glass-card {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05),
    rgba(10, 15, 26, 0.95)
  );
  backdrop-filter: blur(12px); /* Reduced from 20px */
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 
    0 0 0 1px rgba(225, 255, 0, 0.1),
    0 8px 32px rgba(0, 0, 0, 0.4);
}

/* Only use on foreground cards, not background elements */
```

### Contrast Enhancement
```css
/* Ensure readability */
.text-primary { color: #FFFFFF; opacity: 1; }     /* Main content */
.text-secondary { color: #FFFFFF; opacity: 0.75; } /* Supporting */
.text-tertiary { color: #FFFFFF; opacity: 0.5; }   /* Hints */

/* Accent colors maintain full saturation */
.accent-neon { color: #E1FF00; }
.accent-green { color: #3CE89B; }
.accent-blue { color: #0086E7; }
```

---

## 🚀 IMPLEMENTATION ROADMAP

### Phase 1: Restructure (Week 1)
**Goal**: Merge redundant sections, reorder narrative flow

**Actions**:
1. ✂️ Merge `HistoricalSection` + `ConstructionSection` → `HistoricalVisionSection`
2. ✂️ Merge `SovereignDecisionSection` + `VisionToImplementation` → `DecisionToExecutionSection`
3. ✂️ Merge `EconomicSection` + `ExportSection` → `EconomicImpactSection`
4. 📐 Reorder sections in App.tsx per new architecture
5. 🧪 Test narrative continuity

**Files to modify**:
- `/src/app/App.tsx`
- `/src/app/components/HistoricalVisionSection.tsx` (new merged component)
- `/src/app/components/DecisionToExecutionSection.tsx` (new merged component)
- `/src/app/components/EconomicImpactSection.tsx` (new merged component)

---

### Phase 2: Scroll System (Week 2)
**Goal**: Implement global scroll progress tracking and chapter-based animations

**Actions**:
1. 🎯 Create `useScrollChapters` hook for global progress tracking
2. 🗺️ Convert `RouteSection` to scroll-driven path animation
3. 📊 Implement scroll-based timeline in `HistoricalVisionSection`
4. 🎬 Add sticky section behavior for key narrative beats
5. ➡️ Create smooth inter-section transitions

**New files**:
- `/src/hooks/useScrollChapters.ts`
- `/src/hooks/useScrollAnimation.ts`

**Components to enhance**:
- `RouteSection.tsx`
- `HistoricalVisionSection.tsx`
- `DecisionToExecutionSection.tsx`

---

### Phase 3: Data Animation (Week 3)
**Goal**: Transform static data into dynamic, scroll-triggered visualizations

**Actions**:
1. 🔢 Add count-up animation for all statistics
2. 📈 Implement progressive bar chart reveals
3. 📉 Add line chart path drawing animations
4. 🎯 Stagger card/element reveals with viewport detection
5. ⚡ Optimize performance (avoid re-renders)

**Components to enhance**:
- `EconomicImpactSection.tsx`
- `IndustrialSection.tsx`
- Timeline components

**Utilities**:
- Create `/src/utils/animateNumber.ts`
- Create `/src/components/AnimatedChart.tsx`

---

### Phase 4: Micro-interactions (Week 4)
**Goal**: Add subtle, meaningful interactions throughout

**Actions**:
1. 🎨 Enhance all hover states (cards, buttons, links)
2. 🗺️ Add interactive map nodes with tooltips
3. 💡 Create ripple/pulse effects for CTAs
4. ⌨️ Add keyboard navigation support
5. 📱 Test touch interactions on mobile

**Components to enhance**:
- All card components
- `RouteSection.tsx` (map interactions)
- Button components
- Navigation

---

### Phase 5: Navigation & UX Polish (Week 5)
**Goal**: Complete user guidance system and final refinements

**Actions**:
1. 🧭 Implement scroll spy navigation
2. 📊 Add global progress indicator
3. 🎨 Refine typography hierarchy
4. 🎭 Reduce glass effects, improve contrast
5. ⚡ Performance optimization
6. 📱 Mobile responsiveness audit
7. ♿ Accessibility improvements (ARIA labels, focus states)

**New components**:
- `/src/components/ProgressIndicator.tsx`
- `/src/components/ChapterNav.tsx`

---

## 📋 SECTION-BY-SECTION ANIMATION STRATEGY

### 1. Hero Section
```
┌─────────────────────────────────────┐
│ ANIMATION STRATEGY                  │
├─────────────────────────────────────┤
│ • Parallax background layers        │
│ • Fade out on scroll down           │
│ • Pulse animation on scroll cue     │
│ • Typewriter effect on headline     │
└─────────────────────────────────────┘

Trigger: Page load
Duration: 2.5s (initial), continuous (parallax)
Easing: easeOut
```

### 2. Historical Vision & Obstacles [MERGED]
```
┌─────────────────────────────────────┐
│ ANIMATION STRATEGY                  │
├─────────────────────────────────────┤
│ • Sticky timeline (scroll-based)    │
│ • Timeline dots fill progressively  │
│ • Year labels fade in sequentially  │
│ • Obstacle cards stagger reveal     │
│ • Parallax Boumediene image         │
└─────────────────────────────────────┘

Trigger: Scroll into viewport (10-25%)
Duration: Controlled by scroll position
Easing: linear (scroll-linked)
```

### 3. Decision → Execution [MERGED]
```
┌─────────────────────────────────────┐
│ ANIMATION STRATEGY                  │
├─────────────────────────────────────┤
│ • President image mask reveal       │
│ • Milestone cards slide in left     │
│ • Timeline connects with line draw  │
│ • Institution carousel auto-play    │
│ • Photo gallery stagger reveal      │
└─────────────────────────────────────┘

Trigger: Scroll into viewport (25-40%)
Duration: 1.2s per milestone
Delay: 0.15s stagger
Easing: easeOut
```

### 4. Interactive Route
```
┌─────────────────────────────────────┐
│ ANIMATION STRATEGY                  │
├─────────────────────────────────────┤
│ • STICKY SECTION (stays on screen)  │
│ • Route path draws 0% → 100%        │
│ • Stations appear at keyframes      │
│ • Active station glows              │
│ • Distance counter increments       │
│ • Train icon moves along path       │
└─────────────────────────────────────┘

Trigger: Scroll position (40-60%)
Duration: Controlled by scroll
Keyframes:
  40% = Gara Djebilet appears
  45% = Line draws to Tindouf
  50% = Bechar appears
  55% = Line draws to Mecheria
  60% = Oran reached
```

### 5. Industrial Transformation
```
┌─────────────────────────────────────┐
│ ANIMATION STRATEGY                  │
├─────────────────────────────────────┤
│ • Flow diagram stages reveal        │
│ • Arrows draw between stages        │
│ • Capacity numbers count up         │
│ • Process icons scale + rotate      │
│ • Tech specs fade in on hover       │
└─────────────────────────────────────┘

Trigger: Scroll into viewport (60-75%)
Duration: 0.8s per stage
Delay: 0.2s cascade
Easing: spring (type: 'spring', stiffness: 100)
```

### 6. Economic Impact [MERGED]
```
┌─────────────────────────────────────┐
│ ANIMATION STRATEGY                  │
├─────────────────────────────────────┤
│ • Stat cards stagger reveal         │
│ • Numbers count from 0 to target    │
│ • Bar charts grow from bottom       │
│ • Line chart path draws             │
│ • Export map dots ping sequentially │
└─────────────────────────────────────┘

Trigger: Scroll into viewport (75-90%)
Duration: 2.0s (number count-up)
         1.5s (chart growth)
Delay: 0.1s stagger per element
Easing: easeOut
```

### 7. Conclusion
```
┌─────────────────────────────────────┐
│ ANIMATION STRATEGY                  │
├─────────────────────────────────────┤
│ • Icons scale in with spring        │
│ • Railway dots wave animation       │
│ • Quote text typewriter effect      │
│ • CTA button pulse loop             │
│ • Background orbs pulse ambient     │
└─────────────────────────────────────┘

Trigger: Scroll into viewport (90-100%)
Duration: 1.5s
Easing: spring
Loop: Ambient effects repeat
```

---

## 🎛️ PSEUDO-CODE: KEY SYSTEMS

### Global Scroll Progress Hook
```typescript
// /src/hooks/useScrollChapters.ts

import { useScroll, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

export const chapters = [
  { id: 'hero', start: 0, end: 10, label: 'البداية' },
  { id: 'history', start: 10, end: 25, label: 'التاريخ' },
  { id: 'decision', start: 25, end: 40, label: 'القرار' },
  { id: 'route', start: 40, end: 60, label: 'المسار' },
  { id: 'industrial', start: 60, end: 75, label: 'التحويل' },
  { id: 'impact', start: 75, end: 90, label: 'الأثر' },
  { id: 'conclusion', start: 90, end: 100, label: 'الخاتمة' },
];

export function useScrollChapters() {
  const { scrollYProgress } = useScroll();
  const [activeChapter, setActiveChapter] = useState('hero');

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      const percentage = v * 100;
      const chapter = chapters.find(
        (ch) => percentage >= ch.start && percentage < ch.end
      );
      if (chapter) setActiveChapter(chapter.id);
    });
  }, [scrollYProgress]);

  return {
    scrollYProgress,
    activeChapter,
    getChapterProgress: (chapterId: string) => {
      const chapter = chapters.find((ch) => ch.id === chapterId);
      if (!chapter) return 0;
      return useTransform(
        scrollYProgress,
        [chapter.start / 100, chapter.end / 100],
        [0, 1]
      );
    },
  };
}
```

### Scroll-Driven Route Animation
```typescript
// /src/components/RouteSection.tsx (enhanced)

import { useScrollChapters } from '@/hooks/useScrollChapters';
import { motion, useTransform } from 'motion/react';

export function RouteSection() {
  const { getChapterProgress } = useScrollChapters();
  const routeProgress = getChapterProgress('route');

  // Station reveal thresholds
  const stations = [
    { name: 'غارا جبيلات', lat: 24.8, lng: -8.7, threshold: 0 },
    { name: 'تيندوف', lat: 27.8, lng: -8.1, threshold: 0.25 },
    { name: 'بشار', lat: 31.6, lng: -2.2, threshold: 0.5 },
    { name: 'المشرية', lat: 33.3, lng: 0.2, threshold: 0.75 },
    { name: 'وهران', lat: 35.7, lng: -0.6, threshold: 1 },
  ];

  // Path length animation
  const pathLength = useTransform(routeProgress, [0, 1], [0, 1]);

  return (
    <section className="sticky top-0 h-screen flex items-center justify-center">
      {/* Map container */}
      <svg viewBox="0 0 1000 800" className="w-full h-full">
        {/* Route path (animates on scroll) */}
        <motion.path
          d="M 150,700 L 250,500 L 450,300 L 650,200 L 850,100"
          stroke="#E1FF00"
          strokeWidth={4}
          fill="none"
          style={{ pathLength }}
          initial={{ pathLength: 0 }}
        />

        {/* Stations (appear at thresholds) */}
        {stations.map((station, i) => {
          const opacity = useTransform(
            routeProgress,
            [station.threshold - 0.05, station.threshold],
            [0, 1]
          );
          const scale = useTransform(
            routeProgress,
            [station.threshold - 0.05, station.threshold],
            [0.5, 1]
          );

          return (
            <motion.g key={i} style={{ opacity, scale }}>
              <motion.circle
                cx={station.lng}
                cy={station.lat}
                r={12}
                fill="#E1FF00"
                whileHover={{
                  scale: 1.5,
                  filter: 'drop-shadow(0 0 20px #E1FF00)',
                }}
              />
              <text
                x={station.lng}
                y={station.lat - 25}
                textAnchor="middle"
                fill="white"
                fontSize={14}
                fontFamily="'Noto Sans Arabic', sans-serif"
              >
                {station.name}
              </text>
            </motion.g>
          );
        })}
      </svg>

      {/* Progress indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2"
        style={{ opacity: useTransform(routeProgress, [0, 1], [1, 0]) }}
      >
        <p className="text-white/60 text-sm" dir="rtl">
          اسحب لاستكشاف المسار ←
        </p>
      </motion.div>
    </section>
  );
}
```

### Animated Number Counter
```typescript
// /src/utils/animateNumber.ts

import { animate } from 'motion';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

export function useAnimatedNumber(
  target: number,
  duration: number = 2,
  options?: {
    formatter?: (n: number) => string;
    once?: boolean;
  }
) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    margin: '-100px',
  });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setValue(v),
    });

    return () => controls.stop();
  }, [isInView, target, duration]);

  const displayValue = options?.formatter
    ? options.formatter(value)
    : Math.round(value).toLocaleString('ar-DZ');

  return { ref, value: displayValue };
}

// Usage in component:
function StatCard({ value, label, unit }) {
  const { ref, value: animatedValue } = useAnimatedNumber(value, 2.5);

  return (
    <div ref={ref}>
      <span className="text-5xl font-black text-[#E1FF00]">
        {animatedValue}
      </span>
      <span className="text-white/60">{unit}</span>
    </div>
  );
}
```

### Timeline Scroll Controller
```typescript
// /src/components/ScrollTimeline.tsx

import { useScroll, useTransform, motion } from 'motion/react';
import { useRef } from 'react';

export function ScrollTimeline({ events }: { events: TimelineEvent[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  return (
    <div ref={containerRef} className="relative py-32">
      {/* Vertical timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10">
        <motion.div
          className="w-full bg-gradient-to-b from-[#E1FF00] to-[#3CE89B]"
          style={{
            scaleY: scrollYProgress,
            transformOrigin: 'top',
          }}
        />
      </div>

      {/* Timeline events */}
      <div className="space-y-24">
        {events.map((event, i) => {
          const eventProgress = useTransform(
            scrollYProgress,
            [i / events.length, (i + 1) / events.length],
            [0, 1]
          );

          const opacity = useTransform(eventProgress, [0, 0.5, 1], [0.3, 1, 1]);
          const scale = useTransform(eventProgress, [0, 0.5], [0.9, 1]);

          return (
            <motion.div
              key={i}
              style={{ opacity, scale }}
              className={`flex items-center gap-8 ${
                i % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-black text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-white/70">{event.description}</p>
              </div>

              {/* Timeline dot */}
              <motion.div
                className="w-6 h-6 rounded-full border-4 bg-[#E1FF00]"
                style={{
                  borderColor: event.color,
                  boxShadow: useTransform(
                    eventProgress,
                    [0, 1],
                    [`0 0 0 ${event.color}`, `0 0 20px ${event.color}`]
                  ),
                }}
              />

              {/* Year label */}
              <div className="flex-1 text-center">
                <span
                  className="text-4xl font-black"
                  style={{ color: event.color }}
                >
                  {event.year}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
```

---

## 📱 RESPONSIVE CONSIDERATIONS

### Mobile Adaptations
```typescript
// Disable scroll-linked animations on mobile (performance)
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

const isMobile = window.innerWidth < 768;

// Use simpler animations on mobile
const animation = isMobile
  ? {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: { duration: 0.5 },
    }
  : {
      initial: { opacity: 0, y: 60 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.8 },
    };
```

### Touch Interactions
```typescript
// Map interactions on mobile
<motion.div
  drag={isMobile ? 'x' : false}
  dragConstraints={{ left: -500, right: 0 }}
  whileTap={{ scale: 0.95 }}
>
  {/* Map content */}
</motion.div>
```

---

## ⚡ PERFORMANCE OPTIMIZATION

### Lazy Loading Strategy
```typescript
// Code-split heavy sections
const RouteSection = lazy(() => import('./components/RouteSection'));
const IndustrialSection = lazy(() => import('./components/IndustrialSection'));

// Preload next section when current is in view
useEffect(() => {
  if (activeChapter === 'decision') {
    // Preload route section
    import('./components/RouteSection');
  }
}, [activeChapter]);
```

### Animation Performance
```css
/* Use transform and opacity (GPU accelerated) */
/* Avoid animating: width, height, top, left */

.good-performance {
  will-change: transform, opacity;
  transform: translateY(0) scale(1);
}

.avoid {
  /* Don't animate these */
  width: 100px;
  margin-top: 20px;
}
```

### Reduce Motion Queries
```typescript
const shouldAnimate = !window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

<motion.div
  {...(shouldAnimate && {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 }
  })}
/>
```

---

## ✅ UX IMPROVEMENTS CHECKLIST

### Navigation
- [x] Active section highlighting (scroll spy)
- [x] Global progress indicator
- [x] Smooth scroll to section on nav click
- [ ] Keyboard navigation (Tab, Enter, Arrow keys)
- [ ] Skip to content link
- [ ] Back to top button (appears after scrolling)

### Accessibility
- [ ] ARIA labels for all interactive elements
- [ ] Focus visible states (keyboard navigation)
- [ ] Screen reader announcements for section changes
- [ ] Color contrast ratios meet WCAG AA (4.5:1)
- [ ] Reduced motion alternative animations
- [ ] Alt text for all images
- [ ] Semantic HTML structure (header, nav, main, section)

### Visual Hierarchy
- [x] Clear title/subtitle/body distinction
- [x] Consistent spacing rhythm
- [x] Readable contrast (white on dark)
- [x] Accent colors used sparingly
- [ ] Reduce glass effects (performance + clarity)
- [ ] Larger touch targets on mobile (48x48px min)

### User Feedback
- [x] Hover states on all interactive elements
- [x] Loading states for async content
- [ ] Error states with recovery actions
- [x] Success states for form submissions
- [x] Tooltip explanations where needed
- [ ] Scroll progress percentage (optional)

### Performance
- [ ] Images optimized (WebP, lazy loading)
- [ ] Code splitting by route/section
- [ ] Preload critical assets
- [ ] Remove unused CSS/JS
- [ ] Debounce scroll handlers
- [ ] Intersection Observer for viewport detection
- [ ] GPU-accelerated animations only

---

## 🎓 TECHNICAL REFERENCES

### Framer Motion Patterns
```typescript
// Viewport-based reveals
const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

<motion.div
  variants={variants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
/>

// Scroll-linked values
const { scrollYProgress } = useScroll();
const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

<motion.div style={{ opacity, scale }} />

// Stagger children
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

<motion.div variants={container} initial="hidden" animate="show">
  {items.map(i => <motion.div key={i} variants={item} />)}
</motion.div>
```

### GSAP ScrollTrigger Equivalent (Framer Motion)
```typescript
// GSAP pattern
ScrollTrigger.create({
  trigger: '.section',
  start: 'top center',
  end: 'bottom center',
  scrub: true,
  onUpdate: (self) => {
    // animate based on self.progress
  }
});

// Framer Motion equivalent
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ['start center', 'end center']
});

const transform = useTransform(
  scrollYProgress,
  [0, 1],
  [startValue, endValue]
);
```

---

## 🎯 SUCCESS METRICS

### Narrative Flow
- ✅ User can understand project story without reading text
- ✅ Each section answers question raised by previous
- ✅ No redundant information
- ✅ Clear beginning → middle → end structure

### Engagement
- ⏱️ Average session duration > 3 minutes
- 📊 Scroll depth > 75%
- 🖱️ Interaction rate > 30% (hover, click on interactive elements)
- 📱 Mobile bounce rate < 40%

### Performance
- ⚡ First Contentful Paint < 1.5s
- 📏 Largest Contentful Paint < 2.5s
- 🎨 Cumulative Layout Shift < 0.1
- 🖱️ First Input Delay < 100ms
- 📊 Lighthouse Performance score > 90

### Accessibility
- ♿ WCAG 2.1 AA compliance
- ⌨️ Full keyboard navigation
- 📢 Screen reader compatible
- 🎨 Color contrast ratios > 4.5:1

---

## 📝 FINAL NOTES

### What Makes This "NYT-Level" Scrollytelling

1. **Narrative-Driven Structure**
   - Every scroll reveals new information in logical order
   - Data serves story, not the other way around
   - Emotional beats at key moments

2. **Scroll as Primary Interaction**
   - User controls pacing through scroll
   - Animations tied to scroll position (not time)
   - Predictable, reversible interactions

3. **Visual Data Storytelling**
   - Numbers come alive (count-up, chart growth)
   - Geography integrated (map reveals route)
   - Timeline shows cause/effect relationships

4. **Polish & Performance**
   - Smooth 60fps animations
   - Fast load times
   - Works on all devices
   - Accessible to all users

5. **Emotional Impact**
   - Hero hooks immediately
   - Historical context builds understanding
   - Decision moment creates turning point
   - Conclusion inspires

### Inspiration References
- [NYT: How the Virus Won](https://www.nytimes.com/interactive/2020/us/coronavirus-spread.html)
- [The Pudding: Film Dialogue](https://pudding.cool/2017/03/film-dialogue/)
- [Reuters: The Amazon's Lungs](https://graphics.reuters.com/BRAZIL-AMAZON/010070BC22Y/)
- [Bloomberg: What's Really Warming the World](https://www.bloomberg.com/graphics/2015-whats-warming-the-world/)

### Arabic Typography Best Practices
- Right-to-left (RTL) layout
- Adequate line-height for diacritics (1.7+)
- Font: Noto Sans Arabic (already used)
- Avoid condensed weights for body text
- Larger touch targets for Arabic text

---

## 🚀 READY TO IMPLEMENT?

This strategy document provides:
- ✅ Clear narrative restructuring (12 → 8 sections)
- ✅ Complete scroll-driven interaction system
- ✅ Section-by-section animation guidelines
- ✅ Code examples and pseudo-code
- ✅ Performance optimization strategies
- ✅ 5-week implementation roadmap

**Next Step**: Review this strategy, then begin Phase 1 (Restructure) by merging sections as outlined.

---

**Document Version**: 1.0  
**Created**: 2026-05-04  
**Language**: English (project content remains Arabic)  
**Status**: Ready for Implementation
