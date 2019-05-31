import React, { Component } from 'react';

export default class NavBar extends Component {

	render() {
		return(
			<div className="nav-bar">
				<ul className="nav-links">
					<li><a href="#">Women</a></li>
					<li><a href="#">Men</a></li>
					<li><a href="#">Sign In</a></li>
					<li><a href="#">Sign Up</a></li>	
				</ul>
			</div>
		);
	}
}