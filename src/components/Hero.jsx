import Carousel from 'react-bootstrap/Carousel';
import styles from './Hero.css'
import slide1 from '../assets/slide-1.png';
import slide2 from '../assets/slide-2.png';
import slide3 from '../assets/slide-3.jpg';

export default function Hero() {
    return (
        <div className="hero" style={styles}>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <div className="slider-image">
                        <img alt="slider 1" src={slide1} width="100%" height="100%"/>

                    </div>
                    <Carousel.Caption>
                        <h4 style={{ color: 'white' }}>The Future of Your Business Starts Now: Explore Our Services</h4>
                        <h5 style={{ color: 'white' }}>Boost Productivity, Enhance Security, and Transform Your Business. Elevate Your Tech Game—Explore Our Services
                            Today.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slider-image">
                        <img alt="slider 2" src={slide2} width="100%" height="100%" />

                    </div>
                    <Carousel.Caption>
                        <h4>Grow Your Online Presence</h4>
                        <h5>Reach audiences via online channels—social media, search engines, and more. Cost-effective, measurable, and tailored to your brand.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slider-image">
                        <img alt="slider 3" src={slide3} width="100%" height="100%"/>

                    </div>

                    <Carousel.Caption>
                        <h4>Turn Data into Your Competitive Advantage</h4>
                        <h5>
                            Decode complexity, optimize processes, and drive informed decisions. Transform data into strategy
                        </h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}