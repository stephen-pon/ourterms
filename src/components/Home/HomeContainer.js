import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from './Home';
import { login } from '../../actions';


const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  login: () => login()
}, dispatch);

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
