import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({
  card: {
    // width: 200,
    // height: 60,
    display: 'inline-block',
    margin: 0,
    // border: 'thin black solid',
    // alignSelf: 'center',
    padding: 0,
    borderRadius: 4,
  },
  button: {
    margin: 20,
    // width: 150,
    padding: 8,
    border: 'thin black solid',
    borderRadius: 4,
    // color: 'white',
    // backgroundColor: 'blue',
    fontWeight: 'bold',
    boxShadow: '2px 5px 9px #888888'
  },
  container: {
    width: 960,
    display: 'flex',
    flexWrap: 'wrap',
    // margin: 'auto',
  },
  border: {
    // border: 'thin red solid',
  },
  h1: {
    margin: 0,
  },
  hr: {
    margin: 0,
  },
  window: {
    padding: '50px 100px 0 100px'
  }
});

class LeaseDetail extends PureComponent {

  render() {
    const {
      id,
      classes
    } = this.props;

    return (
      <div>
        <div className={classes.window + ' ' + classes.border}>
          <h1 className={classes.h1}>123 Main Street</h1>
          <hr className={classes.hr}></hr>
          <h3>Tenant: Michael Johnson</h3>
          <h3>Term: Month to Month</h3>
          <div className={classes.container + ' ' + classes.border}>
              <div className={classes.card}>
                <div className={classes.button} style={{backgroundColor: 'white'}}>Amend Lease</div>
                <div className={classes.button} style={{backgroundColor: 'white'}}>Schedule inspection / repair</div>
                <div className={classes.button} style={{backgroundColor: 'crimson'}}>Send Notice of Breach</div>
                <div className={classes.button} style={{backgroundColor: 'white', color: 'lightgrey'}}>Terminate Lease</div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

LeaseDetail.propTypes = {
  id: PropTypes.string
};

export default withStyles(styles)(LeaseDetail);
