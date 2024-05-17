import "./hero.scss"
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
};
const sliderVariants = {
    initial: {
        x: -0,
    },
    animate: {
        x: "0%",
        transition: {
            repeatType: "mirror",
            duration: 3,
            staggerChildren: 0.1,
        },
    },
};

const Hero = () => {
    return (
        <div>
            <div className="hero">
                <motion.div className="editar-imagem" variants={sliderVariants} initial="initial" animate="animate">
                    <img src="./exp6.png" alt="" />
                </motion.div>
                <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate"></motion.div>
                <div className="imageContainer">
                    <img src="/exp2.png" alt="" />
                </div>
            </div>
        </div>

    )
}

export default Hero