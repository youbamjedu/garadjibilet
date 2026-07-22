import { motion } from 'motion/react';
import { SourcesSection } from '../components/SourcesSection';

export function Methodology() {
  return (
    <motion.main
      className="relative w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
            <SourcesSection />
    </motion.main>
  );
}
