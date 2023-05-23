'use strict';
import { slide as Menu } from 'react-burger-menu'
import React, {Component} from 'react';
import "./Burger.css";

export default class Burger extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="General" className="menu-item" href="/general">Головна</a>
        <a id="Students" className="menu-item" href="/students">Студенти</a>
        <a id="Subjects" className="menu-item" href="/subjects">Предмети</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}