import React from 'react';
import {Link} from "react-router-dom";
import { Route} from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import './App.css'

const Home = () => <div className="compDiv">
  <Links/>
  <div className="bodyStyle">
    <nav>
      <span className="links"><Link to="/">home</Link></span>
      <span className="links"><Link to="/aboutUs">AboutUs</Link></span>
      <span className="links"><Link to="/contactus">Contactus</Link></span>
    </nav>
    <h1 className="headerPart">Home</h1>
    <h2><strong> Sai Venukuri Welcomes You!!</strong></h2>

    <div className="bodyStyle3">
      <p>If I quit now, I will soon be back to where I started. And when I started I was desperately wishing to be where I am now.</p>
      <p>You have power over your mind, not outside events. Realize this, and you will find strength.</p>
      <p>You are never too old to set another goal or to dream a new dream.</p>
    </div>
  </div>
</div>
const AboutUs = () => <div className="compDiv">
  <Links/>
  <div className="bodyStyle">
    <nav>
      <span className="links"><Link to="/">home</Link></span>
      <span className="links"><Link to="/aboutUs">AboutUs</Link></span>
      <span className="links"><Link to="/contactus">Contactus</Link></span>
    </nav>
    <h1 className="headerPart">AboutMe</h1>
    <p>Around 2yrs experience in AWS .</p>
    <div className="bodyStyle2" >
      <p>MY Education Details </p>
      <div>
        <table>
          <thead>
          <tr>
            <th>Masters</th>
            <th>FROM-TO</th>
            <th>Course Details</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <h3> First Maters </h3>
            <td>JUNE-2014 TO NOV-2016</td>
            <td>Health Care Administration</td>
          </tr>
          <tr>
            <h3>Second Masters</h3>
            <td>June 2019 TO JUNE 2021 </td>
            <td>Information Systems </td>
          </tr>

          </tbody>
        </table>

      </div>
    </div>
  </div>
</div>
const Contactus = () => <div className="compDiv">
  <Links/>
  <div className="bodyStyle">
    <nav>
      <span className="links"><Link to="/">home</Link></span>
      <span className="links"><Link to="/aboutUs">AboutUs</Link></span>
      <span className="links"><Link to="/contactus">Contactus</Link></span>
    </nav>
    <h1 className="headerPart">Contact Details</h1>
    <address>
      <h3>Sai venukuri</h3>
      <h3>email:saisirivanukuri@gmail.com</h3>
      <h3>phone:501-554-4303</h3>
    </address>

  </div>
</div>

const Links = () =>
    <nav  className="bodyStyle">
      <span className="links"><Link to="/"></Link></span>
      <span className="links"><Link to="/aboutUs"></Link></span>
      <span className="links"><Link to="/contactus"></Link></span>
    </nav>
const App = () => {
  return (

      <BrowserRouter>
        <Route path="/" exact component={Home}></Route>
        <Route path="/AboutUs" exact component={AboutUs}></Route>
        <Route path="/Contactus" exact component={Contactus}></Route>
      </BrowserRouter>
  )
}
export default App