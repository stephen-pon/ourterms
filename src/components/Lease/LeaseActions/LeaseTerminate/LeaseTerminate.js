import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({

});

class LeaseTerminate extends PureComponent {

  render() {
    return (
      <div>
        <h1>This is the lease terminate form/flow page</h1>
      </div>
    );
  }
}

LeaseTerminate.propTypes = {};

export default withStyles(styles)(LeaseTerminate);
