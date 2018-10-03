import React, { Component } from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import { firebase } from './firebase'
import './App.css';

import Navigation from './components/Navigation';
import Landing from './components/Landing';
import SignUp from './components/authentication/SignUp';
import SignIn from './components/authentication/SignIn';
import Account from './components/authentication/account';
import AuthUserContext from './AuthUserContext';
import Home from './components/Home';
import PasswordChange from './components/authentication/account/PasswordChange';
import PasswordReset from './components/authentication/account/PasswordReset';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {authUser : null}
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null })
    })
  }

  render() {
    return (
      <AuthUserContext.Provider value={this.state.authUser}>
        <Router>
          <div className="App">
              <Navigation />
              <Route path='/signUp' component={SignUp}></Route>
              <Route path='/signIn' component={SignIn}></Route>
              <Route exact path='/' component={Landing}></Route>
              <Route exact path='/home' component={Home}></Route>              
              <Route exact path='/account' component={Account}></Route>
              <Route exact path='/account/passwordReset' component={PasswordReset}></Route>              
              <Route exact path='/account/passwordChange' component={PasswordChange}></Route>               
          </div>
        </Router>
      </AuthUserContext.Provider>
    );
  }
}

export default App;
