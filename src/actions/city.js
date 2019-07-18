import * as constants from '../config/constants';
import axios from 'axios';

export const fetchAll = (query) => {
  const url = `${constants.API}cities`;
  return (dispatch, getState) =>{
    axios.get(url).then((res)=>{      
      dispatch(setCities(res.data));
    })
  }
}

export const setCities = (cities) =>{  
  return {
    type: constants.SET_CITIES,
    payload: cities
  }
}