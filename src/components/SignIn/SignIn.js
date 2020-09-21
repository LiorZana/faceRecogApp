import React from 'react';
import './SignIn.css'

class SignIn extends React.Component  {

    constructor() {
        super();
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
        onEmailChange = (event) => {
            this.setState({ signInEmail: event.target.value })
        }
        onPasswordChange = (event) => {
            this.setState({ signInPassword: event.target.value })
        }

        onSubmitSignIn = () => {
            fetch("https://sleepy-beach-45073.herokuapp.com/signin", {
                method: 'post',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({
                    email: this.state.signInEmail,
                    password: this.state.signInPassword
                })
            })
            .then(response => response.json())
            .then(user => {
                if(user.id){
                  this.props.loadUser(user);
                  this.props.onRouteChange('home');
                }
              })
            
        }

        render() {
            const { onRouteChange } = this.props;
            return (
                <main className='center'>
                    <div className='sign-in-form'>
                        <fieldset className='field shadow'>
                            <div id='signin-title'>
                                <label>Sign in</label>
                            </div>
                            <div className='input-line'>
                                <label>E-mail</label>
                                <input onChange={this.onEmailChange} className='no-outline text-field' type="email" name="email-address"/>
                            </div>
                            <div className='input-line'>
                                <label>Password</label>
                                <input onChange={this.onPasswordChange} className='no-outline text-field' type="password" name="password"/>
                            </div>

                                <label className='login-bottom'><input className='checkbox' type="checkbox"/> Remember me</label>

                                <div className='login-bottom'>
                                    <input 
                                    onClick={this.onSubmitSignIn} className='sign-in grow bg-pattern no-outline' type="submit" value="Sign in"/>
                                </div>

                                <div className='login-bottom'>
                                    <p onClick={ () => onRouteChange('register') } className="dim">Register</p><br></br>
                                </div>

                        </fieldset>
                    </div> 
                </main>
            );
        }
    }

export default SignIn;