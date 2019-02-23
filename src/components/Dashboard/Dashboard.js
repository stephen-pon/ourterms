import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({

});

class Dashboard extends PureComponent {

  render() {
    return (
      <div>
        <h1>This is the dashboard page that comes after login</h1>
      </div>
    );
  }
}

Dashboard.propTypes = {};

export default withStyles(styles)(Dashboard);
