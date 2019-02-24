import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeaseBreach from './LeaseBreach';


const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

const LeaseBreachContainer = connect(mapStateToProps, mapDispatchToProps)(LeaseBreach);

export default LeaseBreachContainer;
