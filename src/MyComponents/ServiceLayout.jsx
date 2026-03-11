import '../assets/css/service-layout.css';
import { Link } from 'react-router-dom';
import trueIcon from '../assets/images/single-service/true-icon.svg';
import serviceArrow from '../assets/images/single-service/service-solutions-arrow.svg';
import callImg from '../assets/images/single-service/call.svg';
function ServiceLayout({ title1, img, para1, para2, title2, para3, list }) {
    return (
        <section className="container">
            <div className="residence-panels-container d-flex align-items-start">
                <div className="residence-panels-left-container">
                    <h2 className="mb-0">{title1}</h2>
                    <img src={img} alt={title1} className="residence-panels-img1 w-100" />
                    <p className="mb-0 residence-panels-para">{para1}</p>
                    <p className="mb-0 residence-panels-para residence-panels-para1">{para2}</p>
                    <h3 className="mb-0">{title2}</h3>
                    <p className="mb-0 residence-panels-para">{para3}</p>
                    <ul className="ps-0 mb-0 residence-panels-list d-flex flex-column">
                        {
                            list?.map((item, index) => (
                                <li className="d-flex align-items-center" key={index}>
                                    <div className="single-service-green-circle d-flex align-items-center justify-content-center">
                                        <img src={trueIcon} alt="true-icon" />
                                    </div>
                                    <p className="mb-0">{item}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="residence-panels-right-container">
                    <div className="our-all-service-container">
                        <div className="our-all-service-heading">
                            <h2 className="mb-0 text-center">Our All Service</h2>
                        </div>
                        <ul className="mb-0 dashboard-menu d-flex flex-column">
                            <li className="active">
                                <Link to="/service-layout" className="active d-flex align-items-center justify-content-between">
                                    <p className="mb-0">Residence Panels</p>
                                    <img src={serviceArrow} alt="service-solutions-arrow" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/service-layout" className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0">Solar Farms</p>
                                    <img src={serviceArrow} alt="service-solutions-arrow" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/service-layout" className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0">Industrial Panels</p>
                                    <img src={serviceArrow} alt="service-solutions-arrow" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/service-layout" className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0">Solar Power System</p>
                                    <img src={serviceArrow} alt="service-solutions-arrow" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/service-layout" className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0">Solar Monitoring</p>
                                    <img src={serviceArrow} alt="service-solutions-arrow" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/service-layout" className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0">Charging Station Panels</p>
                                    <img src={serviceArrow} alt="service-solutions-arrow" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="call-container position-relative">
                        <div className="call-wrapper position-relative d-flex flex-column align-items-center">
                            <div className="single-blog-white-circle d-flex align-items-center justify-content-center">
                                <img src={callImg} alt="call" />
                            </div>
                            <div className="call-paras">
                                <p className="mb-0 text-center">Have any Project in Mind?</p>
                                <p className="mb-0 text-center">Call us Today!</p>
                            </div>
                            <Link to="tel:+15687722666">+1 (568) 7722 666</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ServiceLayout