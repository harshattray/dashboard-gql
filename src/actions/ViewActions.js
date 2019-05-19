/**
 * @Author: harsha
 * @Date:   2019-05-17T01:23:49+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-19T07:59:17+05:30
 */

import axios from "axios";
import { query } from "gql-query-builder";
import {
  INIT_FETCH_DETAILS,
  FETCH,
  INIT_CREATE_TASKS,
  ENABLE_MODEL,
  ENABLE_TRIM
} from "./types";
import { FETCH_CAR_DATA, CREATE_TASKS } from "./queries";

export const axiosGraphQL = axios.create({
  baseURL: "https://fcg-fe-test.herokuapp.com/"
});

export const getDetails = () => async (dispatch, getState) => {
  try {
    const res = await axiosGraphQL.post("", {
      query: FETCH_CAR_DATA,
      variables: { id: "20664c0d-266e-4950-a70d-c0a63afd510b" }
    });
    dispatch({
      type: INIT_FETCH_DETAILS,
      payload: res,
      isFetching: false,
      enableModel: false,
      enableTrim: false
    });
  } catch (error) {
    console.log(error);
  }
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

export const initialdataFetch = () => {
  return {
    type: FETCHING_DATA,
    isFetching: true
  };
};

export const submitFormData = formData => async (dispatch, getState) => {
  console.log(formData, "formData");
};

export const showTrim = value => dispatch => {
  dispatch({
    type: ENABLE_TRIM,
    enableTrim: value
  });
};

export const showModelField = value => dispatch => {
  dispatch({
    type: ENABLE_MODEL,
    enableModel: value
  });
};
