import React from 'react';
import { auth } from '../../firebase';

class SignOut extends React.Component {
    handleClick = () => {
        auth.singOut()
    }   
    render() {
        return(
            <button
                onClick={this.handleClick}
            >
                Sing Out
            </button>
        )
    }
}

export default SignOut