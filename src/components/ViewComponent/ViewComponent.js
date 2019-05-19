/**
 * @Author: harsha
 * @Date:   2019-05-17T01:19:53+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-18T04:29:48+05:30
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
import { Dimmer, Loader, Segment } from "semantic-ui-react";

class ViewComponent extends Component {
  componentDidMount() {
    this.props.getDetails();
  }
  render() {
    const { isFetching } = this.props;
    return (
      <Fragment>
        {isFetching ? (
          <Segment>
            <Dimmer active inverted>
              <Loader size="huge">Loading</Loader>
            </Dimmer>
          </Segment>
        ) : (
          <EntityDetailsComponent />
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
