import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import * as emailjs from 'emailjs-com';



const styles = (theme) => ({
  card: {
    display: 'inline-block',
    margin: 0,
    padding: 0,
    borderRadius: 4,
  },
  button: {
    margin: 20,
    padding: 8,
    border: 'thin black solid',
    borderRadius: 4,
    fontWeight: 'bold',
    boxShadow: '2px 5px 9px #888888'
  },
  container: {
    width: 960,
    display: 'flex',
    flexWrap: 'wrap',
  },
  border: {
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
  "landlord_email": "sponis1@gmail.com",
  "tenant_name": "Sir Patrick Stewart",
  "address": "123 Main Street, San Francisco, CA 12345"
}

var service_id = "sendgrid";
var template_id = "schedule_inspection_for_repair";
var user_id = "user_tdARssLzpl5W9N1I4lxwu";

class LeaseAccess extends PureComponent {

  confirmAction() {
    const that = this;
    emailjs.send(service_id, template_id, template_params, user_id)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);

        const r = window.confirm('An access scheduling notice was emailed to your tenant.'); if (r === true) {
          that.props.detailNav(that.props.current_lease);
        }
      }, function (err) {
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
              <input style={{ margin: 20 }} type='date'></input>
              <div>Select reason for access:</div><p></p>
              <div className={classes.button} style={{ backgroundColor: 'white' }} onClick={this.confirmAction.bind(this)}>Inspection</div>
              <center>OR</center>
              <div className={classes.button} style={{ backgroundColor: 'white' }} onClick={this.confirmAction.bind(this)}>Repair</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LeaseAccess.propTypes = {
  current_lease: PropTypes.string,
  detailNav: PropTypes.func
};

export default withStyles(styles)(LeaseAccess);
