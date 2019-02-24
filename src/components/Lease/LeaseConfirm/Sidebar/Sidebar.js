import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Radio from '@material-ui/core/Radio';


const styles = (theme) => ({
  drawerPaper: {
    width: 300
  },
  drawer: {
    width: 300,
    flexShrink: 0,
  },
  content: {
    height: '100%',
    width: '100%',
    padding: 10,
    backgroundColor: 'red'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  selector: {
    paddingLeft: 10
  },
  choiceGroup: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 30
  },
  choice: {
    paddingBottom: 5
  },
  radioButton: {

  },
  button: {
    width: 50
  },
  buttonArea: {
    paddingTop: 10,
    display: 'flex',
    justifyContent: 'space-around'
  }
});

class Sidebar extends PureComponent {

  save() {
    this.props.saveHit();
  }

  render() {
    const {
      classes
    } = this.props;

    return (
      <Drawer
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        variant='permanent'
        anchor='left'
        open
      >
        <div className={classes.header}>
          <h3>Other Considerations</h3>
        </div>
        <List className={classes.selector}>
          <ListItem>Pets</ListItem>
          <form className={classes.choiceGroup}>
            <span className={classes.choice}>
              <input type='radio' name='pets'></input> Yes
            </span>
            <span className={classes.choice}>
              <input type='radio' name='pets'></input> No
            </span>
          </form>
          <ListItem>Smoking</ListItem>
          <form className={classes.choiceGroup}>
            <span className={classes.choice}>
              <input type='radio' name='smoking'></input> Yes
            </span>
            <span className={classes.choice}>
              <input type='radio' name='smoking'></input> No
            </span>
          </form>
          <ListItem>Waterbeds</ListItem>
          <form className={classes.choiceGroup}>
            <span className={classes.choice}>
              <input type='radio' name='waterbeds'></input> Yes
            </span>
            <span className={classes.choice}>
              <input type='radio' name='waterbeds'></input> No
            </span>
          </form>
        </List>
        <span className={classes.buttonArea}>
          <button className={classes.button} onClick={this.save.bind(this)}>Save</button>
        </span>
      </Drawer>
    );
  }
}

Sidebar.propTypes = {
  saveHit: PropTypes.func
};

export default withStyles(styles)(Sidebar);
