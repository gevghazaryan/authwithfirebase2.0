import React from 'react';

const withAuthentication = (Component) =>
    class WithAuthentication extends React.Component {
        constructor(props) {
            super(props)
        }
        render() {
            return <Component />
        }
    }

export default withAuthentication