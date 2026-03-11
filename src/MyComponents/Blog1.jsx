import '../assets/css/blog1.css';
import { Link } from 'react-router-dom';
import blackArrow from '../assets/images/blog1/black-arrow.svg';
import blogImg1 from '../assets/images/blog1/latest-news-img1.png';
import blogImg2 from '../assets/images/blog1/latest-news-img2.png';
import blogImg3 from '../assets/images/blog1/latest-news-img3.png';
import blogImg4 from '../assets/images/blog1/latest-news-img4.png';
import blogImg5 from '../assets/images/blog1/latest-news-img5.png';
import blogImg6 from '../assets/images/blog1/latest-news-img6.png';
import blogImg7 from '../assets/images/blog1/latest-news-img7.png';
import blogImg8 from '../assets/images/blog1/latest-news-img8.png';
import blogImg9 from '../assets/images/blog1/latest-news-img9.png';
const blog1 = [
    {
        img: blogImg1,
        blogDate: "20 FEB 2025",
        title: "How many solar panels do you need?"
    },
    {
        img: blogImg4,
        blogDate: "05 FEB 2025",
        title: "Smart Ways to Select the Best Solar Panels for Your Home."
    },
    {
        img: blogImg7,
        blogDate: "20 JAN 2025",
        title: "Things to know before installing solar panels."
    },
    {
        img: blogImg2,
        blogDate: "15 FEB 2025",
        title: "Which country has highest market for solar power?"
    },
    {
        img: blogImg5,
        blogDate: "01 FEB 2025",
        title: "How does using solar energy influence the environment?"
    },
    {
        img: blogImg8,
        blogDate: "15 JAN 2025",
        title: "Key challenges in building modern solar designs."
    },
    {
        img: blogImg3,
        blogDate: "10 FEB 2025",
        title: "How to calculate the solar energy savings?"
    },
    {
        img: blogImg6,
        blogDate: "25 JAN 2025",
        title: "10 Expert Tips for Industrial Solar Panel Maintenance & Repair."
    },
    {
        img: blogImg9,
        blogDate: "10 JAN 2025",
        title: "Solar design journey from concept to deployment."
    },
]
function Blog1() {
    return (
        <section className="container">
            <div className="masonry-grid">
                {
                    blog1.map((item, index) => (
                        <div className="latest-news-grid-card position-relative overflow-hidden w-100" key={index}>
                            <Link to="/blog1" className="latest-news-grid-card-animate position-relative overflow-hidden d-block">
                                <img src={item.img} alt="latest-news-img1" className="w-100 d-block" />
                            </Link>
                            <div className="latest-news-card-content d-flex align-items-center">
                                <div className="latest-news-hr-line"></div>
                                <div className="latest-news-date d-flex align-items-center">
                                    <p className="mb-0">SOLAR</p>
                                    <div className="latest-news-vertical-line"></div>
                                    <span>{item.blogDate}</span>
                                </div>
                            </div>
                            <Link to="/blog1" className="blog1-ellipsis-text latest-news-grid-card-h3">{item.title}</Link>
                        </div>
                    ))
                }
            </div>
            <div className="blog-pagination d-flex align-items-center justify-content-center">
                <Link to="/blog1" className="blog-pagination-active d-flex align-items-center justify-content-center">1</Link>
                <Link to="/blog1" className="d-flex align-items-center justify-content-center">2</Link>
                <Link to="/blog1" className="d-flex align-items-center justify-content-center">3</Link>
                <Link to="/blog1" className="blog-pagination-arrows d-flex align-items-center justify-content-center">
                    <img src={blackArrow} alt="black-arrow" />
                </Link>
            </div>
        </section>
    )
}
export default Blog1