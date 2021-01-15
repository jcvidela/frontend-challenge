import React from "react";

export function useForm(initialState = {}) {
  const [values, setValues] = React.useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleChange, reset];
}
