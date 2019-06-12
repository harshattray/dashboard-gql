/**
 * @Author: harsha
 * @Date:   2019-05-20T10:59:37+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-20T23:32:01+05:30
 */

import React, { Component, Fragment } from "react";
import {
  Form,
  Card,
  Button,
  Segment,
  Dimmer,
  Loader,
  Feed,
  Icon
} from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector, reset } from "redux-form";
import { RenderCheckBox } from "../RenderCheckBoxComponent/RenderCheckBoxComponent";
import { updateTask } from "../../actions/TaskActions";

export class TaskListComponent extends Component {
  render() {
    const { tasksInfo, updateTask, handleSubmit } = this.props;
    return (
      <Fragment>
        <RenderTaskList
          tasksInfo={tasksInfo}
          updateTask={updateTask}
          handleSubmit={handleSubmit}
        />
      </Fragment>
    );
  }
}

export const RenderTaskList = ({ tasksInfo, updateTask, handleSubmit }) => {
  const listRenderer = tasksInfo.map(data => {
    return (
      <div className="list-view" key={data.id}>
        <Feed>
          <Feed.Event>
            <Feed.Content>
              Status:
              {data.completed ? (
                <Icon name="thumbs up" color="green" />
              ) : (
                <Icon name="thumbs down" color="red" />
              )}
              <Feed.Summary>{data.comment}</Feed.Summary>
              <Form name="taskListForm" noValidate>
                <div className="row">
                  <Field
                    name="taskCheckBox"
                    component={RenderCheckBox}
                    label="Change Status"
                    updateTask={updateTask}
                    handleSubmit={handleSubmit}
                    taskID={data.id}
                  />
                </div>
              </Form>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </div>
    );
  });
  return <Fragment>{listRenderer}</Fragment>;
};

function mapStateToProps({ carStack, form, tasksStack }) {
  return {
    tasksInfo: tasksStack.tasksList.tasks,
    isFetchingTasks: tasksStack.isFetchingTasks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateTask }, dispatch);
}
const afterSubmitdata = (result, dispatch) => dispatch(reset("taskListForm"));

TaskListComponent = reduxForm({
  form: "taskListForm",
  destroyOnUnmount: false,
  onSubmitSuccess: afterSubmitdata
})(TaskListComponent);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskListComponent);
