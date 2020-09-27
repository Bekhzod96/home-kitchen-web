import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
	faShoppingCart,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Carousel from './components/Carousel.jsx';
import Header from './components/Header.jsx';
import FirstSection from './components/FirstSection.jsx';
import SecondSection from './components/SocondSection.jsx';
import ThirdSection from './components/ThirdSection';
import Footer from './components/Footer';
library.add(fab, faShoppingCart, faChevronRight);
function App() {
	return (
		<div className="App">
			<Header />
			<Carousel />
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<Footer />
		</div>
	);
}

export default App;
