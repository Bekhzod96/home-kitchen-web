import React from 'react';
import { render } from 'react-dom';
import './assets/css/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

import App from './App';

render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
