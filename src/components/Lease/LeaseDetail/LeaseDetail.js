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

class LeaseDetail extends PureComponent {

  render() {
    const {
      id,
      classes,
      amend,
      schedule,
      terminate,
      lease
    } = this.props;

    return (
      <div>
        <div className={classes.window + ' ' + classes.border}>
          <h1 className={classes.h1}>{lease.address1} {lease.address2}</h1>
          <hr className={classes.hr}></hr>
          <h3>Tenant: {lease.name}</h3>
          <h3>Term: {lease.term}</h3>
          <div className={classes.container + ' ' + classes.border}>
            <div className={classes.card}>
              <div className={classes.button} style={{ backgroundColor: 'white' }} onClick={amend.bind(this, id)}>Amend Lease</div>
              <div className={classes.button} style={{ backgroundColor: 'white' }} onClick={schedule.bind(this, id)}>Schedule inspection / repair</div>
              <div className={classes.button} style={{ backgroundColor: 'crimson' }} onClick={terminate.bind(this, id)}>Terminate Lease</div>
            </div>
          </div>
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
  lease: PropTypes.object
};

export default withStyles(styles)(LeaseDetail);
