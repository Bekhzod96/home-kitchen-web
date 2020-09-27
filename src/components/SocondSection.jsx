import React, { useState } from 'react';
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	Button,
} from 'reactstrap';
import {items} from '../assets/data'

const SocondSection = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const slides = items.map((item) => {
		return (
			<CarouselItem className="carousel" tag="div" key={item.id}>
				<div className="row align-items-center h-100 ">
					<div className="text-center mx-auto carousel-width">
						<h6>What Our Customers Say</h6>
						<h3>Over 35 years experience designing handmade kitchens</h3>
						<p>
							Since my first contact I have received a very high level of
							customer service and advice with my kitchen plans. Ben responded
							very quickly to all of my emails and delivery of the kitchen was
							as planned.
						</p>
						<small>Jane, Dundee</small> <br />
						<Button>Frequently Asked Questions</Button>
					</div>
				</div>
			</CarouselItem>
		);
	});

	return (
		<div className="second-section">
			<Carousel activeIndex={activeIndex} next={next} previous={previous}>
				{slides}

				<CarouselControl
					direction="prev"
					directionText="Previous"
					onClickHandler={previous}
				/>

				<CarouselControl
					direction="next"
					directionText="Next"
					onClickHandler={next}
					className="control"
				/>
			</Carousel>
		</div>
	);
};

export default SocondSection;
