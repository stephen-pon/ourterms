import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({
  header:{
    textAlign: 'center',
    paddingBottom: '2%',
  },

  divForm:{
    height: '50%',
    margin: '0',
    },

	form:{
		padding: '0 40% 0 40%',
    verticalAlign: 'middle',
    height: '100%',
    margin:'auto',
    display: 'flex',
    flexDirection: 'column',
	},

  label:{
    padding: '5px',

  }

  
});

class LeaseCreate extends PureComponent {


  render() {
  	const {
      classes
    } = this.props;

    return (
      <div>
        <header className={classes.header}>
        <h1>Create  a new lease form </h1>
        </header>


      <div className={classes.divForm} >
      <form className={classes.form}>

          <label className={classes.label}>
            Landlord's name
          </label>
  	      <input type = 'text'/> 
          
          <label className={classes.label}>
            Address
          </label>
          <input type = 'text'/> 

          <label className={classes.label}>
            Term start
          </label>
          <input type = 'text'/> 

          <label className={classes.label}>
            Term end 
          </label>
          <input type = 'text'/> 

          <label className={classes.label}>
            Monthly rent 
          </label>
          <input type = 'text'/> 

          <label className={classes.label}>
            Security deposit
          </label>
          <input type = 'text'/> 

          <label className={classes.label}>
            Payment method  
          </label>
          <input type = 'text'/> 

          <label className={classes.label}>
            Payment method
          </label>
          <input type = 'text'/> 
          <label className={classes.label}>
          </label>
          <button style={{fontWeight: 'bold'}}> Submit</button>

          </form>

        </div>
          

      </div>
    );
  }
}

LeaseCreate.propTypes = {};

export default withStyles(styles)(LeaseCreate);
