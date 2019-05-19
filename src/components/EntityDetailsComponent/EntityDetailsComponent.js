/**
 * @Author: harsha
 * @Date:   2019-05-17T03:21:48+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-19T06:14:52+05:30
 */
import React, { Fragment, Component } from "react";
import { Button, Divider, Form, Grid, Segment, Image } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createTasksAction } from "../../actions/ViewActions";
import FinancialDetailsComponent from "../FinancialDetailsComponent/FinancialDetailsComponent";
import SubmitDetailsForms from "../DetailsForm/DetailsForm";

class EntityDetailsComponent extends Component {
  componentDidMount() {
    // this.props.createTasksAction();
  }
  render() {
    const { financialDetailsStack } = this.props;
    return (
      <Fragment>
        <Segment placeholder>
          <Grid columns={3} relaxed="very" stackable>
            <Grid.Column>
              <Image
                src="https://react.semantic-ui.com/images/wireframe/image.png"
                size="small"
              />
            </Grid.Column>
            <Grid.Column>
              <SubmitDetailsForms />
            </Grid.Column>
            <Grid.Column verticalAlign="middle">
              <FinancialDetailsComponent
                financialDetailsStack={financialDetailsStack}
              />
            </Grid.Column>
          </Grid>
        </Segment>
      </Fragment>
    );
  }
}

function mapStateToProps({ carStack }) {
  return {
    financialDetailsStack: carStack.financialDetails
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createTasksAction }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityDetailsComponent);
