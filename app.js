import React from 'react';
import {render} from 'react-dom';

import Hello from './components/Hello.js';

class App extends React.Component {
    render () {
	return (
	    <Hello />
	);
    }
}

let app = document.getElementById('app');

if (app) {
    render(<App/>, app);
}
