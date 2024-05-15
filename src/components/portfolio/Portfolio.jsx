import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [

    {
        id: 1,
        title: "SUNRISE",
        img: "./sunrise-capa.png",
        link: "https://www.figma.com/design/yGuLy8APsMbQ0sCA5ZJgxj/PROT%C3%93TIPO-%7C-SUNRISE?node-id=144%3A691&t=682Uda4t6x3TpkwA-1",
        buttonText: "Visit Prototype",
        desc: "The Sunrise project (Soft skill Understanding, Recognition and promotion In School Ecosystems) aims to explore and leverage the use of digital technological solutions to identify and enhance socio-emotional competencies in non-higher education environments, with a focus on 12th-grade students and secondary school teachers. ",
    },

    {
        id: 2,
        title: "inStay",
        img: "./capa_frente.png",
        link: "https://instay1.netlify.app/",
        buttonText: "Visit Website",
        desc: "inStay is a travel website that allows users to explore and book local accommodation, while at the same time being recommended restaurants close to the accommodation they are planning to book, in order to experience local flavours.",
    },
    {
        id: 3,
        title: "Bookid",
        img: "./capa-bookid.png",
        buttonText: "Visit Prototype",
        link: "https://www.figma.com/design/1L4jA2tzfP57TDWq8thGII/BOOKID?node-id=163%3A2&t=YS42tPeYtqtM4Qcr-1",
        desc: "Bookid is a platform for creating interactive digital books, essentially aimed at children in order to provide a more entertaining and engaging reading experience than conventional text-only books. In addition has the functionality for children to create their own books by adding their own content to the platform, such as images and sounds.",
    },
    {
        id: 4,
        title: "Top Indian Movies",
        img: "./capa-indian-movies.png",
        buttonText: "Unavailable",
        link: "",
        desc: "Top Indian Movies is an Indian film website that allows you to list and filter films from a provided database. The website includes login and user registration mechanisms with password hashing for security. In addition, I have implemented extra features that allow users to comment on films and administrators to insert/edit new films with the functionality to add or change a cover (image) via the insert form.",
    },
    {
        id: 5,
        title: "Aventura no Espaço com a Laika",
        img: "./teste1.png",
        buttonText: "Visit Website",
        link: "https://aventura-no-espaco-com-laika.netlify.app/",
        desc: "Aventura no Espaço com a Laika is an interactive children's book, adapted to the theme of space and inspired by the RTP’s show, UAU. The dog Laika acts as an educator, teaching content about space, specifically the solar system, in an interactive way, through images accompanied by an audio guide. In addition to the book, there is also a quizz to test the knowledge acquired from reading it and a section devoted to the story of Laika dog.",
    },
    {
        id: 6,
        title: "Minimercado da Xana",
        img: "./capa1.png",
        buttonText: "Visit Website",
        link: "https://minimercado-xana.netlify.app/",
        desc: "This project was a challenge to apply our recently acquired front-end skills (HTML, CSS and Bootstrap). To do this, we chose to bring to life a project by a cookery content creator (Cozinha da Xana), taking the idea further by also adding the online mini-market aspect.",
    },
];


const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <button>{item.buttonText}</button> {/* Use a propriedade buttonText */}
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
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
                <h1>My Projects</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
};

export default Portfolio
