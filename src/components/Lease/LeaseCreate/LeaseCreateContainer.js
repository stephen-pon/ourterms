import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

import LeaseCreate from './LeaseCreate';
import {
  editLandlord
} from '../../../actions';


const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  confirmNav: () => push('/lease/confirm'),
  editLandlord: (val) => editLandlord(val)
}, dispatch);

const LeaseCreateContainer = connect(mapStateToProps, mapDispatchToProps)(LeaseCreate);

export default LeaseCreateContainer;
