import React from "react";
import Button from "../components/buttons/Button";

import Navigation from "../components/navigation/Navigation";

import { ReactComponent as Databiz }from '../images/client-databiz.svg';
import { ReactComponent as Maker }from '../images/client-maker.svg';
import { ReactComponent as Meet }from '../images/client-meet.svg';
import { ReactComponent as Audiophile }from '../images/client-audiophile.svg';

import '../scss/Header.scss';

function Header () {
  return ( 
    <header className="container">
         <Navigation />
         <div className="header__content-container">
           <div className="header__content-left">
              <h1 className="heading__primary">Make remote work</h1>
              <p className="header__content-text">
                Get your team in syn, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
              </p>
              <Button classname="header__content-button">
                Learn more
              </Button>
              <div className="header__partners-container">
                  <Databiz />
                  <Audiophile />
                  <Meet />
                  <Maker />
              </div>
           </div>
           <div className="header__content-right">
            &nbsp;
           </div>
         </div>

    </header>)
}

export default Header;