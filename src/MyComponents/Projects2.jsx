import '../assets/css/projects2.css';
import { Link } from "react-router-dom";
import projectsImg1 from '../assets/images/projects/projects-img1.png';
import projectsImg2 from '../assets/images/projects/projects-img2.png';
import projectsImg3 from '../assets/images/projects/projects-img3.png';
import projectsImg4 from '../assets/images/projects/projects-img4.png';
import projectsImg5 from '../assets/images/projects/projects-img5.png';
const projectsList = [
    {
        img: projectsImg1,
        title: "Stephen House"
    },
    {
        img: projectsImg2,
        title: "Greenfield Villa"
    },
    {
        img: projectsImg3,
        title: "Sunrise Home"
    },
    {
        img: projectsImg4,
        title: "Harmony House"
    },
    {
        img: projectsImg5,
        title: "EcoNest Home"
    },
]
function Projects2() {
    return (
        <section className="container">
            <div className="projects-card-container3">
                {
                    projectsList.map((item, index) => (
                        <Link to="/projects2" className="projects-card2 position-relative d-block" key={index}>
                            <img src={item.img} alt="projects2-img" className="w-100" />
                            <div className="projects-overlay-wrapper position-absolute">
                                <div className="projects-overlays w-100 h-100">
                                    <div className="projects-content position-absolute d-flex flex-column text-center">
                                        <h3 className="mb-0">{item.title}</h3>
                                        <p className="mb-0">Residence Solar</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}
export default Projects2