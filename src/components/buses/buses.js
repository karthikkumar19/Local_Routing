import React ,{Component} from 'react';
import classes from './buses.module.css';
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
    


        return (
            <div className={classes.Busdata}>
                <div className={classes.busName}>Stop Name: <strong>  {this.props.name.stopname} </strong> 
                </div>
                    
                <br />     
                <div className={classes.container}>      
                {
                    this.props.name.data.map((data,index) => (
                          <div ><h4>Time:- {data.time} BusNo:- {data.busno}</h4>
                          </div>
                    ))
                }
                                          </div>
            </div>
        );
    }
};

export default buses;