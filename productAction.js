import * as action from "./actionTypes"
import axios from "axios"

export const fetchProductRequest=()=>{

    return (
        {
            type:action.FETCH_PRODUCT_REQUEST
        }
    )
}

export const fetchProductSuccess=(products)=>{
    return (
        {
            type:action.FETCH_PRODUCT_SUCCESS,
            payload:products
        }
    )
}
export const fetchProductFailure=(error)=>{
    return (
        {
            type:action.FETCH_PRODUCT_FAILURE,
            payload:error

        }
    )
}

export const fetchProduct=()=>{
    return (dispatch)=>{
        dispatch(fetchProductRequest())
        axios.get("https://dummyjson.com/products")
        .then(respone=>dispatch(fetchProductSuccess(respone.data.products)))
        .catch(error=>dispatch(fetchProductFailure(error.message)))
        
    }
}