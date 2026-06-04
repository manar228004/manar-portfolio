import React from 'react';
import { motion } from 'framer-motion';
import { User, Shield, GraduationCap, MapPin, Languages } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* سمبل الستريشن عائم هادئ */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 right-12 text-violet-200/60 hidden md:block pointer-events-none"
      >
        <User size={60} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E293B] mb-12 flex items-center gap-4">
            <span className="w-12 h-[3px] bg-gradient-to-r from-sky-600 to-violet-600 rounded-full"></span>
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 text-base text-[#64748B] leading-relaxed">
            <div className="flex flex-col justify-center">
              <p className="mb-6 text-lg font-medium text-[#334155]">
                I am a passionate Business and Data Analyst with a strong academic background in Computer Science, Statistics, and Information Systems. Currently completing my Bachelor's degree at Alexandria University, I have consistently applied my analytical skills to real-world business challenges.
              </p>
              <p>
                My expertise lies in extracting, transforming, and visualizing data using tools like SQL, Power BI, Tableau, and Python. I thrive on identifying operational inefficiencies, defining KPIs, and translating raw numbers into compelling dashboards that empower management decision-making.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.02)] flex flex-col justify-center">
              <h3 className="text-xl font-bold text-[#1E293B] mb-6 flex items-center gap-2">
                <Shield size={20} className="text-sky-600" /> Quick Facts
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-center"><span className="text-sky-600 font-bold w-24 shrink-0">Role:</span> <span className="text-[#334155] font-medium">Data Analyst / Jr Product Owner</span></li>
                <li className="flex gap-3 items-center"><span className="text-sky-600 font-bold w-24 shrink-0">Education:</span> <span className="text-[#334155] font-medium">CS & Statistics, Alexandria University</span></li>
                <li className="flex gap-3 items-center"><span className="text-violet-600 font-bold w-24 shrink-0">Location:</span> <span className="text-[#334155] font-medium flex items-center gap-1"><MapPin size={14} /> Alexandria, Egypt</span></li>
                <li className="flex gap-3 items-center"><span className="text-violet-600 font-bold w-24 shrink-0">Languages:</span> <span className="text-[#334155] font-medium flex items-center gap-1"><Languages size={14} /> Arabic, English (C2), Korean (A2)</span></li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;