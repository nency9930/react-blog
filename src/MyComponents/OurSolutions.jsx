import '../assets/css/our-solutions.css';
import ourSolutionsImg from '../assets/images/our-solutions/our-solutions-img.png';
function OurSolutions() {
    return (
        <section className="container">
            <div className="our-solutions-container">
                <div className="our-solutions-left-container">
                    <img src={ourSolutionsImg} alt="our-solutions-img" />
                </div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Which documents are required for solar setup?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Donec massa sapien faucibus et molestie ac. Sed blandit libero volutpat sed cras ornare arcu.
                                Vulputate mi sit amet mauris. Integer enim neque volutpat ac tincidunt. Augue neque gravida in
                                fermentum et sollicitudin.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                What’s the best way to assess solar repair costs?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Donec massa sapien faucibus et molestie ac. Sed blandit libero volutpat sed cras ornare arcu.
                                Vulputate mi sit amet mauris. Integer enim neque volutpat ac tincidunt. Augue neque gravida in
                                fermentum et sollicitudin.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How much does panel installation cost per square foot?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Donec massa sapien faucibus et molestie ac. Sed blandit libero volutpat sed cras ornare arcu.
                                Vulputate mi sit amet mauris. Integer enim neque volutpat ac tincidunt. Augue neque gravida in
                                fermentum et sollicitudin.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                When is the right time to inspect battery connections?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Donec massa sapien faucibus et molestie ac. Sed blandit libero volutpat sed cras ornare arcu.
                                Vulputate mi sit amet mauris. Integer enim neque volutpat ac tincidunt. Augue neque gravida in
                                fermentum et sollicitudin.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                How long can solar panels provide backup power?
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Donec massa sapien faucibus et molestie ac. Sed blandit libero volutpat sed cras ornare arcu.
                                Vulputate mi sit amet mauris. Integer enim neque volutpat ac tincidunt. Augue neque gravida in
                                fermentum et sollicitudin.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default OurSolutions