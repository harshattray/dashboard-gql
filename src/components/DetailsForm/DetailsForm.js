/**
 * @Author: harsha
 * @Date:   2018-09-13T14:45:50+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-19T13:33:42+05:30
 */
import React, { Component } from "react";
import { Form, Loader } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector, reset } from "redux-form";
import {
  submitFormData,
  showTrim,
  showModelField
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
      showModelField,
      showTrim,
      enableTrim,
      enableModel,
      physicalStatusCheck,
      legalStatusCheck,
      engineTypeCheck,
      sellingStatusCheck
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
              placeholder={
                physicalStatusCheck ? physicalStatusCheck : "Physical Status"
              }
              label="Physical Status"
              options={physicalstatus[0].physical_status}
            />
            <Field
              name="legalStatus"
              component={renderDropdown}
              placeholder={legalStatusCheck ? legalStatusCheck : "Legal Status"}
              label="Legal Status"
              options={legalStatus[0].legal_status}
            />
            <Field
              name="sellingStatus"
              component={renderDropdown}
              placeholder={
                sellingStatusCheck ? sellingStatusCheck : "Selling Status"
              }
              label="Selling Status"
              options={sellingStatus[0].selling_status}
            />
            <Field
              name="engineType"
              component={renderDropdown}
              placeholder={engineTypeCheck ? engineTypeCheck : "Engine Type"}
              label="Engine Type"
              options={engineType[0].engine_type}
            />
          </div>
          <div className="row">
            <Field
              name="make"
              component={renderCarOptions}
              placeholder={carInfo.make ? carInfo.make : "Select Make"}
              label="Make"
              showModelField={showModelField}
              enableModel={enableModel}
              options={makeJson}
              disabled={false}
            />
            <Field
              name="model"
              component={renderCarOptions}
              placeholder={carInfo.model ? carInfo.model : "Select Model"}
              label="Model"
              showTrim={showTrim}
              enableTrim={enableTrim}
              options={modelJson}
              disabled={enableModel ? false : true}
            />
            <Field
              name="trim"
              component={renderCarOptions}
              placeholder={carInfo.trim ? carInfo.trim : "Select Trim"}
              label="Trim"
              options={trimJson}
              disabled={enableTrim ? false : true}
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
    trimJson: carStack.trimStack,
    enableTrim: carStack.enableTrim,
    enableModel: carStack.enableModel,
    physicalStatusCheck: carStack.physicalStatus,
    legalStatusCheck: carStack.legalStatus,
    engineTypeCheck: carStack.engineType,
    sellingStatusCheck: carStack.sellingStatus
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { submitFormData, showModelField, showTrim },
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
