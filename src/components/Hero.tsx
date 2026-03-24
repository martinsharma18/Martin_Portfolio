import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const codeSnippet = [
    { line: '// Martin Sharma Profile', color: 'text-[#6a9955] italic' },
    { line: 'public class Martin : BackendEngineer {', color: 'text-[#4ec9b0]' },
    { line: '  public string Name = "Martin Sharma";', color: 'text-[#ce9178]' },
    { line: '  public string Role = "Associate .NET Developer";', color: 'text-[#ce9178]' },
    { line: '  public string[] Skills = {', color: 'text-[#9cdcfe]' },
    { line: '    ".NET Core", "C#", "SQL Server"', color: 'text-[#ce9178]' },
    { line: '  };', color: 'text-[#9cdcfe]' },
    { line: '  public string Passion = "Building Scalable APIs";', color: 'text-[#ce9178]' },
    { line: '}', color: 'text-[#dcdcaa]' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center py-20 bg-white dark:bg-[#050505] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-5 py-2 rounded-full text-sm font-semibold bg-gray-900/5 dark:bg-white/5 border border-gray-900/10 dark:border-white/10 text-gray-900 dark:text-gray-100 backdrop-blur-md">
                Available for new opportunities
              </span>
            </motion.div>
            <motion.div
              className="text-xl font-black bg-gradient-to-r from-gray-900 to-black text-transparent bg-clip-text dark:from-white dark:to-gray-400 cursor-pointer tracking-tighter"
              whileHover={{ scale: 1.05 }}

            >
              <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight">
                <span className="block text-gray-900 dark:text-white mb-2">I am</span>
                <span className="gradient-text leading-tight">Martin Sharma</span>
              </h1>
            </motion.div>


            <p className="text-xl text-gray-600 dark:text-gray-400 font-medium max-w-xl leading-relaxed">
              Crafting robust, scalable, and secure backend architectures using <span className="text-gray-900 dark:text-white">.NET Core</span> and <span className="text-gray-900 dark:text-white">Enterprise Standards</span>.
            </p>
          </div>

          <motion.div
            className="flex flex-wrap gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-bold shadow-2xl hover:shadow-gray-900/20 dark:hover:shadow-white/20 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Projects
            </motion.a>
            <motion.a
              href="/projects/Martin Sharma.pdf"
              download
              className="px-8 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-bold backdrop-blur-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Get my CV
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative lg:block"
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Main Decorative Card */}
          <div className="relative group float-animation">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

            <div className="relative glass-card rounded-[2rem] overflow-hidden p-1 shadow-2xl bg-[#1e1e1e] border-[#333333]">
              <div className="absolute top-0 inset-x-0 h-10 bg-[#252526] flex items-center px-4 gap-2 border-b border-[#333333] z-20">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="ml-4 text-[10px] font-mono text-gray-400 tracking-wider">Profile.cs — Martin Sharma Portfolio</span>
              </div>

              <div className="pt-14 pb-8 px-6 bg-[#1e1e1e]">
                <div className="flex items-center gap-6 mb-8 bg-[#252526] p-4 rounded-xl border border-[#333333]">
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                    <Image
                      src="/martin.jpg"
                      alt="Martin Sharma"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Martin Sharma</h2>
                    <p className="text-[#9cdcfe] font-mono text-xs">@backend_expert</p>
                  </div>
                </div>

                <div className="font-mono text-[12px] leading-relaxed p-6 rounded-xl bg-[#1e1e1e] border border-[#333333] shadow-2xl relative">
                  {codeSnippet.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="flex whitespace-pre"
                    >
                      <span className="text-[#858585] w-8 text-right mr-6 select-none">{index + 1}</span>
                      <span className={line.color}>{line.line}</span>
                    </motion.div>
                  ))}
                  <div className="flex">
                    <span className="text-[#858585] w-8 text-right mr-6 select-none">10</span>
                    <motion.div
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-2 h-4 bg-[#569cd6]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl blur-3xl opacity-20 animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;