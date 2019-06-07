import React, { Component } from 'react';
import './NavLink.css';

export default class NavLink extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<li className="nav-link"><a href={this.props.link}>{this.props.text}</a></li>
		);
	}

}