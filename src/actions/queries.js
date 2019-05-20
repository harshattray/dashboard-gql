/**
 * @Author: harsha
 * @Date:   2019-05-17T02:43:43+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-17T02:52:29+05:30
 *
 */

import axios from "axios";

export const axiosGraphQL = axios.create({
  baseURL: "https://fcg-fe-test.herokuapp.com/"
});

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

export const CREATE_TASKS = `
  mutation ($carId: ID!,$task: TaskInput!){
    createTask(carId:$carId,task: $task)
  }
`;

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
