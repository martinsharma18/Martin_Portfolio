import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: "Connexica Pvt. Ltd",
            role: "Associate .NET Developer",
            startDate: "Jan 2025",
            endDate: "Present",
            totalDuration: "3 Months",
            description: "Working as an Associate Developer focusing on scalable backend services and API optimization using .NET Core and Entity Framework.",
            skills: [".NET Core", "SQL Server", "Web API"]
        },
        {
            company: "Connexica Pvt. Ltd",
            role: ".NET Developer Intern",
            startDate: "Oct 2024",
            endDate: "Dec 2024",
            totalDuration: "3 Months",
            description: "Completed an intensive internship focusing on C# fundamentals, ASP.NET MVC, and database management systems.",
            skills: ["C#", "ASP.NET MVC", "Entity Framework"]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold gradient-text mb-4 leading-relaxed py-1">Experience</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-gray-900 to-gray-100 dark:from-gray-100 dark:to-gray-900 mx-auto mt-2"></div>
                </motion.div>

                <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
                                }`}
                        >
                            {/* Dot on timeline */}
                            <div className="absolute top-0 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-500 left-[-11px] md:left-auto md:right-[-11px] translate-y-2 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                                style={{ left: index % 2 !== 0 ? '-11px' : undefined }}></div>

                            <div className="glass-card p-8 rounded-[2rem] hover:border-blue-500/50 transition-all duration-500 group">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full">{exp.totalDuration}</span>
                                    <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{exp.startDate} — {exp.endDate}</span>
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white mt-1 group-hover:text-blue-500 transition-colors uppercase tracking-tight">{exp.role}</h3>
                                <p className="text-gray-600 dark:text-gray-300 font-bold mb-6 flex items-center gap-2 mt-2">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                    {exp.company}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill) => (
                                        <span key={skill} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded">
                                            {skill}
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

export default Experience;
