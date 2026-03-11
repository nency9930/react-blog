import '../assets/css/our-clients.css';
import ourClientsImg1 from '../assets/images/our-clients/our-clients-img1.jpg';
import ourClientsImg2 from '../assets/images/our-clients/our-clients-img2.jpg';
import ourClientsImg3 from '../assets/images/our-clients/our-clients-img3.jpg';
import ourClientsImg4 from '../assets/images/our-clients/our-clients-img4.jpg';
import ourClientsImg5 from '../assets/images/our-clients/our-clients-img5.jpg';
import ourClientsImg6 from '../assets/images/our-clients/our-clients-img6.jpg';
import ourClientsImg7 from '../assets/images/our-clients/our-clients-img7.jpg';
import ourClientsImg8 from '../assets/images/our-clients/our-clients-img8.jpg';
import ourClientsImg9 from '../assets/images/our-clients/our-clients-img9.jpg';
import ourClientsImg10 from '../assets/images/our-clients/our-clients-img10.jpg';
import ourClientsImg11 from '../assets/images/our-clients/our-clients-img11.jpg';
import ourClientsImg12 from '../assets/images/our-clients/our-clients-img12.jpg';
import ourClientsImg13 from '../assets/images/our-clients/our-clients-img13.jpg';
import ourClientsImg14 from '../assets/images/our-clients/our-clients-img14.jpg';
import ourClientsImg15 from '../assets/images/our-clients/our-clients-img15.jpg';
import ourClientsImg16 from '../assets/images/our-clients/our-clients-img16.jpg';
import ourClientsImg17 from '../assets/images/our-clients/our-clients-img17.jpg';
import ourClientsImg18 from '../assets/images/our-clients/our-clients-img18.jpg';
const ourClients = [
    ourClientsImg1, ourClientsImg2, ourClientsImg3, ourClientsImg4, ourClientsImg5, ourClientsImg6,
    ourClientsImg7, ourClientsImg8, ourClientsImg9, ourClientsImg10, ourClientsImg11, ourClientsImg12,
    ourClientsImg13, ourClientsImg14, ourClientsImg15, ourClientsImg16, ourClientsImg17, ourClientsImg18
]
function OurClients() {
    return (
        <section className="container">
            <div className="our-clients-container">
                {
                    ourClients.map((img, index) => (
                        <div key={index}>
                            <img src={img} alt="our-clients-img" />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default OurClients