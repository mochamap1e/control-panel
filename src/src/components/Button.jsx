import { motion } from "motion/react";

export default function Button({ onClick, icon, children }) {
    return (
        <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.1 }}
            onClick={onClick}
        >
            {icon && <img src={icon}/>}
            <p>{children}</p>
        </motion.button>
    )
}