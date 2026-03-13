import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-carbon relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16"
          >
            <span className="text-crimson font-black tracking-[0.5em] text-[10px] uppercase mb-4 block">
              // CONNECT UNIT
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">
              ESTABLISH <span className="stroke-text">LINK.</span>
            </h2>
            <p className="text-white/40 font-medium uppercase tracking-widest text-xs">Available for high-performance collaborations.</p>
          </motion.div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div className="group border-b border-white/5 pb-4 focus-within:border-crimson transition-colors">
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-4 group-focus-within:text-crimson transition-colors">Identification</label>
                <input 
                  type="text" 
                  placeholder="NAME / ENTITY" 
                  className="w-full bg-transparent border-none outline-none text-xl font-bold tracking-tighter placeholder:text-white/5"
                />
              </div>
              <div className="group border-b border-white/5 pb-4 focus-within:border-crimson transition-colors">
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-4 group-focus-within:text-crimson transition-colors">Frequency</label>
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full bg-transparent border-none outline-none text-xl font-bold tracking-tighter placeholder:text-white/5"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="group border-b border-white/5 pb-4 focus-within:border-crimson transition-colors flex-1">
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-4 group-focus-within:text-crimson transition-colors">Transmission</label>
                <textarea 
                  placeholder="MESSAGE DATA..." 
                  rows="4"
                  className="w-full bg-transparent border-none outline-none text-xl font-bold tracking-tighter placeholder:text-white/5 resize-none"
                />
              </div>
              <motion.button 
                whileHover={{ x: 10 }}
                className="mt-12 group flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase self-end"
              >
                Send Data <span className="w-12 h-[1px] bg-crimson group-hover:w-20 transition-all" />
              </motion.button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-crimson/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}
