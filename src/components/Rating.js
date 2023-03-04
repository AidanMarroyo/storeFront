import PropTypes from 'prop-types'; //short hand is impt to import PropTypes
import React from 'react';

const Rating = ({ rating, text, color }) => {
	return (
		<div className='rating'>
			<span>
				<i
					style={{ color }}
					class={
						rating >= 1
							? 'fa-solid fa-star'
							: rating >= 0.5
							? 'fa-solid fa-star-half'
							: 'fa-regular fa-star'
					}
				/>
			</span>
			<span>
				<i
					style={{ color }}
					class={
						rating >= 2
							? 'fa-solid fa-star'
							: rating >= 1.5
							? 'fa-solid fa-star-half'
							: 'fa-regular fa-star'
					}
				/>
			</span>
			<span>
				<i
					style={{ color }}
					class={
						rating >= 3
							? 'fa-solid fa-star'
							: rating >= 2.5
							? 'fa-solid fa-star-half'
							: 'fa-regular fa-star'
					}
				/>
			</span>
			<span>
				<i
					style={{ color }}
					class={
						rating >= 4
							? 'fa-solid fa-star'
							: rating >= 3.5
							? 'fa-solid fa-star-half'
							: 'fa-regular fa-star'
					}
				/>
			</span>
			<span>
				<i
					style={{ color }}
					class={
						rating >= 5
							? 'fa-solid fa-star'
							: rating >= 4.5
							? 'fa-solid fa-star-half'
							: 'fa-regular fa-star'
					}
				/>
			</span>
			<span>{text && text}</span>
		</div>
	);
};

//Can create different values and use as props
Rating.defaultProps = {
	color: '#f8e825',
};

//This ensures our props are of the types coded
Rating.propTypes = {
	value: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	color: PropTypes.string,
};
export default Rating;
