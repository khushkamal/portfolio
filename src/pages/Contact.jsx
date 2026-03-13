import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { HiArrowRight } from 'react-icons/hi2';
import emailjs from '@emailjs/browser';
import {
  RiMapPinLine,
  RiMailLine,
  RiPhoneLine,
} from 'react-icons/ri';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });

    // NOTE: Aapko EmailJS dashboard (https://www.emailjs.com/) se ye keys milengi:
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setStatus({ submitting: false, success: true, error: false });
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setStatus((s) => ({ ...s, success: false })), 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus({ submitting: false, success: false, error: true });
          setTimeout(() => setStatus((s) => ({ ...s, error: false })), 5000);
        }
      );
  };

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
                { Icon: RiMailLine,   label: 'Email',   value: 'hello@khushkamalsingh.dev' },
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
          </motion.div>

          {/* Form */}
          <motion.form
            ref={form}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 space-y-6"
            onSubmit={handleSubmit}
          >
            {status.success && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-accent/20 border border-accent text-accent px-4 py-3 rounded-lg text-sm font-poppins"
              >
                Thank you! Your message has been sent successfully. 🚀
              </motion.div>
            )}
            {status.error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/20 border border-red-500 text-red-500 px-4 py-3 rounded-lg text-sm font-poppins"
              >
                Something went wrong. Please check your EmailJS keys. ❌
              </motion.div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-y-2">
                <label className="text-xs font-poppins uppercase tracking-widest text-white/40">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-white/10 border border-white/10 focus:border-accent rounded-lg px-4 py-3 outline-none font-poppins text-sm text-white placeholder:text-white/20 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-xs font-poppins uppercase tracking-widest text-white/40">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="bg-white/10 border border-white/10 focus:border-accent rounded-lg px-4 py-3 outline-none font-poppins text-sm text-white placeholder:text-white/20 transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-xs font-poppins uppercase tracking-widest text-white/40">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="bg-white/10 border border-white/10 focus:border-accent rounded-lg px-4 py-3 outline-none font-poppins text-sm text-white placeholder:text-white/20 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-xs font-poppins uppercase tracking-widest text-white/40">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={5}
                required
                className="bg-white/10 border border-white/10 focus:border-accent rounded-lg px-4 py-3 outline-none font-poppins text-sm text-white placeholder:text-white/20 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status.submitting}
              className="flex items-center gap-x-2 bg-accent hover:bg-white hover:text-primary text-white font-poppins font-semibold text-sm px-8 py-4 rounded-lg transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
              {!status.submitting && <HiArrowRight className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
