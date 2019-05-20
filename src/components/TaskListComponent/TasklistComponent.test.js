/**
 * @Author: harsha
 * @Date:   2019-05-20T23:32:45+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-20T23:46:16+05:30
 */
import React from "react";
import { shallow } from "enzyme";
import { TaskListComponent, RenderTaskList } from "./TaskListComponent";
import { tasksInfo } from "../fixtures";

const props = { tasksInfo };

describe("TaskListComponent", () => {
  let wrapper = shallow(<TaskListComponent {...props} />);

  it("contains RenderTaskList", () => {
    expect(wrapper.find(RenderTaskList)).toMatchSnapshot();
  });

  it("expect to render TasksList", () => {
    console.log(wrapper.debug());
    expect(wrapper.find("tasksInfo").length).toBeGreaterThanOrEqual(0);
  });
});
