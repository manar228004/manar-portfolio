import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Terminal, BarChart3, Database } from 'lucide-react';

const projects = [
  {
    title: 'Airline Flight Delays Analytics',
    tags: ['SQL', 'Power BI', 'Data Modeling'],
    desc: 'Analyzed 6 million U.S. commercial flights to uncover patterns and reduce delays. Built a Star Schema data model and designed 30+ KPI-driven analytical views to identify seasonal trends, delay root causes, and estimate financial impacts ($69M lost to delays).',
    link: 'https://www.linkedin.com/posts/manar-kassem-depi-project-ugcPost-7412216540554579968-FRoR'
  },
  {
    title: 'Hotel Reservations ML Prediction',
    tags: ['Python', 'Scikit-learn', 'PCA', 'Ensemble'],
    desc: 'Developed a robust Machine Learning pipeline to predict hotel booking cancellations. Cleaned data, removed outliers via IQR, applied PCA for dimensionality reduction, and evaluated Random Forest, SVM, KNN, and Naive Bayes, ultimately achieving an Ensemble accuracy of 81.5%.',
    link: 'https://www.linkedin.com/in/manar-kassem'
  },
  {
    title: 'E-Commerce Business Analysis',
    tags: ['SQL', 'Tableau', 'Business Strategy'],
    desc: 'Conducted exploratory and business-focused data analysis on e-commerce sales. Translated raw data into critical performance indicators and developed interactive dashboards to support management decision-making.',
    link: 'https://www.linkedin.com/posts/manar-kassem_%D9%83%D8%A7%D9%86-%D9%87%D8%B0%D8%A7-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D9%80%D9%88%D8%B9-%D9%8من-%D8%A3%D9%81%D8%B6%D9%84-%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D8%A8-%D8%A7%D9%84%D8%B9%D9%85%D9%84%D9%8A%D8%A9-%D8%A7%D9%84%D8%AA%D9%8I-ugcPost-7381664211942232064-4eF8'
  },
  {
    title: 'Sales Performance Dashboard',
    tags: ['Advanced Excel', 'Pivot Tables'],
    desc: 'Engineered an interactive Excel dashboard analyzing company sales performance for 2017. Utilized advanced formulas, pivot tables, and conditional formatting to visualize sales trends and define core KPIs.',
    link: 'https://www.linkedin.com/posts/manar-kassem_excel-dataanalysis-dashboard-ugcPost-7362826246902165505-NPtg'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-sky-100/40 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-violet-100/30 rounded-full filter blur-[120px] pointer-events-none"></div>

      <motion.div 
        animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }} 
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-12 text-slate-300/40 hidden md:block pointer-events-none"
      >
        <Code size={56} />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0], scale: [0.95, 1.05, 0.95] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-20 left-12 text-slate-300/40 hidden md:block pointer-events-none"
      >
        <Terminal size={48} />
      </motion.div>

      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 right-1/3 text-slate-200/30 hidden lg:block pointer-events-none"
      >
        <Database size={80} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-[#1E293B] mb-14 flex items-center gap-4"
        >
          <span className="w-12 h-[3px] bg-gradient-to-r from-sky-600 to-violet-600 rounded-full"></span>
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.03)" }}
              className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-sky-500/20 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-sm"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-2 flex-wrap max-w-[85%]">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tag} 
                        className={`text-xs font-semibold px-3 py-1 rounded-md border ${
                          tIdx % 2 === 0 ? 'bg-sky-50 text-sky-700 border-sky-100/60' : 'bg-violet-50 text-violet-700 border-violet-100/60'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 text-[#64748B] hover:text-sky-600 hover:bg-sky-50 border border-slate-100 transition-all"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <h3 className="text-2xl font-bold text-[#1E293B] mb-4 group-hover:text-sky-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed text-sm">
                  {project.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-50 flex justify-end">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xs font-bold text-sky-600 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1 transform translate-x-2 group-hover:translate-x-0"
                >
                  View on LinkedIn &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;