import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeaseConfirm from './LeaseConfirm';


const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

const LeaseConfirmContainer = connect(mapStateToProps, mapDispatchToProps)(LeaseConfirm);

export default LeaseConfirmContainer;
