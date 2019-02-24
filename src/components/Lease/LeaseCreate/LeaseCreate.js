import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({
	form:{
		textAlign: 'center',
	}

});

class LeaseCreate extends PureComponent {

  render() {
  	const {
      classes,
      loginNav

    } = this.props;
    return (
      <div>
      	<h3>This is the where the Landlord create the lease</h3>
      <form className ={classes.form}>
	      <input type = 'text'> Landlord's name </input>
	      <input type = 'text'> Address</input>
	      <input type = 'text'> Term start</input>
	      <input type = 'text'> Term end </input>
	      <input type = 'text'> Monthly rent</input>
	      <input type = 'text'> Security deposit</input>
	      <input type = 'text'> Payment method </input>
	      <input type = 'text'> Address</input>
	      <input type="submit" value="Submit"></input>

      </form>
        <h1>This is the create new lease form/flow page</h1>
      </div>
    );
  }
}

LeaseCreate.propTypes = {};

export default withStyles(styles)(LeaseCreate);
