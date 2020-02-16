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
                <span className={classes.busName}>Page Name: <strong> {this.props.name.stopname} </strong> 
                </span>
                    
                <br />
                {
                    this.props.name.data.map((data,index) => (
                        <div>
                       <h4>Time:- {data.time} BusNo:-{data.busno}</h4>
                       </div>
                    ))
                }
                   {/* <span className={ui}>  <strong>{this.props.followers}</strong> 
                   <br/>
                   <h6>followers</h6>
                   </span>
                   <br></br>
                   <span> Insta ID   : <strong>{this.props.Insta_id}</strong>  </span>
                   <br></br>
                   <span> Page Link: <a href={this.props.Page_link} target="blank"><strong>{this.props.Page_link}</strong> </a> </span>
                   <br></br>
                   <span> Language: <strong>{this.props.Lang}</strong>  </span>
                   <br></br> */}
                   {/* {
                       this.props.isAuthenticated ?  <Button btnType="Success"  clicked={this.props.edit} >
                       <i className="fa fa-edit"></i>
                       </Button> : null
                   }
                  {
                      this.props.isAuthenticated ? <Button btnType="Danger" clicked={this.props.delete} >
                      <i className="fa fa-trash"></i>
                      </Button> : null
                  } */}
                   
            </div>
        );
    }
};

export default buses;