import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeaseSign from './LeaseSign';


const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

const LeaseSignContainer = connect(mapStateToProps, mapDispatchToProps)(LeaseSign);

export default LeaseSignContainer;
