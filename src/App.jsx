import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
// import { Services } from "./components/services";
// import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
// import { Contact } from "./components/Contact";
// import {Justin } from "./components/justin"
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
// import { Router } from "express";
// import Switch from "react-bootstrap/esm/Switch";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from "./components/Home";
// import { auth } from "./data/config";
import { AuthProvider } from "../src/contexts/AuthContext"
import PrivateRoute from "./components/PrivateRoute"
import Profile from "./components/Profile"
import UpdateProfile from "./components/UpdateProfile"
import Sarcasmdetector from "./components/Sarcasmdetector"



// import { initializeApp } from 'firebase/app';

// const firebaseConfig = {   
//   apiKey: "AIzaSyClOmFiIbO35e2SsfBgkfmNwOksKvN4d4U",
//   authDomain: "auth-development-3beee.firebaseapp.com",
//   projectId: "auth-development-3beee",
//   storageBucket: "auth-development-3beee.appspot.com",
//   messagingSenderId: "268559773718",
//   appId: "1:268559773718:web:42d4d3de6e0e7a773b0537"
// };

// const app = initializeApp(firebaseConfig);


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      
      <Router>
      <AuthProvider>
      <Navigation />
        <Switch>
          
          <Route exact path="/" component={Home}/>
          <Route exact path="/Login" component={Login}/>
          <Route path="/signup" component={Signup} />
             
              <Route path="/forgot-password" component={ForgotPassword} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/sarcasm" component={Sarcasmdetector} />
          
        </Switch>
        </AuthProvider>
      </Router>
      {/* <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} /> */}
      {/* <Login data={landingPageData.Login} />
      <About data={landingPageData.About} />
      Services data={landingPageData.Services} 
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
      <Justin data={landingPageData.Justin}/> */}
    </div>
  );
};

export default App;
