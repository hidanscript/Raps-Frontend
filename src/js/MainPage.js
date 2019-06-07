import React, { Component } from 'react';
import SignUpForm from './components/Login/SignUpForm';
import './components/css/MainPage.css';
import NavBar from './components/Navigation/NavBar';

// 298241537572718

export default class MainPage extends Component {

	render() {
		return(
			<div className="main-page">
				<NavBar/>
				<SignUpForm/>
			</div>
		);
	}
}