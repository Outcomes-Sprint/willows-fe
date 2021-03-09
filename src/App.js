import { React, useState, useMemo } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation.jsx';
import SignUp from './components/signup/SignUp';
import SignIn from './components/signin/SignIn';
import Map from './components/map/Map';
import Willows from './components/willows/Willows';
import ProfileEdit from './components/willows/profile/ProfileEdit';
import Property from './pages/Property/Property';
import Login from './pages/Login/Login';
import { UserContext } from './utils/UserContext';

function App() {
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('token') ? true : false
	);
	const handleLogout = () => {
		localStorage.clear();
		setLoggedIn(false);
	};

	const [user, setUser] = useState(null);
	const value = useMemo(() => ({ user, setUser }), [user, setUser]);

	return (
		<div className='App'>
			<UserContext.Provider value={value}>
				<Navigation
					loggedIn={loggedIn}
					setLoggedIn={setLoggedIn}
					handleLogout={handleLogout}
				/>
				<main>
					<Route path='/home' exact component={Home} />
					<Route path='/property' exact component={Property} />
					<Route
						path='/'
						exact
						render={() => <Redirect to='/home' />}
					/>
					<Route path='/signup' component={SignUp} />
					<Route path='/map' component={Map} />
					<Route
						path='/login'
						exact
						render={() => {
							return (
								<Login
									user={user}
									setUser={setUser}
								/>
							);
						}}
					/>
					<Route
						path='/signin'
						exact
						render={() => {
							return (
								<SignIn
									loggedIn={loggedIn}
									setLoggedIn={setLoggedIn}
								/>
							);
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
			</UserContext.Provider>
		</div>
	);
}

export default App;
