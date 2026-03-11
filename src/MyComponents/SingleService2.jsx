import ServiceLayout from './ServiceLayout';
import singleServiceImg2 from '../assets/images/single-service/single-service-img2.jpg';
function SingleService2() {
    return (
        <ServiceLayout
            title1="Utility-Scale Solar Farm Solutions"
            img={singleServiceImg2}
            para1="Solar farms are large-scale renewable energy systems designed to generate
                clean, reliable, and cost-effective power for utilities, industries, and communities. By harnessing the
                power of the sun, solar farms help reduce carbon emissions while delivering consistent energy output
                across vast areas of land. These installations are engineered for maximum efficiency, long-term
                durability, and optimal performance in diverse environmental conditions."
            para2="Our solar farm solutions cover every stage of the
                project lifecycle, from site assessment and system design to installation and ongoing maintenance. Using
                advanced technology and high-quality components, we ensure high energy yields, operational reliability,
                and scalability for future expansion. Solar farms not only support sustainable energy goals but also
                provide a dependable foundation for meeting growing power demands."
            title2="Guiding You Toward the Right Solar Choice"
            para3="We guide you through every step of your solar journey, helping you select
                the right solution based on your energy needs, site conditions, and long-term goals. With expert
                insights and reliable support, we ensure you make informed decisions for efficient, sustainable, and
                cost-effective solar power."
            list={[
                "High-efficiency solar panels for maximum energy output.",
                "Optimized site planning and system design.",
                "Scalable solar farm layouts for future expansion.",
                "Reliable power generation with low operational costs.",
                "Environment-friendly and sustainable energy production.",
                "Advanced monitoring for consistent performance.",
                "Grid-connected systems for stable power supply.",
                "Utility-scale solar power generation solutions."
            ]}
        />
    )
}
export default SingleService2