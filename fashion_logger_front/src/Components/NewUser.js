import React from "react";
import { Container, Button } from "semantic-ui-react";

const NewUser = props => {
  console.log("here");
  return (
    <Container>
      <div
        style={{
          marginTop: "10.00em",
          marginLeft: "30%",
          marginRight: "30%",
          maxWidth: "450px"
        }}
      >
        <form className="ui large form" onSubmit={props.submitHandler}>
          <Container size="small">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon" />
                  <input
                    type="text"
                    value={props.newUserInfo.username}
                    onChange={props.handleNewUser}
                    placeholder="username"
                    name="username"
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="mail outline icon" />
                  <input
                    type="text"
                    value={props.newUserInfo.email}
                    onChange={props.handleNewUser}
                    placeholder="email"
                    name="email"
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon" />
                  <input
                    type="password"
                    value={props.newUserInfo.password}
                    onChange={props.handleNewUser}
                    placeholder="password"
                    name="password"
                  />
                </div>
              </div>
              <Button black="true" fluid>
                Submit
              </Button>
            </div>
          </Container>
        </form>
      </div>
    </Container>
  );
};

export default NewUser;
