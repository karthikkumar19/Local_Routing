// import React, { Component } from "react";
import * as React from 'react'
import update from 'react-addons-update';

import "bootstrap/dist/css/bootstrap.css";



class App extends React.Component  {
  state={
    name:'',
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
      const handleInputChangeState = ( event,indexs) => {
        // let values = [...this.state.names];
        // let value = {...values[indexs]};
        // console.log(value);
        // if (event.target.name === "busName") {
        //   value.name = "kk"
        // } else {
        //   values.no = event.target.value;
        // }
        // console.log(value.name);
        // values[indexs] = value;
        // this.setState({values
        // });
        this.setState({
          names: update(this.state.names, {[indexs]: {name: {$set: event.target.value}}})
        })

      };
      const handleInputChange = (indexs,index, event) => {
        // const values = [...this.state.names];
        // if (event.target.name === "firstName") {
        //   values[indexs].data.firstName = event.target.value;
        // } else {
        //   values[index].lastName = event.target.value;
        // }
    
        // this.setState({names:values});
        // let val = [{firstName:'kk',lastName:''}];
        // let data = this.state.names[indexs].data[index];
        // this.setState({
        //   names: update(this.state.names, {[indexs]: {data: {$set: val}}})
        // })
        this.setState({names: update(this.state.names, 
          { [indexs]: { data: { [index]: { firstName: { $set: 'z' } } } } }
      )});
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
                  value={this.state.names[indexs].name}
                  onChange={event => handleInputChangeState( event,indexs)}
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
      onChange={event => handleInputChange(indexs,index, event)}
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


<br/>
              </div>
      )
              
            
    });
return (
<div>
   {name}
  
   <div className="submit-button">
<button
className="btn btn-primary mr-2"
type="submit"
onClick={(event) => handleSubmit(event)}
>
Save
</button>
</div>      
<pre>
 {JSON.stringify(this.state, null, 2)}
</pre>
</div>
  )
          }

}

export default App;