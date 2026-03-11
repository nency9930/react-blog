import '../assets/css/services2.css';
import { Link } from 'react-router-dom';
import whiteArrow from '../assets/images/services2/white-arrow.svg';
import services2Img1 from '../assets/images/services3/services2-img1.png';
import services2Img2 from '../assets/images/services3/services2-img2.png';
import services2Img3 from '../assets/images/services3/services2-img3.png';
import services2Img4 from '../assets/images/services3/services2-img4.png';
import services2Img5 from '../assets/images/services3/services2-img5.png';
import services2Img6 from '../assets/images/services3/services2-img6.png';
const services2 = [
    {
        img: services2Img1,
        title: "Residence Panels",
        desc: "At pharetra mollis eget ut aliquet a leo pellentesque pharetra sit Cras."
    },
    {
        img: services2Img2,
        title: "Solar Farms",
        desc: "Amet etiam nisi gravida feugiat sapien. In volutpat sagittis libero ilacinia."
    },
    {
        img: services2Img3,
        title: "Industrial Panels",
        desc: "Sem a feugiat sed enim ante. Placerat sollicitudin sed cursus sapien."
    },
    {
        img: services2Img4,
        title: "Solar Power System",
        desc: "Eleifend et amet integer ipsum in dignissim nulla hendrerit at senectus."
    },
    {
        img: services2Img5,
        title: "Solar Monitoring",
        desc: "Feugiat a ut nulla sapien ut orci odio commodo arcu nisl tristique."
    },
    {
        img: services2Img6,
        title: "Charging Station Panels",
        desc: "Cursus placerat donec gravida euismod viverra volutpat euismod cras."
    },
]
function Services2() {
    return (
        <section className="container">
            <div className="service-solutions-grid-container">
                {
                    services2.map((item, index) => (
                        <div className="service-solutions-grid-card position-relative" key={index}>
                            <Link to="/services2">
                                <img src={item.img} alt={item.title} className="services2-img" />
                            </Link>
                            <div className="service-solutions-grid-card-content d-flex flex-column position-absolute">
                                <h3 className="mb-0 ellipsis-text-h3">{item.title}</h3>
                                <p className="mb-0 ellipsis-text">{item.desc}</p>
                                <div className="green-circle-arrow position-absolute rounded-circle d-flex align-items-center justify-content-center">
                                    <img src={whiteArrow} alt="white-arrow" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Services2