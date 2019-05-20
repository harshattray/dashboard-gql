/**
 * @Author: harsha
 * @Date:   2019-05-20T05:31:43+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-20T07:09:37+05:30
 */
import React, { Fragment, Component } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { closeModal } from "../../actions/TaskActions";
import CreateTaskForm from "../CreateTasksFormComponent/CreateTasksFormComponent";

class CreateTasksModalComponent extends Component {
  render() {
    const { openModalSwitch, closeModal } = this.props;
    return (
      <Fragment>
        <Modal open={openModalSwitch}>
          <Modal.Header>Create Tasks</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Enter Task Details</Header>
              <CreateTaskForm />
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Done"
              onClick={closeModal}
            />
          </Modal.Actions>
        </Modal>
      </Fragment>
    );
  }
}

function mapStateToProps({ tasksStack }) {
  return {
    openModalSwitch: tasksStack.openModalSwitch
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ closeModal }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTasksModalComponent);
