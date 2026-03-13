import { Home, User, Server, Briefcase, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', icon: Home, id: 'home' },
  { name: 'About', icon: User, id: 'about' },
  { name: 'Skills', icon: Server, id: 'skills' },
  { name: 'Work', icon: Briefcase, id: 'work' },
  { name: 'Contact', icon: Mail, id: 'contact' },
];

export default function Navigation() {
  return (
    <nav className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-x-8 glass-dashboard px-10 py-5 rounded-full">
        {navItems.map((item) => (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            whileHover={{ y: -3, color: '#950101' }}
            whileTap={{ scale: 0.9 }}
            className="p-1 text-white/30 transition-colors relative group"
          >
            <item.icon size={20} strokeWidth={2.5} />
          </motion.a>
        ))}
      </div>
    </nav>
  );
}
