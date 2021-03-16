import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { pubReducer } from "./pubReducer";


const rootReducer = combineReducers( {
    "Publicadores": pubReducer,
    "Auth" : authReducer
});

export {
    rootReducer
}