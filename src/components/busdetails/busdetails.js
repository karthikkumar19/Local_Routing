import React,{Component} from 'react';
import axios from 'axios';
import Spinner from '../UI/Spinner/Spinner';
import classes from './busdetails.module.css';
import Busdetail from './busdetail/busdetail';
import {withRouter} from 'react-router-dom';

class busdetails extends Component  {
state={
    loading:true,
    data:null
}

componentDidMount(){
    console.log(this.props.match.params.id);
    axios.get( 'https://localrouting.firebaseio.com/buses.json?orderBy="busno"&equalTo=48')
.then( response => {
    console.log(response.data);
    console.log(response.data.Busname);
    const fetcheddata = [];
    for(let key in response.data){
        fetcheddata.push({
            ...response.data[key],
            id:key
        });
        console.log(fetcheddata[0].names);
       
    }
    this.setState({data:fetcheddata,loading:false});
    console.log(this.state.data);
} )
.catch( error => {
    console.log(error);
} );
}

    render(){
        let name = <Spinner/>
        if(!this.state.loading){
            name =
<Busdetail data={this.state.data} />
        }
       
        return(
            <div>
                
                {name}
            
               
            </div>
        )
    }
    
}


export default withRouter(busdetails);