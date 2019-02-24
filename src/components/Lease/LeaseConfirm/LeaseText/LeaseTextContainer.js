import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeaseText from './LeaseText';


const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

const LeaseTextContainer = connect(mapStateToProps, mapDispatchToProps)(LeaseText);

export default LeaseTextContainer;
