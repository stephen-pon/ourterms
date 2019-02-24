import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

import LeaseCreate from './LeaseCreate';


const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  confirmNav: () => push('/lease/confirm')
}, dispatch);

const LeaseCreateContainer = connect(mapStateToProps, mapDispatchToProps)(LeaseCreate);

export default LeaseCreateContainer;
