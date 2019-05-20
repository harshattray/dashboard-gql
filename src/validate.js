/**
 * @Author: harsha
 * @Date:   2019-05-18T05:31:55+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-20T14:11:01+05:30
 */

export const validate = values => {
  const errors = {};
  if (!values.model) {
    errors.model = "Please Select model value";
  }
  if (!values.trim) {
    errors.trim = "Please Select Trim value";
  }
  if (!values.make) {
    errors.make = "Please Select Make value";
  }
  if (!values.taskComments) {
    errors.taskComments = "Comments are required";
  }
  return errors;
};
