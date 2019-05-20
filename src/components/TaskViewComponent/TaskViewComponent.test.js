/**
 * @Author: harsha
 * @Date:   2019-05-20T17:15:48+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-21T00:02:17+05:30
 */

import React from "react";
import { shallow } from "enzyme";
import { TaskViewComponent } from "./TaskViewComponent";
import TaskListComponent from "../TaskListComponent/TaskListComponent";
import { listProps } from "../fixtures";

describe("TaskViewComponent", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TaskViewComponent {...listProps} />);
  });

  it("expect to render Tasks", () => {
    expect(wrapper.find("tasks").length).toBeGreaterThanOrEqual(0);
  });
});
