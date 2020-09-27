import React from 'react';
import { Col, Button, Container } from 'reactstrap';
import img from '../assets/img/2.png';

const FirstSection = () => {
	return (
		<div className="first-section row align-items-center">
			<Col lg="6" md="6" sm="6">
				<img className="w-100" src={img} alt="Error" />
			</Col>
			<Col lg="6" md="6" sm="6">
				<Container className="">
					<h6>Quality Craftmanship from build to delivery</h6>
					<h3>Discover the beauty of a handmade kitchen</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
						est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu,
						feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna
						eu pharetra tincidunt, mauris purus ultrices.
					</p>
					<Button>About Us</Button>
				</Container>
			</Col>
		</div>
	);
};

export default FirstSection;
