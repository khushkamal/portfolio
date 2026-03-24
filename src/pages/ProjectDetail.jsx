import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiArrowTopRightOnSquare } from 'react-icons/hi2';

const projects = [
  {
    id: 'notegeo',
    title: 'NoteGeo',
    category: 'MERN',
    image: 'https://images.unsplash.com/photo-1584931423298-c576fda54bd2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://note-geo.vercel.app/',
    description:
      'NoteGeo is a full-stack MERN application that allows users to take location-tagged notes on an interactive map. Users can pin notes to specific geographic locations, view them on a map, and manage their notes seamlessly through a clean, intuitive interface.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Leaflet.js', 'JWT Auth'],
    features: [
      'Interactive map with custom markers',
      'Location-tagged note creation',
      'User authentication with JWT',
      'CRUD operations for notes',
      'Responsive design for all devices',
    ],
  },
  {
    id: 'ai-shopping-assistant',
    title: 'AI Shopping Assistant',
    category: 'MERN / AI',
    image: 'https://media.istockphoto.com/id/2201598683/photo/ai-e-commerce-concept-artificial-intelligence-service-tools-for-ecommerce-digital-marketing.jpg?s=1024x1024&w=is&k=20&c=PfZlOJEjQU2TGukewRglpvzWNQ1LATnFT7a7IIGaRwc=',
    link: 'https://ai-shopping-nu.vercel.app',
    description:
      'An AI-powered shopping assistant that helps users compare products, get personalized recommendations based on budget and use-case, and understand pros and cons of different items. The assistant fetches live product data and provides smart, context-aware suggestions.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'DummyJSON API', 'AI Engine'],
    features: [
      'AI-powered product comparison',
      'Budget-based recommendations',
      'Live product data via API',
      'Review summarization',
      'Indian currency (₹) support',
    ],
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    category: 'React / Tailwind',
    image:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    link: 'https://portfolio-theta-lime-91.vercel.app',
    description:
      'A modern, animated personal portfolio website built with React and Tailwind CSS. Features smooth scroll navigation, a custom cursor, particle animations, and a fully responsive layout to showcase projects, skills, and contact information.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'React Router', 'Vite'],
    features: [
      'Custom animated cursor',
      'Smooth scroll sections',
      'Framer Motion animations',
      'Fully responsive layout',
      'Contact form integration',
    ],
  },
  {
    id: 'task-manager',
    title: 'Task Manager Dashboard',
    category: 'Node.js / MongoDB',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=600',
    link: '#',
    description:
      'A feature-rich task management dashboard built on Node.js and MongoDB. Allows teams to create, assign, and track tasks with priority levels, due dates, and status updates. Includes a clean dashboard with analytics and progress tracking.',
    tech: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Chart.js'],
    features: [
      'Task creation and assignment',
      'Priority and due-date management',
      'Progress tracking dashboard',
      'Analytics with charts',
      'Team collaboration support',
    ],
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-sora font-bold mb-4">Project Not Found</h2>
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-accent hover:underline font-poppins"
        >
          <HiArrowLeft /> Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-24 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Back button */}
        <motion.button
          onClick={() => navigate('/#work')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-white/50 hover:text-accent transition-colors duration-300 mb-10 font-poppins text-sm group"
        >
          <HiArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
          Back to My Work
        </motion.button>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden aspect-video mb-12 border border-white/10"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-xs uppercase tracking-widest text-accent font-poppins">
              {project.category}
            </span>
            <h1 className="text-4xl xl:text-5xl font-sora font-extrabold mt-1">{project.title}</h1>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="xl:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-xl font-sora font-bold mb-3">About the Project</h2>
              <p className="text-white/60 font-poppins leading-relaxed">{project.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl font-sora font-bold mb-3">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feat, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-center gap-3 text-white/60 font-poppins text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {feat}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="space-y-6"
          >
            {/* Tech Stack */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-sm font-sora font-bold mb-3 uppercase tracking-widest text-accent">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/10 border border-white/10 rounded-full px-3 py-1 font-poppins text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Link */}
            {project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-accent text-primary font-sora font-bold py-3 rounded-xl hover:bg-accent/90 transition-colors duration-300 text-sm"
              >
                View Live Project
                <HiArrowTopRightOnSquare />
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
