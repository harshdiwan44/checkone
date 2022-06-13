import { combineReducers } from "redux";
import Shared from "./components/reducer";
import Home from "./components/Home/reducer";

export default combineReducers({
  Shared,
  Home,
});
