// import React, { Component } from "react";
import * as React from 'react'
// import Addbusdata from './Addbusdata';
import "bootstrap/dist/css/bootstrap.css";
import Busdata from './busdata';


class App extends React.Component  {
  
render(){
  return(
    <div>
{/* <Addbusdata/> */}
<Busdata/>
    </div>
  )
}
}

export default App;