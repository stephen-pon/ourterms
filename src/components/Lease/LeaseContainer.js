import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Lease from './Lease';


const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

const LeaseContainer = connect(mapStateToProps, mapDispatchToProps)(Lease);

export default LeaseContainer;
