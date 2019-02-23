import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Create from './Create';


const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

const CreateContainer = connect(mapStateToProps, mapDispatchToProps)(Create);

export default CreateContainer;
