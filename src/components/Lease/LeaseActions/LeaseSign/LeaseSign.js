import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({

});

class LeaseSign extends PureComponent {

  render() {
    return (
      <div>
        <h1>This is the lease signing form/flow page</h1>
      </div>
    );
  }
}

LeaseSign.propTypes = {};

export default withStyles(styles)(LeaseSign);
