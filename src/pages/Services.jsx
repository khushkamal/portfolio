import { motion } from 'framer-motion';
import {
  RiCodeSSlashLine,
  RiSmartphoneLine,
  RiPaintLine,
  RiDatabaseLine,
  RiCloudLine,
  RiStore2Line,
} from 'react-icons/ri';

const services = [
  {
    icon: RiCodeSSlashLine,
    title: 'Frontend Development',
    description:
      'Building responsive and interactive single-page applications (SPAs) using React.js and modern CSS frameworks like Tailwind CSS.',
  },
  {
    icon: RiCodeSSlashLine, // Using Code icon for Backend too
    title: 'Backend APIs',
    description:
      'Developing secure, scalable, and fast RESTful APIs using Node.js and Express.js to power modern web experiences.',
  },
  {
    icon: RiDatabaseLine,
    title: 'Database Management',
    description:
      'Designing and managing efficient, non-relational databases using MongoDB for seamless data persistence and retrieval.',
  },
  {
    icon: RiPaintLine,
    title: 'UI/UX Prototyping',
    description:
      'Crafting clean, intuitive, and user-centric layouts and high-fidelity wireframes using Figma and Canva.',
  },
  {
    icon: RiStore2Line,
    title: 'Full Stack Integration',
    description:
      'Seamlessly connecting complex frontends with robust backends to create fully functional, end-to-end web solutions.',
  },
  {
    icon: RiSmartphoneLine,
    title: 'Responsive Web Design',
    description:
      'Ensuring websites look perfect and function flawlessly across all devices, including mobile, tablet, and desktop.',
  },
];

const Services = () => {
  return (
    <div className="h-full pt-32 pb-24">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl xl:text-5xl font-sora font-extrabold mb-4 leading-tight"
        >
          My services<span className="text-accent">.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/40 font-poppins mb-16 max-w-md"
        >
          I provide a range of digital services tailored to help you build modern, fast, and scalable applications.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="group flex flex-col gap-y-4 border border-white/10 hover:border-accent rounded-xl p-6 cursor-pointer hover:bg-white/5 transition-all duration-300"
            >
              <div className="text-4xl text-accent group-hover:scale-110 transition-transform duration-300">
                <service.icon />
              </div>
              <h3 className="font-sora font-bold text-lg">{service.title}</h3>
              <p className="font-poppins text-sm text-white/50 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
