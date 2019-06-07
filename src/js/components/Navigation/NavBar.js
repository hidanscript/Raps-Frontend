import React, { Component } from 'react';
import NavLink from './NavLink';
import SearchBar from './SearchBar';
import Logo from '../../../img/5.jpg';

//Styles
import './NavBar.css';

export default class NavBar extends Component {

	render() {
		return(
			<div className="nav-bar">
				<h2>Raps</h2>

				<div className="nav-links">
					<ul>
						<NavLink text="Woman" link="#"/>
						<NavLink text="Man" link="#"/>
						<NavLink text="Raps" link="#"/>
					</ul>
				</div>

				<div className="nav-links-sign">
					<ul>
						<NavLink text="Sign In" link="#"/>
						<NavLink text="Sign Up" link="#"/>
					</ul>
				</div>

				<SearchBar/>
			</div>
		);
	}

}