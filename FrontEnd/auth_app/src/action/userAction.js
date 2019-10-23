import React from 'react';
import axios from 'axios';


export const getUserData=(dispatch)=>(body)=>{
 const response = axios.post('http://localhost:5000/register',body).then(resp=>resp.data);
   dispatch({
    type:'USER_DATA',
    userData:response,
  });
};