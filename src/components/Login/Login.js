import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({

});

class Login extends PureComponent {

  render() {
    return (
      <div>
        <h1>This is the login page</h1>
      </div>
    );
  }
}

Login.propTypes = {};

export default withStyles(styles)(Login);
