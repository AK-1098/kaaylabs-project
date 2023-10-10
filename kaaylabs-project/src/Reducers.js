import { combineReducers } from "redux";
import beerReducer from "../src/reducers/beerReducer";

const rootReducer = combineReducers({
  beerReducer
});

export default rootReducer;
