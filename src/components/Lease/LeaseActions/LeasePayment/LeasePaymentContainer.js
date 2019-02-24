import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

import LeasePayment from './LeasePayment';


const mapStateToProps = state => {
  return {
    current_lease: state.lease.current_lease
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  detailNav: (id) => push('/lease/' + id)
}, dispatch);

const LeasePaymentContainer = connect(mapStateToProps, mapDispatchToProps)(LeasePayment);

export default LeasePaymentContainer;
