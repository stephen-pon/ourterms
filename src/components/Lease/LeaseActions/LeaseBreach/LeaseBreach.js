import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({

});

class LeaseBreach extends PureComponent {

  render() {
    return (
      <div>
        <h1>This is the lease notice of breach page</h1>
      </div>
    );
  }
}

LeaseBreach.propTypes = {};

export default withStyles(styles)(LeaseBreach);
