import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({
  card: {
    // width: 200,
    // height: 60,
    display: 'inline-block',
    margin: 20,
    // border: 'thin black solid',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 4,
  },
  button: {
    margin: 20,
    // width: 150,
    padding: 8,
    // border: 'thin red solid',
    borderRadius: 4,
    color: 'white',
    backgroundColor: 'blue',
    fontWeight: 'bold',
  },
  container: {
    width: 960,
    display: 'flex',
    flexWrap: 'wrap',
    margin: 'auto',
  },
  border: {
    border: 'thin red solid',
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
          <h1>123 Main Street</h1>
          <h1>Lease ID {id}</h1>
          <h3>Tenant: Michael Johnson</h3>
          <h3>Term: Month to Month</h3>
          <div className={classes.container + ' ' + classes.border}>
              <div className={classes.card}>
                <div className={classes.button}>Amend Lease</div>
                <div className={classes.button}>Terminate Lease</div>
                <div className={classes.button}>Schedule inspection / repair</div>
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
