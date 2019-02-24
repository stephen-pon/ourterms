import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

import LeaseAccess from './LeaseAccess';


const mapStateToProps = state => {

  return {
    current_lease: state.lease.current_lease
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  detailNav: (id) => push('/lease/' + id)
}, dispatch);

const LeaseAccessContainer = connect(mapStateToProps, mapDispatchToProps)(LeaseAccess);

export default LeaseAccessContainer;
