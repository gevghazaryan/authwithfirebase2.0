import React from 'react';
import { auth } from '../../../firebase';
import { Link } from 'react-router-dom';

const PasswordReset = () => (
    <div>
        <h1>Reset Your password</h1>
        <PasswordResetForm />
    </div>
)

const INIT_STATE = {
    email: '',
    error: null
}

class PasswordResetForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...INIT_STATE }
    }
    onSubmit = (event) => {
        auth.passwordReset(this.state.email)
        event.preventDefault()
    }
    onChange = (event) => {
        const {
            name,
            value
        } = event.target
        this.setState({name: name,value: value})
    }
    render() {
        const {
            email,
            error
        } = this.state

        const isInvalid = email === '';

        return(
            <form onSubmit={this.onSubmit}>
                <label>Enter your registration email</label>
                <input
                    type='text'
                    placeholder='email'
                    onChange={this.onChange}
                />
                <button 
                    type='submit'
                    disabled={isInvalid}
                >
                    Reset
                </button>

                <p>{ error && error.message}</p>
            </form>
        )
    }
}

export const PassWordResetLink = () => {
    <p>
        Want to reset Your Password?
        <Link to='/account/passwordReset'>Reset </Link>

    </p>
}

export default PasswordReset