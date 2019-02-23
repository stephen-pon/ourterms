import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './Home';
import {push} from 'connected-react-router';
import { login } from '../../actions';


const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
	loginNav: () => push('/login')
}, dispatch);

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
