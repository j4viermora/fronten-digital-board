import { combineReducers } from "redux";
import { PubReducer } from "./PubReducer";


const rootReducer = combineReducers( {
    "Publicadores": PubReducer
} )

export {
    rootReducer
}