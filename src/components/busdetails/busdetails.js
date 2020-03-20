import React,{Component} from 'react';
import axios from 'axios';
import Spinner from '../UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';
import classes from './busdetails.module.css';
import {connect} from 'react-redux';
import withErrorHanlder from '../../hoc/withErrorHandler/withErrorHandler';
import Busdetail from './busdetail/busdetail';

class busdetails extends Component  {
state={
    loading:true,
    data:null
}

componentDidMount(){
    console.log(this.props.match.params.id);
    this.props.onFetchBusDetail(this.props.match.params.id);
 
}

    render(){
        let name = <Spinner/>
        if(!this.props.loading){
            name =
<Busdetail data={this.props.data} />
        }
       
        return(
            <div>
                
                {name}
            
               
            </div>
        )
    }
    
}
const mapStateToProps = state => {
    return{
        data:state.detail.data,
        loading:state.detail.loading,
        fetched:state.detail.fetched,
        // isAuthenticated: state.auth.token !== null
         // token:state.auth.token,
        // userId:state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onFetchBusDetail : (no) => dispatch(actions.fetchBusDetail(no))
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (withErrorHanlder(busdetails,axios));