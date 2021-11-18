import React, { createContext } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Password from "./Password";
import history from "./history";
import Private from "./Private";
import Home from "./Home";
import Public from "./Public";
import Login from "./Login";
import LogOut from "./LogOut";
import Navbar from "./Navbar";
import Form2 from "./Form2";
import Register from "./Register";
import Todo from "./Todo";
import Add from "./Table/Add";
import Edit from "./Table/Edit";
import View from "./Table/View";
import PrivateRoute from "./PrivateRoute";
import TimeSlot from "./Timeslot/TimeSlot";

store.subscribe(() => console.log(store.getState()));
const HolderName = createContext();
const Visit = createContext();
const Hello = createContext();

// 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;
// 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;

const App = () => {
  return (
    <div>
      <HolderName.Provider value="Visit Again">
        <Visit.Provider value="Our Website">
          <Hello.Provider value="React Router">
            <Provider store={store}>
              <Router history={history}>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route exact path="/changepassword" component={Password} />
                {/* <PrivateRoute exact path="/login/public" component={Public} /> */}
                <PrivateRoute exact path="/public" component={Public} />
                {/* <Route exact path="/private" component={Private} /> */}
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={LogOut} />
                <Route exact path="/material-login" component={Form2} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/todo" component={Todo} />
                <Route exact path="/user" component={Add} />
                <Route exact path="/user/edit/:id" component={Edit} />
                <Route exact path="/user/view/:id" component={View} />
                <Route exact path="/timeslot" component={TimeSlot} />
              </Router>
            </Provider>
          </Hello.Provider>
        </Visit.Provider>
      </HolderName.Provider>
    </div>
  );
};

export default App;
export { HolderName };
export { Visit };
export { Hello };
