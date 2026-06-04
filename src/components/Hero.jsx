import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Mail, BarChart2, PieChart, Database, Sparkles, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* 🎨 خلفية مبهجة بتدرجات ألوان (Gradients) ناعمة ومدروسة تفتح العين */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-sky-200/40 to-indigo-200/10 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-violet-200/30 to-fuchsia-200/20 rounded-full filter blur-[120px] pointer-events-none"></div>

      {/* 📐 الأشكال والرسوم التوضيحية العائمة (Floating Data Illustrations) */}
      {/* شكل 1: الرسم البياني جهة اليسار */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-8 md:left-24 p-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 text-sky-600 hidden sm:block"
      >
        <BarChart2 size={32} />
      </motion.div>

      {/* شكل 2: الرسم الدائري جهة اليمين */}
      <motion.div 
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-1/4 right-8 md:right-24 p-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 text-violet-600 hidden sm:block"
      >
        <PieChart size={32} />
      </motion.div>

      {/* شكل 3: رمز قواعد البيانات بالخلفية */}
      <motion.div 
        animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.2, 0.4, 0.2] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 text-sky-400 hidden md:block pointer-events-none"
      >
        <Database size={48} />
      </motion.div>

      {/* شكل 4: سهم صعود المؤشرات أسفل اليسار */}
      <motion.div 
        animate={{ x: [0, 10, 0], y: [0, -10, 0] }} 
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 left-1/4 p-3 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 text-emerald-500 hidden lg:block"
      >
        <TrendingUp size={24} />
      </motion.div>

      {/* 🏢 المحتوى الأساسي في منتصف الصفحة */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* شارة علوية مودرن (Badge) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-sm font-semibold mb-6 shadow-sm"
        >
          <Sparkles size={14} className="text-sky-500" /> Available for Opportunities
        </motion.div>

        {/* الاسم بتصميم عريض وواضح */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-[#1E293B] tracking-tight mb-4"
        >
          Manar Kassem
        </motion.h1>

        {/* المسمى الوظيفي بتدرج ألوان حيوي وعصري */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-sky-600 to-violet-600 bg-clip-text text-transparent mb-6"
        >
          Business & Data Analyst
        </motion.h2>

        {/* نبذة شخصية مريحة للعين بلون متباين وصريح */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg text-[#64748B] font-normal leading-relaxed mb-10"
        >
          Turning complex data into actionable business insights. Specializing in SQL, Power BI, and Machine Learning to drive strategic decision-making and operational efficiency.
        </motion.p>
        
        {/* الأزرار التفاعلية بنظام الألوان الجديد الفاتح */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#projects" 
            className="px-8 py-3 rounded-full bg-sky-600 text-white font-semibold hover:bg-sky-500 transition-all shadow-[0_4px_14px_rgba(2,132,199,0.3)] hover:shadow-[0_6px_20px_rgba(2,132,199,0.4)] transform hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a 
            href="/CV_BusinessAnalyst.pdf" 
            download 
            className="px-8 py-3 rounded-full bg-white border border-slate-200 text-[#1E293B] font-semibold hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
          >
            <Download size={18} /> Download CV
          </a>
        </motion.div>

        {/* روابط التواصل الإجتماعي المودرن الدائرية */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-14 flex justify-center gap-4"
        >
          <a 
            href="https://www.linkedin.com/in/manar-kassem" 
            target="_blank" 
            rel="noreferrer" 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 text-[#64748B] hover:text-sky-600 hover:border-sky-500 hover:shadow-sm transition-all"
          >
            <ExternalLink size={20} />
          </a>
          <a 
            href="mailto:manarkassem53@outlook.com" 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 text-[#64748B] hover:text-sky-600 hover:border-sky-500 hover:shadow-sm transition-all"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;