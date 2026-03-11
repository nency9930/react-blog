import ServiceLayout from './ServiceLayout';
import singleServiceImg4 from '../assets/images/single-service/single-service-img4.jpg';
function SingleService4() {
    return (
        <ServiceLayout
            title1="Smart and Scalable Solar Power Systems"
            img={singleServiceImg4}
            para1="Our solar power systems are designed to provide clean, reliable, and
                cost-effective energy for homes, businesses, and industries. By harnessing the power of the sun, these
                systems help reduce electricity costs while minimizing environmental impact. Each system is engineered
                for maximum efficiency, durability, and performance, ensuring consistent energy output throughout the
                year."
            para2="We offer end-to-end solar power solutions, including
                system design, installation, and maintenance support. With smart monitoring, high-quality components,
                and scalable options, our solar power systems can be customized to meet your specific energy
                requirements. Whether you are looking to power a single building or an entire facility, our solutions
                deliver long-term reliability and sustainable energy independence."
            title2="We’re Here to Make Solar Simple for You"
            para3="We make adopting solar energy easy and stress-free. From selecting the
                right system to professional installation and ongoing support, our team guides you every step of the
                way. With reliable, efficient solutions, we ensure you can enjoy clean, sustainable energy with
                confidence and peace of mind."
            list={[
                "Reliable inverters for consistent power conversion.",
                "Smart energy monitoring and control systems.",
                "Grid-tied and off-grid system options.",
                "Long-term durability and low maintenance requirements.",
                "Cost-effective solutions to reduce electricity bills.",
                "Compliance with industry and safety standards.",
                "Ongoing technical support and maintenance services.",
                "Innovative solutions to meet evolving energy demands."
            ]}
        />
    )
}
export default SingleService4