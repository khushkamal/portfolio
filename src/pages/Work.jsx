import { motion } from 'framer-motion';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';

const projects = [
  { 
    title: 'Custom MERN Project 1', 
    category: 'MERN / In Progress', 
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600', 
    link: '#' 
  },
  { 
    title: 'Modern UI Web App', 
    category: 'React / In Progress', 
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600', 
    link: '#' 
  },
  { 
    title: 'Personal Portfolio', 
    category: 'React / Tailwind', 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600', 
    link: '#' 
  },
  { 
    title: 'Task Manager Dashboard', 
    category: 'Node.js / MongoDB', 
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=600', 
    link: '#' 
  },
];

const Work = () => {
  return (
    <div className="h-full pt-32 pb-24">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl xl:text-5xl font-sora font-extrabold mb-4 leading-tight"
        >
          My work<span className="text-accent">.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/40 font-poppins mb-16 max-w-md"
        >
          A glimpse into the projects I've been working on. From full-stack applications to intuitive UI designs, currently building and learning every day.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl aspect-square border border-white/10 hover:border-accent transition-all duration-500 block"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-[10px] uppercase tracking-widest text-accent font-poppins mb-1">{project.category}</div>
                <h3 className="font-sora font-bold text-sm">{project.title}</h3>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <HiArrowTopRightOnSquare className="text-xl text-accent" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
