import * as constants from '../config/constants';
import axios from 'axios';

export const fetchByCity = (query) => {
  const url = `${constants.API}forecast?city=${query}`;
  return (dispatch, getState) =>{
    axios.get(url).then((res)=>{      
      dispatch(setForecast(res.data.list));
    })
  }
}

export const setForecast = (forecast) =>{  
  return {
    type: constants.SET_FORECAST,
    payload: forecast
  }
}