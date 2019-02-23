import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';


const styles = (theme) => ({
  toolbar: {
    boxShadow: theme.shadows[1],
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

class PageWrapper extends PureComponent {

  render() {
    const {
      classes,
      children
    } = this.props;

    return (
      <div>
        <Toolbar classes={{ root: classes.toolbar }}></Toolbar>
        {children}
      </div>
    );
  }
}

PageWrapper.propTypes = {};

export default withStyles(styles)(PageWrapper);
