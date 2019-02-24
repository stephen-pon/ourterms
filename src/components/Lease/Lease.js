import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Switch, Route, Redirect } from 'react-router-dom';

import LeaseDetailContainer from './LeaseDetail/LeaseDetailContainer';
import LeaseCreateContainer from './LeaseCreate/LeaseCreateContainer';
import LeaseConfirmContainer from './LeaseConfirm/LeaseConfirmContainer';
import LeaseSignContainer from './LeaseActions/LeaseSign/LeaseSignContainer';
import LeaseAmendContainer from './LeaseActions/LeaseAmend/LeaseAmendContainer';
import LeaseTerminateContainer from './LeaseActions/LeaseTerminate/LeaseTerminateContainer';
import LeaseAccessContainer from './LeaseActions/LeaseAccess/LeaseAccessContainer';
import LeaseRepairContainer from './LeaseActions/LeaseRepair/LeaseRepairContainer';


const styles = (theme) => ({

});

class Lease extends PureComponent {

  render() {
    return (
      <Switch>
        <Route path='/lease/create' component={LeaseCreateContainer} />
        <Route path='/lease/confirm' component={LeaseConfirmContainer} />
        <Route path='/lease/:leaseId/sign' component={LeaseSignContainer} />
        <Route path='/lease/:leaseId/amend' component={LeaseAmendContainer} />
        <Route path='/lease/:leaseId/terminate' component={LeaseTerminateContainer} />
        <Route path='/lease/:leaseId/access' component={LeaseAccessContainer} />
        <Route path='/lease/:leaseId/repair' component={LeaseRepairContainer} />
        <Route path='/lease/:leaseId' component={LeaseDetailContainer} />
        <Redirect exact={true} from="/lease" to="/lease/create" />
      </Switch>
    );
  }
}

Lease.propTypes = {};

export default withStyles(styles)(Lease);
