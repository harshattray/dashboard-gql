/**
 * @Author: harsha
 * @Date:   2019-05-20T03:56:12+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-20T04:37:29+05:30
 */
import axios from "axios";
import { query } from "gql-query-builder";
import { INIT_FETCH_TASKS, FETCH_TASKS_DATA, INIT_CREATE_TASKS } from "./types";
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

export const createTasksAction = () => async (dispatch, getState) => {
  try {
    const res = await axiosGraphQL.post("", {
      query: CREATE_TASKS,
      variables: {
        carId: "20664c0d-266e-4950-a70d-c0a63afd510b",
        task: { taskType: "ADD_DOCUMENT", comment: "Fishing license" }
      }
    });
    console.log(res);
    dispatch({
      type: INIT_CREATE_TASKS,
      payload: res
    });
  } catch (error) {
    console.log(error);
  }
};
