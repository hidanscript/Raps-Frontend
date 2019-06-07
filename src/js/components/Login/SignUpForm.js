import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignUpForm.css';
import validateSignUpForm from './validateSignUpForm';
import FacebookLoginButton from './FacebookLoginButton';

export default class SignUpForm extends Component {

	constructor(props) {
		super(props);

		this.sendForm = this.sendForm.bind(this);
		this.validateForm = this.validateForm.bind(this);

		this.state = {
			idVisible : 'form-visible'
		};
	}

	validateForm() {

		//vf = Validate Form.
		const vf = new validateSignUpForm();

		if(vf.isUsername(this.userValue.value) &&
			vf.isPassword(this.passValue, this.repassValue) &&
			vf.isEmail(this.emailValue, this.reEmailValue)) {

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

		if(this.validateForm) {
			newUser = {
				username : this.userValue.value.trim(),
				password : this.passValue.value,
				email : this.emailValue.value
			}

			this.userValue.value = '';
			this.passValue.value = '';
			this.repassValue.value = '';
			this.emailValue.value = '';
			this.reEmailValue.value = '';

			this.setState({
				idVisible : 'form-invisible'
			});

			console.log(newUser);
		} else {
			alert('Error in some of the fields, check them and try it again.');
		}
	}

	render() {
		return(
			<div className='sign-up-form' id={this.state.idVisible}>
				<form onSubmit={this.sendForm}>
					<h2>Sign Up</h2>
					<input type="text" id="user-input" placeholder="Username" ref={(user_value) => this.userValue = user_value}/>
					<input type="password" id="pass-input" placeholder="Password" ref={(password_value) => this.passValue = password_value}/>
					<input type="password" id="repass-input" placeholder="Retype your Password" ref={(repassword_value) => this.repassValue = repassword_value}/>
					<input type="email" id="email-input" placeholder="Email" ref={(email_value) => this.emailValue = email_value}/>
					<input type="email" id="reEmail-input" placeholder="Retype your Email" ref={(reEmail_value) => this.reEmailValue = reEmail_value}/>
					<p>Already have an account? <a href="localhost:3000">Sign In.</a></p>
					<FacebookLoginButton/>
					<input type="submit" className="submit-button" value="Register"/>
				</form>
			</div>
		);
	}
}
