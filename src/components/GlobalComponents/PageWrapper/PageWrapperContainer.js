import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PageWrapper from './PageWrapper';


const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

const PageWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(PageWrapper);

export default PageWrapperContainer;
