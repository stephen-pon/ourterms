import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import CardContainer from './Card/CardContainer';


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
    cursor: 'pointer',
    textAlign: 'center',
    boxShadow: '2px 5px 9px #888888',
    // verticalAlign: 'middle',
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
      classes,
      createNav
    } = this.props;

    return (
      <div className={classes.window + ' ' + classes.border}>
        <h1>Welcome Stephen!</h1>
        <h3>Here are your leases:</h3>
        <div className={classes.container + ' ' + classes.border}>
          <CardContainer
            address1={'123 Main St.'}
            address2={'San Francisco, CA 94103'}
            name={'Mike Johnson'}
            id={'123main'}
          />
          <CardContainer
            address1={'254 Beale St.'}
            address2={'San Francisco, CA 94103'}
            name={'Patrick Stewart'}
            id={'254beale'}
          />
          <CardContainer
            address1={'405 Howard St.'}
            address2={'San Francisco, CA 94103'}
            name={'Mr. Orrick'}
            id={'405howard'}
          />
          <CardContainer
            address1={'365 Year St.'}
            address2={'San Francisco, CA 94103'}
            name={'None'}
            id={'365year'}
          />
          <CardContainer
            address1={'1232 Mouser St.'}
            address2={'San Francisco, CA 94103'}
            name={'None'}
            id={'1232mouser'}
          />
          <CardContainer
            address1={'254 Beale St.'}
            address2={'San Francisco, CA 94103'}
            name={'John Stewart'}
            id={'254beale'}
          />
          <CardContainer
            address1={'443 Arizona St.'}
            address2={'San Francisco, CA 94103'}
            name={'Shirley Temple'}
            id={'443arizona'}
          />
          <div className={classes.card} onClick={createNav}>
            <div className={classes.cardContent}>Create New Lease</div>
          </div>

        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  createNav: PropTypes.func
};

export default withStyles(styles)(Dashboard);
