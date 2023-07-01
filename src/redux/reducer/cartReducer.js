
import { ADD_TO_CART,REMOVE_FROM_CART,CHECKOUT } from "../actions/actionTypes";

const cartItems=[];
   


const cartReducer =(state=cartItems,action)=>{
    switch (action.type){
        case ADD_TO_CART:
            return [...state,action.payload]
        case REMOVE_FROM_CART:
            {
                let arr=state.filter((item)=>{
                    return item.id!==action.payload
                })
                return [...arr];
            }
        case CHECKOUT:
            return [];
        default: return state
    }
}
export default cartReducer