import '../assets/css/why-choose-us.css';
import whyChooseUsImg from '../assets/images/why-choose-us/why-choose-us-img.png';
import whyChooseUsIcon1 from '../assets/images/why-choose-us/why-choose-us-icon1.svg';
import whyChooseUsIcon2 from '../assets/images/why-choose-us/why-choose-us-icon2.svg';
import whyChooseUsIcon3 from '../assets/images/why-choose-us/why-choose-us-icon3.svg';
const whyChooseUsList = [
    {
        img: whyChooseUsIcon1,
        title: "25 Years Coverage Assured",
        desc: "Lorem ipsum dolor sit amet consectetur. Sollicitudin a a vitae pretium. Nisl egestas mi aenean augue aliquet lectus duis velit eros.."
    },
    {
        img: whyChooseUsIcon2,
        title: "Comes with Battery Backup",
        desc: "Nunc tincidunt tincidunt dignissim nam risus vitae convallis nulla tristique lacus auctor. Lorem ipsum dolor sit amet consectetur. "
    },
    {
        img: whyChooseUsIcon3,
        title: "Complimentary Care",
        desc: "Risus ullamcorper commodo lorem ipsum dolor sit amet consectetur. Aliquam mauris adipiscing lacus ipsum tortor laoreet."
    },
]
function WhyChooseUs() {
    return (
        <section className="container">
            <div className="why-choose-us-container d-flex align-items-start">
                <div className="why-choose-us-left-container">
                    <img src={whyChooseUsImg} alt="why-choose-us-img" />
                </div>
                <div className="why-choose-us-right-container">
                    {
                        whyChooseUsList.map((item, index) => (
                            <div key={index}>
                                <div className="why-choose-us-content-container d-flex flex-column">
                                    <div className="why-choose-us-icon-container d-flex align-items-center">
                                        <img src={item.img} alt={item.title} />
                                        <h3 className="mb-0">{item.title}</h3>
                                    </div>
                                    <p className="mb-0">{item.desc}</p>
                                </div>
                                {index !== whyChooseUsList.length - 1 && (
                                    <div className="why-choose-us-hr-line w-100"></div>
                                )}
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default WhyChooseUs