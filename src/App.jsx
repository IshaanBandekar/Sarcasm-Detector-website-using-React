import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
// import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
// import { Contact } from "./components/Contact";
// import {Justin } from "./components/justin"
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Login } from "./components/login";
// import { Router } from "express";
// import Switch from "react-bootstrap/esm/Switch";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
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
      <Navigation />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Login" component={Login}/>

        </Switch>
      </Router>
      {/* <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} /> */}
      {/* <Login data={landingPageData.Login} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
      <Justin data={landingPageData.Justin}/> */}
    </div>
  );
};

export default App;
