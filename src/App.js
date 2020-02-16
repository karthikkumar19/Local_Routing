// import React, { Component } from "react";
import * as React from 'react'
import Addbusdata from './container/addbusdata/Addbusdata';
import "bootstrap/dist/css/bootstrap.css";
import Busdata from './container/busdata/busdata';
import asyncComponent from './hoc/asyncComponent/asynComponent';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';

const asyncAddBus = asyncComponent(() => {
  return import('./container/addbusdata/Addbusdata');
});

// const asyncEdit = asyncComponent(() => {
//   return import('./Container/editpage');
// });

// const asyncAuth = asyncComponent(() => {
//   return import('./Container/Auth/Auth');
// });

class App extends React.Component  {
  
render(){

  let routes = (
    <Switch>
      {/* <Route path="/auth" component={asyncAuth} /> */}
      <Route path="/" exact component={Busdata} />
      <Route path="/add" exact component={asyncAddBus} />
      <Redirect to="/" />
    </Switch>
  );

  // if ( this.props.isAuthenticated ) {
    // routes = (
    //   <Switch>
    //     {/* <Route path="/logout" component={Logout} /> */}
    //     {/* <Route path="/auth" component={asyncAuth} /> */}
    //     <Route path="/add" exact component={asyncAddBus}  />
    //   {/* <Route path="/:id"  component={asyncEdit} /> */}
    //   <Route path="/" exact component={Busdata} />
    //     <Redirect to="/" />
    //   </Switch>
    // );
  
  return(
    <div>
    <Layout>
    {routes}
  </Layout>
 </div>
  )
}
}


export default withRouter(App);