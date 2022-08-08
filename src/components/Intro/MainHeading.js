import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


function MainHeading({ text }) {
    const [heading, setHeading] = useState([]);

    useEffect(() => {
        if (heading.length < text.length) {
            const interval = setInterval(() => setHeading(prev => [...prev, text[prev.length]]), 100);
            return () => clearInterval(interval);
        }
    }, [heading])


    return (
        <div className='main-heading-container'>
            {heading.map(element => <motion.div className='letter'
                initial={{ rotate: 180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}><h1 className='main-heading'>{element}</h1></motion.div>)}
        </div>
    )
}

export default MainHeading;