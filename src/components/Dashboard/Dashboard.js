import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({
  card: {
    width: 150,
    display: 'inline-block',
    margin: 20,
    border: 'thin gold solid'
  },
  cardBody: {

  }
});

class Dashboard extends PureComponent {

  render() {

    const {
      classes
    } = this.props;

    return (
      <div>
        <h1>This is the dashboard page that comes after login</h1>
        <div className={classes.card}>
          <div className={classes.cardBody}>Address</div>
          <div className={classes.cardBody}>Tenant Name</div>
          <div className={classes.cardBody}>Caption goes here</div>
        </div>
        <div className={classes.card}>
          <div className={classes.cardBody}>Create New Lease</div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {};

export default withStyles(styles)(Dashboard);
