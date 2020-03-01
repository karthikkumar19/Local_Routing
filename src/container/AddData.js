import React ,{Component} from 'react';
import Addstopdata from './addstopdata/Addstopdata';
import Addbusdata from './addbusdata/addbusdata';
import {Button} from 'react-bootstrap';

class AddData extends Component{

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

export default AddData;