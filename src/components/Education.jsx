import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, Award, BookOpen } from 'lucide-react';

const educationData = [
  {
    type: 'Experience',
    title: 'Data Analyst Specialist Intern',
    institution: 'Digital Egypt Pioneer Initiative (DEPI)',
    date: '2025',
    desc: 'Analyzed massive datasets to support decision-making, extracting data via SQL & Python and visualizing insights via Power BI and Tableau. Defined KPIs and business questions prior to conducting deep-dive analyses on aviation reliability.',
    icon: <Briefcase size={16} />
  },
  {
    type: 'Education',
    title: 'B.Sc. in Computer Science and Statistics',
    institution: 'Faculty of Science, Alexandria University',
    date: '2022 - 2026',
    desc: 'GPA: 3.65. Relevant Coursework: Software Engineering, Information Systems, Probability, Regression Analysis, Statistical Methods. Proficient in SDLC and System Analysis.',
    icon: <GraduationCap size={16} />
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-sky-50 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-violet-50 rounded-full filter blur-[100px] pointer-events-none"></div>

      <motion.div 
        animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }} 
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-16 text-sky-200/70 hidden md:block pointer-events-none"
      >
        <BookOpen size={48} />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 12, 0], rotate: [0, 15, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-20 left-16 text-violet-200/70 hidden md:block pointer-events-none"
      >
        <Award size={44} />
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-[#1E293B] mb-16 flex items-center gap-4"
        >
          <span className="w-12 h-[3px] bg-gradient-to-r from-sky-600 to-violet-600 rounded-full"></span>
          Education & Experience
        </motion.h2>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-sky-100 before:via-slate-200 before:to-violet-100">
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-sky-50 text-sky-600 group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:to-violet-600 group-hover:text-white transition-all duration-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm">
                {item.icon}
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-slate-100 hover:border-sky-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-md ${
                    item.type === 'Experience' ? 'bg-sky-50 text-sky-700' : 'bg-violet-50 text-violet-700'
                  }`}>
                    {item.type}
                  </span>
                  <time className="text-slate-400 text-xs font-semibold flex items-center gap-1">
                    <Calendar size={12} /> {item.date}
                  </time>
                </div>
                
                <h3 className="text-xl font-bold text-[#1E293B] mb-1 group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h3>
                <h4 className="text-slate-500 font-semibold text-sm mb-4">
                  {item.institution}
                </h4>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;