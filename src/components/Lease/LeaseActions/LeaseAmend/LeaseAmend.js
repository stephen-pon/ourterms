import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({

});

class LeaseAmend extends PureComponent {

  render() {
    return (
      <div>
        <h1>This is the lease amendment form/flow page</h1>
      </div>
    );
  }
}

LeaseAmend.propTypes = {};

export default withStyles(styles)(LeaseAmend);
