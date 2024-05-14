import { useRef } from "react"
import "./services.scss"
import { motion, useInView } from "framer-motion"

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}


const Services = () => {


    const ref = useRef()
    const isInView = useInView(ref, { margin: "-100px" })

    return (
        <motion.div className="services" variants={variants} initial="initial" /* whileInView="animate" */ ref={ref} animate={"animate"}>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{ color: "#2400FF" }}>Areas</motion.b> of</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{ color: "#2400FF" }}>Expertise</motion.b></h1>
                    <button>WHAT DO I DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Web Development</h2>
                    <img className="code-img" src="./code.svg" alt="" />
                    <p>HTML, SCSS, JavaScript, PHP, React.js, MySQL, Git, PhpMyAdmin</p>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>UI/UX Design</h2>
                    <img className="code-img" src="./pen1.svg" alt="" />
                    <p>Interface Design and Human-Computer Interaction (HCI)</p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services