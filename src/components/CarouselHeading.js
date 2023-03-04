import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselHeading.css';

const CarouselHeading = () => {
	return (
		<Carousel className='d-flex justify-content-center'>
			<Carousel.Item as='div'>
				<img
					className='w-90 my-3 rounded-3'
					src=' /images/airpods.jpg'
					alt='First slide'
					style={{ boxShadow: '-7px 5px 15px -1px rgba(0,0,0,0.5)' }}
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className=' w-90 my-3 rounded-3'
					src='/images/alexa.jpg'
					alt='Second slide'
					style={{ boxShadow: '-7px 5px 15px -1px rgba(0,0,0,0.5)' }}
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className=' w-90 my-3 rounded-3'
					src='/images/camera.jpg'
					alt='Third slide'
					style={{ boxShadow: '-7px 5px 15px -1px rgba(0,0,0,0.5)' }}
				/>
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselHeading;
