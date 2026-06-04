import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import depiImg from '../assets/depi.png';
import amitImg from '../assets/Amit.png';

const certificates = [
  {
    title: 'Data Analyst Specialist - DEPI',
    issuer: 'Ministry of Communications and Information Technology (MCIT)',
    date: 'Dec 2025',
    img: depiImg
  },
  {
    title: 'Power BI Diploma',
    issuer: 'AMIT Academy',
    date: 'Oct 2024',
    img: amitImg
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 bg-[#F5F5F4] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-[#1E293B] mb-12 flex items-center gap-4"
        >
          <span className="w-12 h-[3px] bg-gradient-to-r from-sky-600 to-violet-600 rounded-full"></span>
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {certificates.map((cert, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm"
            >
              <img src={cert.img} alt={cert.title} className="w-full h-72 object-cover opacity-90 group-hover:opacity-100 group-hover:scale-102 transition-all duration-500" />
              {/* تدرج احترافي ناعم يتناسب مع درجات البيج والأوف وايت والنصوص الغامقة */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-6">
                <span className="w-fit p-1.5 bg-white/20 backdrop-blur-md rounded-lg text-white mb-2"><Award size={16}/></span>
                <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                <p className="text-sky-300 font-medium text-sm mb-1">{cert.issuer}</p>
                <p className="text-xs text-slate-300 font-medium">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;