import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({

});

class LeasePayment extends PureComponent {

  render() {
    return (
      <div>
        <span>LeasePayment component</span>
      </div>
    );
  }
}

LeasePayment.propTypes = {};

export default withStyles(styles)(LeasePayment);
