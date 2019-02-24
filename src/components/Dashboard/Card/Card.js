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
  },
  cardContent: {
  },
});

class Card extends PureComponent {

  render() {
    const {
      classes,
      address1,
      address2,
      name
    } = this.props;

    return (
      <div className={classes.card}>
        <div className={classes.cardContent}>{address1}</div>
        <div className={classes.cardContent}>{address2}</div>
        <div className={classes.cardContent}>Tenant: {name}</div>
      </div>
    );
  }
}

Card.propTypes = {
  address1: PropTypes.string,
  address1: PropTypes.string,
  name: PropTypes.string
};

export default withStyles(styles)(Card);
