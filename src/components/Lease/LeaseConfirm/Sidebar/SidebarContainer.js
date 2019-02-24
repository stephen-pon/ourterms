import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

import Sidebar from './Sidebar';
import {
  saveLease,
  addPets,
  addSmoking,
  addWaterbed
} from '../../../../actions';


const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  saveHit: () => push('/dashboard'),
  saveLease: () => saveLease(),
  addPets: () => addPets(),
  addSmoking: () => addSmoking(),
  addWaterbed: () => addWaterbed()
}, dispatch);

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
