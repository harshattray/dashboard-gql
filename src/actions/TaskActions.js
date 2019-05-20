/**
 * @Author: harsha
 * @Date:   2019-05-20T03:56:12+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-20T07:21:43+05:30
 */
import axios from "axios";
import { query } from "gql-query-builder";
import {
  INIT_FETCH_TASKS,
  FETCH_TASKS_DATA,
  INIT_CREATE_TASKS,
  OPEN_MODAL,
  CLOSE_MODAL
} from "./types";
import { CREATE_TASKS, FETCH_TASKS } from "./queries";
import { axiosGraphQL } from "./queries";

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

export const initFetchTasks = () => {
  return {
    type: INIT_FETCH_TASKS,
    isFetchingTasks: true
  };
};

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
      payload: res
    });
  } catch (error) {
    console.log(error);
  }
};

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
