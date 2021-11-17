import React from 'react';
import './Slider.css';
import { Carousel } from 'react-bootstrap';


const Slider = () => {
    return (
        <div className="header">
            <Carousel>
                <Carousel.Item className="slide-h">
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/9NQs0cP/tourists-having-fun-coast.jpg"
                        alt="First slide"
                        height="700px"
                    />
                    
                </Carousel.Item>
                <Carousel.Item className="slide-h">
                    <img
                        className="d-block w-100 "
                        src="https://i.ibb.co/dptpP4c/young-traveler.jpg"
                        alt="Second slide"
                        height="700px"
                    />

                    
                </Carousel.Item>
                <Carousel.Item className="slide-h">
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/gJ7sJ8n/men-stand-watch-mountains-tropical-forests-with-backpacks-forest-adventure-traveling-climbing.jpg"
                        alt="Third slide"
                        height="700px"
                    />

                   
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;