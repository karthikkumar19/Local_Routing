import * as React from 'react'
import update from 'react-addons-update';
import axios from '../../axios_orders';
// import Button from '../Components/UI/Button/button';
import "bootstrap/dist/css/bootstrap.css";
import {InputGroup,FormControl,Button} from 'react-bootstrap';
import classes from './Addbusdata.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
class Addbusdata extends React.Component{

state={
    BusNo:'',
    Starting_Point:'',
    Destination:'',
    RouteNo:'',
    names:[
     {stopname:"",data:[{ time: ''}]
    }
  ]
  }

  
    render(){
     
//input of busname and no

const handleinputs = event =>{
  event.preventDefault();
  if(event.target.name === "Busno"){
    this.setState({BusNo:event.target.value});
  }
  else if(event.target.name === "Routeno"){
    this.setState({RouteNo:event.target.value});
  }
  else if(event.target.name === "Starting"){
      this.setState({Starting_Point:event.target.value});
  }
  else{
      this.setState({Destination:event.target.value});
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
      };
    
      //Pushing Bus data Method!!
      const OnhandleAddFields = () => {
        const values = [...this.state.names];
        values.push({stopname:"",data:[{ time: ''}]
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
        value.push({ time: '' });

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
                  
                    <React.Fragment  key={`${inputField}~${index}`}>
  <div  className="form-group col-sm-2">
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
<div className={classes.inputMain}>
<h1>Add Bus Data</h1>
<div className={classes.inputTop}>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">Bus-No &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl name="Busno"  value={this.state.BusNo}
    onChange={(event) => handleinputs(event)}
      placeholder="Enter Bus Number"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text  id="basic-addon1">Route-No &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl name="Routeno"  value={this.state.RouteNo}
      placeholder="Enter Route Number"
      onChange={(event) => handleinputs(event)}
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">Starting-Point</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl name="Starting"  value={this.state.Starting_Point}
      placeholder="Enter Starting Point Name"
      onChange={(event) => handleinputs(event)}
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">Destination &nbsp;&nbsp;&nbsp;&nbsp;</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl name="Destination"  value={this.state.Destination}
      placeholder="Enter Destination Name"
      onChange={(event) => handleinputs(event)}
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  
</div>
   {name}
  <div className="submit-button">
<Button
variant="success"
type="submit"
onClick={(event) => handleSubmit(event)}>
Save
</Button>
</div>      
<pre>
 {JSON.stringify(this.state, null, 2)}
</pre>
</div>
  )
          }
        }
        export default Addbusdata;