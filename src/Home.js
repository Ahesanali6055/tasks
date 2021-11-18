import React, { useContext } from "react";
import { Visit } from "./App";
import { Hello } from "./App";

const Home = () => {
  const context = useContext(Hello);

  return (
    <div>
      <div>
        <h3 className="home_center">WelCome To {context}</h3>
        <Visit.Consumer>
          {(lName) => {
            return <h3 className="home_provider"> WelCome To {lName}</h3>;
          }}
        </Visit.Consumer>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
