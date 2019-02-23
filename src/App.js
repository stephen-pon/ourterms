import React, { Component } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Redirect, Route, Switch } from "react-router-dom";

import store, { history } from "./store/store";
import HomeContainer from "./components/Home/HomeContainer";
import LoginContainer from './components/Login/LoginContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/home" component={HomeContainer} />
            <Route path='/login' component={LoginContainer} />
            <Redirect exact={true} from="/" to="/home" />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
