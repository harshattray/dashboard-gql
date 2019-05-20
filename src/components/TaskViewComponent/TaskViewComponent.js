/**
 * @Author: harsha
 * @Date:   2019-05-19T13:49:45+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-20T05:04:52+05:30
 */

import React, { Fragment, Component } from "react";
import { Form, Card, Button, Segment, Dimmer, Loader } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector, reset } from "redux-form";
import { validate } from "../../validate";
import { fetchTasks } from "../../actions/TaskActions";

class TaskViewComponent extends Component {
  componentDidMount() {
    this.props.fetchTasks(this.props.carId);
  }
  render() {
    const { isFetchingTasks, tasksInfo } = this.props;
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
                <p>TasksList</p>
              ) : (
                <p>No tasks found</p>
              )}
            </Card.Content>
            <Card.Content extra>
              <Button basic color="green">
                Approve
              </Button>
            </Card.Content>
          </Card>
        )}
      </Fragment>
    );
  }
}

function mapStateToProps({ carStack, form, tasksStack }) {
  return {
    carInfo: carStack.carStackDetails,
    carId: carStack.carId,
    tasksInfo: tasksStack.tasksList,
    isFetchingTasks: tasksStack.isFetchingTasks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTasks }, dispatch);
}

const afterSubmitdata = (result, dispatch) => dispatch(reset("listViewForm"));

// SubmitDetailsForms = reduxForm({
//   validate,
//   form: "listViewForm",
//   destroyOnUnmount: false,
//   onSubmitSuccess: afterSubmitdata
// })(SubmitDetailsForms);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskViewComponent);
