import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({
  card: {
    fontSize: 13,
    width: 200,
    // height: 60,
    display: 'inline-block',
    margin: 20,
    border: 'thin black solid',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 4,
    cursor: 'pointer',
    boxShadow: '2px 5px 9px #888888',
  },
  cardContent: {
  },
});

class Card extends PureComponent {

  cardClicked(id) {
    this.props.setCurrentLease(id);
    this.props.leaseNav(id);
  }

  render() {
    const {
      classes,
      address1,
      address2,
      name,
      id,
      leaseNav
    } = this.props;

    return (
      <div className={classes.card} onClick={this.cardClicked.bind(this, id)}>
        <div>{address1}</div>
        <div>{address2}</div>
        <div>Tenant: {name}</div>
      </div>
    );
  }
}

Card.propTypes = {
  address1: PropTypes.string,
  address2: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  leaseNav: PropTypes.func,
  setCurrentLease: PropTypes.func
};

export default withStyles(styles)(Card);
