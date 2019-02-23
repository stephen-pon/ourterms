import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeaseAccess from './LeaseAccess';


const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

const LeaseAccessContainer = connect(mapStateToProps, mapDispatchToProps)(LeaseAccess);

export default LeaseAccessContainer;
