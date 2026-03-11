import ServiceLayout from './ServiceLayout';
import singleServiceImg1 from '../assets/images/single-service/single-service-img1.jpg';
function SingleService1() {
    return (
        <ServiceLayout
            title1="Residential Solar Panel Solutions"
            img={singleServiceImg1}
            para1="Residential solar panels offer an efficient and sustainable way to power
                your home using clean energy
                from the sun. Designed to blend seamlessly with modern rooftops, these panels help homeowners reduce
                electricity bills while minimizing their carbon footprint. With rising energy costs, residential solar
                has become a smart long-term investment for energy independence."
            para2="By choosing residential solar panels, you take a
                step toward a cleaner and more sustainable future.
                Excess energy can be stored or fed back into the grid, providing additional savings and reliability
                during power outages. Our expert team supports you from consultation to installation, making the
                transition to solar simple, smooth, and stress-free."
            title2="We’re Here to Help You Make the Right Choice"
            para3="Our goal is to provide clear information, reliable guidance, and complete
                support at every step. If you
                need any assistance or have questions, our team is always ready to help you move forward with
                confidence."
            list={[
                "High-efficiency solar panels designed for residential rooftops.",
                "Long-lasting solar panels backed by performance warranties for peace of mind.",
                "Durable panels built to withstand harsh weather conditions.",
                "Grid-connected and battery-compatible options for continuous power availability.",
                "Quiet operation with no noise or disruption to daily home activities.",
                "Low-maintenance systems with reliable performance.",
                "Custom-designed solar panel layouts based on roof size and daily household energy.",
                "Improved property value by installing a modern and energy-efficient solar system."
            ]}
        />
    )
}
export default SingleService1