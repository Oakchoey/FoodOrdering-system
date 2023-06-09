import React from "react";
import "./ThankYouPage.css"; // 
import {Link} from 'react-router-dom'
const ThankYouPage = () => {
  return (
    <div className="thank-you-page">
      <h1 className="thank-you-page__title">Thank You!</h1>
      <p className="thank-you-page__message">
        Thank you for using our service. 
      </p>

      <Link to = '/'>
  <button className="buttonty">
            Home
  </button>
</Link>
    </div>
  );
};

export default ThankYouPage;
