import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactDOM from 'react-dom';

const TimelineItem = ({ year, title, company, description, responsibilities, emoji, isActive, onClick }) => (
  <motion.div 
    className={`relative p-6 mb-8 rounded-lg cursor-pointer transition-all duration-300 ${
      isActive ? 'bg-cyan-600 shadow-lg' : 'bg-gray-800 hover:bg-gray-700'
    }`}
    onClick={onClick}
    whileHover={{ scale: 1.02 }}
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-2">
      <span className="text-3xl mr-4">{emoji}</span>
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-cyan-300">{company}</p>
        <p className="text-gray-400">{year}</p>
      </div>
    </div>
    
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <p className="text-gray-200 mt-4">{description}</p>
      {responsibilities && (
        <ul className="mt-4 list-disc list-inside text-gray-200">
          {responsibilities.map((resp, idx) => (
            <li key={idx} className="mb-2">{resp}</li>
          ))}
        </ul>
      )}
    </motion.div>
    
    <div className="absolute left-0 top-1/2 -translate-x-4 w-4 h-4 rounded-full bg-cyan-400" />
  </motion.div>
);

const ExperienceTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const experiences = [
    {
      year: "March 2024 – Present",
      title: "Technology Integration Consultant",
      company: "KPMG Australia",
      description: "Working on system integration projects between South Australia Police (SAPOL) and National Criminal Intelligence System (NCIS).",
      responsibilities: [
        "Design, develop, and implement solutions to integrate disparate systems",
        "Configure and manage Oracle Middleware Software",
        "Analyze and identify opportunities for automation and process improvement",
        "Currently training in Microsoft Azure cloud platforms"
      ],
      emoji: "💻"
    },
    {
      year: "June 2021 – November 2022",
      title: "Research Assistant",
      company: "Liquim® Ltd",
      description: "Worked for a start-up R&D biotech company developing plant-based nasal and oral barrier solutions against respiratory viruses including SARS-CoV 2.",
      responsibilities: [
        "Conducted regulatory policy analysis and interpretation",
        "Performed data analysis and research on product ingredients",
        "Managed stakeholder presentations and documentation",
        "Led procurement activities and maintained laboratory standards"
      ],
      emoji: "🧬"
    },
    {
      year: "September 2020 – June 2021",
      title: "Laboratory Assistant",
      company: "Western Diagnostic Pathology",
      description: "Worked in the Microbiology department processing clinical samples.",
      responsibilities: [
        "Conducted sample preparation and specimen processing",
        "Maintained accurate records of tests and procedures",
        "Managed equipment maintenance and inventory",
        "Ensured safety compliance and protocol adherence"
      ],
      emoji: "🔬"
    },
    {
      year: "October 2017 – August 2018",
      title: "Technical Assistant",
      company: "PathWest Laboratory Medicine",
      description: "Worked in the Environmental Microbiology Unit processing water samples.",
      responsibilities: [
        "Conducted various laboratory tests for environmental analysis",
        "Operated and maintained specialized laboratory equipment",
        "Ensured compliance with microbiological standards",
        "Collaborated in a multidisciplinary laboratory setting"
      ],
      emoji: "🧪"
    }
  ];

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gray-900 rounded-xl shadow-2xl">
      <motion.h2 
        className="text-3xl font-bold text-white mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Professional Journey 🚀
      </motion.h2>
      
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-cyan-400" />
        
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            {...exp}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          />
        ))}
      </div>
      
      <motion.p 
        className="text-gray-400 text-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Click on each role to learn more! ✨
      </motion.p>
    </div>
  );
};

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('timeline-root');
  if (container) {
    ReactDOM.render(React.createElement(ExperienceTimeline), container);
  }
});

export default ExperienceTimeline;