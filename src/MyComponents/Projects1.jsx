import '../assets/css/projects1.css';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import projectBoxContentImg from '../assets/images/projects/project-box-content-img.png';
import projectImg1 from '../assets/images/projects/projects-img1.png';
import projectImg2 from '../assets/images/projects/projects-img2.png';
import projectImg3 from '../assets/images/projects/projects-img3.png';
import projectImg4 from '../assets/images/projects/projects-img4.png';
import projectImg5 from '../assets/images/projects/projects-img5.png';
const projects = [
    {
        img: projectImg1,
        title: "Stephen House"
    },
    {
        img: projectImg2,
        title: "Greenfield Villa"
    },
    {
        img: projectImg3,
        title: "Sunrise Home"
    },
    {
        img: projectImg4,
        title: "Harmony House"
    },
    {
        img: projectImg5,
        title: "EcoNest Home"
    },
    {
        img: projectImg1,
        title: "Stephen House"
    },
    {
        img: projectImg2,
        title: "Greenfield Villa"
    },
    {
        img: projectImg3,
        title: "Sunrise Home"
    },
    {
        img: projectImg4,
        title: "Harmony House"
    },
    {
        img: projectImg5,
        title: "EcoNest Home"
    },
]
function Projects1() {
    const settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    };
    return (
        <section>
            <Slider {...settings} className="projects-slider">
                {
                    projects.map((item, index) => (
                        <Link to="/projects" className="projects-card position-relative overflow-hidden" key={index}>
                            <img src={item.img} alt="project-img" className="project-main-img w-100 h-100" />
                            <div className="projects-overlay"></div>
                            <div className="project-card-img position-absolute">
                                <img src={projectBoxContentImg} alt="project-box-content-img" />
                                <div className="project-card-content">
                                    <p className="mb-0 position-absolute">Residence Solar</p>
                                    <h3 className="mb-0 position-absolute">{item.title}</h3>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </Slider>
        </section>
    )
}
export default Projects1