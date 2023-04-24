import { motion } from 'framer-motion';

const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1},
    exit: { opacity: 0},
};

export const AnimatedPage = ({ children, setClass }) => {
    return (
        <motion.section
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className={setClass}
        >
            {children}
        </motion.section>
    );
};
