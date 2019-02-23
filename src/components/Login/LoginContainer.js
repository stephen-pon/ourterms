import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './Login';


const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
