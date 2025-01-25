import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Button } from 'react-bootstrap';
import download6 from "../../assets/download(6).jpg"
import download1 from "../../assets/download(1).jpg"
import download3 from "../../assets/download(3).jpg"
import download4 from "../../assets/download(4).jpg"
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
    const handlechange = () => {
        navigate('/Product')
    }
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={download6}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Recycling helps reduce the waste around significantly and lowers carbon emissions.
                        </p>
                        <Button onClick={handlechange} variant="primary">Learn More</Button>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={download1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Plastic bottles can take up to 1,000 years to decompose, but recycling reduces pollution.</p>
                        <Button onClick={handlechange} variant="primary">Learn More</Button>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={download3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Plastic bottles can take up to 1,000 years to decompose, but recycling reduces pollution. </p>
                        <Button onClick={handlechange} variant="primary">Learn More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={download4}
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>Recycling reduces the amount of waste, which usually takes years to decompose.</p>
                        <Button onClick={handlechange} variant="primary">Learn More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
export default Home