import React, {Component} from 'react';
import firebase from './firebase';


class busdata extends React.Component{

state={
    data:[]
}
// componentDidMount(){
//     this.searchPage();
// }
 setst = (data) => {
    this.setState({data:data});
    console.log(this.state.data);
    console.log(this.state.data.length)
}
 searchPage = () => {
    var slice="";
        const ref = firebase.database().ref('buses');
        ref
  .orderByChild('no')
  .equalTo("48")
  .on('value', function(snapshot) { 
      var movie = snapshot.val();
      console.log(movie);
      let newstate=[];
      for(let name in movie){
        //   if(movie[name].stops)
        let stop = movie[name].names;
        console.log(stop);
        var ind1,ind2;
        for(let name in stop){
            if(stop[name].stopname === "Anagar"){
                 ind1 =name;
                console.log(stop[name].data);
            }else if(stop[name].stopname === "Tpk"){
                 ind2 = name;
            }
        }
         slice = stop.slice(ind1,ind2+1);
          console.log(slice);
          slice.map((page,index) => (
            console.log(page.stopname)
        ));
        console.log(slice);
          }
        })
        this.setst(slice);
        // setTimeout( this.setst(), 5000);
        // setTimeout(this.setst(slice), 8000);     
           console.log("slice called")
    }

    render(){
        let name = <h1>hello</h1>
if(this.state.data.length > '1'){
         name =  this.state.data.map((bus,index) => (
            <div>
                <h1>{bus.stopname}</h1>
                {
                    bus.data.map((data,index) => (
                        <p>{data.time}</p>
                    ))
                }
                </div>
                
        ));
}

       

        return(
            <div>
                <h1>hello</h1>
                <button onClick={(event) => this.searchPage(event)}>Click here</button>
                {name}
            </div>
        )
    }
}

export default busdata;