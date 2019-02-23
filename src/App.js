import React, { Component } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Redirect, Route, Switch } from "react-router-dom";

import store, { history } from "./store/store";
import HomeContainer from "./components/Home/HomeContainer";
import LoginContainer from './components/Login/LoginContainer';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import CreateContainer from './components/Create/CreateContainer';
import LeaseContainer from './components/Lease/LeaseContainer';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/home" component={HomeContainer} />
            <Route path='/login' component={LoginContainer} />
            <Route path='/dashboard' component={DashboardContainer} />
            <Route path='/create' component={CreateContainer} />
            <Route path='/lease' component={LeaseContainer} />
            <Redirect exact={true} from="/" to="/home" />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
