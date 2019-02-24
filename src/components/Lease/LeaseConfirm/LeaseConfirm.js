import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import SidebarContainer from './Sidebar/SidebarContainer';


const styles = (theme) => ({

});

class LeaseConfirm extends PureComponent {

  render() {
    const {
      classes
    } = this.props;

    return (
      <div>
        <SidebarContainer />
      </div>
    );
  }
}

LeaseConfirm.propTypes = {};

export default withStyles(styles)(LeaseConfirm);
