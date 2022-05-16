import React, { useState } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { Row, Button } from "react-bootstrap";
// Components
import Page from "./Page";

const Admin = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Page>
      <div className="log-box">
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
              <Button type="submit">Login</Button>
            </Row>
            {error && <div>Login failed</div>}
          </div>
        </form>
      </div>
    </Page>
  );
};

export default Admin;
