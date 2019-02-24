import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

import Card from './Card';


const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  leaseNav: (id) => push('/lease/' + id)
}, dispatch);

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Card);

export default DashboardContainer;
