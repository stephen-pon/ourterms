import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

import Card from './Card';
import { setCurrentLease } from '../../../actions';


const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  leaseNav: (id) => push('/lease/' + id),
  setCurrentLease: (id) => setCurrentLease(id)
}, dispatch);

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Card);

export default DashboardContainer;
