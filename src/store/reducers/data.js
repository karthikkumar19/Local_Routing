import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    data:[],
    Startingpoint:'',
    Destination:'',
    loading:false,
    fetched:false,
    purchased:false
}
const addDataInit = (state) => {
    return updateObject(state,{purchased:false});
}
const addDataStart = (state) => {
    return updateObject(state,{loading:true});
}
const addDataSuccess = (state,action) =>{
    const newData = updateObject(action.busData,{id:action.dataId});
    return updateObject(state,{
        loading:false,
        purchased:true,
        data:state.data.concat(newData)
    });
}
const addDataFail = (state) => {
    return updateObject(state,{loading:false});
}
const fetchDataStart = (state) => {
    return updateObject(state,{loading:true});
}
const fetchDataSuccess = (state,action) => {
    console.log(action.busdata);
    return updateObject(state, {
        data:action.busdata,
        loading:false,
        purchased:false,
        fetched:true
    });
    
}
const fetchDataFail = (state) => {
    return updateObject(state,{loading:false});
}



const dataReducer = (state = initialState, action) =>{
    switch (action.type){
        case actionTypes.ADD_DATA_INIT:return addDataInit(state);
        case actionTypes.ADD_DATA_START:return addDataStart(state);
        case actionTypes.ADD_DATA_SUCCESS:return addDataSuccess(state,action);
        case actionTypes.ADD_DATA_FAIL:return addDataFail(state);
        case actionTypes.FETCH_DATA_START:return fetchDataStart(state);
        case actionTypes.FETCH_DATA_SUCCESS:return fetchDataSuccess(state,action);  
        case actionTypes.FETCH_DATA_FAIL:return fetchDataFail(state);
        default :
        return state;
    }
}

export default dataReducer;