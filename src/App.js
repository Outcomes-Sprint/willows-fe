import { React, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home'
import Navigation from './components/navigation/Navigation.jsx'
import SignUp from './components/signup/SignUp'
import SignIn from './components/signin/SignIn'
import Map from './components/map/Map'
import Willows from './components/willows/Willows'

function App() {
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('token') ? true : false
	);
	const handleLogout = () => {
		localStorage.clear();
		setLoggedIn(false);
	};
	return (
		<div className='App'>
			<Navigation
				loggedIn={loggedIn}
				setLoggedIn={setLoggedIn}
				handleLogout={handleLogout}
			/>
			<main>
				<Route path='/home' exact component={Home} />
				<Route path='/' exact render={() => <Redirect to='/home' />} />
				<Route path='/signup' component={SignUp} />
				<Route path='/map' component={Map} />
				<Route
					path='/signin'
					exact
					render={() => {
						return <SignIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} />;
					}}
				/>
				<Route
					path='/willows'
					exact
					render={() => <Willows loggedIn={loggedIn} />}
				/>
			</main>
		</div>
	);
}

export default App;
