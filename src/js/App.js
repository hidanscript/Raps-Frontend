import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Routes
import Home from './Home';
import MainPage from './MainPage';

export default class App extends Component {

	render() {
		return(
			<BrowserRouter>
				<div className="App">
					<Route render={({location}) => (
						<Switch>
							<Route exact path="/home" component={Home}/>
							<Route path="/" component={Home}/>
							<Route path="/main" component={MainPage}/>
						</Switch>
					)} />
				</div>
			</BrowserRouter>
		);
	}
}