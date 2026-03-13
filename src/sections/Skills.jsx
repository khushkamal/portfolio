import { motion } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  Layout as LayoutIcon, 
  Smartphone, 
  Database, 
  Globe, 
  Wrench, 
  Zap 
} from 'lucide-react';

const skills = [
  { name: 'React', icon: Code2, level: 90, color: '#61DAFB' },
  { name: 'JavaScript', icon: Zap, level: 85, color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: LayoutIcon, level: 95, color: '#38BDF8' },
  { name: 'Node.js', icon: Database, level: 70, color: '#339933' },
  { name: 'Vite', icon: Cpu, level: 80, color: '#646CFF' },
  { name: 'Git', icon: Wrench, level: 85, color: '#F05032' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-carbon">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-24"
        >
          <span className="text-crimson font-black tracking-[0.5em] text-[10px] uppercase mb-4 block">
            // TECH SPECS
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
            POWER <span className="stroke-text">UNITS.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group border-b border-white/5 pb-12 relative"
            >
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h3 className="text-3xl font-black tracking-tighter uppercase group-hover:text-crimson transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] mt-2">Precision Module</p>
                </div>
                <span className="text-2xl font-black text-white/10 group-hover:text-white/40 transition-colors">0{index + 1}</span>
              </div>

              <div className="h-[1px] w-full bg-white/5 relative">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "circOut" }}
                  className="h-full bg-crimson"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
