/**
 * @Author: harsha
 * @Date:   2019-05-17T01:23:49+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-28T00:04:10+05:30
 */

import axios from "axios";
import { query } from "gql-query-builder";
import {
  INIT_FETCH_DETAILS,
  FETCH,
  INIT_CREATE_TASKS,
  ENABLE_MODEL,
  ENABLE_TRIM,
  INIT_UPDATE_CARS,
  UPDATE_CARS_SUBMIT
} from "./types";
import { FETCH_CAR_DATA, CREATE_TASKS, UPDATE_CAR } from "./queries";
import { axiosGraphQL } from "./queries";

/**
 * [getDetails Fetch Car Details Query]
 * @return {[type]} [description]
 */

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

/**
 * [initialdataFetch initialData Fetch loader ]
 * @return {[type]} [description]
 */

export const initialdataFetch = () => {
  return {
    type: FETCHING_DATA,
    isFetching: true
  };
};

/**
 * [submitFormData Car details form submission]
 * @param  {[type]} formData [description]
 * @return {[type]}          [description]
 */

export const submitFormData = formData => async (dispatch, getState) => {
  const {
    make,
    model,
    trim,
    physicalStatus,
    sellingStatus,
    engineType,
    legalStatus
  } = formData;
  const { carId } = getState().carStack;
  try {
    const res = await axiosGraphQL.post("", {
      query: UPDATE_CAR,
      variables: {
        car: {
          id: carId,
          make: make,
          model: model,
          trim: trim,
          engineType: engineType,
          physicalStatus: physicalStatus,
          legalStatus: legalStatus,
          sellingStatus: sellingStatus
        }
      }
    });
    dispatch({
      type: UPDATE_CARS_SUBMIT,
      payload: res,
      enableModel: false,
      enableTrim: false
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * [showTrim trim dropdown switch]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */

export const showTrim = value => dispatch => {
  dispatch({
    type: ENABLE_TRIM,
    enableTrim: value
  });
};

/**
 * [showModelField model dropdoen switch]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */

export const showModelField = value => dispatch => {
  dispatch({
    type: ENABLE_MODEL,
    enableModel: value
  });
};
