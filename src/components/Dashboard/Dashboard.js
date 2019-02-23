import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({
  card: {
    width: 150,
    display: 'inline-block',
    margin: 20,
    border: 'thin gold solid'
  }
});

class Dashboard extends PureComponent {

  render() {

    const {
      classes
    } = this.props;

    return (
      <div>
        <h1>This is the dashboard page that comes after login</h1>
        <div className={classes.card}>
          <img class="card-img-top" src="http://fillmurray.com/150/150" alt="Card image cap"></img>
          <div class="card-body">Address</div>
          <div class="card-body">Tenant Name</div>
          <div class="card-body">Caption goes here</div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {};

export default withStyles(styles)(Dashboard);
