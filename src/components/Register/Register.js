import React from 'react';

class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }
        onEmailChange = (event) => {
            this.setState({ email: event.target.value })
        }
        onPasswordChange = (event) => {
            this.setState({ password: event.target.value })
        }

        onNameChange = (event) => {
            this.setState({ name: event.target.value })
        }

        onSubmitRegister = () => {
            fetch("https://sleepy-beach-45073.herokuapp.com/register", {
                method: 'post',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    name: this.state.name
                })
            }).then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            })
        }

    render() {
        return (
        <main className='center'>
            <div className='sign-in-form'>
                <fieldset className='field shadow'>
                    <div id='signin-title'>
                        <label>Register</label>
                    </div>
                    <div className='input-line'>
                        <label>Name</label>
                        <input onChange={this.onNameChange} className='no-outline text-field' type="text" name="name"/>
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
                            onClick={this.onSubmitRegister} className='sign-in grow bg-pattern no-outline' type="submit" value="Register"/>
                        </div>

                </fieldset>
            </div> 
        </main>
    );
    }
    
}

export default Register;