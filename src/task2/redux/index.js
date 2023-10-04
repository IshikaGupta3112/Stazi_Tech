import { combineReducers } from "redux";
import hotelReducer from "./reducer";
import carsReducer from "../../task1/redux/reducer";

export default combineReducers({
  hotelReducer,
  carsReducer,
});
