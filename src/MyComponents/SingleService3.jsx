import ServiceLayout from './ServiceLayout';
import singleServiceImg3 from '../assets/images/single-service/single-service-img3.jpg';
function SingleService3() {
    return (
        <ServiceLayout
            title1="Reliable Industrial Control Panels"
            img={singleServiceImg3}
            para1="Industrial panels are designed to provide reliable, efficient, and safe
                power management for a wide range of industrial applications. They ensure smooth distribution of
                electricity, protect equipment from overloads, and support the stable operation of complex electrical
                systems. Built with durable components and advanced safety features, industrial panels are engineered to
                perform consistently in demanding environments, helping businesses maintain uninterrupted operations and
                optimize energy usage."
            para2="Our industrial panels deliver reliable power
                distribution and protection for demanding environments. Built for efficiency and durability, they ensure
                safe, uninterrupted operations for all types of industrial systems."
            title2="Making Solar Simple and Reliable for You"
            para3="We simplify the process of going solar, providing reliable solutions
                tailored to your energy needs. From system selection to installation and ongoing support, our team
                ensures a smooth, efficient, and hassle-free experience, helping you harness clean energy with
                confidence."
            list={[
                "Reliable power distribution for industrial systems.",
                "High-efficiency electrical control panels.",
                "Durable construction for demanding environments.",
                "Advanced safety and protection features.",
                "Smart control systems for automated operations.",
                "Expert support from installation to ongoing service.",
                "Minimization of downtime and operational risks.",
                "Support for heavy-duty and high-load operations."
            ]}
        />
    )
}
export default SingleService3