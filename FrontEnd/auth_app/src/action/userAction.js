import React from 'react';
import axios from 'axios';


export const getUserData=(data)=>async(dispatch)=>{
    console.log('inside action before api call');
 const response = await axios.post('http://localhost:5000/register',data).then(resp=>resp.data);
 console.log('inside action', response.data);
  return dispatch({
    type:'USER_DATA',
    userData:response,
  });
};