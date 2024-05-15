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

const Hero2 = () => {
    return (
        <div>
            <div className="hero2">
                <div className="wrapper2">
                    <div className="aboutContainer">
                        <h1>About Me</h1>
                        <h2>Hey there, it's João here!</h2>
                        <p>Hey there! 👋 I'm <b>João Neves</b>, a 21-year old web enthusiast from Braga, Portugal.</p>
                        <p>I'm in the final year of my degree in <b>Multimedia and Communication Technologies</b> at the University of Aveiro. In my spare time, I like to play video games, watch series and I also try to include sport in my routine.</p>
                        <p> My interests mainly rely on anything <b>web development</b>, altough I also have a penchant for <b>UX/UI Design</b>.</p>
                    </div>
                    <div className="text-center">
                        <h2>Experience</h2>
                        <br></br>

                        <p className="paragrafos-pequenos">mar 2024 - now</p>
                        <h4> <span>👨🏻‍💻</span> Member of Communication and Image Department - <a href="https://www.scientific.pt/">Scientific Junior Value</a> </h4> 
                        <p className="paragrafos-grandes"> Junior Enterprise - University of Aveiro</p>
                    </div>
                    <div className="text-center">
                        <h2>Education</h2>
                        <br></br>
                        <p className="paragrafos-pequenos">oct 2021 - now</p>
                        <h4> <span>🚀</span>Bachelor in Multimedia and Communication Technologies</h4>
                        <p className="paragrafos-grandes"> University of Aveiro</p>
                        <br></br>
                        <p className="paragrafos-pequenos">sept 2019 - jul 2021</p>
                        <h4> <span>🏫</span>Science and Technologies</h4>
                        <p className="paragrafos-grandes"> High school studies in Science and Technologies at Escola Secundária de Vila Verde</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero2;