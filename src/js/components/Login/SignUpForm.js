import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignUpForm extends Component {

	constructor(props) {
		super(props);

		this.sendForm = this.sendForm.bind(this);
		this.validateForm = this.validateForm.bind(this);
	}

	validateForm(form) {

		if(this.userValue.value.trim() != '' &&
			this.passValue.value != '' &&
			this.passValue.value === this.repassValue.value &&
			this.emailValue.value.trim() != '' &&
			this.emailValue.value === this.reEmailValue.value) {

			return true;
		}
		else {
			return false;
		}
	}

	sendForm(event) {
		event.preventDefault();

		var newUser = {
			username : '',
			password : '',
			email : '',
		};

		if(this.validateForm(event)) {
			newUser = {
				username : this.userValue.value.trim(),
				password : this.passValue.value,
				email : this.emailValue.value
			}

			console.log(newUser);
			return <Link to="/home" />
		}
	}

	render() {
		return(
			<div className="sign-up-form">
				<Form onSubmit={this.sendForm}>
					<h2>Sign Up</h2>
					<input type="text" id="user-input" placeholder="Username" ref={(user_value) => this.userValue = user_value}/>
					<input type="password" id="pass-input" placeholder="Password" ref={(password_value) => this.passValue = password_value}/>
					<input type="password" id="repass-input" placeholder="Retype your Password" ref={(repassword_value) => this.repassValue = repassword_value}/>
					<input type="email" id="email-input" placeholder="Email" ref={(email_value) => this.emailValue = email_value}/>
					<input type="email" id="reEmail-input" placeholder="Retype your Email" ref={(reEmail_value) => this.reEmailValue = reEmail_value}/>
					<input type="submit" className="submit-button"/>
				</Form>
			</div>
		);
	}
}
