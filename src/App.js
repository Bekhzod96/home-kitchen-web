import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
	faShoppingCart,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Carousel from './components/Carousel';
import Header from './components/Header';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SocondSection';
library.add(fab, faShoppingCart, faChevronRight);
function App() {
	return (
		<div className="App">
			<Header />
			<Carousel />
			<FirstSection />
			<SecondSection />
		</div>
	);
}

export default App;
