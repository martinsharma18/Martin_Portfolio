import React from 'react';
import { motion } from 'framer-motion';

const CodeEditor = () => {
  return (
    <motion.div
      className="code-editor transform transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="editor-header">
        <div className="circles">
          <span className="circle red"></span>
          <span className="circle yellow"></span>
          <span className="circle green"></span>
        </div>
      </div>
      <div className="editor-content">
        <motion.div
          className="line"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="comment">// Code is poetry</span>
        </motion.div>
        <motion.div
          className="line"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className="purple">function</span> <span className="blue">greet</span>() {'{'}
        </motion.div>
        <motion.div
          className="line"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <span className="green">&nbsp;&nbsp;return "Hello, I'm Martin";</span>
        </motion.div>
        <motion.div
          className="line"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {'}'}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CodeEditor; 