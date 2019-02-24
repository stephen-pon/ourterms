import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import logo from '../../assets/logo.jpeg';


const styles = (theme) => ({
  box: {
    border: 'thin black solid',
    // color: 'red',
    width: 600,
    // 'vertical-align': 'center',
    fontFamily: 'sans-serif',
    fontSize: 18,
  },
  header: {
    backgroundColor: 'blue',
    color: 'white',
  }
});

class Login extends PureComponent {

  render() {

    const {
      classes,
      dashNav
    } = this.props;

    return (
      <div>
        <center>
          <div className={classes.box}>
            <img src={logo} alt='logo'></img>
            <h1>Login to OurTerms</h1>
            <div className={classes.box}>
              <form id="login">
                <label>Username</label><br></br>
                <input id='username'></input><br></br>
                <label>Password</label><br></br>
                <input type='password' id='password'></input><p></p>
                <input type='checkbox'></input><label>Remember me</label><br></br>
                <input type='button' onClick={dashNav} name="" value="Login"></input>
              </form>
            </div>
          </div>
        </center>
      </div>
    );
  }
}

Login.propTypes = {
  dashNav: PropTypes.func
};

export default withStyles(styles)(Login);
