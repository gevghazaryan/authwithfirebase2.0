import React from 'react';
import { auth } from '../../../firebase';
import { Link } from 'react-router-dom';

const PasswordChange = () => (
    <div>
        <h1>Reset Your password</h1>
        <PasswordChangeForm />
    </div>
)

const INIT_STATE = {
    email: '',
    error: null
}

class PasswordChangeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...INIT_STATE }
    }
    onSubmit = (event) => {
        auth.passwordUpdate(this.state.passwordOne)
        event.preventDefault()
    }
    onChange = (event) => {
        const {
            name,
            value
        } = event.target;
        this.setState({[name] : value})
    }
    render() {
        const {
            passwordOne,
            passwordTwo,
            error
        } = this.state

        const isInvalid = passwordOne === '' || passwordTwo !== passwordOne;

        return(
            <form onSubmit={this.onSubmit}>
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
                <button 
                    type='submit'
                    disabled={isInvalid}
                >
                    Change
                </button>

                <p>{ error && error.message}</p>
            </form>
        )
    }
}

export const PassWordChangeLink = () => {
    <p>
        Want to Change Your Password?
        <Link to='/account/passwordChange'>Change Password </Link>

    </p>
}

export default PasswordChange