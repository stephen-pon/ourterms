import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeasePayment from './LeasePayment';


const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

const LeasePaymentContainer = connect(mapStateToProps, mapDispatchToProps)(LeasePayment);

export default LeasePaymentContainer;
