/**
 * @Author: harsha
 * @Date:   2019-05-20T23:28:57+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-21T00:02:14+05:30
 */
export const listProps = {
  fetchTasks: jest.fn(),
  isFetchingTasks: false,
  openModal: jest.fn(),
  tasksInfo: {
    tasks: [
      {
        id: "710ef490-7b26-11e9-9bc3-29da9ae12ff0",
        taskType: "ADD_DOCUMENT",
        comment: "Passport",
        completed: false
      }
    ]
  }
};

export const tasksInfo = {
  handleSubmit: jest.fn(),
  updateTask: jest.fn(),
  tasksInfo: {
    tasks: [
      {
        id: "710ef490-7b26-11e9-9bc3-29da9ae12ff0",
        taskType: "ADD_DOCUMENT",
        comment: "Passport",
        completed: false
      }
    ]
  }
};
