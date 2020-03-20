import * as actionTypes from './actionTypes';
import axios from '../../axios_orders';
import firebase from '../../firebase';


export const addDataSuccess = (id, busData) => {
    return{
        type:actionTypes.ADD_DATA_SUCCESS,
        dataId: id,
        busData:busData
    };
};

export const addDataFail = (error) => {
    return{
        type: actionTypes.ADD_DATA_FAIL,
        error: error
    };
}

export const addDataStart = () =>{
    return{
        type:actionTypes.ADD_DATA_START
    };
}

export const addData = (busData) => {
    return dispatch => {
        dispatch (addDataStart());
        axios.post( '/buses.json', busData )
        .then( response => {
            dispatch(addDataSuccess(response.data.name, busData));
        } )
        .catch( error => {
            dispatch(addDataFail(error));
        } );
    }
}


export const addDataInit = () => {
    return {
        type:actionTypes.ADD_DATA_INIT
    };
};

export const fetchDataSuccess = (data,start,des) => {
    console.log(start);
    return{
        type:actionTypes.FETCH_DATA_SUCCESS,
        busdata:data,
        start:start,
        des:des
    };
    
};

export const fetchDataFail = (error) =>{
    return{
        type:actionTypes.FETCH_DATA_FAIL,
        error:error
    };
};

export const fetchDataStart = () => {
    return{
        type:actionTypes.FETCH_DATA_START
    };
};

export const searchData = (no,start,des) => {
    return dispatch => {
        var slice="";
        dispatch(fetchDataStart());
        console.log(no);
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
        if(ind1>=ind2 ){
            console.log("greater");
            let temp = ind1;
            ind1 = ind2;
            ind2 = temp;
            ind1=  Number(ind1) - 1;
            ind2=  Number(ind2) + 1;
            console.log(ind1,ind2);
            slice = stop.slice(ind1,ind2);
          console.log(slice);
          slice.sort().reverse();
          slice.map((page,index) => (
            console.log(page.stopname)
        ));
        console.log(slice);
        console.log(start)
        dispatch(fetchDataSuccess(slice,start,des));
        }else{
            slice = stop.slice(ind1,ind2);
            console.log(slice);
            slice.map((page,index) => (
              console.log(page.stopname)
          ));
          console.log(slice);
          dispatch(fetchDataSuccess(slice,start,des));
        }  
          }
        }, error => {
            console.error(error);
        })
        console.log(slice);
           console.log("slice called");
}
}
        
