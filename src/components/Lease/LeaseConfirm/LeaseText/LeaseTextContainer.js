import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeaseText from './LeaseText';


const mapStateToProps = state => {

  return {
    name: state.lease.landlord,
    address: state.lease.address + ' ' + state.lease.city + ', ' + state.lease.state + ' ' + state.lease.zip,
    termStart: state.lease.term_start,
    termEnd: state.lease.term_end
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

const LeaseTextContainer = connect(mapStateToProps, mapDispatchToProps)(LeaseText);

export default LeaseTextContainer;
