import React ,{Component} from 'react';
import classes from './buses.module.css';
import axios from 'axios';
import {Card,ListGroup, Jumbotron,Container} from 'react-bootstrap';


// import Button from '../../UI/Button/button';

class buses extends Component {

    
    render(){
let ui= null

    // if(this.props.isAuthenticated){
    //         ui = classes.pgFollowers
    // }
    // else {
    //     ui = classes.ui
    // }
    
let getBus = (no) => {
console.log(no);
axios.get( 'https://localrouting.firebaseio.com/buses.json?orderBy="busno"&equalTo=48')
.then( response => {
    console.log(response.data);
} )
.catch( error => {
    console.log(error);
} );
}

        return (
            <div className={classes.Busdata}>
                <div >
                <Jumbotron className={classes.jumbo} fluid>
  <Container>
    <h1>Searching details comes here!</h1>
  </Container>
</Jumbotron>
                </div>
                

                <br />    
                <div className={classes.busmain}>
                <div className={classes.cardBuses}>
                <Card bg="dark" text="white" style={{ width: '24rem' }}>
  <Card.Header >Upcoming Buses</Card.Header>
  <div className={classes.listheader} >
  <ListGroup  variant="flush">
  {
           this.props.name.data.map((data,index) => {
            let time = data.time.slice(0,2);
            var d = new Date();
            let currenttime = d.getHours();
                return(
                    <ListGroup.Item onClick={() => getBus(data.busno)}  className={classes.list}> Time:- {data.time} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     Busno:- {data.busno} <h6>See details</h6></ListGroup.Item>
            )})
      }
</ListGroup>
      </div>
      </Card> 
                </div>
                <div>
                    <div>
                    <Card className={classes.carddistance}>
  <Card.Header as="h5">Featured</Card.Header>
  <Card.Body>
    <Card.Title>Card for Distance Calculation</Card.Title>
    <Card.Text>
      working under progress!!
      <br/>
      <br/>
      <h6>Loading....!</h6> 

    </Card.Text>
  </Card.Body>
</Card>
                    </div>
      <div>
      <Card className={classes.cardtime}>
  <Card.Header as="h5">Featured</Card.Header>
  <Card.Body>
    <Card.Title>Card for Time Calculation</Card.Title>
    <Card.Text>
        <br/>
      working under progress!!
      <br/>
      <h6>Loading....!</h6> 

    </Card.Text>
  </Card.Body>
</Card>
</div>
      </div>
      </div>
  

      

                    
            </div>
        );
    }
};

export default buses;