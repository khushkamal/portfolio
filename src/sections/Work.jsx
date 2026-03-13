import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Speed-Dash Portfolio',
    description: 'A high-performance portfolio with Framer Motion and tsparticles.',
    tags: ['React', 'Vite', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800', // Techy setup
    github: '#',
    live: '#',
  },
  {
    title: 'Neon Commerce',
    description: 'E-commerce UI kit with carbon fiber aesthetic.',
    tags: ['Tailwind', 'Motion', 'React'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800', // Code on screen
    github: '#',
    live: '#',
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 bg-carbon">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8"
        >
          <div>
            <span className="text-crimson font-black tracking-[0.5em] text-[10px] uppercase mb-4 block">
              // SELECTED BUILDS
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              GALLERY OF <span className="stroke-text">BUILDS.</span>
            </h2>
          </div>
          <p className="text-[10px] text-white/20 uppercase tracking-[0.5em] font-bold">SHAPING DIGITAL INFRASTRUCTURE</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group relative"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-white/5 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent opacity-60" />
              </div>

              <div className="pt-8 flex justify-between items-start">
                <div>
                  <div className="flex flex-wrap gap-4 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[8px] font-black tracking-widest uppercase text-white/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">{project.title}</h3>
                  <p className="text-white/40 text-sm max-w-sm font-medium leading-relaxed">{project.description}</p>
                </div>
                
                <div className="flex gap-4 pt-2">
                  <a href={project.github} className="text-white/20 hover:text-crimson transition-colors"><Github size={20} /></a>
                  <a href={project.live} className="text-white/20 hover:text-crimson transition-colors"><ExternalLink size={20} /></a>
                </div>
              </div>
              <div className="absolute bottom-[-1px] left-0 w-0 h-[1px] bg-crimson group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
