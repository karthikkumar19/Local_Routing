// import React, { Component } from "react";
import * as React from 'react'
import {Helmet} from 'react-helmet';
import "bootstrap/dist/css/bootstrap.css";
import Busdata from './container/busdata/busdata';
import asyncComponent from './hoc/asyncComponent/asynComponent';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Busdetails from './components/busdetails/busdetails';
const asyncAddData = asyncComponent(() => {
  return import('./container/AddData');
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
      <Route path="/add" exact component={asyncAddData} />
      <Route path="/bus:id" exact component={Busdetails} />
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
    <div >
       <Helmet>
                <style>{'body { background: #5D5F71;  }'}</style>
            </Helmet>
    <Layout>
    {routes}
  </Layout>
 </div>
  )
}
}


export default withRouter(App);

