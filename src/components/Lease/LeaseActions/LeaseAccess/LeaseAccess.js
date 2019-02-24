import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import * as emailjs from 'emailjs-com';



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

var template_params = {
   "tenant_email": "stephen.g.pon@gmail.com",
   "landlord_name": "Stephen Pon",
   "landlord_email": "stephen.g.pon@gmail.com",
   "tenant_name": "Sir Patrick Stewart",
   "address": "123 Main Street, San Francisco, CA 12345"
}

var service_id = "sendgrid";
var template_id = "schedule_inspection_for_repair";
var user_id = "user_tdARssLzpl5W9N1I4lxwu";

class LeaseAccess extends PureComponent {

  confirmAction() {
    emailjs.send(service_id, template_id, template_params, user_id)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           alert('An access scheduling notice was emailed to your tenant.');
           window.location.href = '/lease/{id}'; /* FIX THIS */
        }, function(err) {
           console.log('FAILED...', err);
        });
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
                <div className={classes.button} style={{backgroundColor: 'white'}} onClick={this.confirmAction}>Inspection</div>
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
