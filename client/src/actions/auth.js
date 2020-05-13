import axios from 'axios'
import { REGISTER_SUCCESS,REGISTER_FAIL,USER_LOADED,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT,CLEAR_PROFILE } from './types'
import { setAlert } from './alert'
import setAuthToken from '../utils/setAuthToken'

//Load User

export const loadUser = ()=>async dispatch=>{
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get('/api/auth');
        dispatch({
            type:USER_LOADED,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type:AUTH_ERROR
        })
    }
}



//Login a user
export const login =(email,password)=> async dispatch=>{
    const config = {
        headers:{
            'Content-Type':'application/json'
        }

    }

    const body = JSON.stringify({email,password});

    try {
        console.log("res")
        const res = await axios.post('/api/auth',body,config);
        console.log(res)
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })
        dispatch(setAlert('Logged IN Succesfully','success'))  
    } catch (err) {
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => {
                console.log(error.msg)
                dispatch(setAlert(error.msg,'danger'))
                
            });
        }
        dispatch({
            type:LOGIN_FAIL
        })
    }
}

//Register a user
export const register =({ name,email,password})=> async dispatch=>{
    const config = {
        headers:{
            'Content-Type':'application/json'
        }

    }

    const body = JSON.stringify({name,email,password});

    try {
        console.log("res")
        const res = await axios.post('/api/users',body,config);
        console.log(res)
        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        })
    } catch (err) {
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => {
                console.log(error.msg)
                dispatch(setAlert(error.msg,'danger'))
                
            });
        }
        dispatch({
            type:REGISTER_FAIL
        })
    }
}

//Logout
export const logout =()=>dispatch=>{
    dispatch({
        type:CLEAR_PROFILE
       });
       dispatch(setAlert('Logout Done Succesfully','success'))   

    dispatch({
    type:LOGOUT
   })

}