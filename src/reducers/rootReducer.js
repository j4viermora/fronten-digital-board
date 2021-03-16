import { combineReducers } from "redux";
import { pubReducer } from "./pubReducer";
import { authReducer } from "./authReducer";


const rootReducer = combineReducers( {
    "Publicadores": pubReducer,
    "Auth" : authReducer
});

export {
    rootReducer
}