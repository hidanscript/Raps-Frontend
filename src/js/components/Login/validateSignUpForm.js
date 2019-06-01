import { Component } from 'react';

export default class validateSignUpForm extends Component {

	constructor(props) {
		super(props);

		this.isUsername = this.isUsername.bind(this);
		this.isPassword = this.isPassword.bind(this);
		this.isEmail = this.isEmail.bind(this);
	}

	isUsername(username) {
		if(username.trim() !== '' ) {
			return true;
		} else {
			return false;
		}
	}

	isPassword(password, retypedPassword) {
		if(password !== '' && password === retypedPassword) {
			return true;
		} else {
			return false;
		}
	}

	isEmail(email, retypedEmail) {
		if(email.trim() !== '' && email.trim() === retypedEmail.trim()) {
			return true;
		} else {
			return false;
		}
	}

}