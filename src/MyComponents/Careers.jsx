import '../assets/css/careers.css';
import { Link } from "react-router-dom";
const carrers = [
    {
        title: "Solar Energy Specialist",
        desc: "Be part of our field crew and install advanced solar systems on modern residential rooftops.",
        location: "On-site"
    },
    {
        title: "Renewable Energy Engineer",
        desc: "Design optimized solar panel layouts while guaranteeing systems achieve top performance standards.",
        location: "Remote"
    },
    {
        title: "Sustainable Energy Sales Leader",
        desc: "Guide homeowners to embrace solar energy with smart, strategic sales approaches.",
        location: "On-site"
    },
    {
        title: "Ground Operations Manager",
        desc: "Lead installation crews and coordinate daily field operations to guarantee seamless execution.",
        location: "Remote"
    },
    {
        title: "Customer Care Expert",
        desc: "Guide customers through solar product queries, billing concerns, and seamless technical support.",
        location: "On-site"
    }
]
function Careers() {
    return (
        <section className="container">
            <div className="d-flex flex-column careers-container">
                {
                    carrers.map((item, index) => (
                        <div className="careers-box d-flex align-items-center justify-content-between" key={index}>
                            <div className="careers-box-left-content">
                                <h3 className="mb-0">{item.title}</h3>
                                <p className="mb-0 careers-box-para">{item.desc}</p>
                                <div className="careers-btn-container d-flex align-items-center">
                                    <p className="mb-0 careers-btn">{item.location}</p>
                                    <p className="mb-0 careers-btn">Full-time</p>
                                </div>
                            </div>
                            <div className="careers-box-right-content">
                                <Link to="/careers" className="get-a-quote-btn apply-now-btn">
                                    <span>Apply Now</span>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Careers