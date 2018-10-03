import React from 'react';
import withAuthorization from '../../../withAuthorization';
import AuthUserContext from '../../../AuthUserContext';

import { Link } from 'react-router-dom';

const Account = () => (
    <AuthUserContext.Consumer>
        {authUser =>
            <ul>
                <li>User: {authUser.email}</li>
                <li><Link to='/account/passwordChange'>Change Your Password</Link></li>
                <li><Link to='/account/passwordReset'>Reset Your Password</Link></li>
            </ul>
        }
    </AuthUserContext.Consumer>
)

const authCondition = (authCondition) => !!authCondition

export default withAuthorization(authCondition)(Account)