import React,{Component} from 'react';
import axios from 'axios';
import Spinner from '../UI/Spinner/Spinner';
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
        console.log(key);
    }
    this.setState({data:fetcheddata,loading:false});
} )
.catch( error => {
    console.log(error);
} );
}

    render(){
        let name = <Spinner/>
        if(!this.state.loading){
           name = this.state.data.map(data => {
               console.log(data)
                return(
                    <div>
                    <h2>{data.BusName}</h2>
                    <h2>{data.busno}</h2>
                               </div>
                )       
            })
        }
       
        return(
            <div>
                <h1>this page reserved for bus details</h1>
                {name}
            </div>
        )
    }
    
}


export default busdetails;