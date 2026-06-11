import React from 'react';
import { motion } from 'framer-motion';

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  description: string;
  courses: string[];
}

const Education = () => {
  const educationData: EducationItem[] = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Tribhuvan University",
      duration: "2021 - Present",
      description: "Currently pursuing a degree in Computer Science with a focus on software development and web technologies.",
      courses: ["Data Structures", "Algorithms", "Database Management", "Web Development"]
    },
    {
      degree: "Higher Secondary Education",
      institution: "Kathmandu Model College",
      duration: "2018 - 2020",
      description: "Completed higher secondary education with a focus on science and mathematics.",
      courses: ["Physics", "Mathematics", "Computer Science", "English"]
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4 leading-relaxed py-1">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-900 to-gray-100 dark:from-gray-100 dark:to-gray-900 mx-auto mt-2"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu: EducationItem, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="glass-card p-8 rounded-[2.5rem] h-full hover:border-blue-500/50 transition-all duration-500">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{edu.duration}</span>
                </div>

                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">{edu.degree}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-bold mb-4">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course: string, courseIndex: number) => (
                    <span
                      key={courseIndex}
                      className="px-3 py-1 text-[10px] font-black uppercase tracking-wider bg-gray-900/5 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-900/5 dark:border-white/5"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 