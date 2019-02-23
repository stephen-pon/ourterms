import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeaseTerminate from './LeaseTerminate';


const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

const LeaseTerminateContainer = connect(mapStateToProps, mapDispatchToProps)(LeaseTerminate);

export default LeaseTerminateContainer;
