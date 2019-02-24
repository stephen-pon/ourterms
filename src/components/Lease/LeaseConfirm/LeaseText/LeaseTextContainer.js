import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeaseText from './LeaseText';


const mapStateToProps = state => {

  return {
    name: state.lease.landlord,
    address: state.lease.address + ' ' + state.lease.city + ', ' + state.lease.state + ' ' + state.lease.zip,
    termStart: state.lease.term_start,
    termEnd: state.lease.term_end,
    pet_clause: state.lease.pet_clause,
    smoking_clause: state.lease.smoking_clause,
    waterbed_clause: state.lease.waterbed_clause
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

const LeaseTextContainer = connect(mapStateToProps, mapDispatchToProps)(LeaseText);

export default LeaseTextContainer;
