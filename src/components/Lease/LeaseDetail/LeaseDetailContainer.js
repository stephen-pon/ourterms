import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeaseDetail from './LeaseDetail';


const mapStateToProps = (state, ownProps) => {

  return {
    id: ownProps.match.params.leaseId
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

const LeaseDetailContainer = connect(mapStateToProps, mapDispatchToProps)(LeaseDetail);

export default LeaseDetailContainer;
