import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({
  card: {
    width: 200,
    height: 60,
    display: 'inline-block',
    margin: 20,
    border: 'thin black solid',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 4,
  },
  cardContent: {
  },
  container: {
    width: 960,
    display: 'flex',
    flexWrap: 'wrap',
    margin: 'auto',
  },
  border: {
    // border: 'thin red solid',
  },
  window: {
    padding: '50px 100px 0 100px'
  }
});

class Dashboard extends PureComponent {

  render() {

    const {
      classes
    } = this.props;

    return (
      <div className={classes.window + ' ' + classes.border}>
        <h1>Welcome Stephen!</h1>
        <h3>Here are your leases:</h3>
        <div className={classes.container + ' ' + classes.border}>
            <div className={classes.card}>
              <div className={classes.cardContent}>123 Main Street</div>
              <div className={classes.cardContent}>San Francisco, CA 90210</div>
              <div className={classes.cardContent}>Mike Johnson</div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardContent}>Address</div>
              <div className={classes.cardContent}>Tenant Name</div>
              <div className={classes.cardContent}>Caption goes here</div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardContent}>Address</div>
              <div className={classes.cardContent}>Tenant Name</div>
              <div className={classes.cardContent}>Caption goes here</div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardContent}>Address</div>
              <div className={classes.cardContent}>Tenant Name</div>
              <div className={classes.cardContent}>Caption goes here</div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardContent}>Address</div>
              <div className={classes.cardContent}>Tenant Name</div>
              <div className={classes.cardContent}>Caption goes here</div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardContent}>Address</div>
              <div className={classes.cardContent}>Tenant Name</div>
              <div className={classes.cardContent}>Caption goes here</div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardContent}>Address</div>
              <div className={classes.cardContent}>Tenant Name</div>
              <div className={classes.cardContent}>Caption goes here</div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardContent}>Address</div>
              <div className={classes.cardContent}>Tenant Name</div>
              <div className={classes.cardContent}>Caption goes here</div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardContent}><input type='button' value='Create New Lease'></input></div>
            </div>

        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {};

export default withStyles(styles)(Dashboard);
