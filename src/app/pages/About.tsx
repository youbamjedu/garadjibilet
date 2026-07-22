import { motion } from 'motion/react';
import { TeamSection } from '../components/TeamSection';

export function About() {
  return (
    <motion.main
      className="relative w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <TeamSection />
    </motion.main>
  );
}
