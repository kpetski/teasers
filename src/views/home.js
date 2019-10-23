import React from 'react';
import icon from '../assets/teaser.jpg';
import { homeStyle } from '../utils/constants';
import '../style/home.css'

const Home = () => {
  return (
    <div>
      <div style={homeStyle} id="welcome">
        <img src={icon} />
        <h1>Lets Get Teasing</h1>
        <p>use the menu to select a problem to solve</p>
      </div>
    </div>
  );
}

export default Home;