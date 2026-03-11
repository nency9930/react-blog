import '../assets/css/custom-cursor.css';
import { useEffect } from "react";
function CustomCursor() {
    useEffect(() => {
        const cursor = document.querySelector(".cursor");
        let mx = 0, my = 0;
        let x = 0, y = 0;
        const mouseMove = (e) => {
            mx = e.clientX;
            my = e.clientY;
            if (e.target.closest("a, button")) {
                cursor.classList.add("hover");
            } else {
                cursor.classList.remove("hover");
            }
        };
        document.addEventListener("mousemove", mouseMove);
        const animate = () => {
            x += (mx - x) * 0.15;
            y += (my - y) * 0.15;
            cursor.style.left = x + "px";
            cursor.style.top = y + "px";
            requestAnimationFrame(animate);
        };
        animate();
        return () => {
            document.removeEventListener("mousemove", mouseMove);
        };
    }, []);
    return (
        <div className="cursor"></div>
    )
}
export default CustomCursor