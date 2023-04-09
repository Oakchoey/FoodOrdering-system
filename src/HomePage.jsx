import React from 'react';
import './HomePage.css';
import {Link} from 'react-router-dom'
import restaurantImage from './Restaurant.png';


const HomePage = () => {
  return (

    <div className="container1">
    <img
        src={restaurantImage}
        alt="Restaurant"
        className="restaurant-image"
      />


      <h1 className="title">Welcome to Our Restaurant</h1>


      <p className="description">
        Good food is the foundation of happiness.
      </p>


      <Link to = './FoodMenu'><button className="button">
          Go to Menu
        </button>
      </Link>

     
    </div>
  );
};

export default HomePage