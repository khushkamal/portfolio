import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';

const projects = [
  {
    id: 'notegeo',
    title: 'NoteGeo',
    category: 'MERN',
    image: 'https://images.unsplash.com/photo-1584931423298-c576fda54bd2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'ai-shopping-assistant',
    title: 'AI Shopping Assistant',
    category: 'MERN / AI',
    image: 'https://media.istockphoto.com/id/2201598683/photo/ai-e-commerce-concept-artificial-intelligence-service-tools-for-ecommerce-digital-marketing.jpg?s=1024x1024&w=is&k=20&c=PfZlOJEjQU2TGukewRglpvzWNQ1LATnFT7a7IIGaRwc=',
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    category: 'React / Tailwind',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'task-manager',
    title: 'Task Manager Dashboard',
    category: 'Node.js / MongoDB',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=600',
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
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
            >
              <Link
                to={`/project/${project.id}`}
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
