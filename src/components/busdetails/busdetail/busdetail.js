import React from 'react';
import {Card,ListGroup,Jumbotron} from 'react-bootstrap';
import classes from './busdetail.module.css';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';

const busdetail = (props) => {   
    console.log(props);          
    return(
        <div>
            <div className={classes.main}>
                <DirectionsBusIcon style={{ fontSize: 60 }}/>
                <span className={classes.jumbo} >
                    <h5>{props.data[0].busno}</h5>
</span>
            </div>
            <div className={classes.maindiv}>
            <div className={classes.businfo}>
            <Card bg="dark" text="white" >
                <Card.Header >Bus Info <h5 style={{float:"right"}}></h5> </Card.Header>
                <div className={classes.listheader} >
                <Card style={{width:'20rem', margin:'auto',marginTop:"10px"}}>
  <Card.Header style={{color:"black"}} >Starting Point</Card.Header>
  <Card.Body style={{color:"black"}}>
   {props.data[0].Starting_Point}
  </Card.Body>
</Card>
<Card style={{width:'20rem', margin:'auto',marginTop:"10px"}}>
  <Card.Header style={{color:"black"}} >Destination</Card.Header>
  <Card.Body style={{color:"black"}}>
   {props.data[0].Destination}
  </Card.Body>
</Card>
<Card style={{width:'20rem', margin:'auto',marginTop:"10px"}}>
  <Card.Header style={{color:"black"}} >No of Stops</Card.Header>
  <Card.Body style={{color:"black"}}>
   {props.data[0].names.length}
  </Card.Body>
</Card>
                    </div>
                    </Card> 
            </div>
           
            <div className={classes.stopcard}>
            <Card bg="dark" text="white" style={{ width: '24rem' }}>
                <Card.Header >Stop Names <h5 style={{float:"right"}}></h5> </Card.Header>
                <div className={classes.listheader} >
                <ListGroup  variant="flush">
                {
                         props.data[0].names.map((data,index) => {
                             console.log(data.stopname)
                              return(
                                  <ListGroup.Item  className={classes.liststop} >{data.stopname}</ListGroup.Item>
                          )})
                    }
              </ListGroup>
                    </div>
                    </Card> 
                    </div>
            </div>
           
        </div>
    )
}

export default busdetail;