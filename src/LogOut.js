import React from "react";
import { HolderName } from "./App";

const LogOut = (props) => {
  const onLogout = () => {
    props.history.push("/material-login");
  };
  return (
    <div className="thanks">
      <h1>You Have Logout 🥴!!!</h1>
      <HolderName.Consumer>
        {(HolderName) => {
          return <h5 className="context_provider">Thank's {HolderName}</h5>;
        }}
      </HolderName.Consumer>
      <button className="btn btn-success ml-4" onClick={onLogout}>
        Login
      </button>
    </div>
  );
};

export default LogOut;
