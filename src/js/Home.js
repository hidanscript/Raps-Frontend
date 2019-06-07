import React, { Component } from 'react';
import './components/css/Home.css';
import { Link } from 'react-router-dom';

import SignUpForm from './components/Login/SignUpForm';

export default class Home extends Component {

	constructor(props) {
		super(props);

		this.showForm = this.showForm.bind(this);
	}

	showForm(){
		alert("Showing form");
		return <SignUpForm/>
	}

	render() {
		return(
			<div className="home-page">
				<div className="home-text">
					<h1>Raps</h1>
					<p>What<strong>ever</strong><br/> it takes,<br/> <strong>do it.</strong></p>
				</div>
				<Link to="/main">
					<button>GET STARTED</button>
				</Link>
				<SignUpForm/>
			</div>
		);
	}
}
