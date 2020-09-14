import React from 'react';

const Register = ( { onRouteChange }) => {

    return (
        <main className='center'>
            <div className='sign-in-form'>
                <fieldset className='field shadow'>
                    <div id='signin-title'>
                        <label>Register</label>
                    </div>
                    <div className='input-line'>
                        <label>Name</label>
                        <input className='no-outline text-field' type="text" name="name"/>
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
                            onClick={ () => onRouteChange('home') } className='sign-in grow bg-pattern no-outline' type="submit" value="Register"/>
                        </div>

                </fieldset>
            </div> 
        </main>
    );
}

export default Register;