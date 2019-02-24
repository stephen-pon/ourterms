import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LeaseSign from './LeaseSign';
import { push } from 'connected-react-router';
import { signLease } from '../../../../actions';


const mapStateToProps = state => {

  return {
    current_lease: state.lease.current_lease
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  detailNav: (id) => push('/lease/' + id),
  signLease: (id) => signLease(id)
}, dispatch);

const LeaseSignContainer = connect(mapStateToProps, mapDispatchToProps)(LeaseSign);

export default LeaseSignContainer;
