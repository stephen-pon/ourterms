import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({
  header: {
    textAlign: 'center',
    paddingBottom: '2%',
  },

  divForm: {
    height: '50%',
    margin: '0',
  },

  form: {
    padding: '0 40% 0 40%',
    verticalAlign: 'middle',
    height: '100%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },

  label: {
    padding: '5px',

  }


});

class LeaseCreate extends PureComponent {

  editLandlord(event) {
    const val = event.target.value;
    this.props.editLandlord(val);
  }

  editAddress(event) {
    const val = event.target.value;
    this.props.editAddress(val);
  }

  editCity(event) {
    const val = event.target.value;
    this.props.editCity(val);
  }

  editState(event) {
    const val = event.target.value;
    this.props.editState(val);
  }

  editZip(event) {
    const val = event.target.value;
    this.props.editZip(val);
  }

  editTermStart(event) {
    const val = event.target.value;
    this.props.editTermStart(val);
  }

  editTermEnd(event) {
    const val = event.target.value;
    this.props.editTermEnd(val);
  }

  editRent(event) {
    const val = event.target.value;
    this.props.editRent(val);
  }

  editDeposit(event) {
    const val = event.target.value;
    this.props.editDeposit(val);
  }

  editMethod(event) {
    const val = event.target.value;
    this.props.editMethod(val);
  }

  editPaymentMethod(event) {
    const val = event.target.value;
    this.props.editPaymentMethod(val);
  }

  editPaymentAddress(event) {
    const val = event.target.value;
    this.props.editPaymentAddress(val);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.confirmNav();
  }


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
          <form className={classes.form} onSubmit={this.handleSubmit.bind(this)}>

            <label className={classes.label}>
              Landlord's name
            </label>
            <input type='text' onChange={this.editLandlord.bind(this)} />

            <label className={classes.label}>
              Address
            </label>
            <input type='text' onChange={this.editAddress.bind(this)} />

            <label className={classes.label}>
              City
          </label>
            <input type='text' onChange={this.editCity.bind(this)} />

            <label className={classes.label}>
              State
          </label>
            <input type='text' onChange={this.editState.bind(this)} />

            <label className={classes.label}>
              Zip
          </label>
            <input type='text' onChange={this.editZip.bind(this)} />

            <label className={classes.label}>
              Term start
          </label>
            <input type='date' onChange={this.editTermStart.bind(this)} />

            <label className={classes.label}>
              Term end
          </label>
            <input type='date' onChange={this.editTermEnd.bind(this)} />

            <label className={classes.label}>
              Monthly rent
          </label>
            <input type='text' onChange={this.editRent.bind(this)} />

            <label className={classes.label}>
              Security deposit
          </label>
            <input type='text' onChange={this.editDeposit.bind(this)} />

            <label className={classes.label}>
              Payment method
          </label>
            <select onChange={this.editMethod.bind(this)} >
              <option value=""></option>
              <option value="Check">Check</option>
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
            </select>

            <label className={classes.label}>
              Payment address
          </label>
            <input type='text' onChange={this.editPaymentAddress.bind(this)} />
            <label className={classes.label}>
            </label>
            <button style={{ fontWeight: 'bold' }}> Submit</button>

          </form>

        </div>


      </div>
    );
  }
}

LeaseCreate.propTypes = {
  confirmNav: PropTypes.func,
  editLandlord: PropTypes.func,
  editAddress: PropTypes.func,
  editCity: PropTypes.func,
  editState: PropTypes.func,
  editZip: PropTypes.func,
  editTermStart: PropTypes.func,
  editTermEnd: PropTypes.func,
  editRent: PropTypes.func,
  editDeposit: PropTypes.func,
  editMethod: PropTypes.func,
  editPaymentMethod: PropTypes.func,
  editPaymentAddress: PropTypes.func,

};

export default withStyles(styles)(LeaseCreate);
