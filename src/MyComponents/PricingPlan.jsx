import '../assets/css/pricing-plan.css';
import { Link } from "react-router-dom";
const pricingPlan = [
    {
        plan: "basic",
        price: "299"
    },
    {
        plan: "gold",
        price: "599"
    },
    {
        plan: "silver",
        price: "899"
    }
]
const pricingList = [
    "Deep cleaning for entire home",
    "Window and glass cleaning",
    "Floor polishing and scrubbing",
    "Appliance exterior cleaning",
    "Sanitization of high-touch areas",
    "Trash removal and deodorizing",
    "10% Off On All Services",
    "Priority Scheduling"
]
function PricingPlan() {
    return (
        <section className="container">
            <div className="pricing-plan-grid-container">
                {
                    pricingPlan.map((item, index) => (
                        <div className={`pricing-plan-grid-card ${index === 1 ? "center-card" : ""}`} key={index}>
                            <h3 className="mb-0 text-center text-uppercase">{item.plan} plan</h3>
                            <div className="price-box d-flex align-items-end justify-content-center">
                                <p className="mb-0">${item.price}</p>
                                <span>/month</span>
                            </div>
                            <ul className="ps-0 mb-0 price-list">
                                {
                                    pricingList.map((item, index) => (
                                        <li className="position-relative" key={index}>{item}</li>
                                    ))
                                }
                            </ul>
                            <Link to="/pricing-plan" className="get-a-quote-btn get-started-btn w-100">
                                <span>Get Started</span>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default PricingPlan