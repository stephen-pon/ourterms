import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

import Dashboard from './Dashboard';


const mapStateToProps = state => {

  return {
    leases: state.lease.leases
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  createNav: () => push('/lease/create')
}, dispatch);

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default DashboardContainer;
