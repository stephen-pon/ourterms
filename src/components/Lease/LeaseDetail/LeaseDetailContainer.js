import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeaseDetail from './LeaseDetail';
import { push } from 'connected-react-router';



const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.leaseId;
  const lease = state.lease.leases[id];

  return {
    id,
    lease
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  amend: (id) => push('/lease/' + id + '/amend'),
  schedule: (id) => push('/lease/' + id + '/access'),
  terminate: (id) => push('/lease/' + id + '/terminate'),
  sign: (id) => push('/lease/' + id + '/sign'),
  payment: (id) => push('/lease/' + id + '/payment'),
  dashNav: () => push('/dashboard')
}, dispatch);

const LeaseDetailContainer = connect(mapStateToProps, mapDispatchToProps)(LeaseDetail);

export default LeaseDetailContainer;
