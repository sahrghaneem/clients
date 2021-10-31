import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutUs from "./components/homepage";
import UsersList from "./components/usersList";
import Admin from "./components/admin";


function App() {
  return (
    
    <div className="App">
      
      <Router>
        <div>
          <nav >
            <ul className={"list"}>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/users" >Employees</Link>
              </li>
              <li>
                <Link to="/admin" >Admin</Link>
              </li>
            
            </ul>
          </nav>
         
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/admin">
              <Admin/>
            </Route>
            <Route path="/users">
             <UsersList/>
            </Route>
            <Route path="/">
             <AboutUs/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
    
  );
}

export default App;
