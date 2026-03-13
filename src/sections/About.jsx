import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { label: 'Coding Hours', value: 250, suffix: '+' },
  { label: 'GitHub Commits', value: 120, suffix: '+' },
  { label: 'Projects Built', value: 5, suffix: '' },
  { label: 'Technologies Mastered', value: 10, suffix: '+' },
];

function CountUp({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-carbon">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-12 leading-tight">
              PRECISION <br />
              <span className="text-crimson">ENGINEERING.</span>
            </h2>
            <div className="space-y-6 text-white/50 text-lg font-medium leading-relaxed max-w-xl">
              <p>
                Junior Developer by title, but a craftsman by nature. My work is defined by 
                the pursuit of technical excellence and a minimalist aesthetic.
              </p>
              <p>
                Main interfaces ko sirf banata nahi, unhe digital machine ki tarah 
                engineer karta hoon—jahan har pixel aur transition ka ek maksad hota hai.
              </p>
            </div>
          </motion.div>

          {/* Discreet Stats Grid */}
          <div className="grid grid-cols-2 gap-12 pt-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group border-t border-white/5 pt-8"
              >
                <div className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20 group-hover:text-crimson transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Decorative Flare */}
      <div className="absolute top-1/2 -right-20 w-64 h-64 bg-crimson/10 blur-[100px] rounded-full" />
    </section>
  );
}
