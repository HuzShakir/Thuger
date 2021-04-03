import axios from "axios"
import { ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS,ORDER_CREATE_FAIL, 
    ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL, 
    ORDER_LIST_MY_REQUEST, ORDER_LIST_MY_SUCCESS, ORDER_LIST_MY_FAIL, 
    ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS, ORDER_LIST_FAIL, ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS, ORDER_PAY_FAIL } from "../constants/orderConstants"
export const createOrderAction=(order)=>async(dispatch,getState)=>{
    try {
        
        dispatch({
            type:ORDER_CREATE_REQUEST
        })
        const {userLogin:{userInfo}} =getState()
    
            const config={
                headers:{
                    "Content-type":"application/json",
                    Authorization:`Bearer ${userInfo.token}`
                }
            }
        const {data}=await axios.post("/api/order",order,config)
        dispatch({
            type:ORDER_CREATE_SUCCESS,
            payload:data
        })
    } catch (error) {
            dispatch({
                type:ORDER_CREATE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            }) 
    }
}

export const detailOrderAction=(id)=>async(dispatch,getState)=>{
    try {
        
        dispatch({
            type:ORDER_DETAILS_REQUEST
        })
        const {userLogin:{userInfo}} =getState()
    
            const config={
                headers:{
                    Authorization:`Bearer ${userInfo.token}`
                }
            }
        const {data}=await axios.get(`/api/order/${id}`,config)
        dispatch({
            type:ORDER_DETAILS_SUCCESS,
            payload:data
        })
    } catch (error) {
            dispatch({
                type:ORDER_DETAILS_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            }) 
    }
}


export const OrderPayAction=(id,paymentResult)=>async(dispatch,getState)=>{
    try {
        
        dispatch({
            type:ORDER_PAY_REQUEST
        })
        const {userLogin:{userInfo}} =getState()
    
            const config={
                headers:{
                    "Content-type":"application/json",
                    Authorization:`Bearer ${userInfo.token}`
                }
            }
        const {data}=await axios.put(`/api/order/${id}/pay`,paymentResult,config)
        dispatch({
            type:ORDER_PAY_SUCCESS,
            payload:data
        })
    } catch (error) {
            dispatch({
                type:ORDER_PAY_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            }) 
    }
}

export const OrderMyListAction=()=>async(dispatch,getState)=>{
    try {
        
        dispatch({
            type:ORDER_LIST_MY_REQUEST
        })
        const {userLogin:{userInfo}} =getState()
    
            const config={
                headers:{
                    Authorization:`Bearer ${userInfo.token}`
                }
            }
        const {data}=await axios.get(`/api/order/myorders`,config)
        dispatch({
            type:ORDER_LIST_MY_SUCCESS,
            payload:data
        })
    } catch (error) {
            dispatch({
                type:ORDER_LIST_MY_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            }) 
    }
}


export const OrderListAction=()=>async(dispatch,getState)=>{
    try {
        
        dispatch({
            type:ORDER_LIST_REQUEST
        })
        const {userLogin:{userInfo}} =getState()
    
            const config={
                headers:{
                    Authorization:`Bearer ${userInfo.token}`
                }
            }
        const {data}=await axios.get(`/api/order`,config)
        dispatch({
            type:ORDER_LIST_SUCCESS,
            payload:data
        })
    } catch (error) {
            dispatch({
                type:ORDER_LIST_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            }) 
    }
}



export const OrderDeliverAction=(order)=>async(dispatch,getState)=>{
    try {
        
        dispatch({
            type:ORDER_DETAILS_REQUEST
        })
        const {userLogin:{userInfo}} =getState()
    
            const config={
                headers:{
                    Authorization:`Bearer ${userInfo.token}`
                }
            }
        const {data}=await axios.put(`/api/order/${order._id}/deliver`,{},config)
        dispatch({
            type:ORDER_DETAILS_SUCCESS,
            payload:data
        })
    } catch (error) {
            dispatch({
                type:ORDER_DETAILS_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            }) 
    }
}
