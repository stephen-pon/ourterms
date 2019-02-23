import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './Home';


const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
