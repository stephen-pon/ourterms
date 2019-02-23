import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  red: {
    color: 'red'
  }
});

class Home extends PureComponent {
  render() {
    const {
      classes
    } = this.props;

    return (
      <div>
        <h1 className={classes.red}>This is the home page</h1>
        <h2>Hello World</h2>
      </div>
    );
  }
}

Home.propTypes = {};

export default withStyles(styles)(Home);
