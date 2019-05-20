/**
 * @Author: harsha
 * @Date:   2019-05-20T23:50:07+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-21T00:19:24+05:30
 */
import React from "react";
import { shallow } from "enzyme";
import { SubmitDetailsForms } from "./DetailsForm";

describe("DetailsForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SubmitDetailsForms />);
  });

  it("renders an HOC", () => {
    expect(wrapper.find("Hoc").exists()).toBe(true);
  });
});
