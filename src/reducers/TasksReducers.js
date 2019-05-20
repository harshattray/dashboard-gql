/**
 * @Author: harsha
 * @Date:   2019-05-20T04:21:14+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-20T06:04:14+05:30
 */

import {
  INIT_FETCH_TASKS,
  FETCH_TASKS_DATA,
  INIT_CREATE_TASKS,
  OPEN_MODAL,
  CLOSE_MODAL
} from "../actions/types";
const initial_state = {
  isFetchingTasks: true,
  openModalSwitch: false
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
    case OPEN_MODAL:
      return {
        ...state,
        openModalSwitch: action.openModal
      };
    case CLOSE_MODAL:
      return {
        ...state,
        openModalSwitch: action.openModal
      };
    default:
      return state;
  }
};
