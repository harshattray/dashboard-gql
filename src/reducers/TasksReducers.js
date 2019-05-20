/**
 * @Author: harsha
 * @Date:   2019-05-20T04:21:14+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-20T04:59:02+05:30
 */

import {
  INIT_FETCH_TASKS,
  FETCH_TASKS_DATA,
  INIT_CREATE_TASKS
} from "../actions/types";
const initial_state = {
  isFetchingTasks: true
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case INIT_CREATE_TASKS:
      return {
        ...state,
        carTasks: action.payload.data,
        isFetching: action.isFetching
      };
    case INIT_FETCH_TASKS:
      return {
        ...state,
        isFetchingTasks: action.isFetchingTasks
      };
    case FETCH_TASKS_DATA:
      return {
        ...state,
        tasksList: action.payload.data.data,
        isFetchingTasks: action.isFetchingTasks
      };
    default:
      return state;
  }
};
