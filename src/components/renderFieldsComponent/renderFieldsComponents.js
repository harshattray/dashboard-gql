/**
 * @Author: harsha
 * @Date:   2018-09-16T18:52:03+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-20T13:36:08+05:30
 */

import React from "react";
import { Form, Loader } from "semantic-ui-react";

/**
 * [RenderFields renders input Fields and takes in relevant values]
 * @param  {String} label       [Input label]
 * @param  {String} placeholder [Imput placeholder]
 * @param  {String} name        [Input Name]
 * @return {Object}             [Input params Object]
 */
export const RenderFields = ({
  label,
  type,
  placeholder,
  name,
  input,
  textField,
  meta: { touched, error, warning }
}) => {
  return (
    <div>
      <Form.Input
        type={type}
        label={label}
        placeholder={placeholder}
        {...input}
      />
      {touched && error && <i>{error}</i>}
    </div>
  );
};
