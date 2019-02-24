import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

import LeaseCreate from './LeaseCreate';
import {
  editLandlord,
  editAddress,
  editCity,
  editState,
  editZip,
  editTermEnd,
  editRent,
  editDeposit,
  editMethod,
  editPaymentMethod,
  editPaymentAddress
} from '../../../actions';


const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  confirmNav: () => push('/lease/confirm'),
  editLandlord: (val) => editLandlord(val),
  editAddress: (val) => editAddress(val),
  editCity: (val) => editCity(val),
  editState: (val) => editState(val),
  editZip: (val) => editZip(val),
  editTermEnd: (val) => editTermEnd(val),
  editRent: (val) => editRent(val),
  editDeposit: (val) => editDeposit(val),
  editMethod: (val) =>editMethod(val),
  editPaymentMethod: (val) => editPaymentMethod(val),
  editPaymentAddress: (val) => editPaymentAddress(val)
}, dispatch);

const LeaseCreateContainer = connect(mapStateToProps, mapDispatchToProps)(LeaseCreate);

export default LeaseCreateContainer;
