import React from "react";

// {input. label } geting these for the SurveyForm "Field" params
// <Field label="Survey Title" type="text" name="title" component={SurveyField} />
export default ({ input, label, meta: { error, touched } }) => {
  //console.log(props.input);
  // {...input} == onChange(input.onChange) onBlur(input.onBlur) etc... handles all these onSomething methods by react
  // {touched && error} boolean statement if touched and there is an error, then it will show
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginBotton: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
