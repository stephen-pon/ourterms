import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({

});

class LeaseDetail extends PureComponent {

  render() {
    const {
      id
    } = this.props;

    return (
      <div>
        <h1>This is the lease details page</h1>
        <h2>The ID of this lease is {id}</h2>
      </div>
    );
  }
}

LeaseDetail.propTypes = {
  id: PropTypes.string
};

export default withStyles(styles)(LeaseDetail);
