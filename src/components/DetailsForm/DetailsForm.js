/**
 * @Author: harsha
 * @Date:   2018-09-13T14:45:50+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-19T06:59:24+05:30
 */
import React, { Component } from "react";
import { Form, Loader } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector, reset } from "redux-form";
import {
  submitFormData,
  showTrim,
  showMockField
} from "../../actions/ViewActions";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { renderDropdown } from "../renderDropdownComponent/renderDropdownComponent";
import { renderCarOptions } from "../renderDropdownComponent/renderOptionsComponent";
import {
  physicalstatus,
  legalStatus,
  engineType,
  sellingStatus
} from "../constants";
import { validate } from "../../validate";

console.log(physicalstatus, "wtf");

class SubmitDetailsForms extends Component {
  /**
   * [handleSignUpSubmit Form submit handler]
   * @param  {[type]} data [description]
   * @return {[type]}      [description]
   */
  handleSignUpSubmit = data => {
    this.props.submitFormData(data);
  };

  render() {
    const {
      carInfo,
      invalid,
      submitting,
      handleSubmit,
      makeJson,
      trimJson,
      modelJson,
      showMockField,
      showTrim
    } = this.props;
    return (
      <Form
        name="userDataForm"
        onSubmit={handleSubmit(this.handleSignUpSubmit)}
        noValidate
      >
        <Form.Group className="ui grid">
          <div className="row">
            <Field
              name="physicalStatus"
              component={renderDropdown}
              placeholder="Physical Status"
              label="Physical Status"
              options={physicalstatus[0].physical_status}
            />
            <Field
              name="legalStatus"
              component={renderDropdown}
              placeholder="Legal Status"
              label="Legal Status"
              options={legalStatus[0].legal_status}
            />
            <Field
              name="sellingStatus"
              component={renderDropdown}
              placeholder="Selling Status"
              label="Selling Status"
              options={sellingStatus[0].selling_status}
            />
            <Field
              name="engineType"
              component={renderDropdown}
              placeholder="Engine Type"
              label="Engine Type"
              options={engineType[0].engine_type}
            />
          </div>
          <div className="row">
            <Field
              name="make"
              component={renderCarOptions}
              placeholder="Make"
              label="Make"
              showMockField={showMockField}
              options={makeJson}
            />
            <Field
              name="model"
              component={renderCarOptions}
              placeholder="Select Model"
              label="Model"
              showTrim={showTrim}
              options={modelJson}
            />
            <Field
              name="trim"
              component={renderCarOptions}
              placeholder="Trim"
              label="Trim"
              options={trimJson}
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
function mapStateToProps({ carStack, form }) {
  return {
    carInfo: carStack.carStackDetails,
    makeJson: carStack.makeStack,
    modelJson: carStack.modelStack,
    trimJson: carStack.trimStack
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { submitFormData, showMockField, showTrim },
    dispatch
  );
}

const afterSubmitdata = (result, dispatch) => dispatch(reset("userDataForm"));

SubmitDetailsForms = reduxForm({
  validate,
  form: "userDataForm",
  destroyOnUnmount: false,
  onSubmitSuccess: afterSubmitdata
})(SubmitDetailsForms);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitDetailsForms);
