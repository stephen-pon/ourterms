import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeaseAmend from './LeaseAmend';


const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

const LeaseAmendContainer = connect(mapStateToProps, mapDispatchToProps)(LeaseAmend);

export default LeaseAmendContainer;
