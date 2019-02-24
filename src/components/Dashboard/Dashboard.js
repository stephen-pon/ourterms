import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import Card from './Card/Card';


const styles = (theme) => ({
  card: {
    width: 200,
    height: 90,
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
          <Card
            address1={'123 Main St.'}
            address2={'San Francisco, CA 94103'}
            name={'Mike Johnson'}
          />
          <Card
            address1={'254 Beale St.'}
            address2={'San Francisco, CA 94103'}
            name={'Patrick Stewart'}
          />
          <Card
            address1={'405 Howard St.'}
            address2={'San Francisco, CA 94103'}
            name={'Mr. Orrick'}
          />
          <Card
            address1={'365 Year St.'}
            address2={'San Francisco, CA 94103'}
            name={'None'}
          />
          <Card
            address1={'1232 Mouser St.'}
            address2={'San Francisco, CA 94103'}
            name={'None'}
          />
          <Card
            address1={'254 Beale St.'}
            address2={'San Francisco, CA 94103'}
            name={'John Stewart'}
          />
          <Card
            address1={'443 Arizona St.'}
            address2={'San Francisco, CA 94103'}
            name={'Shirley Temple'}
          />
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
