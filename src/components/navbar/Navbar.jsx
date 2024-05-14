import SideBar from "../../sidebar/Sidebar";
import "./navbar.scss"
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className="navbar">
            {/* SideBar */}
            <SideBar />
            <div className="wrapper">
                <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}></motion.span>
                <div className="social">
                    <a href="https://www.linkedin.com/in/joaoopneves/"><img src="/linkedin2.svg"></img></a>
                    <a href="https://www.behance.net/joaopneves"><img src="/behance2.svg"></img></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;