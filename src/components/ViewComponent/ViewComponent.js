/**
 * @Author: harsha
 * @Date:   2019-05-17T01:19:53+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-19T10:41:19+05:30
 */
import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import gql from "graphql-tag";
import { getDetails } from "../../actions/ViewActions";
import EntityDetailsComponent from "../EntityDetailsComponent/EntityDetailsComponent";
import { Dimmer, Loader, Segment, Card } from "semantic-ui-react";

class ViewComponent extends Component {
  componentDidMount() {
    this.props.getDetails();
  }
  render() {
    const { isFetching, carDataStack } = this.props;
    console.log(carDataStack.carStackDetails, "wtff");
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
