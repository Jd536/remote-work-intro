import React from "react";

import './CompanyMenu.scss';

function CompanyMenu (){
  return(
    <div className="company__menu-container">
      <ul className="company__menu">
        <li className="company__menu-item"> History </li>

        <li className="company__menu-item"> Our Team </li>

        <li className="company__menu-item"> Blog</li>

      </ul>
    </div>
  )
}

export default CompanyMenu;