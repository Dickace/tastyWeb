
import './App.css';

import {
    Route,
    Switch,
    Redirect,

} from "react-router-dom"


import MainBody from "./main/MainBody";

import Terms from "./terms/Terms";
import HeaderBody from "./header/Headerbody";
import React from "react";
import FooterBody from "./footer/FooterBody";
import PrivacyPolicy from "./privacitypolicy/PrivacyPolicy";
import Marketplace from "./marketplace/Marketplace";
import Authentication from "./Authentication/Authentication";
import AboutUs from "./aboutus/Aboutus";

function App() {
  return (


          <div className="App">

              <Switch>
                  <Route path='/aboutus'>
                      <HeaderBody/>
                      <AboutUs/>
                      <FooterBody/>
                  </Route>
                  <Route path='/login' component={Authentication}>

                  </Route>
                  <Route path='/marketplace'>
                      <HeaderBody/>
                      <Marketplace/>
                      <FooterBody/>
                  </Route>
                  <Route path='/privacy' >
                      <HeaderBody/>
                      <PrivacyPolicy/>
                      <FooterBody/>
                  </Route>
                  <Route path='/terms'>
                      <HeaderBody/>
                      <Terms/>
                      <FooterBody/>
                  </Route>
                  <Route path='/' >
                      <HeaderBody/>
                      <MainBody/>
                      <FooterBody/>
                  </Route>



                  <Redirect from="/home" to="/"/>
              </Switch>

          </div>




  );
}

export default App;
