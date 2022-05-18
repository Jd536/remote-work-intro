import React from "react";

import TodoListIcon from '../../images/icon-todo.svg';
import CalendarIcon from '../../images/icon-calendar.svg';
import RemindersIcon from '../../images/icon-reminders.svg';
import PlanningIcon from '../../images/icon-planning.svg';

import './FeaturesMenu.scss';

function FeaturesMenu (){
  return(
    <div className="features__menu-container">
      <ul className="features__menu">
        <li className="features__menu-item">
          <img src={TodoListIcon} alt="Todo list icon" className="features__menu-item-icon"/>
          <p className="features__menu-item-text">Todo List</p>
        </li>

        <li className="features__menu-item">
          <img src={CalendarIcon} alt="Calendar Icon" className="features__menu-item-icon"/>
          <p className="features__menu-item-text">Calendar</p>
        </li>

        <li className="features__menu-item">
          <img src={RemindersIcon} alt="Reminders icon" className="features__menu-item-icon"/>
          <p className="features__menu-item-text">Reminders</p>
        </li>

        <li className="features__menu-item">
          <img src={PlanningIcon} alt="Planning Icon" className="features__menu-item-icon"/>
          <p className="features__menu-item-text">Planning</p>
        </li>

      </ul>
    </div>
  )
}

export default FeaturesMenu;