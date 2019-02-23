import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({

});

class LeaseCreate extends PureComponent {

  render() {
    return (
      <div>
        <h1>This is the create new lease form/flow page</h1>
      </div>
    );
  }
}

LeaseCreate.propTypes = {};

export default withStyles(styles)(LeaseCreate);
