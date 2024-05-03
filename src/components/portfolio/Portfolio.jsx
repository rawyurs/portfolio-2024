import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quae atque quia placeat vitae reprehenderit id dignissimos tempora sit! Maxime quia blanditiis harum quaerat voluptate assumenda asperiores at, sed deleniti!",
    },
    {
        id: 2,
        title: "Next.js Blog",
        img: "https://images.pexels.com/photos/20923044/pexels-photo-20923044/free-photo-of-alvorecer-amanhecer-aurora-panorama.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quae atque quia placeat vitae reprehenderit id dignissimos tempora sit! Maxime quia blanditiis harum quaerat voluptate assumenda asperiores at, sed deleniti!",
    },
    {
        id: 3,
        title: "Vanilla JS APP",
        img: "https://images.pexels.com/photos/21369952/pexels-photo-21369952/free-photo-of-comida-alimento-refeicao-madeira.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quae atque quia placeat vitae reprehenderit id dignissimos tempora sit! Maxime quia blanditiis harum quaerat voluptate assumenda asperiores at, sed deleniti!",
    },
    {
        id: 4,
        title: "Music App",
        img: "https://images.pexels.com/photos/21369952/pexels-photo-21369952/free-photo-of-comida-alimento-refeicao-madeira.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quae atque quia placeat vitae reprehenderit id dignissimos tempora sit! Maxime quia blanditiis harum quaerat voluptate assumenda asperiores at, sed deleniti!",
    },
];


const Single = ({ item }) => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start" , "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 100])

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};

const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });



    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
};

export default Portfolio
