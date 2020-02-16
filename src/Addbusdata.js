import * as React from 'react'
import update from 'react-addons-update';
import axios from './axios_orders';
// import Button from '../Components/UI/Button/button';
import "bootstrap/dist/css/bootstrap.css";
import Spinner from './components/UI/Spinner/Spinner';
import withErrorHandler from './hoc/withErrorHandler/withErrorHandler';
class Addbusdata extends React.Component{

state={
    name:'',
    no:'',
    names:[
     {stopname:"",data:[{ time: '', busno: '' }]
    }
  ]
  }

  
    render(){
     
//input of busname and no

const handlenameno = event =>{
  event.preventDefault();
  if(event.target.name === "busname"){
    this.setState({name:event.target.value});
  }
  else if(event.target.name === "busno"){
    this.setState({no:event.target.value});
  }
}

    //Submit data method!!
      const handleSubmit = e => {
        e.preventDefault();
        // const formData = {};
        // console.log(this.state);
        // for (let formElementIdentifier in this.state) {
        //     formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        // }
        // console.log(formData);
        axios.post( '/buses.json', this.state )
        .then( response => {
          console.log(response.data);
        } )
        .catch( error => {
        } );
        console.log("inputFields", this.state);
      };
      const handleInputChangeState = ( event,indexs) => {
        this.setState({
          names: update(this.state.names, {[indexs]: {stopname: {$set: event.target.value}}})
        })

      };


      //Updating firstname and lastname Method!!
      const handleInputChange = (indexs,index, event) => {
        if(event.target.name === 'time'){
          this.setState({names: update(this.state.names, 
            { [indexs]: { data: { [index]: { time: { $set: event.target.value } } } } }
        )});
        }
        else{
          this.setState({names: update(this.state.names, 
            { [indexs]: { data: { [index]: { busno: { $set: event.target.value } } } } }
        )});
        }
       
      };
    
      //Pushing Bus data Method!!
      const OnhandleAddFields = () => {
        const values = [...this.state.names];
        values.push({stopname:"",data:[{ time: '', busno: '' }]
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
        value.push({ time: '', busno: '' });

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
        <label htmlFor="StopName" className="col-sm-4">Stop Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="stopName"
                  name="stopName"
                  value={this.state.names[indexs].stopname}
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
    <label htmlFor="time">Time</label>
    <input
      type="text"
      className="form-control"
      id="time"
      name="time"
      value={inputField.time}
      onChange={event => handleInputChange(indexs,index, event)}
    />
  </div>
  <div className="form-group col-sm-4">
    <label htmlFor="fare">Busno</label>
    <input
      type="text"
      className="form-control"
      id="busno"
      name="busno"
      value={inputField.fare}
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
<input name="busname" type="text" value={this.state.name} placeholder="enter busname" onChange={(event) => handlenameno(event)} />
<input name="busno" type="text" value={this.state.no} placeholder="enter busno" onChange={(event) => handlenameno(event)} />

   {name}
  <div className="submit-button">
<button
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
        export default Addbusdata;