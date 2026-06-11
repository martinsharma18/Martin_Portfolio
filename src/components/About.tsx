import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About: React.FC = () => {
  const skills = [
    { category: 'Languages', items: ['C#', 'JavaScript', 'Python', 'SQL', 'HTML5', 'CSS3', 'TypeScript'] },
    { category: 'Databases', items: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB'] },
    { category: 'Frameworks', items: ['ASP.NET Core', 'Web API', 'MVC', 'React', 'Entity Framework', 'RESTful APIs', 'Node.js', 'Express.js', 'Dapper'] },
    { category: 'Tools & Concepts', items: ['Git', 'Postman', 'Clean Architecture', 'CQRS', 'JWT', 'OAuth', 'Azure', 'Vercel', 'Git/GitHub', 'Docker', 'Visual Studio', 'VS Code'] },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4 leading-relaxed">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-900 to-gray-100 dark:from-gray-100 dark:to-gray-900 mx-auto mt-2" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-10 rounded-[3rem] space-y-6">
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                I'm a <span className="text-gray-900 dark:text-white font-bold underline decoration-blue-500 underline-offset-4">Backend Developer</span> with a obsession for efficiency and scalability.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My journey in tech is driven by a curiosity about how complex systems work under the hood. I specialize in the .NET ecosystem, crafting APIs that don't just work, but excel under pressure.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 text-xs font-black uppercase tracking-widest bg-blue-500/10 text-blue-500 rounded-xl border border-blue-500/20">
                  Performance Driven
                </span>
                <span className="px-4 py-2 text-xs font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-500 rounded-xl border border-emerald-500/20">
                  Security Focused
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-3xl text-center">
                <h4 className="text-3xl font-black gradient-text">1+</h4>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Years Exp</p>
              </div>
              <div className="glass-card p-6 rounded-3xl text-center">
                <h4 className="text-3xl font-black gradient-text">5+</h4>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Projects</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[3rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>

            <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-8">Technical Stack</h3>

            <div className="space-y-8">
              {skills.map((skillGroup, groupIndex) => (
                <div key={skillGroup.category}>
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2 text-sm bg-gray-900/5 dark:bg-white/5 text-gray-800 dark:text-gray-200 rounded-xl border border-gray-900/5 dark:border-white/10 font-bold hover:border-blue-500/50 hover:text-blue-500 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;