import React from 'react';
import './SignIn.css'

const SignIn = ( { onRouteChange }) => {

    return (
        <main className='center'>
            <div className='sign-in-form'>
                <fieldset className='field shadow'>
                    <div id='signin-title'>
                        <label>Sign in</label>
                    </div>
                    <div className='input-line'>
                        <label>E-mail</label>
                        <input className='no-outline text-field' type="email" name="email-address"/>
                    </div>
                    <div className='input-line'>
                        <label>Password</label>
                        <input className='no-outline text-field' type="password" name="password"/>
                    </div>

                        <label className='login-bottom'><input className='checkbox' type="checkbox"/> Remember me</label>

                        <div className='login-bottom'>
                            <input 
                            onClick={ () => onRouteChange('home') } className='sign-in grow bg-pattern no-outline' type="submit" value="Sign in"/>
                        </div>

                        <div className='login-bottom'>
                            <p onClick={ () => onRouteChange('register') } className="dim">Register</p><br></br>
                        </div>

                </fieldset>
            </div> 
        </main>
    );
}

export default SignIn;