import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import logo from '../../assets/logo.jpeg';

const styles = theme => ({
  logo: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '45%',
    paddingTop: '2em',
  },

  tagline: {
    textAlign: 'center',
    fontSize: '25px',
  },

  navbar: {
    align: 'center',
    margin: '0',
    padding: '1%',
    listStyleType: 'none',
    display: 'inline',
    backgroundColor: 'gray',

  },

  li: {
    display: 'inline',
    float: 'left',
    padding: '1%'
  },

  main: {
    margin: '30px',
    padding: '5px',
  },

  quotes: {
    margin: '35px',
    padding: '10px',
    textAlign: 'center',
    fontSize: '18px',
  },

  quoteAttr: {
    float: 'right',
    paddingRight: '15px',
    marginRight: '40px',
  },

  button: {
    color: '#65B68E',
    fontSize: '1.2em',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '15px',
    textStyle: 'bold',
  }




});


class Home extends PureComponent {


  render() {
    const {
      classes,
      loginNav

    } = this.props;

    return (
      <div>
        <header>
          <img src={logo} alt="Logo" className={classes.logo} />
          <h2 className={classes.tagline}>Providing a legal solution without the cost of a lawyer </h2>
        </header>
        <main>
          <h3 className={classes.quotes}>
            <img></img>
            This is what we do. We are cool. Love us. Give us money.
          <img></img>
          </h3>
          <button className={classes.button} onClick={loginNav}> <b>Login</b></button>


        </main>
      </div>
    );
  }
}

Home.propTypes = {
  loginNav: PropTypes.func
};

export default withStyles(styles)(Home);
