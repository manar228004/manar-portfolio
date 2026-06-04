import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      
      {/* 🎨 إضاءة خلفية ناعمة جداً تدمج السماوي والموف أسفل الصفحة */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-sky-100/50 to-violet-100/30 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-sky-50/60 rounded-full filter blur-[100px] pointer-events-none"></div>

      {/* 📐 الرسوم التوضيحية العائمة لوسائل التواصل (Communication & Message Illustrations) */}
      <motion.div 
        animate={{ x: [0, 15, 0], y: [0, -15, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-12 text-sky-200 hidden md:block pointer-events-none"
      >
        <Send size={44} className="opacity-75" />
      </motion.div>

      <motion.div 
        animate={{ scale: [0.9, 1.05, 0.9], rotate: [0, -10, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-1/4 right-16 text-violet-200 hidden md:block pointer-events-none"
      >
        <MessageSquare size={40} className="opacity-75" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* العنوان والوصف النظيف */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E293B] mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-600 to-violet-600 mx-auto rounded-full mb-6"></div>
          <p className="text-[#64748B] max-w-2xl mx-auto text-lg leading-relaxed">
            I am currently open to new opportunities as a Business & Data Analyst. Feel free to reach out to me!
          </p>
        </motion.div>

        {/* كروت التواصل الثلاثية بالتصميم الفاتح والنظيف */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          
          {/* كارت الإيميل */}
          <motion.a 
            href="mailto:manarkassem53@outlook.com"
            whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(2,132,199,0.08)" }}
            className="flex flex-col items-center p-8 bg-white rounded-2xl border border-slate-100 w-full max-w-xs shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-sky-50 rounded-full flex items-center justify-center text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <Mail size={26} />
            </div>
            <h3 className="text-[#1E293B] font-bold text-lg mb-2">Email</h3>
            <p className="text-[#64748B] text-center text-sm font-medium transition-colors group-hover:text-sky-600">
              manarkassem53@outlook.com
            </p>
          </motion.a>

          {/* كارت لينكد إن */}
          <motion.a 
            href="https://www.linkedin.com/in/manar-kassem" 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(2,132,199,0.08)" }}
            className="flex flex-col items-center p-8 bg-white rounded-2xl border border-slate-100 w-full max-w-xs shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-sky-50 rounded-full flex items-center justify-center text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <ExternalLink size={26} />
            </div>
            <h3 className="text-[#1E293B] font-bold text-lg mb-2">LinkedIn</h3>
            <p className="text-[#64748B] text-center text-sm font-medium transition-colors group-hover:text-sky-600">
              linkedin.com/in/manar-kassem
            </p>
          </motion.a>

          {/* كارت الهاتف والموقع */}
          <motion.div 
            whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(124,58,237,0.08)" }}
            className="flex flex-col items-center p-8 bg-white rounded-2xl border border-slate-100 w-full max-w-xs shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-violet-50 rounded-full flex items-center justify-center text-violet-600 mb-5 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <Phone size={26} />
            </div>
            <h3 className="text-[#1E293B] font-bold text-lg mb-2">Phone & Location</h3>
            <p className="text-[#64748B] text-center text-sm font-medium leading-relaxed">
              (+20) 01224870480 <br />
              <span className="inline-flex items-center gap-1 mt-1 text-xs text-slate-400">
                <MapPin size={12} /> Alexandria, Egypt
              </span>
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;