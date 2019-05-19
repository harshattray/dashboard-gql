/**
 * @Author: harsha
 * @Date:   2019-05-19T06:50:39+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-19T12:58:38+05:30
 */

import React from "react";
import { Form, Loader } from "semantic-ui-react";

/**
 * [renderCarOptions Dropdown select handler]
 * @param  {[type]} label       [description]
 * @param  {[type]} placeholder [description]
 * @param  {[type]} name        [description]
 * @param  {[type]} options     [description]
 * @param  {[type]} input       [description]
 * @return {[type]}             [description]
 */

export const renderCarOptions = ({
  label,
  placeholder,
  name,
  options,
  input,
  showTrim,
  showModelField,
  enableModel,
  enableTrim,
  disabled
}) => {
  function handleSelect(e, { value }) {
    if (input.name === "make") {
      enableModel ? showModelField(false) : showModelField(true);
    }
    if (input.name === "model") {
      enableTrim ? showTrim(false) : showTrim(true);
    }
    return input.onChange(value);
  }
  if (!options) {
    return <Loader inline active />;
  }
  return (
    <Form.Select
      fluid
      label={label}
      options={options}
      placeholder={placeholder}
      {...input}
      onChange={handleSelect}
      disabled={disabled}
    />
  );
};
