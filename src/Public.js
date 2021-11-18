import React from "react";
import { logout } from "./utils";
// const TOKEN_KEY = "jwt";

const Public = (props) => {
  const onLogout = () => {
    logout();
    props.history.push("/logout");
    // localStorage.removeItem(TOKEN_KEY);
  };

  return (
    <div className="public_router">
      <h1>WelCome To Private Router</h1>
      <h6>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.H
        <b>
          <sub>2</sub>
        </b>
        O
      </h6>
      <button className="btn btn-danger ml-4" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Public;
