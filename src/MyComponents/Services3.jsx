import '../assets/css/services3.css';
import { Link } from 'react-router-dom';
import servicesArrow from '../assets/images/services3/service-solutions-arrow.svg';
import services2Img1 from '../assets/images/services3/services2-img1.png';
import services2Img2 from '../assets/images/services3/services2-img2.png';
import services2Img3 from '../assets/images/services3/services2-img3.png';
import services2Img4 from '../assets/images/services3/services2-img4.png';
import services2Img5 from '../assets/images/services3/services2-img5.png';
import services2Img6 from '../assets/images/services3/services2-img6.png';
import services3Logo1 from '../assets/images/services3/services3-logo1.svg';
import services3Logo2 from '../assets/images/services3/services3-logo2.svg';
import services3Logo3 from '../assets/images/services3/services3-logo3.svg';
import services3Logo4 from '../assets/images/services3/services3-logo4.svg';
import services3Logo5 from '../assets/images/services3/services3-logo5.svg';
import services3Logo6 from '../assets/images/services3/services3-logo6.svg';
const services3 = [
    {
        img: services2Img1,
        logo: services3Logo1,
        title: "Residence Panels",
        desc: "At pharetra mollis eget ut aliquet a leo pellentesque pharetra sit Cras."
    },
    {
        img: services2Img2,
        logo: services3Logo2,
        title: "Solar Farms",
        desc: "Amet etiam nisi gravida feugiat sapien. In volutpat sagittis libero ilacinia."
    },
    {
        img: services2Img3,
        logo: services3Logo3,
        title: "Industrial Panels",
        desc: "Sem a feugiat sed enim ante. Placerat sollicitudin sed cursus sapien."
    },
    {
        img: services2Img4,
        logo: services3Logo4,
        title: "Solar Power System",
        desc: "Eleifend et amet integer ipsum in dignissim nulla hendrerit at senectus."
    },
    {
        img: services2Img5,
        logo: services3Logo5,
        title: "Solar Monitoring",
        desc: "Feugiat a ut nulla sapien ut orci odio commodo arcu nisl tristique."
    },
    {
        img: services2Img6,
        logo: services3Logo6,
        title: "Charging Station Panels",
        desc: "Cursus placerat donec gravida euismod viverra volutpat euismod cras."
    },
]
function Services3() {
    return (
        <section className="container">
            <div className="service-solutions3-grid-container">
                {
                    services3.map((item, index) => (
                        <div className="service-solutions3-grid-card" key={index}>
                            <div className="services3-image-container position-relative">
                                <img src={item.img} alt={item.title} className="w-100" />
                                <div className="services3-logo-container position-absolute rounded-circle d-flex align-items-center justify-content-center">
                                    <img src={item.logo} alt={item.title} />
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-between">
                                <div className="service-solutions3-grid-card-content d-flex flex-column align-items-center">
                                    <h3 className="mb-0 text-center">{item.title}</h3>
                                    <p className="mb-0 text-center">{item.desc}</p>
                                </div>
                                <Link to="/services3" className="learn-more-btn d-flex align-items-center justify-content-center">
                                    Learn More
                                    <img src={servicesArrow} alt="service-solutions-arrow" />
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section >
    )
}
export default Services3