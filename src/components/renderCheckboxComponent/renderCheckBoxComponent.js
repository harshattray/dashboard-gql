/**
 * @Author: harsha
 * @Date:   2019-05-20T11:42:35+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-20T12:55:34+05:30
 */

import React from "react";
import { Form } from "semantic-ui-react";

/**
 * [RenderCheckBox checbox handler and dispatcher]
 * @param  {[type]} name     [description]
 * @param  {[type]} label    [description]
 * @param  {[type]} input    [description]
 * @param  {[type]} onChange [description]
 * @param  {[type]} input    [description]
 * @return {[type]}          [description]
 */

export const RenderCheckBox = ({
  name,
  label,
  input: { value, onChange, ...input },
  updateTask,
  handleSubmit,
  taskID
}) => {
  function showMoreDispatcher(data, taskID) {
    handleSubmit(updateTask(data, taskID));
    return onChange(data);
  }
  return (
    <Form.Checkbox
      label={label}
      {...input}
      defaultChecked={!!value}
      onChange={(e, data) => showMoreDispatcher(data.checked, taskID)}
    />
  );
};
