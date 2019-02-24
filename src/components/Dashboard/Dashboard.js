import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import _ from 'lodash';

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
  },
  container: {
    width: 960,
    display: 'flex',
    flexWrap: 'wrap',
    margin: 'auto',
  },
  window: {
    padding: '50px 100px 0 100px'
  }
});

class Dashboard extends PureComponent {

  render() {

    const {
      classes,
      createNav,
      leases
    } = this.props;

    return (
      <div className={classes.window + ' ' + classes.border}>
        <h1>Welcome Stephen!</h1>
        <h3>Here are your leases:</h3>
        <div className={classes.container + ' ' + classes.border}>
          {
            _.map(leases, (lease) => {
              return <CardContainer
                address1={lease.address1}
                address2={lease.address2}
                name={lease.name}
                id={lease.id}
              />
            })
          }
          <div className={classes.card} onClick={createNav}>
            <div>Create New Lease</div>
          </div>

        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  createNav: PropTypes.func,
  leases: PropTypes.array
};

export default withStyles(styles)(Dashboard);
