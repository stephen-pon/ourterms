import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeaseCreate from './LeaseCreate';


const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

const LeaseCreateContainer = connect(mapStateToProps, mapDispatchToProps)(LeaseCreate);

export default LeaseCreateContainer;
