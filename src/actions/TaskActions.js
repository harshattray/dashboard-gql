/**
 * @Author: harsha
 * @Date:   2019-05-20T03:56:12+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-28T17:35:36+05:30
 */
import axios from "axios";
import { query } from "gql-query-builder";
import {
  INIT_FETCH_TASKS,
  FETCH_TASKS_DATA,
  INIT_CREATE_TASKS,
  OPEN_MODAL,
  CLOSE_MODAL,
  INIT_UPDATE_TASKS,
  UPDATE_TASKS_SUBMIT
} from "./types";
import { CREATE_TASKS, FETCH_TASKS, UPDATE_TASKS } from "./queries";
import { axiosGraphQL } from "./queries";

/**
 * [fetchTasks fetchTasks action]
 * @param  {[type]} carid [description]
 * @return {[type]}       [description]
 */

export const fetchTasks = carid => async (dispatch, getState) => {
  dispatch(initFetchTasks());
  try {
    const res = await axiosGraphQL.post("", {
      query: FETCH_TASKS,
      variables: { carId: carid }
    });
    dispatch({
      type: FETCH_TASKS_DATA,
      payload: res,
      isFetchingTasks: false
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * [initFetchTasks initial loader handler]
 * @return {[type]} [description]
 */

export const initFetchTasks = () => {
  return {
    type: INIT_FETCH_TASKS,
    isFetchingTasks: true,
    createTaskStatus: false
  };
};

/**
 * [createTasksAction create tasks action]
 * @param  {[type]} formData [description]
 * @return {[type]}          [description]
 */

export const createTasksAction = formData => async (dispatch, getState) => {
  const { taskTypes, taskComments } = formData;
  const { carId } = getState().carStack;
  try {
    const res = await axiosGraphQL.post("", {
      query: CREATE_TASKS,
      variables: {
        carId: carId,
        task: { taskType: taskTypes, comment: taskComments }
      }
    });
    dispatch({
      type: INIT_CREATE_TASKS,
      payload: res,
      createTaskStatus: true
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * [openModal openModal trigger]
 * @return {[type]} [description]
 */

export const openModal = () => async dispatch => {
  try {
    dispatch({
      type: OPEN_MODAL,
      openModal: true
    });
  } catch (e) {
    console.log(e);
  }
};

/**
 * [closeModal closeMo trigger]
 * @return {[type]} [description]
 */

export const closeModal = () => async (dispatch, getState) => {
  const { carId } = getState().carStack;
  try {
    dispatch({
      type: CLOSE_MODAL,
      openModal: false
    });
    dispatch(fetchTasks(carId));
  } catch (e) {
    console.log(e);
  }
};

/**
 * [updateTask update task handler]
 * @param  {[type]} completed [description]
 * @param  {[type]} taskid    [description]
 * @return {[type]}           [description]
 */

export const updateTask = (completed, taskid) => async (dispatch, getState) => {
  const { carId } = getState().carStack;
  dispatch(initUpdatetasks());
  try {
    const res = await axiosGraphQL.post("", {
      query: UPDATE_TASKS,
      variables: { id: taskid, completed: completed }
    });
    dispatch({
      type: UPDATE_TASKS_SUBMIT,
      payload: res,
      isFetchingTasks: false
    });
    dispatch(fetchTasks(carId));
  } catch (e) {
    console.log(e);
  }
};

/**
 * [initUpdatetasks tasks loader handler]
 * @return {[type]} [description]
 */

export const initUpdatetasks = () => {
  return {
    type: INIT_UPDATE_TASKS,
    isFetchingTasks: true
  };
};
