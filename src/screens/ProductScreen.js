import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import products from '../products';

//match is a prop from react-router-dom

const ProductScreen = () => {
	const urlParams = useParams();

	const product = products.find((p) => p._id === urlParams.id);
	return (
		<div>
			<div className='d-flex justify-content-center'>
				<Link className='btn btn-transparent my-3 align-self-start' to='/'>
					<h3>← Go Back</h3>
				</Link>
				<img
					className='border-0 rounded-3'
					src={product.image}
					alt={product.name}
					style={{ boxShadow: '-7px 5px 15px -1px rgba(0,0,0,0.5)' }}
				/>
				<div className='float-end'>
					<ListGroup variant='flush w-50 m-3 bg-transparent'>
						<ListGroup.Item>
							<h3>{product.name}</h3>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating
								value={product.rating}
								text={`${product.numReviews} reviews`}
							/>
						</ListGroup.Item>
					</ListGroup>
				</div>
			</div>
		</div>
	);
};

export default ProductScreen;
