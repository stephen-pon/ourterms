import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({

});

class Create extends PureComponent {

  render() {
    return (
      <div>
        <h1>This is the form/flow where the user can create their lease</h1>
      </div>
    );
  }
}

Create.propTypes = {};

export default withStyles(styles)(Create);
