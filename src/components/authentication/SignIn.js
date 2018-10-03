import React, { Component } from 'react';
import formWithAction from '../hoc/formWithActions';
import { Link,withRouter } from 'react-router-dom';

import { SingUpLink } from './SignUp';

import { auth } from '../../firebase';

const INIT_STATE = {
    email: '',
    password: '',
    error: null,
}

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...INIT_STATE}
    }
    onSubmit = (event) => {
        const {
            history
        } = this.props;
        
        auth.signInWithEmailAndPassword(this.state.email,this.state.password)
            .then(() => {
                this.setState({...INIT_STATE});
                history.push('/home')
            })
            .catch((error) => {
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
            password,
            error
        } = this.state

        const isInvalid = email === '' || password === '';

        return (
            <form onSubmit={this.onSubmit} className='form'>
                <div className='form-input'>
                    <label>Email:</label>
                    <input 
                        type='text'
                        name='email'
                        onChange={this.onChange}
                        placeholder='enter your email'
                    />        
                </div>
                <div className='form-input'>
                    <label>Password:</label>
                    <input 
                        type='password'
                        name='password'
                        onChange={this.onChange}
                        placeholder='Enter your password'
                    />
                </div>
                <div className='form-input'>
                    <button
                        type='submit' 
                        name='signinsubmit'
                        disabled={isInvalid}
                    >
                            Sing In
                    </button>
                </div>  

                <p>{ error && error.message }</p>

            </form>
        )
    }
} 

const SingIn = ({ history }) => (
    <div>
        <h1>Sign In Form</h1>
        <SignInForm history={history}/>
        <SingUpLink />
    </div>
)

export const SingInLink = () => (
    <div>
        Have An Account Already?
        <Link to='/signin'> Sing In</Link>
    </div>
)

export default withRouter(SingIn)