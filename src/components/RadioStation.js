import React from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { motion } from 'framer-motion';
import './RadioStation.css';

function RadioStation(props) {

  return (
    <div className='radiodata'>
      <motion.div 
        className='radio' 
        onClick={props.ambient} 
        animate={{ opacity: [0, 2] }} 
        transition={{ delay: 0 }}whileHover={{ scale: 1.18 }}whileTap={{ scale: 0.9 }} 
      >
        <PlayCircleOutlineIcon />
        <h3>Ambient Renders</h3>
      </motion.div>
      <motion.div 
        className='radio' 
        onClick={props.anime} 
        animate={{ opacity: [0, 2] }} 
        transition={{ delay: 0 }}whileHover={{ scale: 1.18 }}whileTap={{ scale: 0.9 }} 
      >
        <PlayCircleOutlineIcon />
        <h3>Anime Vibe</h3>
      </motion.div>
      <motion.div 
        className='radio' 
        onClick={props.astral}
        animate={{ opacity: [0, 2] }} 
        transition={{ delay: 0 }}whileHover={{ scale: 1.18 }}whileTap={{ scale: 0.9 }} 
      >
        <PlayCircleOutlineIcon />
        <h3>Astral Throb</h3>
      </motion.div>
      <motion.div 
        className='radio' 
        onClick={props.chill} 
        animate={{ opacity: [0, 2] }} 
        transition={{ delay: 0 }}whileHover={{ scale: 1.18 }}whileTap={{ scale: 0.9 }} 
      >
        <PlayCircleOutlineIcon />
        <h3>Chillhouse</h3>
      </motion.div>
      <motion.div 
        className='radio' 
        onClick={props.chill2}
        animate={{ opacity: [0, 2] }} 
        transition={{ delay: 0 }}whileHover={{ scale: 1.18 }}whileTap={{ scale: 0.9 }} 
      >
        <PlayCircleOutlineIcon />
        <h3>Chilled Cow</h3>
      </motion.div>
      <motion.div 
        className='radio' 
        onClick={props.ivy} 
        animate={{ opacity: [0, 2] }} 
        transition={{ delay: 0 }}whileHover={{ scale: 1.18 }}whileTap={{ scale: 0.9 }} 
      >
        <PlayCircleOutlineIcon />
        <h3>Ivy Records</h3>
      </motion.div>
      <motion.div 
        className='radio' 
        onClick={props.h5g1} 
        animate={{ opacity: [0, 2] }} 
        transition={{ delay: 0 }}whileHover={{ scale: 1.18 }}whileTap={{ scale: 0.9 }} 
      >
        <PlayCircleOutlineIcon />
        <h3>H5G1 Music</h3>
      </motion.div>
      <motion.div 
        className='radio' 
        onClick={props.lofigirl} 
        animate={{ opacity: [0, 2] }} 
        transition={{ delay: 0 }}whileHover={{ scale: 1.18 }}whileTap={{ scale: 0.9 }} 
      >
        <PlayCircleOutlineIcon />
        <h3>Lofi Girl</h3>
      </motion.div>
      <motion.div 
        className='radio' 
        onClick={props.spinninRecords} 
        animate={{ opacity: [0, 2] }} 
        transition={{ delay: 0 }}whileHover={{ scale: 1.18 }}whileTap={{ scale: 0.9 }} 
      >
        <PlayCircleOutlineIcon />
        <h3>Spinnin Records</h3>
      </motion.div>
      <motion.div 
        className='radio' 
        onClick={props.niceGuy} 
        animate={{ opacity: [0, 2] }} 
        transition={{ delay: 0 }}whileHover={{ scale: 1.18 }}whileTap={{ scale: 0.9 }} 
      >
        <PlayCircleOutlineIcon />
        <h3>Nice Guys</h3>
      </motion.div>
      <motion.div 
        className='radio' 
        onClick={props.jazCafe} 
        animate={{ opacity: [0, 2] }} 
        transition={{ delay: 0 }}whileHover={{ scale: 1.18 }}whileTap={{ scale: 0.9 }} 
      >
        <PlayCircleOutlineIcon />
        <h3>Jazz Café</h3>
      </motion.div>
    </div>
    
  )
}

export default RadioStation