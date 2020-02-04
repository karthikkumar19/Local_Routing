import React, {Component} from 'react';
import firebase from './firebase';


class busdata extends React.Component{

state={
    data:[],
    Startingpoint:'',
    Destination:'',
    suggestions:[]
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
    this.setState({suggestions:suggestions,Startingpoint:value});
    // let Startingpoint = this.state.Startingpoint;
    // Startingpoint = name;
    // this.setState({Startingpoint:Startingpoint});
    }

suggestionSelected = (value) => {
    this.setState({Startingpoint:value,suggestions:[]});
}
renderSuggestions () {
    const suggestions = this.state.suggestions;
    if(suggestions.length === 0){
        return null;
    }else{
        return(
            <ul>
                {this.state.suggestions.map((item) => 
                    <li onClick={() => this.suggestionSelected(item)}>
                        {item}
                    </li>
                )}
            </ul>
        )
    }
}
    updatesecInput(event){
        let name = event.target.value;
        let Destination = this.state.Destination;
        Destination = name;
        this.setState({Destination});
        }

 setst = (data) => {
    this.setState({data:data});
    console.log(this.state.Destination);
    console.log(this.state.data);
    console.log(this.state.data.length)
}
 searchPage = (event,no,start,des) => {
     console.log(start,des);
     event.preventDefault();
    var slice="";
        const ref = firebase.database().ref('buses');
        ref
  .orderByChild('no')
  .equalTo(no)
  .on('value', function(snapshot) { 
      var movie = snapshot.val();
      console.log(movie);
      let newstate=[];
      for(let name in movie){
        //   if(movie[name].stops)
        let stop = movie[name].names;
        console.log(stop);
        let ind1,ind2;
        for(let name in stop){
            if(stop[name].stopname === start){
                 ind1 =name;
                console.log(name);
            }else if(stop[name].stopname === des){
                console.log(name)
                 ind2 = name ;
               ind2=  Number(ind2) + 1;
            }
        }
        console.log(ind2);
         slice = stop.slice(ind1,ind2);
          console.log(slice);
          slice.map((page,index) => (
            console.log(page.stopname)
        ));
        console.log(slice);
          }
        }, error => {
            console.error(error);
        })
        this.setst(slice);
        // setTimeout( this.setst(), 5000);
        // setTimeout(this.setst(slice), 8000);     
           console.log("slice called")
    }

    render(){
        let name = ''
if(this.state.data.length > '1'){
         name =  this.state.data.map((bus,index) => (
            <div>
                <h1>{bus.stopname}</h1>
                {
                    bus.data.map((data,index) => (
                        <div>
                       <h4>Time:- {data.time} BusNo:-{data.busno}</h4>
                       </div>
                    ))
                }
                </div>
                
        ));
}

       

        return(
            <div>
                <h1>Search your Bus</h1>
                <form  >
                    <input type="text" value={this.state.Startingpoint} placeholder="enter the Starting Point name" onChange={(event) => this.updateInput(event)}></input>
                    <input type="text" placeholder="enter the Destination name" onChange={(event) => this.updatesecInput(event)}></input>
                <button onClick={(event) => this.searchPage(event,"48",this.state.Startingpoint,this.state.Destination)} >Search</button>
                    </form>    
                    {this.renderSuggestions()}
                {name}
            </div>
        )
    }
}

export default busdata;