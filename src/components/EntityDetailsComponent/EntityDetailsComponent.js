/**
 * @Author: harsha
 * @Date:   2019-05-17T03:21:48+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-20T04:30:33+05:30
 */
import React, { Fragment, Component } from "react";
import { Button, Divider, Form, Grid, Segment, Card } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createTasksAction } from "../../actions/TaskActions";
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
              <Card
                color="teal"
                image="https://react.semantic-ui.com/images/wireframe/image.png"
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
