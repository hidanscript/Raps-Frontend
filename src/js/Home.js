import React, { Component } from 'react';
import './components/css/Home.css';
import { Link } from 'react-router-dom';

export default function Home () {

	<div className="home-page">
		<div className="home-text">
			<h1>Raps</h1>
			<p>What<strong>ever</strong><br/> it takes,<br/> <strong>do it.</strong></p>
		</div>
		<Link to="/main">
			<button>GET STARTED</button>
		</Link>
	</div>
		
}
