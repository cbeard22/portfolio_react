import Navbar from "./Navbar";
import MenuHidden from "./MenuHidden";
import { useState, useEffect } from "react";

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        const hiddenMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false)
            }
        }
        window.addEventListener('resize', hiddenMenu)
        return () => {
            window.removeEventListener('resize', hiddenMenu)
        }
    })

    return (
        <div className="homeScreen">
            <Navbar toggleOpen={toggleOpen} />
            {isOpen && <MenuHidden toggleOpen={toggleOpen} />}
            {children}
        </div>
    );
}

export default Layout;