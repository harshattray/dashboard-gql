/**
 * @Author: harsha
 * @Date:   2019-05-20T04:21:14+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-20T13:33:33+05:30
 */

import {
  INIT_FETCH_TASKS,
  FETCH_TASKS_DATA,
  INIT_CREATE_TASKS,
  OPEN_MODAL,
  CLOSE_MODAL,
  INIT_UPDATE_TASKS,
  UPDATE_TASKS_SUBMIT
} from "../actions/types";
const initial_state = {
  isFetchingTasks: true,
  openModalSwitch: false,
  isUpdatingTasks: false
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
    case INIT_UPDATE_TASKS:
      return {
        ...state,
        isFetchingTasks: action.isUpdatingTasks
      };
    case UPDATE_TASKS_SUBMIT:
      return {
        ...state,
        updatedTasksList: action.payload.data.updateTask,
        isFetchingTasks: action.isUpdatingTasks
      };
    default:
      return state;
  }
};
