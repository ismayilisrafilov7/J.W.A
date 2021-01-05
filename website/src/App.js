import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import "./index.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Contact from "./Contact";
import SWpeople from "./SWpeople";
import { BrowserRouter,Switch, Route} from "react-router-dom";


function App() {
  return (
    <div>
    
      <BrowserRouter>
      <NavBar/>
      <Switch>
      <Route exact path="/cont">
      <Contact/>

      </Route>
      <Route exact path="/swapi">
      <SWpeople/>

      </Route>
      <Route exact path="/">
      <Home/>

      </Route>

      </Switch>
      </BrowserRouter>
      
    </div>
  )
}





export default App;
