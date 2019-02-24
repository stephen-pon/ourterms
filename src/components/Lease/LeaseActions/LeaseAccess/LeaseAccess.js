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

class LeaseAccess extends PureComponent {

  confirmAction() {
    alert('An access scheduling notice was emailed to your tenant.');
    window.location.href = '/lease/{id}'; /* FIX THIS */
  };

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
          <div className={classes.container + ' ' + classes.border}>
              <div className={classes.card}>
                <h3>Schedule Access</h3>
                <div>Select date of inspection or repair:</div><p></p>
                <input style={{margin: 20}} type='date'></input>
                <div>Select reason for access:</div><p></p>
                <div className={classes.button} style={{backgroundColor: 'white'}} onClick={this.confirmAccess}>Inspection</div>
                <center>OR</center>
                <div className={classes.button} style={{backgroundColor: 'white'}} onClick={this.confirmAction}>Repair</div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

LeaseAccess.propTypes = {};

export default withStyles(styles)(LeaseAccess);
