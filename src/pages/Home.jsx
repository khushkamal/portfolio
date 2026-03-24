import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi2';
import ParticlesBg from '../components/SpeedLines';

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-primary/60">
      <ParticlesBg />

      {/* Radial Red Glow — behind image */}
      <div className="absolute right-0 top-0 w-[60%] h-full pointer-events-none z-0">
        <div className="absolute right-[10%] top-[10%] w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full h-full min-h-screen flex items-center">
        <div className="container mx-auto px-6 xl:px-0">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-x-8 gap-y-12 pt-20 pb-8 xl:pt-0">

            {/* Left: Text Content */}
            <div className="flex-1 text-center xl:text-left order-2 xl:order-1 xl:max-w-[55%]">
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-accent font-poppins text-sm uppercase tracking-[4px] font-semibold mb-4 block"
              >
                MERN / Full Stack Developer
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-sora font-extrabold text-4xl sm:text-5xl xl:text-7xl leading-tight mb-6"
              >
                Transforming Ideas Into{' '}
                <span className="text-accent">Digital Reality</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-white/50 font-poppins text-base leading-relaxed mb-10 max-w-md mx-auto xl:mx-0"
              >
                I build robust full-stack web applications using the MERN stack. I also have a keen eye for thoughtful UI/UX design, creating seamless and scalable digital experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col gap-x-8 gap-y-4 xl:flex-row items-center xl:items-start"
              >
                {/* Primary CTA */}
                <a
                  href="#work"
                  className="relative w-[185px] h-[56px] flex items-center justify-center overflow-hidden group rounded"
                >
                  <div className="w-full h-full bg-accent absolute rounded transition-all duration-300" />
                  <div className="w-full h-full bg-white absolute rounded opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <span className="relative flex items-center gap-x-2 font-poppins font-semibold text-sm group-hover:text-accent transition-colors">
                    My Portfolio <HiArrowRight className="text-xl" />
                  </span>
                </a>

                {/* Download CV CTA */}
                <a
                  href="/Resume.pdf"
                  download="Khushkamal_Singh_CV.pdf"
                  className="w-[185px] h-[56px] flex items-center justify-center border border-white/20 hover:border-accent rounded font-poppins font-semibold text-sm transition-all duration-300 group"
                >
                  Download CV
                </a>
              </motion.div>
            </div>

            {/* Right: Developer Portrait */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex-1 flex justify-center xl:justify-end order-1 xl:order-2 relative"
            >
              {/* Spinning Ring Ornament */}
              <div className="absolute w-[340px] h-[340px] xl:w-[480px] xl:h-[480px] rounded-full border border-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow" />
              <div className="absolute w-[300px] h-[300px] xl:w-[420px] xl:h-[420px] rounded-full border border-accent/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

              {/* Portrait Image */}
              <div className="relative z-10 w-[280px] xl:w-[420px] flex justify-center">
                <img
                  src="/3d-avatar.png"
                  alt="Developer 3D Avatar"
                  className="w-full h-auto object-cover"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(241, 48, 36, 0.5))',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 45%, transparent 70%)',
                    maskImage: 'radial-gradient(circle at center, black 45%, transparent 70%)',
                  }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
