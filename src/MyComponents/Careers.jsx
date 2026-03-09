import '../assets/css/careers.css';
// import Link from "react-router";
import { Link } from "react-router-dom";
const carrers = [
    {
        name: "Solar Energy Specialist",
        text: "Be part of our field crew and install advanced solar systems on modern residential rooftops."
    },
    {
        name: "Renewable Energy Engineer",
        text: "Design optimized solar panel layouts while guaranteeing systems achieve top performance standards."
    },
    {
        name: "Sustainable Energy Sales Leader",
        text: "Guide homeowners to embrace solar energy with smart, strategic sales approaches."
    },
    {
        name: "Ground Operations Manager",
        text: "Lead installation crews and coordinate daily field operations to guarantee seamless execution."
    },
    {
        name: "Customer Care Expert",
        text: "Guide customers through solar product queries, billing concerns, and seamless technical support."
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
                                <h3 className="mb-0">{item.name}</h3>
                                <p className="mb-0">{item.text}</p>
                            </div>
                            <div className="careers-box-right-content">
                                {/* <Link to="/" className="get-a-quote-btn apply-now-btn">Apply Now</Link> */}
                                <Link to="/careers">Careers</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Careers