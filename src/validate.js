/**
 * @Author: harsha
 * @Date:   2019-05-18T05:31:55+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-18T06:35:32+05:30
 */

export const validate = values => {
  const errors = {};
  if (!values.userSignUpMobile) {
    errors.userSignUpMobile = "Mobile number is required";
  } else if (!values.userSignUpMobile.match(/^[0-9]*$/)) {
    errors.userSignUpMobile = "Mobile number is not valid";
  }
  if (!values.userFirstName) {
    errors.userFirstName = "First name is required";
  }
  if (!values.userLastName) {
    errors.userLastName = "Last name is required";
  }
  return errors;
};
