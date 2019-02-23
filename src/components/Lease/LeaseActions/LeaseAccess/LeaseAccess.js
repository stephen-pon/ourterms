import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({

});

class LeaseAccess extends PureComponent {

  render() {
    return (
      <div>
        <h1>This is the lease access/inspections form/flow page</h1>
      </div>
    );
  }
}

LeaseAccess.propTypes = {};

export default withStyles(styles)(LeaseAccess);
