import '../assets/css/our-team.css';
import { Link } from 'react-router-dom';
import ourExpertCardImg from '../assets/images/our-team/our-expert-card-img.png';
import ourExpertShareIcon from '../assets/images/our-team/our-expert-share-icon.svg';
import facebook from '../assets/images/our-team/facebook-icon.svg';
import x from '../assets/images/our-team/x-icon.svg';
import instagram from '../assets/images/our-team/instagram-icon.svg';
import linkedIn from '../assets/images/our-team/linkedin-icon.svg';
import ourTeamImg1 from '../assets/images/our-team/our-expert-img1.png';
import ourTeamImg2 from '../assets/images/our-team/our-expert-img2.png';
import ourTeamImg3 from '../assets/images/our-team/our-expert-img3.png';
import ourTeamImg4 from '../assets/images/our-team/our-expert-img4.png';
import ourTeamImg5 from '../assets/images/our-team/our-expert-img5.png';
import ourTeamImg6 from '../assets/images/our-team/our-expert-img6.png';
import ourTeamImg7 from '../assets/images/our-team/our-expert-img7.png';
import ourTeamImg8 from '../assets/images/our-team/our-expert-img8.png';
import ourTeamImg9 from '../assets/images/our-team/our-expert-img9.png';
import ourTeamImg10 from '../assets/images/our-team/our-expert-img10.png';
import ourTeamImg11 from '../assets/images/our-team/our-expert-img11.png';
import ourTeamImg12 from '../assets/images/our-team/our-expert-img12.png';
const ourTeam = [
    {
        img: ourTeamImg1,
        title: "Richard Powel",
        desc: "Co-Ordinator"
    },
    {
        img: ourTeamImg2,
        title: "Ashley Riordan",
        desc: "Service Manager"
    },
    {
        img: ourTeamImg3,
        title: "Robina Smith",
        desc: "Service Cleaner"
    },
    {
        img: ourTeamImg4,
        title: "Robert Michel",
        desc: "Solar Cleaner"
    },
    {
        img: ourTeamImg5,
        title: "Abrham Luiz",
        desc: "Co-Ordinator"
    },
    {
        img: ourTeamImg6,
        title: "Lisa Morales",
        desc: "Service Manager"
    },
    {
        img: ourTeamImg7,
        title: "Jusuf Hamka",
        desc: "Service Cleaner"
    },
    {
        img: ourTeamImg8,
        title: "Iriana Mendez",
        desc: "Solar Cleaner"
    },
    {
        img: ourTeamImg9,
        title: "Douwe Carl",
        desc: "Co-Ordinator"
    },
    {
        img: ourTeamImg10,
        title: "Joseph Morison",
        desc: "Service Manager"
    },
    {
        img: ourTeamImg11,
        title: "Olivia Carrington",
        desc: "Service Cleaner"
    },
    {
        img: ourTeamImg12,
        title: "Jack Conroy",
        desc: "Solar Cleaner"
    }
]
function OurTeam() {
    return (
        <section className="container">
            <div className="our-expert-grid-container">
                {
                    ourTeam.map((item, index) => (
                        <div className="our-expert-grid-card" key={index}>
                            <Link to="/our-team">
                                <img src={item.img} alt={item.title} className="our-expert-img" />
                            </Link>
                            <div className="our-expert-grid-content position-relative d-flex flex-column">
                                <h3 className="mb-0">{item.title}</h3>
                                <p className="mb-0">{item.desc}</p>
                                <Link to="/our-team" className="our-expert-share-icon-container position-absolute">
                                    <img src={ourExpertCardImg} alt="our-expert-card-img" />
                                    <img src={ourExpertShareIcon} alt="our-expert-share-icon" className="our-expert-share-icon position-absolute" />
                                </Link>
                                <div className="our-expert-social-icons position-absolute d-flex flex-column">
                                    <Link to="https://www.facebook.com/" target="_blank" className="d-flex align-items-center justify-content-center">
                                        <img src={facebook} alt="facebook-icon" width="20" height="20" />
                                    </Link>
                                    <Link to="https://twitter.com/" target="_blank" className="d-flex align-items-center justify-content-center">
                                        <img src={x} alt="x-icon" width="20" height="20" />
                                    </Link>
                                    <Link to="https://www.instagram.com/" target="_blank" className="d-flex align-items-center justify-content-center">
                                        <img src={instagram} alt="instagram-icon" width="20" height="20" />
                                    </Link>
                                    <Link to="https://www.linkedin.com/" target="_blank" className="d-flex align-items-center justify-content-center">
                                        <img src={linkedIn} alt="linkedin-icon" width="20" height="20" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default OurTeam