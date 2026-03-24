import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';
import {
  RiMapPinLine,
  RiMailLine,
} from 'react-icons/ri';

const Contact = () => {
  return (
    <div className="h-full pt-32 pb-24">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl xl:text-5xl font-sora font-extrabold mb-4 leading-tight"
        >
          Let's connect<span className="text-accent">.</span>
        </motion.h2>

        <div className="flex flex-col xl:flex-row gap-16 mt-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-y-8 xl:w-[38%]"
          >
            <p className="font-poppins text-white/50 leading-relaxed">
              I'm always open to new opportunities, freelance projects, or just a
              friendly chat about tech. Feel free to reach out!
            </p>
            <div className="space-y-6">
              {[
                { Icon: RiMapPinLine, label: 'Location', value: 'India (Open to Remote)' },
                { Icon: RiMailLine,   label: 'Email',   value: 'singhkhushal814@gmail.com' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent text-xl flex-shrink-0">
                    <item.Icon />
                  </div>
                  <div>
                    <div className="text-xs font-poppins uppercase tracking-widest text-white/30 mb-0.5">{item.label}</div>
                    <div className="font-poppins text-sm text-white/70">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mailto Button */}
            <motion.a
              href="mailto:singhkhushal814@gmail.com?subject=Hello Khushkamal!"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-x-2 bg-accent hover:bg-white hover:text-primary text-white font-poppins font-semibold text-sm px-8 py-4 rounded-lg transition-all duration-300 group w-fit"
            >
              Send me an Email
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right side — decorative card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 border border-white/10 rounded-xl p-10 bg-white/[0.02] flex flex-col justify-center items-center text-center gap-6"
          >
            <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
              <RiMailLine className="text-3xl text-accent" />
            </div>
            <h3 className="font-sora font-bold text-xl">Drop me a mail</h3>
            <p className="font-poppins text-white/40 text-sm max-w-sm leading-relaxed">
              Click the button to open your email app with my address pre-filled. I usually respond within 24 hours!
            </p>
            <a
              href="mailto:singhkhushal814@gmail.com?subject=Hello Khushkamal!"
              className="text-accent font-poppins text-sm hover:underline underline-offset-4 transition-all"
            >
              singhkhushal814@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
