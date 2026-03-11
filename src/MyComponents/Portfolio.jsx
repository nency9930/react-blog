import '../assets/css/portfolio.css';
import { Link } from "react-router-dom";
import portfolioImg1 from '../assets/images/portfolio/portfolio-img1.jpg';
import portfolioImg2 from '../assets/images/portfolio/portfolio-img2.jpg';
import portfolioImg3 from '../assets/images/portfolio/portfolio-img3.jpg';
import portfolioImg4 from '../assets/images/portfolio/portfolio-img4.jpg';
import portfolioImg5 from '../assets/images/portfolio/portfolio-img5.jpg';
import portfolioImg6 from '../assets/images/portfolio/portfolio-img6.jpg';
const portfolioList = [
    {
        img: portfolioImg1,
        title: "Aurora Villa"
    },
    {
        img: portfolioImg2,
        title: "Suncrest Residence"
    },
    {
        img: portfolioImg3,
        title: "Green Horizon House"
    },
    {
        img: portfolioImg4,
        title: "Solaris Cottage"
    },
    {
        img: portfolioImg5,
        title: "EcoSphere Residence"
    },
    {
        img: portfolioImg6,
        title: "Solar Haven Villa"
    },
]
function Portfolio() {
    return (
        <section className="container">
            <div className="portfolio-grid-container">
                {
                    portfolioList.map((item, index) => (
                        <Link to="/portfolio" className="portfolio-card position-relative overflow-hidden d-block" key={index}>
                            <img src={item.img} alt="portfolio-img1" className="w-100 h-100" />
                            <h2 className="mb-0 position-absolute w-100 text-center">{item.title}</h2>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}
export default Portfolio