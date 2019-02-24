import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


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
    boxShadow: '2px 5px 9px #888888',
    cursor: 'pointer'
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
    paddingTop: 10
  },
  hr: {
    margin: 0,
  },
  window: {
    padding: '50px 100px 0 100px'
  },
  backButton: {
    paddingBottom: 20
  }
});

class LeaseDetail extends PureComponent {

  render() {
    const {
      id,
      classes,
      amend,
      schedule,
      terminate,
      lease,
      sign,
      dashNav,
      payment,
    } = this.props;

    return (
      <div>
        <div className={classes.window + ' ' + classes.border}>
          <span>
            <button onClick={dashNav}>Back</button>
          </span>
          <h1 className={classes.h1}>{lease.address1} {lease.address2}</h1>
          <hr className={classes.hr}></hr>
          <h3>Tenant: {lease.name}</h3>
          <h3>Term: {lease.term}</h3>
          {
            lease.signed ? <h3>Pending Signature</h3> : ''
          }
          {
            lease.name == 'None' ?
              <div className={classes.container + ' ' + classes.border}>
                <div className={classes.card}>
                  <div className={classes.button} style={{ backgroundColor: 'white' }} onClick={sign.bind(this, id)}>Sign with tenant</div>
                  <div className={classes.button} style={{ backgroundColor: 'white' }}>Edit Lease Document</div>
                  <div className={classes.button} style={{ backgroundColor: 'white' }}>Print PDF</div>
                </div>
              </div>
              :
              <div className={classes.container + ' ' + classes.border}>
                <div className={classes.card}>
                  <div className={classes.button} style={{ backgroundColor: 'white' }} onClick={amend.bind(this, id)}>Amend Lease</div>
                  <div className={classes.button} style={{ backgroundColor: 'white' }} onClick={schedule.bind(this, id)}>Schedule inspection / repair</div>
                  <div className={classes.button} style={{ backgroundColor: 'white' }} onClick={payment.bind(this, id)}>Request Payment from Tenant</div>
                  <div className={classes.button} style={{ backgroundColor: 'white' }} onClick={terminate.bind(this, id)}>Breach of lease</div>
                </div>
              </div>
          }
        </div>
      </div>
    );
  }
}

LeaseDetail.propTypes = {
  id: PropTypes.string,
  amend: PropTypes.func,
  schedule: PropTypes.func,
  terminate: PropTypes.func,
  sign: PropTypes.func,
  lease: PropTypes.object,
  dashNav: PropTypes.func,
  payment: PropTypes.func,
};

export default withStyles(styles)(LeaseDetail);
