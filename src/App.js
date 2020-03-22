// import React, { Component } from "react";
import * as React from 'react'
import {Helmet} from 'react-helmet';
import Logout from './container/Auth/Logout/Logout';
import* as actions from './store/actions/index';
import "bootstrap/dist/css/bootstrap.css";
import {connect} from 'react-redux';
import Busdata from './container/busdata/busdata';
import asyncComponent from './hoc/asyncComponent/asynComponent';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Busdetails from './components/busdetails/busdetails';

const asyncAddData = asyncComponent(() => {
  return import('./container/AddData');
});



const asyncAuth = asyncComponent(() => {
  return import('./container/Auth/Auth');
});

class App extends React.Component  {

  componentDidMount () {
    this.props.onTryAutoSignup();
  }
  
render(){

  let routes = (
    <Switch>
      <Route path="/auth" component={asyncAuth} />
      <Route path="/" exact component={Busdata} />
      <Route path="/bus:id" exact component={Busdetails} />
      <Route path="/add" exact component={asyncAddData}  />

      <Redirect to="/" />
    </Switch>
  );

  if ( this.props.isAuthenticated ) {
    console.log(this.props.isAuthenticated);
    routes = (
      <Switch>
        <Route path="/logout" exact component={Logout} /> 
        <Route path="/auth" component={asyncAuth} />
        <Route path="/add" exact component={asyncAddData}  />
      <Route path="/" exact component={Busdata} />
      <Route path="/bus:id" exact component={Busdetails} />
        <Redirect to="/" />
      </Switch>
    );
      }
  
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


const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );

