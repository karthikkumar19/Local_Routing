// import React, { Component } from "react";
import * as React from 'react'

import "bootstrap/dist/css/bootstrap.css";



class App extends React.Component  {
  state={
    name:'',no:'',
    names:[
     {name:"",data:[{ firstName: '', lastName: '' }]
    }
  ]
  }

  
    render(){
     
    
      const handleSubmit = e => {
        e.preventDefault();
        console.log("inputFields", this.state);
      };
      const handleInputChangeState = ( event) => {
        let values = this.state.name;
        if (event.target.name === "busName") {
          values = event.target.value;
        } else {
          values.no = event.target.value;
        }
        this.setState({name:values});
      };
      const handleInputChange = (index, event) => {
        const values = [...this.state.names];
        if (event.target.name === "firstName") {
          values[index].firstName = event.target.value;
        } else {
          values[index].lastName = event.target.value;
        }
    
        this.setState({names:values});
      };
    
      const OnhandleAddFields = () => {
        const values = [...this.state.names];
        console.log(values);
        values.push({name:"",data:[{ firstName: '', lastName: '' }]
      });
        console.log(values);

        this.setState({names:values});
      };

      const handleAddFields = (indexs) => {
        console.log(indexs);
        const values = [...this.state.names];
        let value = values[indexs].data;
        value.push({ firstName: '', lastName: '' });
        console.log(values);

        this.setState({names:values});
      };
    
      const handleRemoveFields = index => {
        const values = [...this.state.names];
        values.splice(index, 1);
        this.setState({names:values});
      };
    let name = this.state.names.map((inputField,indexs) => {
      console.log(indexs);
      let value = indexs;
      return(
      <div>
      <h1>Dynamic Form Fields in React</h1>
      {/* <form onSubmit={handleSubmit}> */}
      <div className="form-group col-sm-6">
        <div className="form-row">
        <label htmlFor="BusName">Bus Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="busName"
                  name="busName"
                  value={this.state.name}
                  onChange={event => handleInputChangeState( event)}
                /></div>
                <h1>{indexs}</h1>
                <div className="form-group col-sm-2">
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleRemoveFields()}
                >
                  -
                </button>
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => OnhandleAddFields(indexs)}
                >
                  +
                </button>
              </div></div>
              {
                
                this.state.names[indexs].data.map((inputField, index) => (
<React.Fragment key={`${inputField}~${index}`}>
  <div className="form-group col-sm-6">
    <label htmlFor="firstName">First Name</label>
    <input
      type="text"
      className="form-control"
      id="firstName"
      name="firstName"
      value={inputField.firstName}
      onChange={event => handleInputChange(index, event)}
    />
  </div>
  <h1>{index}</h1>
  <div className="form-group col-sm-4">
    <label htmlFor="lastName">Last Name</label>
    <input
      type="text"
      className="form-control"
      id="lastName"
      name="lastName"
      value={inputField.lastName}
      onChange={event => handleInputChange(index, event)}
    />
  </div>
  <div className="form-group col-sm-2">
    <button
      className="btn btn-link"
      type="button"
      onClick={() => handleRemoveFields(index)}
    >
      -
    </button>
    <button
      className="btn btn-link"
      type="button"
      onClick={() => handleAddFields(indexs)}
    >
      +
    </button>
  </div>
</React.Fragment>
))}

<div className="submit-button">
<button
className="btn btn-primary mr-2"
type="submit"
onSubmit={handleSubmit}
>
Save
</button>
</div>
<br/>
              </div>
      )
              
            
    });
return (
<div>
   {name}
  
         
<pre>
 {JSON.stringify(this.state, null, 2)}
</pre>
</div>
  )
          }

}

export default App;