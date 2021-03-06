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

class LeaseSign extends PureComponent {

  confirmAction() {
    const r = window.confirm('Lease has been emailed to you and your tenant for signature.'); if (r == true) {
      this.props.signLease(this.props.current_lease);
      this.props.detailNav(this.props.current_lease);
    }
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
              <h3>Create a new lease</h3>
              <div>Enter tenant's name and email:</div><p></p>
              Name <input style={{ margin: 20 }} type='text' required></input><br></br>
              Email <input style={{ margin: 20 }} type='email' required></input>
              <div className={classes.button} style={{ backgroundColor: 'white' }} onClick={this.confirmAction.bind(this)}>Email contract for signature</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LeaseSign.propTypes = {
  current_lease: PropTypes.string,
  signLease: PropTypes.func,
  detailNav: PropTypes.func
};

export default withStyles(styles)(LeaseSign);
