/**
 * @Author: harsha
 * @Date:   2019-05-19T13:49:45+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-20T20:20:18+05:30
 */

import React, { Fragment, Component } from "react";
import { Form, Card, Button, Segment, Dimmer, Loader } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector, reset } from "redux-form";
import { fetchTasks, openModal } from "../../actions/TaskActions";
import CreateTasksModalComponent from "../CreateTasksModalComponent/CreateTasksModalComponent";
import TaskListComponent from "../TaskListComponent/TaskListComponent";

export class TaskViewComponent extends Component {
  componentDidMount() {
    this.props.fetchTasks(this.props.carId);
  }
  render() {
    const { isFetchingTasks, tasksInfo, openModal } = this.props;
    return (
      <Fragment>
        {isFetchingTasks ? (
          <Segment>
            <Dimmer active inverted>
              <Loader size="small">Loading</Loader>
            </Dimmer>
          </Segment>
        ) : (
          <Card>
            <Card.Content header="A list of tasks" />
            <Card.Content>
              {tasksInfo.tasks.length > 0 ? (
                <TaskListComponent />
              ) : (
                <p>No tasks found</p>
              )}
            </Card.Content>
            <Card.Content extra>
              <Button basic color="green" onClick={openModal}>
                Create Tasks
              </Button>
            </Card.Content>
            <CreateTasksModalComponent />
          </Card>
        )}
      </Fragment>
    );
  }
}

function mapStateToProps({ carStack, form, tasksStack }) {
  return {
    carId: carStack.carId,
    tasksInfo: tasksStack.tasksList,
    isFetchingTasks: tasksStack.isFetchingTasks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTasks, openModal }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskViewComponent);
