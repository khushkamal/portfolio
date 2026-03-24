import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'NoteGeo',
    description: 'A full-stack MERN app for location-tagged notes on an interactive map.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1584931423298-c576fda54bd2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    github: '#',
    live: 'https://note-geo.vercel.app/',
  },
  {
    title: 'AI Shopping Assistant',
    description: 'AI-powered shopping assistant for product comparison and smart recommendations.',
    tags: ['React', 'Node.js', 'AI'],
    image: 'https://media.istockphoto.com/id/2201598683/photo/ai-e-commerce-concept-artificial-intelligence-service-tools-for-ecommerce-digital-marketing.jpg?s=1024x1024&w=is&k=20&c=PfZlOJEjQU2TGukewRglpvzWNQ1LATnFT7a7IIGaRwc=',
    github: '#',
    live: 'https://ai-shopping-nu.vercel.app',
  },
  {
    title: 'Personal Portfolio',
    description: 'A modern, animated portfolio with custom cursor and smooth scroll navigation.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    github: '#',
    live: 'https://portfolio-theta-lime-91.vercel.app',
  },
  {
    title: 'Task Manager Dashboard',
    description: 'Feature-rich task management dashboard with analytics and progress tracking.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=600',
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
