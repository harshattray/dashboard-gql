/**
 * @Author: harsha
 * @Date:   2019-05-17T01:18:43+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-20T04:28:50+05:30
 */

import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import CarStackData from "./FetchReducers";
import TasksStackData from "./TasksReducers";

export default combineReducers({
  form: formReducer,
  carStack: CarStackData,
  tasksStack: TasksStackData
});
