import '../assets/css/testimonials.css';
import '../assets/css/media-query.css';
import { useState } from "react";
import quote from '../assets/images/testimonial/testimonial-quote.svg';
import stars from '../assets/images/testimonial/testimonial-star.svg';
import person1 from '../assets/images/testimonial/testimonial-person1.png';
import person2 from '../assets/images/testimonial/testimonial-person2.png';
import person3 from '../assets/images/testimonial/testimonial-person3.png';
import person4 from '../assets/images/testimonial/testimonial-person4.png';
import person5 from '../assets/images/testimonial/testimonial-person5.png';
import person6 from '../assets/images/testimonial/testimonial-person6.png';
import person7 from '../assets/images/testimonial/testimonial-person7.png';
import person8 from '../assets/images/testimonial/testimonial-person8.png';
import person9 from '../assets/images/testimonial/testimonial-person9.png';
const testimonials = [
    {
        quoteImg: quote,
        starImg: stars,
        text: '"I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!"',
        img: person1,
        name: 'Ariana Green',
        date: '8 May 2025'
    },
    {
        quoteImg: quote,
        starImg: stars,
        text: '"Fantastic service and reliable support every time. They really take the time to understand our needs and offer effective solutions."',
        img: person2,
        name: 'Ethan Moore',
        date: '1 May 2025'
    },
    {
        quoteImg: quote,
        starImg: stars,
        text: '"Professional, efficient, and extremely helpful. They consistently deliver beyond our expectations with every request."',
        img: person3,
        name: 'Amanda Lee',
        date: '28 April 2025'
    },
    {
        quoteImg: quote,
        starImg: stars,
        text: "We've relied on their expertise for over a year and they never disappoint. Their team is fast, efficient, and friendly.",
        img: person4,
        name: 'Michael Chen',
        date: '23 April 2025'
    },
    {
        quoteImg: quote,
        starImg: stars,
        text: '"Super friendly team and quick to respond to any issue. They’ve saved us time and stress more times than I can count."',
        img: person5,
        name: 'Lisa Nguyen',
        date: '19 April 2025'
    },
    {
        quoteImg: quote,
        starImg: stars,
        text: '"Dependable and consistent. We always get a clear explanation of the problem and a fast resolution without hidden costs."',
        img: person6,
        name: 'David Rodriguez',
        date: '15 April 2025'
    },
    {
        quoteImg: quote,
        starImg: stars,
        text: '"They always go the extra mile. It’s rare to find a company that consistently delivers top-tier customer service like this."',
        img: person7,
        name: 'Sarah Thompson',
        date: '12 April 2025'
    },
    {
        quoteImg: quote,
        starImg: stars,
        text: "Incredible support and very responsive team. We've never had an issue that wasn't solved quickly and professionally.",
        img: person8,
        name: 'Ryan Kim',
        date: '9 April 2025'
    },
    {
        quoteImg: quote,
        starImg: stars,
        text: '"From day one, we’ve been impressed with their reliability. Great communication and hassle-free maintenance every time."',
        img: person9,
        name: 'Emily Davis',
        date: '6 April 2025'
    },
    {
        quoteImg: quote,
        starImg: stars,
        text: '"I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!"',
        img: person1,
        name: 'Ariana Green',
        date: '8 May 2025'
    },
    {
        quoteImg: quote,
        starImg: stars,
        text: '"Fantastic service and reliable support every time. They really take the time to understand our needs and offer effective solutions."',
        img: person2,
        name: 'Ethan Moore',
        date: '1 May 2025'
    },
    {
        quoteImg: quote,
        starImg: stars,
        text: '"Professional, efficient, and extremely helpful. They consistently deliver beyond our expectations with every request."',
        img: person3,
        name: 'Amanda Lee',
        date: '28 April 2025'
    },
]
function Testimonials() {
    const [visible, setVisible] = useState(9);
    const loadMore = () => {
        setVisible(visible + 9);
    };
    return (
        <section className="container">
            <div className="testimonial-grid">
                {
                    testimonials.slice(0, visible).map((item, index) => (
                        <div className="testimonial-card d-flex flex-column justify-content-between" key={index}>
                            <div className="testimonial-card-top-container">
                                <img src={item.quoteImg} alt="quote-img" />
                                <div className="testimonial-stars-container">
                                    <img src={item.starImg} alt="stars-img" />
                                    <img src={item.starImg} alt="stars-img" />
                                    <img src={item.starImg} alt="stars-img" />
                                    <img src={item.starImg} alt="stars-img" />
                                    <img src={item.starImg} alt="stars-img" />
                                </div>
                                <p className="mb-0 testimonial-para">{item.text}</p>
                            </div>
                            <div className="testimonial-card-bottom-container d-flex align-items-center">
                                <img src={item.img} alt={item.name} className="testimonial-img" />
                                <div className="testimonial-person-details d-flex flex-column">
                                    <p className="mb-0 testimonial-person-name">{item.name}</p>
                                    <p className="mb-0 testimonial-person-date">{item.date}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                visible < testimonials.length && (
                    <button onClick={loadMore} className="get-a-quote-btn load-more-btn mx-auto">
                        <span>Load More</span>
                    </button>
                )
            }
        </section>
    )
}
export default Testimonials