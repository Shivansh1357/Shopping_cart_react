
import { applyMiddleware,combineReducers ,createStore} from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducer/productReducer";
import cartReducer from "./reducer/cartReducer";

const rootReducer=combineReducers({
    product:productReducer,
    cart:cartReducer
});
const store=createStore(rootReducer,applyMiddleware(thunk))

export default store