import React from "react";
import { Container, Button } from "semantic-ui-react";

class logIn extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      fields: {
        username: "",
        password: ""
      }
    };
  }

  login = (username, password) => {
    fetch("http://localhost:3000/api/v1/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(res => res.json())
      .then(resp => {
        if (resp.error) {
          this.setState({ error: true });
        } else {
          this.props.handleLogin(resp);
          this.props.history.push("/topics");
        }
      });
  };

  handleChange = e => {
    const newFields = {
      ...this.state.fields,
      [e.target.name]: e.target.value
    };
    this.setState({ fields: newFields });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.login(this.state.fields.username, this.state.fields.password);
  };

  render() {
    console.log("login props:", this.props);

    const { fields } = this.state;
    return (
      <Container>
        {this.state.error ? <h1> Try Again </h1> : null}
        <form
          className="ui large form"
          onSubmit={this.handleSubmit}
          style={{ marginTop: "5.00em" }}
        >
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon" />
                <input
                  onChange={this.handleChange}
                  value={fields.username}
                  type="text"
                  name="username"
                  placeholder="username"
                />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon" />
                <input
                  onChange={this.handleChange}
                  value={fields.password}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <Button black="true">Login</Button>
          </div>

          <div className="ui error message" />
        </form>
        <div className="ui message">
          New to us? <a href="#">Sign Up</a>
        </div>
      </Container>
    );
  }
}
export default logIn;
