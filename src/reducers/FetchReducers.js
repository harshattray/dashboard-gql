/**
 * @Author: harsha
 * @Date:   2019-05-17T01:18:43+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-19T13:24:32+05:30
 */

import {
  INIT_FETCH_DETAILS,
  INIT_CREATE_TASKS,
  ENABLE_TRIM,
  ENABLE_MODEL,
  UPDATE_CARS_SUBMIT
} from "../actions/types";
import {
  buildMakeJson,
  buildTrimJson,
  buildModelJson,
  stringifyPhysicalStatus,
  stringifyLegalStatus,
  stringifySellingStatus,
  stringifyEngineType
} from "./helper";

const initial_state = {
  isFetching: true,
  enableModel: false,
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
        enableModel: action.enableModel,
        physicalStatus: stringifyPhysicalStatus(action.payload.data.data.car),
        legalStatus: stringifyLegalStatus(action.payload.data.data.car),
        engineType: stringifyEngineType(action.payload.data.data.car),
        sellingStatus: stringifySellingStatus(action.payload.data.data.car)
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
    case ENABLE_MODEL:
      return {
        ...state,
        enableModel: action.enableModel
      };
    case UPDATE_CARS_SUBMIT:
      return {
        ...state,
        carStackDetails: action.payload.data.data.updateCar,
        physicalStatus: stringifyPhysicalStatus(
          action.payload.data.data.updateCar
        ),
        legalStatus: stringifyLegalStatus(action.payload.data.data.updateCar),
        engineType: stringifyEngineType(action.payload.data.data.updateCar),
        sellingStatus: stringifySellingStatus(
          action.payload.data.data.updateCar
        )
      };
    default:
      return state;
  }
};
