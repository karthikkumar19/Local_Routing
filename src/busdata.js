import React, {Component} from 'react';
import firebase from './firebase';
class busdata extends React.Component{

state={
    
}

    render(){
        const searchPage = () => {
            return dispatch => {
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
                var slice = stop.slice(ind1,ind2+1);
                  console.log(slice);
                  slice.map((page,index) => (
                    console.log(page.stopname)
                ));
                console.log(slice);
                  }
                })
            }}

        return(
            <div>
                <h1>hello</h1>
            </div>
        )
    }
}

export default busdata;