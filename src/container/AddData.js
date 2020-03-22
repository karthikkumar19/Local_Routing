import React ,{Component} from 'react';
import Addstopdata from './addstopdata/Addstopdata';
import Addbusdata from './addbusdata/addbusdata';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';

class AddData extends Component{

    componentDidMount(){
        console.log(this.props.isAuthenticated);
        if(!this.props.isAuthenticated){
            this.props.history.push('/auth');
        }
    }

state={
    stop:false
}


    render(){
        const toggledata = (event) => {
            event.preventDefault();
            this.setState({stop:!this.state.stop});
        }
        return(
            <div>
                <Button variant="secondary" size="lg" block onClick={(event) => toggledata(event)}>Toggle</Button>
{this.state.stop ? <Addstopdata/> : <Addbusdata/>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        isAuthenticated:state.auth.token !== null
    };
}


export default connect(mapStateToProps)(AddData);