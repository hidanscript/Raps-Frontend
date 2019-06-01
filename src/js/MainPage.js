import React, { Component } from 'react';
import SignUpForm from './components/Login/SignUpForm';
import './components/css/MainPage.css';

export default class MainPage extends Component {

	componentDidMount() {
		alert("Mounted");
	}

	render() {
		return(
			<div className="main-page">
				<SignUpForm/>
			</div>
		);
	}
}