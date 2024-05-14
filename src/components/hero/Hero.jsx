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
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
            staggerChildren: 0.1,
        },
    },
};

const Hero = () => {
    return (
        <div>
            <div className="hero">
                <div className="wrapper">
                    <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                        <motion.div variants={textVariants} className="buttons">
                            <motion.button type="button" variants={textVariants}><a href="#portfolio">Portfolio</a></motion.button>
                            <motion.button type="button" variants={textVariants}><a href="#contact">Contact-me</a></motion.button>
                        </motion.div>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </div>
                <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate"></motion.div>
                <div className="imageContainer">
                    <img src="/exp2.png" alt="" />
                </div>
            </div>
        </div>

    )
}

export default Hero