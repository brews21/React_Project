import React from "react";

// {input. label } geting these for the SurveyForm "Field" params
// <Field label="Survey Title" type="text" name="title" component={SurveyField} />
export default ({ input, label, meta }) => {
  //console.log(props.input);
  // {...input} == onChange(input.onChange) onBlur(input.onBlur) etc... handles all these onSomething methods by react
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      {meta.error}
    </div>
  );
};
