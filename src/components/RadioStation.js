import React from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { motion } from 'framer-motion';
import './RadioStation.css';

function RadioStation(props) {

  return (
    <motion.div className='radio'animate={{ opacity: [0, 2] }} transition={{ delay: 0 }}whileHover={{ scale: 1.09 }}whileTap={{ scale: 0.9 }} >
        <PlayCircleOutlineIcon />
        <h3>{props.title}</h3>
    </motion.div>
  )
}

export default RadioStation