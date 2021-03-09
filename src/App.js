import { React, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation.jsx';
import SignUp from './components/signup/SignUp';
import SignIn from './components/signin/SignIn';
import Map from './components/map/Map';
import Willows from './components/willows/Willows';
import ProfileEdit from './components/willows/profile/ProfileEdit';
import Property from './pages/Property/Property'
import Login from './pages/Login/Login';

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
				<Route path='/property' exact component={Property} />
				<Route path='/' exact render={() => <Redirect to='/home' />} />
				<Route path='/signup' component={SignUp} />
				<Route path='/login' component={Login} />
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
				<Route
					path='/profileedit'
					exact
					render={() => <ProfileEdit loggedIn={loggedIn} />}
				/>
			</main>
		</div>
	);
}

export default App;
