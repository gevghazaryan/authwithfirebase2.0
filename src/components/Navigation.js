import React from 'react';
import { Link } from 'react-router-dom';
import SignOut from './authentication/SignOut';
import AuthUserContext from '../AuthUserContext';

const Navigation = () => (
    <AuthUserContext.Consumer>
        {authUser => authUser
            ? <NavigationForUser />
            : <NavigationForGuest />
        }
    </AuthUserContext.Consumer> 
)

const NavigationForUser = () => (
    <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/account'>Account</Link></li>
        <li><SignOut /></li>
    </ul>
)

const NavigationForGuest = () => (
    <ul>
        <li><Link to='/landing'>Landing</Link></li>
        <li><Link to='/signin'>Sign In</Link></li>
        <li><Link to='/signUp'>Sign Up</Link></li>        
    </ul>
)

export default Navigation