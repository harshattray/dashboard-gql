/**
 * @Author: harsha
 * @Date:   2019-05-17T01:19:53+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-20T10:54:34+05:30
 */
import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import gql from "graphql-tag";
import { getDetails } from "../../actions/EntityDetailsActions";
import EntityDetailsComponent from "../EntityDetailsComponent/EntityDetailsComponent";
import TaskViewComponent from "../TaskViewComponent/TaskViewComponent";
import { Dimmer, Loader, Segment, Card, Grid } from "semantic-ui-react";

class ViewComponent extends Component {
  componentDidMount() {
    this.props.getDetails();
  }
  render() {
    const { isFetching, carDataStack } = this.props;
    return (
      <Fragment>
        {isFetching ? (
          <Segment>
            <Dimmer active inverted>
              <Loader size="huge">Loading</Loader>
            </Dimmer>
          </Segment>
        ) : (
          <Card.Group>
            <Card
              fluid
              color="yellow"
              header={`${carDataStack.carStackDetails.make}${
                carDataStack.carStackDetails.model
              }`}
            />
            <EntityDetailsComponent />
            <div className="project-container">
              <Segment placeholder>
                <Grid columns={1} relaxed="very" stackable>
                  <Grid.Column verticalAlign="middle">
                    <TaskViewComponent />
                  </Grid.Column>
                </Grid>
              </Segment>
            </div>
          </Card.Group>
        )}
      </Fragment>
    );
  }
}

function mapStateToProps({ carStack }) {
  return {
    carDataStack: carStack,
    isFetching: carStack.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDetails }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewComponent);
