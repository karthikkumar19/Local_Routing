import React, {Component} from 'react';
import classes from './Autocompletetext.module.css';
import Buses from '../../components/buses/buses';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {connect} from 'react-redux';
import Axios from 'axios';
import PageviewIcon from '@material-ui/icons/Pageview';
import SearchIcon from '@material-ui/icons/Search';
import Busdetails from '../../components/busdetails/busdetails';


class busdata extends Component{

state={
    data:[],
    Startingpoint:'',
    Destination:'',
    suggestions1:[],suggestions2:[]
}
items = ['Periyar','Anagar','Pykara','Tpk'];
// componentDidMount(event){
//     this.searchPage(event,"48","","");
// }

updateInput(event){
    let value = event.target.value;
    let suggestions = [];
    if(value.length > 0){
        const regex = new RegExp(value,'i');
        suggestions = this.items.sort().filter(v => regex.test(v));
    }
    if(event.target.name === "start"){
        this.setState({suggestions1:suggestions,Startingpoint:value});
    }else{
        this.setState({suggestions2:suggestions,Destination:value});
    }
    // let Startingpoint = this.state.Startingpoint;
    // Startingpoint = name;
    // this.setState({Startingpoint:Startingpoint});
    }

suggestionSelected1 = (value) => {
    this.setState({Startingpoint:value,suggestions1:[]});
}

suggestionSelected2 = (value) => {
    this.setState({Destination:value,suggestions2:[]});
}
renderSuggestions1 () {
    const suggestions = this.state.suggestions1;
    if(suggestions.length === 0){
        return null;
    }else{
        return(
            <ul>
                {this.state.suggestions1.map((item) => 
                    <li onClick={() => this.suggestionSelected1(item)}>
                        {item}
                    </li>
                )}
            </ul>
        )
    }
}

renderSuggestions2 () {
    const suggestions = this.state.suggestions2;
    if(suggestions.length === 0){
        return null;
    }else{
        return(
            <ul >
                {this.state.suggestions2.map((item) => 
                    <li onClick={() => this.suggestionSelected2(item)}>
                        {item}
                    </li>
                )}
            </ul>
        )
    }
}
   

 setst = (data) => {
    this.setState({data:data});
    console.log(this.state.Destination);
    console.log(this.state.data);
    console.log(this.state.data.length)
}
 searchPage = (event,no,start,des) => {
     if(des !== '' && start !== ''){
        console.log(start,des);
        event.preventDefault();
        this.props.onSearchdata(no,start,des);
     }
     else{
         alert("enter destination");
     }
    }

    render(){
        let name = <Spinner/>
if(!this.props.loading){
    name =  this.props.data.map((bus,index) => {
        if(index === 0){
            return(
<Buses name={bus} /> 
            )        
    }
} )

}
        return(
            <div className={classes.Bus}  >
                <h1 className={classes.Heading}>Search your Bus</h1>
                <div className={classes.Main}>
                <div className={classes.AutoCompleteText}>
                    <input name="start" type="text" value={this.state.Startingpoint} 
                    placeholder="Enter the Starting Point name" onChange={(event) => this.updateInput(event)}></input>
                    {this.renderSuggestions1()} 
                </div> 
                <div className={classes.AutoCompleteText}>
                    <input name="stop" type="text" value={this.state.Destination} 
                    placeholder="Enter the Destination name" onChange={(event) => this.updateInput(event)}></input>
                    {this.renderSuggestions2()} 
                </div>    
            
                <PageviewIcon  style={{ fontSize: 65}} color="primary" className={classes.PageviewIcon}
                 onClick={(event) => this.searchPage(event,48,this.state.Startingpoint,this.state.Destination)} >
                    </PageviewIcon>           
                </div>
                <div className={classes.Data}>
                {name}
              </div>    
            </div>
        )
        }
}

const mapStateToProps = state => {
    return{
        data:state.data.data,
        loading:state.data.loading,
        fetched:state.data.fetched,
        // isAuthenticated: state.auth.token !== null
         // token:state.auth.token,
        // userId:state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return{
        // onFetchData : () => dispatch(actions.fetchPage()),
        // onAddDataInit : () => dispatch(actions.addPageInit()),
        // onAscPage : (page) => dispatch(actions.ascPage(page)),
        // onDscPage : (page) => dispatch(actions.dscPage(page)),
        onSearchdata : (no,startname,stopname) => dispatch(actions.searchData(no,startname,stopname))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (withErrorHandler(busdata,Axios)) ;