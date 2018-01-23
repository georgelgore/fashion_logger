import React from "react";

const NewUser = props => {
  console.log("here");
  return (
    <div style={{ marginTop: "5.55em" }}>
      <form onSubmit={props.submitHandler}>
        <label>Username:</label>
        <input
          type="text"
          value={props.newUserInfo.username}
          onChange={props.handleNewUser}
          placeholder="username"
          name="username"
        />
        <label>Email:</label>
        <input
          type="text"
          value={props.newUserInfo.email}
          onChange={props.handleNewUser}
          placeholder="email"
          name="email"
        />
        <label>Password:</label>
        <input
          type="password"
          value={props.newUserInfo.password}
          onChange={props.handleNewUser}
          placeholder="password"
          name="password"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewUser;
