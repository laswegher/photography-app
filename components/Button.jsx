import React from 'react';
import { motion } from 'framer-motion';

const Button = (props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 500 }}
      onClick={props.onClick}
      className={`${props.className} border-2 px-5 py-1 text-lg tracking-wide`}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
