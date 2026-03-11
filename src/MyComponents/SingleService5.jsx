import ServiceLayout from './ServiceLayout';
import singleServiceImg5 from '../assets/images/single-service/single-service-img5.jpg';
function SingleService5() {
    return (
        <ServiceLayout
            title1="Real-Time Solar Monitoring for Maximum Efficiency"
            img={singleServiceImg5}
            para1="Solar monitoring systems allow you to track the performance of your solar
                power setup in real time. By providing detailed insights into energy production, system efficiency, and
                potential issues, monitoring ensures your solar panels operate at their maximum potential. With accurate
                data and alerts, you can quickly identify and address any performance drops, protecting your investment
                and optimizing energy output."
            para2="Our advanced solar monitoring solutions offer
                user-friendly interfaces, remote access, and smart analytics for homes, businesses, and industrial
                installations. Whether you want to track daily energy generation, compare system performance, or monitor
                long-term trends, these systems provide comprehensive information at your fingertips. With reliable
                monitoring, you can make informed decisions, improve efficiency, and ensure consistent, sustainable
                solar energy production."
            title2="Track Your Solar System Anytime, Anywhere"
            para3="With our solar monitoring solutions, you can keep an eye on your system’s
                performance wherever you are. Access real-time data, receive alerts, and track energy production easily,
                ensuring your solar system operates efficiently and reliably at all times."
            list={[
                "Real-time tracking of solar energy production.",
                "Alerts for system issues or performance drops.",
                "Remote access via mobile or desktop devices.",
                "Scalable solutions for residential, commercial, and industrial setups.",
                "Energy-saving insights and cost analysis.",
                "Integration with smart home or industrial systems.",
                "Comparison of daily, weekly, and monthly performance.",
                "Support for multiple solar system configurations."
            ]}
        />
    )
}
export default SingleService5