import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeaseRepair from './LeaseRepair';


const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

const LeaseRepairContainer = connect(mapStateToProps, mapDispatchToProps)(LeaseRepair);

export default LeaseRepairContainer;
