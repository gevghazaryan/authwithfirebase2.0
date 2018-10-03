import React from 'react';
import withAuthorization from '../withAuthorization';

const Home = () => (
    <div>
        <h1>Hello Homie</h1>
    </div>
)

const authCondition = (authUser) => !!authUser

export default withAuthorization(authCondition)(Home)