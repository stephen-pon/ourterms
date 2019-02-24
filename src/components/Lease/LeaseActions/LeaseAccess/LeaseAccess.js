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
    // border: 'thin red solid',
    borderRadius: 4,
    // color: 'white',
    // backgroundColor: 'blue',
    fontWeight: 'bold',
    boxShadow: '5px 10px 18px #888888'
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
  window: {
    padding: '50px 100px 0 100px'
  }
});

class LeaseAccess extends PureComponent {

  render() {

    const {
      id,
      classes
    } = this.props;

    return (
      <div>
        <div className={classes.window + ' ' + classes.border}>
          <h1 style={{margin: 0}}>123 Main Street</h1>
          <hr style={{margin: 0}}></hr>
          <div className={classes.container + ' ' + classes.border}>

              <div className={classes.card}>
                <h3>Schedule Access</h3>
                <div>Select date of inspection or repair:</div><p></p>
                <input style={{margin: 20}} type='date'></input>
                <div className={classes.button} style={{backgroundColor: 'lime'}}>Schedule Inspection</div>
                <div className={classes.button} style={{backgroundColor: 'crimson'}}>Schedule Repair</div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

LeaseAccess.propTypes = {};

export default withStyles(styles)(LeaseAccess);
