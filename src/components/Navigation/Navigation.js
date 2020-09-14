import React from 'react';
import './Navigation.css'

const Navigation = ({ onRouteChange, isSignedIn }) => {
    return isSignedIn ?
    <nav>
        <p onClick={() => onRouteChange('signout')} className='sign-out dim'>Sign out</p>
    </nav>
    :
    <nav>
        <p onClick={() => onRouteChange('signin')} className='sign-out dim'>Sign in</p>
        <p onClick={() => onRouteChange('register')} className='sign-out dim'>Register</p>
    </nav>
}

export default Navigation;