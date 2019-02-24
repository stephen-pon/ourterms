import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeaseDetail from './LeaseDetail';
import {push} from 'connected-react-router';



const mapStateToProps = (state, ownProps) => {

  return {
    id: ownProps.match.params.leaseId
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({

	amend: () => push('./:leaseId/amend'),

	schedule: () => push('./:leaseId/access'),

	terminate: () => push('./:leaseId/terminate'),


}, dispatch);

const LeaseDetailContainer = connect(mapStateToProps, mapDispatchToProps)(LeaseDetail);

export default LeaseDetailContainer;
