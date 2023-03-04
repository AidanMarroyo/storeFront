import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';

import Rating from './Rating';

const Product = ({ prodInfo }) => {
	return (
		<Card
			className='bg-transparent border-0 rounded-3'
			style={{
				margin: '1rem',
				padding: '5rem',
				width: '25%',
				boxShadow: '-7px 5px 15px -1px rgba(0,0,0,0.5)',
			}}
		>
			<Link to={`/product/${prodInfo._id}`}>
				<Card.Img
					className='border border-light rounded-3'
					src={prodInfo.image}
					variant='top'
				/>
			</Link>
			<Card.Body>
				<Card.Title className='mt-1 mb-3 text-center' as='div'>
					<strong>{prodInfo.name}</strong>
				</Card.Title>
				<Card.Text className='text-center' as='div'>
					<Rating
						rating={prodInfo.rating}
						text={` ${prodInfo.numReviews} reviews`}
					/>
				</Card.Text>
				<Card.Text className='mt-3 text-center' as='h3'>
					${prodInfo.price}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Product;
