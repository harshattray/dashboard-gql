/**
 * @Author: harsha
 * @Date:   2019-05-20T16:52:29+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-20T23:03:29+05:30
 */

import { shallow } from "enzyme";
import React from "react";
import { ViewComponent } from "./ViewComponent";
import EntityDetailsComponent from "../EntityDetailsComponent/EntityDetailsComponent";
import TaskViewComponent from "../TaskViewComponent/TaskViewComponent";

describe("Renders ViewComponent", () => {
  let wrapper;
  const props = {
    isFetching: false,
    getDetails: jest.fn(),
    carDataStack: {
      carStackDetails: {
        make: "BMW",
        model: "3-series"
      }
    }
  };

  beforeEach(() => {
    wrapper = shallow(<ViewComponent {...props} />);
  });

  it("expect to render View Component", () => {
    expect(shallow(<ViewComponent {...props} />)).toMatchSnapshot();
  });

  it("expect to contain EntityDetailsComponent ", () => {
    expect(wrapper.find(EntityDetailsComponent)).toMatchSnapshot();
  });

  it("renders EntityDetailsComponent ", () => {
    expect(wrapper.find(EntityDetailsComponent).exists()).toBe(true);
  });

  it("expect to contain TaskViewComponent ", () => {
    expect(wrapper.find(TaskViewComponent)).toMatchSnapshot();
  });
});
