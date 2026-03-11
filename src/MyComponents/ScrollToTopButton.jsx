import '../assets/css/scroll-to-top-button.css';
import arrowIcon from '../assets/images/scroll-to-top/arrow-icon.svg';
import { useState, useEffect } from 'react';
function ScrollToTopButton() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        show && (
            <button className="scroll-to-top-button" onClick={scrollTop}>
                <img src={arrowIcon} alt="arrow-icon" />
            </button>
        )
    )
}
export default ScrollToTopButton