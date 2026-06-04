import React from 'react';
import { motion } from 'framer-motion';
import { Database, BarChart3, Binary, Brain, Code, FileSpreadsheet, Layers, ShieldCheck } from 'lucide-react';

const skillsData = [
  { name: 'SQL (MySQL, Oracle, SQL Server)', icon: <Database size={18} />, desc: 'Complex queries, Subqueries, Joins & Data Modeling' },
  { name: 'Excel (Advanced)', icon: <FileSpreadsheet size={18} />, desc: 'Pivot Tables, Power Query, Advanced Formulas & Forecasting' },
  { name: 'Power BI & Tableau', icon: <BarChart3 size={18} />, desc: 'Interactive Dashboards, DAX, Cohort Analysis & Storytelling' },
  { name: 'Python Data Science Stack', icon: <Code size={18} />, desc: 'Data Manipulation & Analysis via Pandas, NumPy & Scikit-learn' },
  { name: 'Statistics & Regression Analysis', icon: <Binary size={18} />, desc: 'Hypothesis Testing, Probability Distributions & Inferential Stats' },
  { name: 'Requirement Analysis & Modeling', icon: <Layers size={18} />, desc: 'System Analysis, Agile Scrum, User Stories & ERD Diagrams' },
  { name: 'R & Matlab', icon: <Brain size={18} />, desc: 'Statistical Computing, Data Visualization & Loops' }
  
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#F5F5F4] relative overflow-hidden">
      
      {/* الرسوم التوضيحية البسيطة العائمة المعبّرة عن البيانات والتحليل */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-violet-100/40 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-sky-100/40 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-[#1E293B] mb-14 flex items-center gap-4"
        >
          <span className="w-12 h-[3px] bg-gradient-to-r from-sky-600 to-violet-600 rounded-full"></span>
          Technical Core Expertise
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4, boxShadow: "0 12px 30px -10px rgba(0,0,0,0.04)" }}
              className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col items-start gap-4 transition-all duration-300 group shadow-sm"
            >
              <div className={`p-3 rounded-xl transition-all duration-300 ${
                index % 2 === 0 ? 'bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white' : 'bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white'
              }`}>
                {skill.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1E293B] mb-1.5 transition-colors group-hover:text-sky-600">
                  {skill.name}
                </h3>
                <p className="text-[#64748B] text-xs leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;