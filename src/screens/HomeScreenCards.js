import React from 'react';
import CarouselHeading from '../components/CarouselHeading';

import Product from '../components/Product';
import products from '../products';

const HomeScreenCard = () => {
	return (
		<>
			<CarouselHeading />
			<div className='d-flex flex-wrap justify-content-around'>
				{products.map((prodInfo) => (
					<Product key={prodInfo.id} prodInfo={prodInfo} />
				))}
			</div>
		</>
	);
};

export default HomeScreenCard;
