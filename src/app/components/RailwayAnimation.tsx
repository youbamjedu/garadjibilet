import { motion } from "motion/react";

const RAILWAY_PATH = "M50 100 L200 100 L350 100 L500 100 L650 100";

export default function RailwayAnimation() {
  return (
    <svg width="700" height="200" viewBox="0 0 700 200">

      {/* Railway Path */}
      <motion.path
        d={RAILWAY_PATH}
        fill="none"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Train moving along path */}
      <motion.circle
        r="8"
        fill="#C8FF00"
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
        style={{
          offsetPath: `path("${RAILWAY_PATH}")`,
        }}
      />

    </svg>
  );
}
