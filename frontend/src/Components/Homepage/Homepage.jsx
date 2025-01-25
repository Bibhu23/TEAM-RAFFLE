import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Button } from 'react-bootstrap';
import download6 from "../../assets/download(6).jpg"
import download1 from "../../assets/download(1).jpg"
import download3 from "../../assets/download(3).jpg"
import download4 from "../../assets/download(4).jpg"
import blogcover from "../../assets/blog-cover.jpeg"
import './Homepage.css'
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
            <div className='slogan'>
                <p id='statement'>“The greatest threat to our planet is the belief that someone else will save it.”
                </p>
                <h3>– Robert Swan, Author

                </h3>

            </div>
            <div className='resolution'>
                <img src={blogcover} alt="" />
                <p>Welcome to iRecycle.world, where our unwavering dedication to preserving our planet propels us to reshape the very essence of recycling. Here at iRecycle.world, we transcend the conventional approach to waste management; instead, we embark on a transformative journey aimed at instigating a worldwide revolution towards sustainability.</p>
            </div>
        </div>

    );
}
export default Home
