/**
 * @Author: harsha
 * @Date:   2019-05-20T06:34:08+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-20T12:45:21+05:30
 */

import React, { Component } from "react";
import { Form, Loader } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector, reset } from "redux-form";
import { taskTypes } from "../constants";
import { renderDropdown } from "../renderDropdownComponent/renderDropdownComponent";
import { renderFields } from "../renderFieldsComponent/renderFieldsComponents";
import { createTasksAction } from "../../actions/TaskActions";
import { validate } from "../../validate";

class CreateTaskForm extends Component {
  handleTasksSubmit = data => {
    this.props.createTasksAction(data);
  };
  render() {
    const { handleSubmit, invalid, submitting } = this.props;
    return (
      <Form
        name="createTaskForm"
        onSubmit={handleSubmit(this.handleTasksSubmit)}
        noValidate
      >
        <Form.Group className="ui grid">
          <div className="row">
            <Field
              name="taskTypes"
              component={renderDropdown}
              placeholder="Select Task Type"
              label="Select Task Type"
              options={taskTypes[0].task_types}
            />
            <Field
              name="taskComments"
              component={renderFields}
              placeholder="Enter Comments here"
              required
              label="Enter Comments"
            />
          </div>
        </Form.Group>
        <Form.Button
          disabled={invalid}
          loading={submitting}
          size="huge"
          color="blue"
          className="pull-left"
        >
          Submit
        </Form.Button>
      </Form>
    );
  }
}

function mapStateToProps({ tasksStack, form }) {
  return {
    taskInfo: tasksStack
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createTasksAction }, dispatch);
}

const afterSubmitdata = (result, dispatch) => dispatch(reset("createTaskForm"));

CreateTaskForm = reduxForm({
  validate,
  form: "createTaskForm",
  destroyOnUnmount: false,
  onSubmitSuccess: afterSubmitdata
})(CreateTaskForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTaskForm);
