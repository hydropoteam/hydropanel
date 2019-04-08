import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Main />
				<Footer />
			</div>
		);
	}
}

export default App;
