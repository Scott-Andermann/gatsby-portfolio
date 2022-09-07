import React from "react";
import { motion } from 'framer-motion';

const FadeIn = ({ children }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
                visible: { opacity: 1, y: -100 },
                hidden: { opacity: 0, y: 0 }
            }}>
            {children}
        </motion.div>
    )
}

export default FadeIn;