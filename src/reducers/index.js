import { combineReducers } from "redux";
import userReducer from "./reducer_users";
import userDivesReducer from "./reducer_usersDives";

const rootReducer = combineReducers({
  user: userReducer,
  userDives: userDivesReducer,
});

export default rootReducer;
