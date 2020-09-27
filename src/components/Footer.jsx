import React from 'react';
import { Col, Row } from 'reactstrap';
import { Logo } from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
	return (
		<div className="footer">
			<div className="dark-shadow w-100 h-100 row ">
				<div className="content">
					<div className="head-footer d-flex justify-content-center">
						<div className="logo">
							<span>{Logo}</span>
						</div>
					</div>
          <div className="d-flex justify-content-center">

         
					<Row className="d-flex cont-center menu">
						<Col lg="3" md="6" sm="6" sx="12">
							<h3>About</h3>
							<p>Shop</p>
							<p>Plan my kitchen</p>
							<p>About us </p>
							<p>Gallery</p>
						</Col>
						<Col lg="3" md="6" sm="6" sx="12">
							<h3>Service</h3>
							<p>FAQ</p>
							<p>Contact</p>
							<p>How to buy </p>
							<p>Downlaods</p>
						</Col>
						<Col lg="3" md="6" sm="6" sx="12">
							<h3>Info</h3>
							<p>Delivery</p>
							<p>Terms</p>
							<p>Privacy </p>
						</Col>
						<Col lg="3" md="6" sm="6" sx="12">
							<h3> Follow</h3>
							<div className="row text-dark cont-center  align-items-center">
								<FontAwesomeIcon
									className="mx-1 icon"
									icon={['fab', 'facebook-f']}
								/>
								<FontAwesomeIcon className="mx-2 icon" icon={['fab', 'twitter']} />
								<FontAwesomeIcon className="mx-1 icon" icon={['fab', 'instagram']} />
							</div>
						</Col>
					</Row>
          </div>
          <div className="copyright hide-sm">
          <p>Copyright Online MTC Home Kitchens 2018 - All rights reserved. Responsive website design, Development & Hosting by mtc.</p></div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
