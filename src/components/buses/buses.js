import React ,{Component} from 'react';
import classes from './buses.module.css';
import {
  withRouter
} from 'react-router-dom'
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
    this.props.history.push('/bus' + no);

}

        return (
            <div className={classes.Busdata}>
                
                <Jumbotron  className={classes.jumbo} fluid>
  <Container>
    <div><h4 style={{float: "left",marginLeft:"60px"}}>{this.props.start}</h4>
    {/* <h1 style={{float:"left",margin:"auto"}}>hello</h1> */}
     <h4 style={{float: "right",marginRight:"60px"}}>{this.props.des}</h4> </div>
  </Container>
</Jumbotron>
                
                

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
                     Busno:- {data.busno} <h6 >See details</h6></ListGroup.Item>
            )})
      }
</ListGroup>
      </div>
      </Card> 
                </div>
                <div>
                    <div>
                    <Card className={classes.carddistance}>
  <Card.Header className={classes.cardheader} as="h5">Featured</Card.Header>
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
  <Card.Header className={classes.cardheader} as="h5">Featured</Card.Header>
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

export default withRouter(buses);