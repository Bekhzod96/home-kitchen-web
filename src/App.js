import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Carousel from './components/Carousel';
import Header from './components/Header';
library.add(fab, faShoppingCart);
function App() {
	return (
		<div className="App">
			<Header />
			<Carousel />
		</div>
	);
}

export default App;
