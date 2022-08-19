import React, { useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom"

// Pages
import Login from "./Pages/Login/Login";
import UserList from './Pages/UserList/UserList';
import Test from './Pages/test';
import UserDetails from './Pages/UserDetails/UserDetails';

const App = ({ history }) => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/user-list" exact component={UserList} />
      <Route path="/user-details" exact component={UserDetails} />
      <Route path="/test" exact component={Test} />
      <Redirect to="/" />
    </Switch>
  )
}

export default withRouter(App);