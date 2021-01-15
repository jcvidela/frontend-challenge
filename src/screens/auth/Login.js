import React from "react";
import { useAuthDispatch } from "../../hooks/";
import { types } from "../../types/types";
import { useForm } from "../../hooks/useForm";

export default function ({ history }) {
  const initialForm = { user: "", password: "" };
  const [isDisbled, setIsDisabled] = React.useState(true);
  const [formValues, handleChange] = useForm(initialForm);
  const dispatch = useAuthDispatch();

  React.useEffect(function enableSendButton() {
    if(formValues.user.trim() === '' || formValues.password.trim() === '') {
      setIsDisabled(true)
    }
    else {
      setIsDisabled(false)
    }
  }, [formValues])

  function capitalizer(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleClick() {
    if(formValues.user.trim() === '' || formValues.password.trim() === '') return;
    dispatch({
      type: types.login,
      payload: {
        name: capitalizer(formValues.user),
      },
    });

    history.replace("/");
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Login Screen</h1>
      <hr />

      <div className="d-flex justify-content-center">
        <form 
          className="form-group d-flex flex-column"
          style={{ margin: 'auto', width: '30rem', gridGap: '.5rem' }}
        >
          <input
            className="form-control"
            type="text"
            name="user"
            value={formValues.user}
            onChange={handleChange}
            autoComplete="off"
            placeholder="User name"
          />
          <input
            className="form-control"
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Password"
          />
          <button className="btn btn-primary" onClick={handleClick} disabled={isDisbled}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
