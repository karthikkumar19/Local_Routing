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
     
    //Submit data method!!
      const handleSubmit = e => {
        e.preventDefault();
        console.log("inputFields", this.state);
      };
      const handleInputChangeState = ( event,indexs) => {
        this.setState({
          names: update(this.state.names, {[indexs]: {name: {$set: event.target.value}}})
        })

      };


      //Updating firstname and lastname Method!!
      const handleInputChange = (indexs,index, event) => {
        if(event.target.name === 'firstName'){
          this.setState({names: update(this.state.names, 
            { [indexs]: { data: { [index]: { firstName: { $set: event.target.value } } } } }
        )});
        }
        else{
          this.setState({names: update(this.state.names, 
            { [indexs]: { data: { [index]: { lastName: { $set: event.target.value } } } } }
        )});
        }
       
      };
    
      //Pushing Bus data Method!!
      const OnhandleAddFields = () => {
        const values = [...this.state.names];
        values.push({name:"",data:[{ firstName: '', lastName: '' }]
      });
        this.setState({names:values});
      };

      //Popping Bus data Method!!
      const OnhandleRemoveFields = (indexs) => {
        const values = [...this.state.names];
        values.splice(indexs, 1);
        this.setState({names:values});
      };


      //Pushing firstName and LastName data Method!!
      const handleAddFields = (indexs) => {
        const values = [...this.state.names];
        let value = values[indexs].data;
        value.push({ firstName: '', lastName: '' });

        this.setState({names:values});
      };
    

      //Popping firstName and lastName data method!!
      const handleRemoveFields = (indexs,index) => {
        const values = [...this.state.names];
        let value = values[indexs].data;
        value.splice(index, 1);
        this.setState({names:values});
      };


    let name = this.state.names.map((inputField,indexs) => { 
      return(
      <div>
      {/* <form onSubmit={handleSubmit}> */}
      <div className="form-group col-md-6">
        <div className="form-row">
        <label htmlFor="BusName" className="col-sm-4">Bus Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="busName"
                  name="busName"
                  value={this.state.names[indexs].name}
                  onChange={event => handleInputChangeState( event,indexs)}
                /></div>
                <div className="form-group col-sm-4">
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => OnhandleRemoveFields(indexs)}
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
  <div className="form-group col-sm-4">
    <label htmlFor="lastName">Last Name</label>
    <input
      type="text"
      className="form-control"
      id="lastName"
      name="lastName"
      value={inputField.lastName}
      onChange={event => handleInputChange(indexs,index, event)}
    />
  </div>
  <div className="form-group col-sm-2">
    <button
      className="btn btn-link"
      type="button"
      onClick={() => handleRemoveFields(indexs,index)}
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
<h1>Add Bus Data</h1>
   {name}
  <div className="submit-button">
<button
className="btn btn-primary mr-2"
type="submit"
onClick={(event) => handleSubmit(event)}>
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