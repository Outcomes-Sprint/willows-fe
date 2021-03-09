import React, { useState } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
import { APIURL } from '../../config'

// props needed are setUser and maybe setToken
function Login() {
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState('');
    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: '',
        re_password: '',
    });
    const [newUser, setNewUser] = useState(false);
    const signUpURL = `${APIURL}/users/`;
    const signInURL = `${APIURL}/token/login`;

    const handleChange = (e) => {
        e.preventDefault();
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleClick = () => {
        setNewUser(!newUser);
        setError('');
    };

    const handleSubmit = (event) => {
        if (!newUser) {
            event.preventDefault();
            Axios({
                method: 'post',
                url: signInURL,
                data: credentials,
            })
                .then((res) => {
                    if (res.data.auth_token) {
                        // setToken(res.data.auth_token);
                        // setUser(credentials.email);
                        // setRedirect(true);
                    } else {
                        setError(res.data);
                        throw new Error('There was an error signing in');
                    }
                    return res;
                })
                .catch(setError('There was an error signing in'));
        } else if (newUser) {
            event.preventDefault();
            Axios({
                method: 'post',
                url: signUpURL,
                data: credentials,
            })
                .then((res) => {
                    // setUser('');
                    setNewUser(false);
                })
                .catch(setError('There was an error signing up'));
        }
    };

    if (redirect) {
        return <Redirect to='/property' />;
    }
    
    return (
		<div>
			{!newUser ? (
				<form onSubmit={handleSubmit}>
					<h1>Sign In</h1>
                    <div>

					<input
						type='email'
						name='email'
						placeholder='name@email.com'
						value={credentials.email}
						onChange={handleChange}></input>
					<label htmlFor='email'>Email</label>
                        </div>
					<input
						type='password'
						name='password'
						placeholder='Enter Password'
						value={credentials.password}
						onChange={handleChange}></input>
					<label htmlFor='password'>Password</label>
					<button>Log In</button>
					<button onClick={handleClick}>
						Need A New Profile?
					</button>
					{error}
				</form>
			) : (
				<form onSubmit={handleSubmit}>
					<h1>Sign Up</h1>
					<input
						type='text'
						name='name'
						placeholder='Enter Name'
						value={credentials.name}
						onChange={handleChange}></input>
					<label htmlFor='name'>Name</label>
					<input
						type='email'
						name='email'
						placeholder='name@email.com'
						value={credentials.email}
						onChange={handleChange}></input>
					<label htmlFor='email'>Email</label>
					<input
						type='password'
						name='password'
						placeholder='Enter Password'
						value={credentials.password}
						onChange={handleChange}></input>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='re_password'
						placeholder='Re-Enter Password'
						value={credentials.re_password}
						onChange={handleChange}></input>
					<label htmlFor='retypePassword'>
						Retype Password
					</label>
					<button>Register</button>
					<button onClick={handleClick}>
						Already Have A Profile?
					</button>
					{error}
				</form>
			)}
		</div>
	);
}

export default Login
