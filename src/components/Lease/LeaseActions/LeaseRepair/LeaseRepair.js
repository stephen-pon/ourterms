import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({

});

class LeaseRepair extends PureComponent {

  render() {
    return (
      <div>
        <h1>This is the lease repair/alterations form/flow page</h1>
      </div>
    );
  }
}

LeaseRepair.propTypes = {};

export default withStyles(styles)(LeaseRepair);
