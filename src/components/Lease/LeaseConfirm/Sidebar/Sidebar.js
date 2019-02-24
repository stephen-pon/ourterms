import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({
  sidebar: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    height: '100%',
    backgroundColor: 'red',
    width: '100px'
  }
});

class Sidebar extends PureComponent {

  render() {
    const {
      classes
    } = this.props;

    return (
      <div className={classes.sidebar}>
        <div className={classes.content}>

        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {};

export default withStyles(styles)(Sidebar);
