import React from 'react';
import './Screen.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


function Screen() {

    const navigate = useNavigate()

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

  return (
    <div className='screen'>
        <div className='screen-bg'>
            <div className='screen-gradient' />
        </div>
        <motion.div initial="hidden" animate="visible" variants={variants} transition={{ ease: 'easeIn', delay: 0.4 }} className='screen-body'>
            <h1  className='app-name'>Ani<span>Lofi</span></h1>
            <p>A lofi music player </p>
            <button onClick={() => navigate('/music')} className='screen-btn'>Start Listening</button>
        </motion.div>
    </div>
  )
}

export default Screen