import { motion } from 'framer-motion';
import { HiOutlineStar, HiUser } from 'react-icons/hi2';

const testimonials = [
  {
    name: 'Ajeet Rawat',
    role: 'Local Business Owner',
    message:
      'Khushkamal ne hamari shop ke liye ek bahut sundar aur fast website banayi. Kaam bahut professional tha aur time par deliver kiya.',
    rating: 4,
    image: '#',
  },
  {
    name: 'Simran Kaur',
    role: 'Freelance Artist',
    message:
      'I was looking for a clean portfolio and Khushkamal delivered exactly what I needed. Great eye for design and very helpful!',
    rating: 4.5,
    image: '#',
  },
  {
    name: 'Basant Singh',
    role: 'Project Manager (Small Team)',
    message:
      'Excellent technical skills with the MERN stack. He integrated our backend perfectly and the UI is incredibly smooth.',
    rating: 5,
    image: '#',
  },
];

const Testimonials = () => {
  return (
    <div className="h-full pt-32 pb-24">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl xl:text-5xl font-sora font-extrabold mb-4 leading-tight"
        >
          What people say<span className="text-accent">.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/40 font-poppins mb-16 max-w-md"
        >
          Don't just take my word for it — here's what my clients have to say.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className="border border-white/10 hover:border-accent rounded-xl p-8 transition-all duration-300 bg-white/3"
            >
              <div className="flex gap-x-1 text-accent mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <HiOutlineStar key={j} className="fill-accent" />
                ))}
              </div>
              <p className="font-poppins text-sm text-white/60 leading-relaxed mb-8 italic">
                "{t.message}"
              </p>
              <div className="flex items-center gap-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center bg-accent/10">
                  <HiUser className="text-xl text-accent" />
                </div>
                <div>
                  <div className="font-sora font-bold text-sm">{t.name}</div>
                  <div className="font-poppins text-xs text-white/40">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
