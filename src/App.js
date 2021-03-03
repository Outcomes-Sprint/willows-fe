import { React, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home'
import Navigation from './components/navigation/Navigation'
import SignUp from './components/signup/SignUp'
import SignIn from './components/signin/SignIn'

function App() {
  return (
		<div className='App'>
			<Navigation />
			<main>
				<Route path='/home' exact component={Home} />
				<Route path='/' exact render={() => <Redirect to='/home' />} />
				<Route path='/signup' component={SignUp} />
				<Route
					path='/signin'
					exact
					render={() => {
						return <SignIn />;
					}}
				/>
			</main>
		</div>
	);
}

export default App;
