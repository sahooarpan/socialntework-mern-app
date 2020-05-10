import uuid from 'uuid'
import {SET_ALERT,DELETE_ALERT} from './types'

export const setAlert =(msg,alertType)=>dispatch=>{
    const id = uuid.v4();
    dispatch({
        type:SET_ALERT,
        payload:{msg,alertType,id}
    })

    setTimeout(()=>dispatch({type:DELETE_ALERT,payload:id}),5000)

}