import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaFigma,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiCanva,
} from 'react-icons/si';

const skillsData = [
  { name: 'React.js', icon: FaReact, color: 'text-blue-400' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'Express.js', icon: SiExpress, color: 'text-gray-300' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'Git/GitHub', icon: FaGithub, color: 'text-white' },
  { name: 'Figma', icon: FaFigma, color: 'text-purple-400' },
  { name: 'Canva', icon: SiCanva, color: 'text-blue-400' },
];

const About = () => {
  return (
    <div className="h-full pt-32 pb-24">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl xl:text-5xl font-sora font-extrabold mb-12 leading-tight"
        >
          Every great journey begins with a{' '}
          <span className="text-accent">single step</span>.
        </motion.h2>

        <div className="flex flex-col xl:flex-row gap-x-16 gap-y-12">
          {/* Text */}
          <div className="flex-1 space-y-6 text-white/60 font-poppins leading-relaxed">
            <p>
              Hello! I'm Khushkamal Singh, an enthusiastic beginner MERN / Full Stack Developer based in India. My journey in tech recently began, driven by a strong passion for coding and intuitive UI/UX Design.
            </p>
            <p>
              While I'm at the start of my professional career, I'm constantly learning, building personal projects, and exploring modern web technologies. I love transforming ideas into functional web experiences and am eager to contribute to real-world solutions.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-x-2 text-accent font-semibold hover:underline transition-all duration-300"
            >
              What I do <HiArrowRight />
            </Link>
          </div>

          {/* Stats */}
          <div className="flex-1 grid grid-cols-2 gap-12">
            {[
              { number: '1+', label: 'Years Learning' },
              { number: '10+', label: 'Projects Built' },
              { number: '4+', label: 'Core Technologies' },
              { number: '100%', label: 'Dedication' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i, duration: 0.5 }}
                className="border-b border-white/10 pb-6"
              >
                <div className="text-4xl xl:text-5xl font-sora font-extrabold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="font-poppins text-sm text-white/40 uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-2xl xl:text-4xl font-sora font-extrabold mb-10 text-center xl:text-left"
          >
            My <span className="text-accent">Skills</span> & Technologies
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
            {skillsData.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="flex flex-col items-center justify-center gap-y-4 bg-white/5 border border-white/10 hover:border-accent rounded-xl p-6 transition-all duration-300 group"
              >
                <div className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon />
                </div>
                <div className="font-poppins text-sm text-white/70">
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
