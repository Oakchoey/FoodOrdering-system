import React from 'react';
import './HomePage.css';
import {Link} from 'react-router-dom'
import restaurantImage from './Picture/Restaurant.png';

const HomePage = () => {
  return (
    <div className="container1">

    <img
        src={restaurantImage}
        alt="Restaurant"
        className="restaurantlogo"/>

      <h1 className="titleh">Welcome to Our Restaurant</h1>

      <p className="descriptionh">Good Food is the Foundation of Happiness.</p>

      <Link to = './FoodMenu'>
        <button className="buttonh">Go to Menu</button>
      </Link>

    </div>
  );
};
export default HomePage

