import React, { Component } from 'react';
import './components/css/Home.css';
import { Link } from 'react-router-dom';

import SignUpForm from './components/Login/SignUpForm';

export default class Home extends Component {

	showForm(){
		return <SignUpForm/>
	}

	render() {
		return(
			<div className="home-page">
				<div className="home-text">
					<h1>Raps</h1>
					<p>What<strong>ever</strong><br/> it takes,<br/> <strong>do it.</strong></p>
				</div>
				<button onClick={() => {this.showForm.bind(this)}}>GET STARTED</button>
			</div>
		);
	}
}
