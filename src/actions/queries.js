/**
 * @Author: harsha
 * @Date:   2019-05-17T02:43:43+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-21T00:10:59+05:30
 *
 */

import axios from "axios";

/**
 * [axiosGraphQL Base axiosGraphQL hook ]
 * @type {[type]}
 */

export const axiosGraphQL = axios.create({
  baseURL: "https://fcg-fe-test.herokuapp.com/"
});

/**
 * [FETCH_CAR_DATA FetchCar GraphQL query]
 * @type {[type]}
 */

export const FETCH_CAR_DATA = `
   query ($id:ID!) {
     car(id: $id) {
       id
       make
       model
       trim
       engineType
       physicalStatus
       legalStatus
       sellingStatus
       financialDetails {
         purchasePrice
         purchaseDate
         purchaseLocation
         paymentDonePercentage
         sellingPrice
         sellingDate
         sellingLocation
         sellingDonePercentage
         margin
       }
     }
   }
 `;

/**
 * [UPDATE_CAR UpdateCar graphQl mutation]
 * @type {[type]}
 */

export const UPDATE_CAR = `
 mutation($car:CarInput){
   updateCar(car:$car){
     id
     make
     model
     trim
     engineType
     physicalStatus
     legalStatus
     sellingStatus
     financialDetails {
       purchasePrice
       purchaseDate
       purchaseLocation
       paymentDonePercentage
       sellingPrice
       sellingDate
       sellingLocation
       sellingDonePercentage
       margin
     }
   }
 }
`;

/**
 * [CREATE_TASKS createTask mutation]
 * @type {[type]}
 */

export const CREATE_TASKS = `
  mutation ($carId: ID!,$task: TaskInput!){
    createTask(carId:$carId,task: $task)
  }
`;

/**
 * [FETCH_TASKS tasks query]
 * @type {[type]}
 */

export const FETCH_TASKS = `
query($carId:ID!){
  tasks(carId:$carId){
    id
    taskType
    comment
    completed
  }
}
`;

/**
 * [UPDATE_TASKS updateTask mutation]
 * @type {[type]}
 */

export const UPDATE_TASKS = `
mutation($id:ID!,$completed:Boolean!){
  updateTask(id:$id,completed:$completed){
    id
    taskType
    comment
    completed
  }
}
`;
