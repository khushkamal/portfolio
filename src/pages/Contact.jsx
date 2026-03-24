import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi2';
import {
  RiMapPinLine,
  RiMailLine,
} from 'react-icons/ri';

const Contact = () => {
  // NOTE: Replace 'YOUR_FORM_ID' with the ID you get from Formspree.io
  const FORM_ID = 'xnjgegwe'; 
  
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
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
          {/* Info Side */}
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
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 rounded-lg px-6 py-4 focus:border-accent outline-none transition-all duration-300 w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 rounded-lg px-6 py-4 focus:border-accent outline-none transition-all duration-300 w-full"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded-lg px-6 py-4 focus:border-accent outline-none transition-all duration-300 w-full"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded-lg px-6 py-4 focus:border-accent outline-none transition-all duration-300 w-full resize-none"
              />
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className="flex items-center justify-center gap-x-2 bg-accent hover:bg-white hover:text-primary text-white font-poppins font-semibold text-sm px-8 py-4 rounded-lg transition-all duration-300 group w-fit disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Feedback Messages */}
              {status === 'success' && (
                <p className="text-green-500 font-poppins text-sm mt-2">
                  Message sent successfully! I'll get back to you soon. 🚀
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-500 font-poppins text-sm mt-2">
                  Oops! Something went wrong. Make sure you set the FORM_ID correctly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
