/**
 * @Author: harsha
 * @Date:   2019-05-18T03:21:14+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-18T04:51:53+05:30
 */

import React, { Component, Fragment } from "react";
import { Card, Feed, Icon } from "semantic-ui-react";
import moment from "moment";

const FinancialDetailsComponent = props => {
  return (
    <Fragment>
      <Card>
        <Card.Content>
          <Card.Header>Financial Information</Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Content>
                <Feed.Date content="Purchsed" />
                <Feed.Summary>
                  <Icon name="dollar" color="yellow" />
                  {props.financialDetailsStack.purchasePrice}{" "}
                  <Card.Meta>
                    (
                    {moment(props.financialDetailsStack.purchaseDate).format(
                      "DD/MM/YYYY"
                    )}
                    ,{props.financialDetailsStack.purchaseLocation})
                  </Card.Meta>
                  <Card.Description>
                    <Card.Meta>
                      {props.financialDetailsStack.paymentDonePercentage} %
                      payments to buyer done
                    </Card.Meta>
                  </Card.Description>
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Content>
                <Feed.Date content="Sold" />
                <Feed.Summary>
                  <Icon name="dollar" color="yellow" />
                  {props.financialDetailsStack.sellingPrice}{" "}
                  <Card.Meta>
                    <p className="percentage">
                      +{props.financialDetailsStack.margin}%
                    </p>
                  </Card.Meta>{" "}
                  <Card.Meta>
                    (
                    {moment(props.financialDetailsStack.sellingDate).format(
                      "DD/MM/YYYY"
                    )}
                    ,{props.financialDetailsStack.sellingLocation})
                  </Card.Meta>
                  <Card.Description>
                    <Card.Meta>
                      {props.financialDetailsStack.sellingDonePercentage} %
                      payments to buyer done
                    </Card.Meta>
                  </Card.Description>
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      </Card>
    </Fragment>
  );
};

export default FinancialDetailsComponent;
