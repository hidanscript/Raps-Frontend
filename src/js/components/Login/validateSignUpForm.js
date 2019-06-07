
export default class validateSignUpForm  {

	constructor(props) {
		//super(props);

		this.isUsername = this.isUsername.bind(this);
		this.isPassword = this.isPassword.bind(this);
		this.isEmail = this.isEmail.bind(this);
	}

	isUsername(username) {
		//this.username = username;

		if(username.trim() !== '' ) {
			console.log("user isnt empty");
			return true;
		} else {
			return false;
		}
	}

	isPassword(password, retypedPassword) {
		//this.password = password;
		//this.retypedPassword = retypedPassword;

		if(password !== '' && password === retypedPassword) {
			return true;
		} else {
			return false;
		}
	}

	isEmail(email, retypedEmail) {
		//this.email = email;
		//this.retypedEmail = retypedEmail;

		if(email.trim() !== '' && email.trim() === retypedEmail.trim()) {
			return true;
		} else {
			return false;
		}
	}

}