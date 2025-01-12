'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { useEffect, useState } from 'react';

export const AIAgent = () => {
  const [isTyping, setIsTyping] = useState(false);
  
  useEffect(() => {
    const typingInterval = setInterval(() => {
      setIsTyping(prev => !prev);
    }, 3000);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="relative w-96 h-96">
      {/* Orbital Rings */}
      <motion.div
        style={{ position: 'absolute', inset: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full" />
      </motion.div>
      <motion.div
        style={{ position: 'absolute', inset: '2rem' }}
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 border-2 border-indigo-500/20 rounded-full" />
      </motion.div>

      {/* Core AI Visualization */}
      <motion.div
        style={{ 
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-32 h-32">
          {/* Pulsing Core */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom right, rgb(59, 130, 246), rgb(79, 70, 229))',
              borderRadius: '9999px',
              filter: 'blur(4px)'
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Neural Network Nodes */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: '0.75rem',
                height: '0.75rem',
                backgroundColor: 'white',
                borderRadius: '9999px',
                left: `${50 + 35 * Math.cos(2 * Math.PI * i / 8)}%`,
                top: `${50 + 35 * Math.sin(2 * Math.PI * i / 8)}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Typing Indicator */}
      <div style={{ 
        position: 'absolute',
        bottom: '5rem',
        left: '50%',
        transform: 'translateX(-50%)'
      }}>
        <motion.div
          style={{
            display: 'flex',
            gap: '0.5rem'
          }}
          animate={isTyping ? { y: [0, -10, 0] } : { y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              style={{
                width: '0.75rem',
                height: '0.75rem',
                backgroundColor: 'rgb(59, 130, 246)',
                borderRadius: '9999px'
              }}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: isTyping ? [0.3, 1, 0.3] : 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            />
          ))}
        </motion.div>
      </div>

      {/* Floating Text */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgb(96, 165, 250)',
          fontSize: '0.875rem',
          fontFamily: 'monospace'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        AI Agent Online
      </motion.div>
    </div>
  );
}; 