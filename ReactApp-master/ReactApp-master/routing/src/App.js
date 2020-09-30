import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Link,Route,Switch,NavLink} from 'react-router-dom';
import Projects from './Projects';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
     <div className="navbar" >
        <ul className="ul">
          <li className="li a">
            <NavLink activeClassName="active" style={{color:'white'}}   
            to={'/Projects/'}>
               Projects </NavLink>
          </li>
          <li className="li a">
            <NavLink activeClassName="active" style={{color:'white'}} 
            to={'/Home/'} 
            
            > 
            Home </NavLink>
          </li>
          <li className="li a">
            <NavLink activeClassName="active" style={{color:'white'}} 
            to={'/Services/'}  
            > 
            Services </NavLink>
          </li>
          <li className="li a">
            <NavLink activeClassName="active" style={{color:'white'}} 
            to={'/Contact/'}  
            > 
            Contact </NavLink>
          </li>
        </ul>
     </div> 
     <Switch>
          <Route path={'/Projects'} exact component={Projects} /> 
          <Route path={'/Home'} exact component={Home} /> 
          <Route path={'/Services'} exact component={Services} /> 
          <Route path={'/Contact'} exact component={Contact} /> 
          
        </Switch>
     </BrowserRouter>

    </div>
  );
}

export default App;
