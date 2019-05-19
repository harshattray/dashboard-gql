/**
 * @Author: harsha
 * @Date:   2019-05-17T01:18:43+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-19T07:03:04+05:30
 */

import {
  INIT_FETCH_DETAILS,
  INIT_CREATE_TASKS,
  ENABLE_TRIM,
  ENABLE_MOCK
} from "../actions/types";
import { buildMakeJson, buildTrimJson, buildModelJson } from "./helper";

const initial_state = {
  isFetching: true,
  enableMock: false,
  enableTrim: false
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case INIT_FETCH_DETAILS:
      return {
        ...state,
        carStackDetails: action.payload.data.data.car,
        carId: action.payload.data.data.car.id,
        financialDetails: action.payload.data.data.car.financialDetails,
        makeStack: buildMakeJson(action.payload.data.data.car),
        modelStack: buildTrimJson(action.payload.data.data.car),
        trimStack: buildModelJson(action.payload.data.data.car),
        isFetching: action.isFetching,
        enableTrim: action.enableTrim,
        enableMock: action.enableMock
      };
    case INIT_CREATE_TASKS:
      return {
        ...state,
        carTasks: action.payload.data,
        isFetching: action.isFetching
      };
    case ENABLE_TRIM:
      return {
        ...state,
        enableTrim: action.enableTrim
      };
    case ENABLE_MOCK:
      return {
        ...state,
        enableMock: action.enableMock
      };
    default:
      return state;
  }
};
