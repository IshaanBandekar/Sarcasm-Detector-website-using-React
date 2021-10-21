import { useState, useEffect } from "react";
import React from 'react'
import { Navigation } from "./navigation";
import { Header } from "./header";
import { Features } from "./features";
import { About } from "./about";
// import { Services } from "./services";
import { Testimonials } from "./testimonials";
import { Team } from "./Team";
// import { Contact } from "./components/Contact";
// import {Justin } from "./components/justin"
import { Contact } from "./contact";
import JsonData from "../data/data.json";
// import SmoothScroll from "smooth-scroll";
function Home() {
    const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
    return (
        <div>
            <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      {/* <Login data={landingPageData.Login} /> */}
      <About data={landingPageData.About} />
      {/* <Services data={landingPageData.Services} /> */}
      <Testimonials data={landingPageData.Testimonials} /> 
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
      {/* <Justin data={landingPageData.Justin}/> */}
        </div>
    )
}

export default Home
