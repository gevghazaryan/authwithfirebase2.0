import React, { Component } from 'react';
import formWithAction from '../hoc/formWithActions';
import { SingInLink } from './SignIn'
import { Link,withRouter } from 'react-router-dom';

import { auth } from '../../firebase';

const INIT_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
}

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...INIT_STATE}
    }
    onSubmit = (event) => {
        const {
            history
        } = this.props;

        auth.singUpWithEmailAndPassword(this.state.email,this.state.passwordOne)
            .then(() => {
                this.setState({...INIT_STATE});
                this.props.history.push('/home')
            })
            .catch((error) => {
                console.log('error happened')
                this.setState({error: error})
            })
        event.preventDefault()
    }
    onChange = (event) => {
        this.setState({ [event.target.name] : event.target.value})
    }
    render() {
        const {
            email,
            passwordOne,
            passwordTwo,
            error
        } = this.state

        const isInvalid = email === '' || passwordOne === '' || passwordOne !== passwordTwo;

        return (
            <form onSubmit={this.onSubmit} className='form'>
                <div className='form-input'>
                    <label>Username:</label>
                    <input 
                        type='text'
                        name='username'
                        onChange={this.onChange}
                        placeholder='enter your username'
                    />
                </div>
                <div className='form-input'>
                    <label>Email:</label>
                    <input 
                        type='text'
                        name='email'
                        onChange={this.onChange}
                        placeholder='enter your registration email'
                    />        
                </div>
                <div className='form-input'>
                    <label>Password:</label>
                    <input 
                        type='password'
                        name='passwordOne'
                        onChange={this.onChange}
                        placeholder='enter your password'
                    />                    
                </div>
                <div className='form-input'>
                    <label>Password:</label>
                    <input 
                        type='password'
                        name='passwordTwo'
                        onChange={this.onChange}
                        placeholder='re-enter your password'
                    />
                </div>
                <div className='form-input'>
                    <button
                        type='submit' 
                        name='signinsubmit'
                        disabled={isInvalid}
                    >
                            Sing Up
                    </button>
                </div>  
                <p>{ error && error.message }</p>

            </form>
        )
    }
} 

let SingUpWithAction = formWithAction(SignUpForm)

const SingUp = () => (
    <div>
        <h1>Sign Up Form</h1>
        <SignUpForm />
        <SingInLink />
    </div>
)

export const SingUpLink = () => (
    <div>
        Want to create New Account?
        <Link to='/signup'> Sign UP</Link>
    </div>
)

export default withRouter(SingUp)