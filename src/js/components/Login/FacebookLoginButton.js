import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class FacebookLoginButton extends Component {

	state = {
		isLoggedIn: false,
		name: '',
		email: '',
		picture: ''
	};

	componentClicked = () => console.log("is clicked");

	responseFacebook = response => {
		this.setState({
			isLoggedIn: true,
			name: response.name,
			email: response.email,
		});
	};

	render() {
		let fbResponse;

		if(this.state.isLoggedIn) {
			fbResponse = null;
		} else {
			fbResponse = (<FacebookLogin
						    appId="APP_ID"
						    autoLoad={true}
						    fields="name,email,picture"
						    onClick={this.componentClicked}
						    callback={this.responseFacebook} />);
		}

		return(
			<div className="fbLoginBtn">
				{fbResponse}
			</div>
		);
	}
}