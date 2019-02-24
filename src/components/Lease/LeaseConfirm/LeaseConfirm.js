import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import SidebarContainer from './Sidebar/SidebarContainer';
import LeaseTextContainer from './LeaseText/LeaseTextContainer';


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
        <LeaseTextContainer />
      </div>
    );
  }
}

LeaseConfirm.propTypes = {};

export default withStyles(styles)(LeaseConfirm);
