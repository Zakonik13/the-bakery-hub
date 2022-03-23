import React, { useState } from "react";
import Auth from "../utils/auth";
import { Row, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

const Signup = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="spacer log-box">
      {/* <div className="card-body">
        <form onSubmit={handleFormSubmit}>
          <input
            className="form-input"
            placeholder="Your email"
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="******"
            name="password"
            type="password"
            id="password"
            value={formState.password}
            onChange={handleChange}
          />
          <button className="btn d-block w-100" type="submit">
            Submit
          </button>
          {error && <div>Sign up failed</div>}
        </form>
      </div> */}
      <form className="form-box" onSubmit={handleFormSubmit}>
        <div>
          <Row className="pos">
            <label>Admin Email</label>
            <input
              name="email"
              type="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
            />
          </Row>
          <br />
          <Row className="pos">
            <label>Admin Password</label>
            <input
              name="password"
              type="password"
              id="password"
              value={formState.password}
              onChange={handleChange}
            />
          </Row>
          <br />
          <Row>
            <Button type="submit">Signup</Button>
          </Row>
          {error && <div>Sign up failed</div>}
        </div>
      </form>
    </div>
  );
};

export default Signup;
