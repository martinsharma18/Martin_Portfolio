import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: "Blockchain Charity Platform",
      description: "Decentralized charity platform on Ethereum testnet with Solidity smart contracts, Django REST API admin dashboard, Next.js frontend, and Web3 wallet connectivity.",
      technologies: ["Solidity", "Next.js", "Django REST", "Ethers.js", "IPFS"],
      github: "https://github.com/martinsharma18/Blockchain-Project.git",
      image: "/projects/mainpage.png",
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations and interactive components.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/martinsharma18/Portofolio.git",
      image: "/projects/image.png",
    },
    {
      title: "KantipurFitness",
      description: "A comprehensive fitness platform built with modern web technologies, featuring workout tracking, nutrition planning, and community features.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/martinsharma18/KantipurFitness.git",
      image: "/projects/kantipur-fitness.png",
      demo: "https://kantipur-fitness.vercel.app"
    },
    {
      title: "Raw Endurance E-commerce",
      description: "A full-featured e-commerce platform for fitness and sports equipment, with secure payment processing and inventory management.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      github: "https://github.com/kushal2060/e-commerce.git",
      image: "/projects/e-com.png",
      demo: "https://raw-endurance.vercel.app"
    },
    {
      title: "Interactive Government Site",
      description: "A modern government website prototype focusing on user experience and accessibility, featuring interactive service portals.",
      technologies: ["Figma"],
      figma: "https://www.figma.com/proto/ArXOveVBO4foWdEQpIdQ6B/Government-Site?node-id=5-196",
      image: "/projects/goverment.png"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4 leading-relaxed py-1">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-900 to-gray-100 dark:from-gray-100 dark:to-gray-900 mx-auto mt-2"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card h-full rounded-[2.5rem] overflow-hidden hover:border-blue-500/50 transition-all duration-500 flex flex-col">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  {project.demo && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-emerald-500 text-white rounded-full shadow-lg">
                        Live Demo
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-gray-900/5 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-900/5 dark:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 pt-6 border-t border-gray-900/5 dark:border-white/5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors group/link"
                      >
                        <span>GitHub</span>
                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors group/link"
                      >
                        <span>Visit Site</span>
                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

//hye there