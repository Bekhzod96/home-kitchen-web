import React, { useState } from 'react';
import {
	Carousel,
	CarouselItem,
	CarouselIndicators,
	CarouselCaption,
	Button,
} from 'reactstrap';
import {items} from '../assets/data'

const CarouselBanner = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = items.map((item) => {
		return (
			<CarouselItem className="custom-tag" tag="div" key={item.id}>
				<CarouselCaption className="text-danger" />
				<div className="banner-content">
					<div className="dark-shadow row align-items-center">
						<div className="text-center mx-auto">
							<p>Design and order your new kitchen online today</p>
							<h3>Bespoke & made to measure handmade kitchen design</h3>
							<Button>Order Now</Button>
						</div>
					</div>
				</div>
			</CarouselItem>
		);
	});

	return (
		<div className="banner">
			<Carousel activeIndex={activeIndex}>
				<CarouselIndicators
					items={items}
					activeIndex={activeIndex}
					onClickHandler={goToIndex}
				/>
				{slides}
			</Carousel>
		</div>
	);
};

export default CarouselBanner;
